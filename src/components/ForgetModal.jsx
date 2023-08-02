import { Dialog, Transition } from '@headlessui/react'
import React, { useState, Fragment } from 'react'
import { forgetpassword } from '../../lib/validation';
import { useFormik } from 'formik';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import { BsFillSendFill } from 'react-icons/bs'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/router";

export default function ForgetModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [show, setShow] = useState(false)
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit,
        validate: forgetpassword
    });

    async function onSubmit(values) {
        // const status = await signIn('credentials', {
        //     redirect: false,
        //     email: values.email,
        //     password: values.password,
        //     callbackUrl: '/dashboard'
        // })

        // if (status.ok) router.push(status.url)

        console.log(values)
    }

    return (
        <>
            {/* <div className=""> */}
            <button type="button" className='text-slate-900 font-bold' onClick={openModal}>
                Click Here
            </button>
            {/* </div> */}

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Forget Password
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 mb-5">
                                            Haven't Remembered your Password? Don't worry we can recover it for you. Please enter your Registered Email.
                                        </p>
                                    </div>

                                    <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                                        <div className="flex justify-between gap-3">
                                            <div className={formik.errors.email && formik.touched.email ? "flex border rounded-xl relative border-red-700 w-full" : " w-full flex border rounded-xl relative"}>
                                                <input className="w-full py-4 px-6 rounded-xl bg-transparent focus:outline-none border-none peer" type='email' name='email' placeholder='Email'
                                                    {...formik.getFieldProps('email')}
                                                />
                                                <span className='icon flex items-center px-4 peer-focus:text-slate-500'>  <HiAtSymbol size={25} /></span>

                                            </div>
                                            <button type='submit' className="icon flex items-center px-4 peer-focus:text-slate-500 bg-slate-900 rounded-xl">
                                                <BsFillSendFill size={20} color='white' />
                                            </button>
                                        </div>


                                        {formik.errors.email && formik.touched.email ? <small className='text-red-700 text-center'>{formik.errors.email}</small> : null}





                                    </form>




                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
