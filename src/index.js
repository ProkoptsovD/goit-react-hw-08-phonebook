import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';

import store, { persistor } from './redux/store';
import Loader from 'components/common/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Suspense fallback={ <Loader type="dual-rings" /> }>
        <Provider store={store}>
          <PersistGate
            loading={ <Loader type="dual-rings" /> }
            persistor={ persistor }
          >
              <App />
          </PersistGate>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
