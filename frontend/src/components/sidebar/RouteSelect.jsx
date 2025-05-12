import React from 'react'
import { FiHome,FiSettings, FiMail } from 'react-icons/fi'
import { RiAiGenerate2, RiSearch2Line } from 'react-icons/ri'

function RouteSelect() {
  return (
    <div className='space-y-2'>
       <Route Icon={FiHome} isSelected={false} Title={"Dashboard"}/>
       <Route Icon={RiAiGenerate2} isSelected={false} Title={"AI assistance"}/>
       <Route Icon={FiMail} isSelected={false} Title={"Inbox"}/>
       <Route Icon={RiSearch2Line} isSelected={false} Title={"Search"}/>
       <Route Icon={FiSettings} isSelected={false} Title={"Setting & Preferenes"}/>

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

export default RouteSelect