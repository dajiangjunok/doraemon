import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './assets/css/index.css';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App></App>)
