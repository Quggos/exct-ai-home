import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  try {
    // Create Vite server in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      root: process.cwd()
    });

    // Use Vite's connect instance as middleware
    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
      const url = req.originalUrl;
      console.log('Processing request for URL:', url);

      try {
        // Read index.html
        const templatePath = join(process.cwd(), 'dist/client/index.html');
        console.log('Reading template from:', templatePath);
        
        let template = fs.readFileSync(templatePath, 'utf-8');
        console.log('Template read successfully');

        // Apply Vite HTML transforms
        template = await vite.transformIndexHtml(url, template);
        console.log('HTML transforms applied');

        // Load the server entry
        const { render } = await import(join(process.cwd(), 'dist/server/entry-server.js'));
        console.log('Server entry loaded');

        // Render the app HTML
        const { html, helmet } = await render(url);
        console.log('App rendered successfully');

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
        console.error('Error during request processing:', e);
        vite.ssrFixStacktrace(e);
        res.status(500).end(`Error: ${e.message}\n${e.stack}`);
      }
    });

    return app;
  } catch (e) {
    console.error('Error creating server:', e);
    throw e;
  }
}

// For Vercel deployment
export default async function handler(req, res) {
  try {
    console.log('Handler called');
    const app = await createServer();
    app(req, res);
  } catch (e) {
    console.error('Error in handler:', e);
    res.status(500).end(`Server Error: ${e.message}\n${e.stack}`);
  }
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  createServer().then(app => {
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000');
    });
  }).catch(e => {
    console.error('Failed to start server:', e);
  });
} 