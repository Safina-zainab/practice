import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './components/Todo'
import Navbar from './pages/navbar'
import { BrowserRouter } from 'react-router-dom';
import Welcome from './Auth/welcome';
// import App from './App'
import Hooks from './hooks'
import SideNav from './file-explorer/sideNav';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SideNav />
    {/* <BrowserRouter>
    <Navbar />
    </BrowserRouter> */}
    {/* <Todo /> */}
    {/* <Hooks /> */}
    {/* < App /> */}
    {/* <Welcome /> */}
  </React.StrictMode>,
)
