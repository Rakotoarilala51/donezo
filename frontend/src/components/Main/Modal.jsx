import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

export default function Modal({openModal, setOpenModal}) {
  return (
<div className={`absolute inset-0 backdrop-blur-sm bg-slate-500/30 flex justify-center items-center top-0 transition-all duration-200 ${openModal?"":"hidden"}`}>
  <div className="bg-white rounded-xl shadow-xl w-full max-w-md flex flex-col ">
    <div className='flex justify-between border-b border-stone-300 p-5'>
      <button className='bg-white border border-stone-500 rounded-lg p-1'><FaArrowLeft className='text-stone-700 text-xs'/></button>
      <p>Create new Project</p>
      <button className='bg-white border border-stone-500 rounded-lg p-1' onClick={()=>setOpenModal(false)}><RxCross1 className='text-stone-700 text-xs'/></button>

    </div>
    <div >
    <form action="">
      <div className='p-5'>
        <div className='p-2 flex justify-between'>
          <span className='text-base font-rubik'>Project name</span>
          <input type="text" className='border border-stone-500 outline-0 rounded-sm w-70 pl-1'/>
        </div>
        <div className='p-2 flex justify-between'>
          <span className='text-base font-rubik'>Description</span>
          <textarea className='border border-stone-500 outline-0 rounded-sm w-70 pl-1 text-sm'/>
        </div>
        <div className='p-2 flex justify-between'>
          <span className='text-base font-rubik'>Due date</span>
          <input type="date" className='border border-stone-500 outline-0 rounded-sm w-70 pl-1'/>
        </div>
        </div>
        <div className='border-t border-stone-300 p-3 flex justify-between items-center space-x-1 font-rubik'>
            <button className='w-full justify-center items-center border border-stone-300 rounded-lg shadow-2xl bg-stone-200'>Cancel</button>
            <button className='w-full justify-center items-center border rounded-lg text-white bg-black'>+ Create new</button>
        </div>
      </form>
    </div>
    
  </div>
</div>

  )
}
