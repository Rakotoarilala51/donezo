import React, { useState } from 'react'
import {FiMail, FiLock, FiEye, FiEyeOff, FiUser} from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

function Singup() {
  const navigate = useNavigate()
  const [isVisiblePassword, setIsVisiblePassword]=useState(false);
  const [input, setInput]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="bg-white border border-white shadow w-[200px] h-[450px] md:w-[350px] rounded-2xl p-7">
      <div>
        <h2 className='text-lg font-rubik font-bold'>Create account</h2>
      </div>
      <form action="" className="flex flex-col my-5 space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input type="text" 
          placeholder='Enter your name'
          value={input.username}
          onChange={(e)=>{setInput({...input, username:e.target.value})}}
          className='w-full border-gray-400
          border-2
          outline-0
          pl-10 py-2
          rounded-xl
          focus:placeholder-transparent
          focus:border-blue-400 
          focus:ring-blue-500
          peer
          font-rubik text-gray-400
          '
          required
          />
          <FiUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400'/>
        </div>
        <div className="relative">
          <input type="text"
          id='email'
            placeholder='Enter your email'
            value={input.email}
            onChange={(e)=>{setInput({...input, email: e.target.value})}}
            className='border-2
            border-gray-400 
            outline-0
            rounded-xl w-full pl-10 py-2 
            focus:placeholder-transparent 
            focus:border-blue-400 
            focus:ring-blue-500
            peer
            font-rubik
            text-gray-500
            '
            required
          />
          
          <FiMail className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 peer-focus:text-blue-400'/>
        </div>
       
        <div className="relative">
          <input type={isVisiblePassword?"text":"password"}
            placeholder='Enter your password'
            value={input.password}
            onChange={(e)=>{setInput({...input, password: e.target.value})}}
            className='w-full 
            rounded-xl pl-10 py-2
            border-2 border-gray-400
            outline-0
            focus:border-blue-400
            focus:ring-blue-500
            focus:placeholder-transparent
            peer
            font-rubik
            text-gray-500
            ' 
            required
          />
          <FiLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400'/>
          {
            isVisiblePassword? <FiEyeOff className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-400' onClick={()=>setIsVisiblePassword(!isVisiblePassword)}/>:
            <FiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400' onClick={()=>setIsVisiblePassword(!isVisiblePassword)}/>
          }  
        </div>
        <div className="relative">
          <input type={isVisiblePassword?"text":"password"}
            placeholder='confirm password'
            value={input.confirmPassword}
            onChange={(e)=>{setInput({...input, confirmPassword: e.target.value})}}
            className='w-full 
            rounded-xl pl-10 py-2
            border-2 border-gray-400
            outline-0
            focus:border-blue-400
            focus:ring-blue-500
            focus:placeholder-transparent
            peer
            font-rubik
            text-gray-500
            ' 
            required
          />
          <FiLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400'/>
          {
            isVisiblePassword? <FiEyeOff className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-400' onClick={()=>setIsVisiblePassword(!isVisiblePassword)}/>:
            <FiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400' onClick={()=>setIsVisiblePassword(!isVisiblePassword)}/>
          }  
        </div>
        
        
        <div>
        <button type='submit' className='w-full bg-blue-500 text-white rounded-md py-2 font-rubik'>Login</button>
        <p className='text-xs font-rubik'>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>navigate("/auth/login")}>log in</span></p>
        </div>
      </form>
      
    </div>
  )
}

export default Singup