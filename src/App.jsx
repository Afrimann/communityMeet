import React from 'react'
import {Routes, Route , Router} from 'react-router-dom'
import RegisterUser from './Components/Pages/Register/RegisterUser'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import './App.css'
import LoginAuth from './Components/Pages/Login/LoginAuth'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='' element = {<RegisterUser/>}/>
        <Route path='dashboard' element ={<Dashboard/>}/>
        <Route path='login' element ={<LoginAuth/>}/>
      </Routes>
    </div>
  )
}

export default App
