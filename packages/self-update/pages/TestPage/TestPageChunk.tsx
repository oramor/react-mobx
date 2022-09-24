import { createRoot } from 'react-dom/client';
import { TestBlock } from '../../blocks/TestBlock';

const container = document.getElementById('container');
if (container) {
    const root = createRoot(container);
    root.render(<TestBlock />);
}
