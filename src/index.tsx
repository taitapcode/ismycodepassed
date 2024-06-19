import { createRoot } from 'react-dom/client';
import 'index.css';
import App from 'App';
import TitleBar from 'components/TitleBar';

createRoot(document.getElementById('app')!).render(
  <>
    <TitleBar />
    <App />
  </>,
);
