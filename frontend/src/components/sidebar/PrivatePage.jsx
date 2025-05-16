import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {RxDragHandleDots2} from 'react-icons/rx'

const PrivatePage =()=> {
    const [enroll, setEnroll] = useState(false)
  return (
    <div className='py-3 font-rubik'>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center group hover:bg-stone-300 rounded-xl w-full' onClick={()=>setEnroll(!enroll)}>
                <h2 className='h-full'>Private Pages</h2>
                <div>
                    {
                        enroll?<IoIosArrowDown className='w-4 h-4'/>:<IoIosArrowForward className='w-4 h-4'/>
                    }
                    
                </div>


            </div>
            <div className={`p-3 ${enroll? "": "hidden"}`}>
                <Route Icon={RxDragHandleDots2} isSelected={true} Title={"Punch Live"}/>
                <Route Icon={RxDragHandleDots2} isSelected={false} Title={"Leek Legacy"}/>
                <Route Icon={RxDragHandleDots2} isSelected={false} Title={"Candy Bay"}/>

            </div>

        </div>
    
    
    </div>
  )
}
const Route = ({Icon, Title, isSelected})=>{
    return(
      <div className='relative'>
      <button className={`flex items-center justify-start rounded-xl gap-2 w-full px-2 py-1.5 text-sm transition-all ${
        isSelected?"bg-white border border-indigo-300":"hover:bg-stone-300 bg-transparent shadow-none"
      }`}> 
        <Icon/>
        <span>{Title}</span>
      </button>
      </div>
  
    )
}
export default PrivatePage