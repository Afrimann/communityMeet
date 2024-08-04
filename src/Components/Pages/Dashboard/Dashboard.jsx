import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const Dashboard = () => {
  return (
    <div>
      <Header />
      hello
      <Link to='/login'>Login</Link>
      
    </div>
  )
}

export default Dashboard
