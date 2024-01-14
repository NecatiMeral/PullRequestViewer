import { createRoot } from 'react-dom/client';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import App from './App';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <FluentProvider theme={webDarkTheme} className="root">
    <App />
  </FluentProvider>,
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});

window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
