import React from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App.js'

// place css in the src/style directory, and import them like this:
import './style/index.css'

const root = document.getElementById('root')
const app = createRoot(root)
app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    )
