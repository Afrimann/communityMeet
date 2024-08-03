import React from 'react'
import { useState } from 'react'
import auth from '../../../Firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import '../Login/Login.css'

const LoginAuth = () => {
  const [ email,setEmail ]  = useState('')
  const [ password,setPassword ] = useState('')
  const [ error,setError ] = useState('')

  const handleLogin = async () =>{

    try {
      await signInWithEmailAndPassword(auth,email,password)
      console.log('issue');
      
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='loginAuth'>
      <input type="email" />
      <input type="password" name="password" id="password" />
      <button type='submit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginAuth
