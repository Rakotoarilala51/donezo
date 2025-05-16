import React from 'react'
import { FiHome,FiSettings, FiMail } from 'react-icons/fi'
import { RiAiGenerate2, RiSearch2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function RouteSelect() {
  const navigate = useNavigate()
  return (
    <div className='space-y-2'>
       <Route Icon={FiHome} isSelected={location.pathname.toLowerCase()=="/main/dashboard"} Title={"Dashboard"} onClick={()=>navigate("dashboard")}/>
       <Route Icon={RiAiGenerate2} isSelected={location.pathname.toLowerCase()=="/main/aiassistance"} Title={"AI assistance"} onClick={()=>navigate("aiassistance")}/>
       <Route Icon={FiMail} isSelected={location.pathname.toLowerCase()=="/main/inbox"} Title={"Inbox"} onClick={()=>navigate("inbox")}/>
       <Route Icon={RiSearch2Line} isSelected={false} Title={"Search"}/>
       <Route Icon={FiSettings} isSelected={location.pathname.toLowerCase()=="/main/setting"} Title={"Setting & Preferenes"} onClick={()=>navigate("setting")}/>

    </div>
  )
}
const Route = ({Icon, Title, isSelected, onClick})=>{
    return(
      <div className='relative'>
      <button onClick={onClick} className={`flex items-center justify-start rounded-xl gap-2 w-full px-2 py-1.5 text-sm transition-all ${
        isSelected?"bg-white border border-indigo-300":"hover:bg-stone-300 bg-transparent shadow-none"
      }`}> 
        <Icon/>
        <span>{Title}</span>
      </button>
      </div>
  
    )
  }

export default RouteSelect