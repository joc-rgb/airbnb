'use client';
import React,{useState, useEffect, useCallback} from 'react'
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps{
    isOpen?: boolean
    onClose?: ()=>void
    onSubmit: ()=>void
    title?:string
    body?:React.ReactElement;
    footer?:React.ReactElement
    actionLabel: string
    disabled?:boolean
    secondaryAction?: ()=>void
    secondaryLabel?: string
}

const Modal:React.FC<ModalProps> = ({isOpen, disabled, onClose, onSubmit, secondaryAction, secondaryLabel, actionLabel, title, body, footer}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
      setShowModal(isOpen)
    
    }, [isOpen])
    
    const handleClose = useCallback(
      () => {
        if(disabled){
            return
        }

        setShowModal(false)
        setTimeout(()=>{
            //onClose()
        },300)
      },
      [disabled],
    )
    
    const handleSubmit = useCallback(()=>{
        if(disabled){
            return
        }
        onSubmit()
    },[disabled, onSubmit])

    const handleSecondaryAction = useCallback(
        ()=>{
            if(disabled || !secondaryAction){
                return;
            }
            secondaryAction()
        },[disabled, secondaryAction]
    )
    
    if(!isOpen){
        return null
    }    

  return (
    <>
        <div className="
            flex 
            justify-center 
            fixed 
            overflow-x-hidden 
            overflow-y-auto
            inset-0
            z-50
            items-center
            outline-none
            focus:outline-none
            bg-neutral-800/70
        ">
            <div 
                className="
                relative
                w-full
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto
                h-full
                md:h-auto
                "
            >
                {/** CONTENT */}
                <div className={`flex h-full translate ${showModal?' opacity-100':'translate-y-full opacity-0'}`}>
                    <div className="
                    relative 
                    translate 
                    flex flex-col 
                    shadow-lg border-0 
                    rounded-lg w-full bg-neutral-100 outline-none 
                    focus:outline-none h-full md:h-auto">
                        {/**HEADER */}
                        <div className="
                            flex
                            items-center
                            justify-center
                            p-6
                            rounded-t
                            relative
                        ">
                            <button className="p-1 hover:opacity-70 absolute transition left-9">
                                <IoMdClose size={18}/>
                            </button>
                            <div className="font-semibold text-lg">
                                {title}
                            </div>
                        </div>
                        {/**BODY */}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/**FOOTER */}
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center">
                                {secondaryAction && secondaryLabel && <Button label={secondaryLabel} outline small/>}
                                <Button label={actionLabel} onClick={handleSubmit}/>
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal