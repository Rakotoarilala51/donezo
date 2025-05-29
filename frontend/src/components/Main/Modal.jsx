import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

export default function Modal() {
  return (
<div className="absolute inset-0 bg-slate-500/30 flex justify-center items-center top-0">
  <div className="bg-white rounded-xl shadow-xl w-full max-w-md flex flex-col">
    <div className='flex justify-between border-b border-stone-300 p-5'>
      <button className='bg-white border border-stone-500 rounded-lg p-1'><FaArrowLeft className='text-stone-700 text-xs'/></button>
      <p>Create new Project</p>
      <button className='bg-white border border-stone-500 rounded-lg p-1'><RxCross1 className='text-stone-700 text-xs'/></button>

    </div>
    <div className='p-5'>
    <form action="">
        <div className='p-2 flex justify-between'>
          <span className='text-base font-rubik'>Project name</span>
          <input type="text" className='border border-stone-500 outline-0 rounded-sm w-70 pl-1'/>
        </div>
        <div className='p-2 flex justify-between'>
          <span className='text-base font-rubik'>Description</span>
          <textarea className='border border-stone-500 outline-0 rounded-sm w-70 pl-1 text-sm'/>
        </div>
        <div className='p-2 flex justify-between'>
          <span className='text-base font-rubik'>Project name</span>
          <input type="date" className='border border-stone-500 outline-0 rounded-sm w-70 pl-1'/>
        </div>
      </form>
    </div>
    
  </div>
</div>

  )
}
