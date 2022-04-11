import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/reducers/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import Spin from './components/Spin';

const root = createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={<Spin />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
);

reportWebVitals();
