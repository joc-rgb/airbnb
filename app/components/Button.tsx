import React from 'react'
import { IconType } from 'react-icons/lib'
interface ButtonProps{
    label: string
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
}
const Button:React.FC<ButtonProps> = ({label, onClick, disabled, outline,small,icon:Icon}) => {
  return (
    <button
    className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${outline?'bg-white border-black text-black':'bg-rose-500 text-white border-rose-500'}
    ${small?'py-1 text-sm border-[1px]':'py-3 text-md border-2'}
    `}

    onClick={onClick}
    >
        {Icon && (
          <Icon size={24} className='absolute left-4'/>
        )}
        {label}
    </button>
  )
}

export default Button