import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'store/store';
import { App } from 'App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor} loading={null}>
    <Provider store={store}>
      <App />
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
