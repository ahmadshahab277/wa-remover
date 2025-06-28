import React from 'react'
import { Routes ,Route } from "react-router-dom"
import Login from './LogIn'
import SignUp from './SignUp'
export default function Auth() {
  return (
    <Routes>
      <Route index element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
    </Routes>
  )
}
