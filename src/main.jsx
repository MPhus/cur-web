import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

import App from './App'
import theme from './theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssVarsProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </CssVarsProvider>
  </BrowserRouter>
)
