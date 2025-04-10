import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export async function render(url: string) {
  try {
    console.log('Starting render for URL:', url);
    const helmetContext = {};
    
    const html = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );

    console.log('React render completed');
    const { helmet } = helmetContext as any;
    console.log('Helmet context processed');

    return {
      html,
      helmet
    };
  } catch (e) {
    console.error('Error in render function:', e);
    throw e;
  }
} 