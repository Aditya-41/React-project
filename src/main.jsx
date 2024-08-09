import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';


import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider>
    <BrowserRouter>
     <App />
     <Toaster/>
    </BrowserRouter>
  </Provider>
  
  
  
);
