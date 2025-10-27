import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import cardStore from './utils/cardStore.js'

createRoot(document.getElementById('root')).render(
    <Provider store={cardStore}>
         <App />
    </Provider>   
)
