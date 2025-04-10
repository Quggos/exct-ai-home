import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      // Read index.html
      let template = fs.readFileSync(
        join(__dirname, 'dist/client/index.html'),
        'utf-8'
      );

      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);

      // Load the server entry
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      // Render the app HTML
      const { html, helmet } = await render(url);

      // Inject the app-rendered HTML into the template
      const finalHtml = template
        .replace('<!--ssr-outlet-->', html)
        .replace('<!--helmet-->', `
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        `);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  return app;
}

// For Vercel deployment
export default async function handler(req, res) {
  const app = await createServer();
  app(req, res);
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  createServer().then(app => {
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000');
    });
  });
} 