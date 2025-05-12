import React from 'react'

function AccountToggle() {
  return (
    <div className='border-b mb-4 mt-2 pb-4 border-stone-300'>
        <button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center'>
            <img src="" alt="" className='size-8 rounded shrink-0'/>
            <div className='text-start'>
            <span className='block text-sm font-bold text-black'>
                Donezo
            </span>
            <span className='block text-xs text-violet-600'>
                <span className='bg-violet-600 inline-block rounded-full w-2 h-2'></span>free trial
            </span>
            
        </div>
        </button>
   

    </div>
  )
}

export default AccountToggle