'use client'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import {BiDollar} from 'react-icons/bi'

interface InputProps{
    id: string
    label: string
    type?: string
    disabled?:boolean
    required?: boolean
    formatPrice?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  errors,
  label,
  register,
  disabled,
  formatPrice,
  required,
  type
}) => {
  return (
    <div className='relative'>
      {formatPrice && (
        <BiDollar 
        size={20}
        className='
        text-neutral-700
        absolute
        top-5
        left-2
        '
        />
      )}
 
      <input 
      type={type} 
      id={id} 
      disabled={disabled} 
      className={`
      peer 
      w-full 
      p-4 pt-6 
      font-light 
      bg-white 
      border-2 
      rounded-md 
      outline-none 
      transition 
      relative
      placeholder-transparent
      disabled:opacity-70
      disabled:cursor-not-allowed
      ${formatPrice?'pl-9':'pl-4'}
      ${errors[id]?'border-rose-500 focus:border-rose-500':'border-neutral-300 focus:border-neutral-300'}
      `} 
      placeholder={label}
      {...register(id,{required})}
      required={required}
      />
      <label className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        origin-[0]
        ${formatPrice?'left-9':'left-4'}
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
      `}>
        {label}
      </label>
    </div>
  )
}

export default Input