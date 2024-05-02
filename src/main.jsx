import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './router/Route.jsx';
import { Provider } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';
import store from '../store.js';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router}>
      <ToastContainer position='top-center'/>
      <App  />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
