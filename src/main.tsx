import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import {darkTheme, lightTheme} from "./styles/themes";
import {ThemeProvider} from "styled-components";
import {MyContext} from "./context/context";
import {initialData} from "./utils/constants";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
