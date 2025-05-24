import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import {CiSquareCheck} from "react-icons/ci"
import {BiCommentDots} from "react-icons/bi"
import {GoPaperclip} from "react-icons/go"

export default function TaskCard() {
  return (
    <div className='bg-white w-60 rounded-lg flex flex-col shadow'>
        <div className='flex items-center p-2'>
            <span className='w-2 h-2 bg-stone-700 rounded-full inline-block m-1 outline-2 outline-stone-500'></span>
            <span className='text-xs text-stone-500'>May 28 2025</span>
        </div>
        <div className='flex items-center ml-2'>
            <span className='text-sm font-semibold text-black'>Review and Update Job...</span>
            <span className='ml-auto p-2'><BsThreeDots className='text-xs cursor-pointer font-semibold'/></span>
        </div>
        <div className='ml-2 mb-3'>
          <span className='text-xs text-stone-400 mb-2'>Analyze current job description and ...</span>
        </div>
        
        <div className='m-2 border-t-1 border-stone-400 pt-2'>
          <div className='flex items-center'>
          <CiSquareCheck className='mr-1'/>
          <span className='text-sm'>Checklist</span>
          <span className='text-xs ml-auto'>3/4</span>
          </div>
          <div className='flex justify-between p-2 space-x-1'>
            <span className='inline-block h-1 w-full bg-green-500 rounded-lg outline-2 outline-green-200'></span>
            <span className='inline-block h-1 w-full bg-green-500 rounded-lg outline-2 outline-green-200'></span>
            <span className='inline-block h-1 w-full bg-green-500 rounded-lg outline-2 outline-green-200'></span>
            <span className='inline-block h-1 w-full bg-stone-400 rounded-lg outline-2 outline-stone-200'></span>
          </div>
        </div>
        <div className='border-t-1 p-2 border-stone-400 flex justify-center'>
            <span className='border border-stone-400 rounded-lg flex justify-center p-1 space-x-1 m-1'>
                <BiCommentDots className='text-sm'/>
                <p className='text-xs'>3</p>
            </span>
            <span className='border border-stone-400 rounded-lg flex justify-center p-1 space-x-1 m-1'>
                <GoPaperclip className='text-sm'/>
                <p className='text-xs'>2</p>
            </span>
            <span className='ml-auto'>
                {/*Asina Sary eto */}
            </span>
        </div>

    </div>
  )
}
