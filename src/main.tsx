import { ViteReactSSG } from 'vite-react-ssg';
import './styles/global.css';
import './styles/tokens.css';
import { routes } from './App';
import { DEFAULT_LANG } from './i18n/languages';

export const createRoot = ViteReactSSG({
  routes,
});

// On the client, after hydration, ensure <html lang> is set.
if (typeof document !== 'undefined') {
  const stored = (() => {
    try {
      return localStorage.getItem('lang');
    } catch {
      return null;
    }
  })();
  const storedOrDefault = stored === 'es' || stored === 'en' ? stored : DEFAULT_LANG;
  document.documentElement.lang = storedOrDefault === 'es' ? 'es-AR' : 'en-US';
}