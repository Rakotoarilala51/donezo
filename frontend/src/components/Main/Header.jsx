import React from 'react'
import { FiPlus, FiGlobe } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    const path = location.pathname.split("/").join(">")

  return (
    <div className='border-b border-stone-300 '>
    <span className='m-2 pt-0 text-stone-500 text-xs flex items-center justify-start space-x-1'>
      <FiPlus/><p>|</p><FiGlobe/> <p>{path}</p>
      
    </span>
</div>
  )
}

export default Header