import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fce4ec] via-[#f3e5f5] to-[#e1f5fe]'>
        <Outlet/>
    </div>
  )
}

export default AuthLayout