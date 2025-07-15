import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createElement } from 'react'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <div>
    <App />
  </div>
)
