import { createRoot } from 'react-dom/client';
import App from './components/App';

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

root.render(<App />);
