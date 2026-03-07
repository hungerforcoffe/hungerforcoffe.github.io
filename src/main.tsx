import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App' // Ajusta esta ruta si es necesario
import './styles/index.css' // Ajusta la ruta a tus estilos

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)