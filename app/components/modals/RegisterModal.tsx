'use client'

import React, {useCallback, useState} from 'react'
import {FcGoogle} from "react-icons/fc"
import {AiFillGithub} from "react-icons/ai";
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import {toast} from 'react-hot-toast';
import Button from '../Button';

const RegisterModal = ({}) => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState:{
        errors
    }} = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post('/api/register', data)
        .then(()=>{
            registerModal.onClose()
        })
        .catch((error)=>{
            //console.log(error);
            toast.error("Something's went wrong.")
        })
        .finally(()=>setIsLoading(false))
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title='Welcome to Airbnb' subtitle='Create an account'/>
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="username"
                label="Username"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                type='password'
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <br />
            <Button
            label='Continue with Google'
            icon={FcGoogle}
            onClick={()=>{}}
            outline
            />
            <Button 
            outline
            onClick={()=>{}}
            label='Continue with Github'
            icon={AiFillGithub}
            />
            <div className="
            
            gap-1
            text-sm
            text-neutral-500
            font-light
            mt-4
            ">
                <p>Already have an account?
                    <span className="text-neutral-500 cursor-pointer hover:underline">
                        Log In
                    </span>
                </p>
            </div>
        </div>
    )

  return (
    <Modal 
        disabled={isLoading}
        onClose={registerModal.onClose}
        isOpen={registerModal.isOpen}
        onSubmit={handleSubmit(onSubmit)}
        title='Register'
        actionLabel='Continue'
        body={bodyContent}
        footer={footerContent}
    /> 
  )
}

export default RegisterModal