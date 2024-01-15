import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css';

const Root = () => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/inicio') {
      window.location.href = '/inicio';
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
