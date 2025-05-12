import React from 'react'
import  Sidebar  from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className='text-stone-950 bg-stone-200 font-rubik'>
        <div className='grid gap-4 p-4 lg:grid-cols-[220px_1fr]'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}
