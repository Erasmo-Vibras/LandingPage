import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from '@styles/index.tsx'

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <BrowserRouter>
    {/* <ThemeContext> */}
      <App />
    {/* </ThemeContext> */}
  </BrowserRouter>,
)
