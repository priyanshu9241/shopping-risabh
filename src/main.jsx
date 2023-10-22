import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import ShopContextProvider from './components/ShopContext/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ShopContextProvider >
    // <App />
  // {/* </ShopContextProvider> */}
  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  
  </BrowserRouter>
  
)
