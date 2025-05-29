import React, { useEffect, useRef, useState } from "react";
import { FiPlus, FiGlobe } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = location.pathname.split("/").join(">");
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);
  useEffect(()=>{
    const handleClickOutside=(e)=>{
      if(menuRef.current && !menuRef.current.contains(e.target)) setShowDropdown(false);
    }
    document.addEventListener("mousedown", handleClickOutside)
    return ()=>document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  return (
    <div className="border-b border-stone-300 flex justify-between">
      <span className="m-2 pt-0 text-stone-500 text-xs flex items-center justify-start space-x-1">
        <FiPlus />
        <p>|</p>
        <FiGlobe /> <p>{path}</p>
      </span>
      <div className="p-2">
         <span className="border border-stone-300 rounded-lg text-xs p-1 flex items-center cursor-pointer relative" onClick={()=>setShowDropdown(!showDropdown)}>New project <RiArrowDropDownLine className="text-base"/></span>
         {
          showDropdown && (
            <div ref={menuRef} className="absolute z-50 top-[50px] bg-white border-stone-300 rounded-md shadow-md w-40">
                       <ul className="text-sm text-gray-500 py-2">
                <li className="px-4 py-2 hover:bg-stone-100 cursor-pointer" onClick={()=>console.log("hi")}>
                  Add Tasks
                </li>
                <li className="px-4 py-2 hover:bg-stone-100 cursor-pointer">
                  Archive
                </li>
                <li className="px-4 py-2 hover:bg-stone-100 cursor-pointer">
                  Settings
                </li>
              </ul>
            </div>
          )
         }
      </div>
    </div>
  );
}

export default Header;
