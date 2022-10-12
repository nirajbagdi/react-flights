import { createRoot } from 'react-dom/client';
import 'styles/main.scss';
import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;
createRoot(rootEl).render(<App />);
