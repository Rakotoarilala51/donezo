import React from 'react'
import  Sidebar  from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Main/Header'
import Modal from '../components/Main/Modal'

export const MainLayout = () => {
  return (
    <div className='text-stone-950 bg-stone-200 font-rubik'>
        <div className='grid gap-4 p-4 lg:grid-cols-[220px_1fr]'>
            <Sidebar/>
            <div className='bg-white rounded-lg shadow pb-4 h-[200vh]'>
            <Header/>
            <Outlet/>
            <Modal/>
            </div>
            
        </div>
    </div>
  )
}
