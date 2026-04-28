import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import Store from './store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)