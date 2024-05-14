import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import SignUp from './pages/signUp.jsx'
import ReelSection from './pages/reelSection.jsx'
import LogIn from './pages/logIn.jsx'


const router=createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<App/>}>
             <Route path='' element={<ReelSection/>}/>
             <Route path='/signup/' element={<SignUp/>}/>
             <Route path='/login/' element={<LogIn/>}/>
             
         </Route>
      )
 )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
