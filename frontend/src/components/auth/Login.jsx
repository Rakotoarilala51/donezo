import React, { useState } from 'react'
import {FiMail, FiLock, FiEye, FiEyeOff} from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [isVisiblePassword, setIsVisiblePassword]=useState(false);
  const [input, setInput]=useState({
    email:"",
    password:""
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="bg-white border border-white shadow w-[200px] h-[350px] md:w-[350px] rounded-2xl p-7">
      <div>
        <h2 className='text-lg font-rubik font-bold'>Log in</h2>
      </div>
      <form action="" className="flex flex-col my-5 space-y-7" onSubmit={handleSubmit}>
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
          />
          
          <FiMail className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 peer-focus:text-blue-400'/>
        </div>
        <div>
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
          />
          <FiLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400'/>
          {
            isVisiblePassword? <FiEyeOff className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-400' onClick={()=>setIsVisiblePassword(!isVisiblePassword)}/>:
            <FiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-400' onClick={()=>setIsVisiblePassword(!isVisiblePassword)}/>
          }  
        </div>
        <p className='text-sm text-blue-500 mt-1 ml-1 cursor-pointer font-rubik'>Forget Password?</p>
        </div>
        <div>
        <button type='submit' className='w-full bg-blue-500 text-white rounded-md py-2 font-rubik'>Login</button>
        <p className='text-xs font-rubik text-center'>Dont have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>navigate("/auth/signup")}>sign up</span></p>
        </div>
      </form>
      
    </div>
  )
}

export default Login