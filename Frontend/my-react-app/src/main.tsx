import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { applyMiddleware, Store } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
// import './index.css'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
