'use client';
import React, { useState,useCallback } from 'react'
import {HiBars3} from 'react-icons/hi2'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
const UserMenu = () => {
  const registerModal = useRegisterModal()
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(
      () => {
        setIsOpen(value=>!value)
      },
      [],
    )
    
  return (
    <div className='relative'>
        <div className="flex flex-row items-center gap-3 transition">
            <div 
            onClick={toggleOpen}
            className="rounded-full shadow-md transition cursor-pointer flex flex-row gap-3 border-[1px] 
          border-neutral-200 p-1 px-2 items-center">
                <HiBars3 size={22}/>
                <div className="hidden md:block">
                    <Avatar src={null} />
                </div>
            </div>
        </div>
        {isOpen && (
          <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[45vw]
            md:w-[15vw]
            bg-white
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
            <div className="flex flex-col cursor-pointer">
              <>
              <MenuItem 
              label='Login'
              onClick={()=>{}}
              />
              <MenuItem 
              label='Sign Up'
              onClick={registerModal.onOpen}
              />
              </>
            </div>
          </div>
        )}
    </div>
  )
}

export default UserMenu