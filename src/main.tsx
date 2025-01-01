import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

import { store } from '@/redux/store';
import App from '@/App';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }
  const { worker } = await import('@/mocks/browser');
  return worker.start();
}

const rootNode = createRoot(document.getElementById('root') as HTMLElement);

rootNode.render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      <Toaster />
    </NextUIProvider>
  </StrictMode>
);

enableMocking();
