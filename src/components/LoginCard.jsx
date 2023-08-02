import React, { useState } from 'react'
import login_validate from '../../lib/validation';
import { useFormik } from 'formik';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/router";
import ForgetModal from './ForgetModal';
export default function LoginCard() {


    const [show, setShow] = useState(false)
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit,
        validate: login_validate
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
        <div className='text-center pt-10'>
            <section className='mx-5 flex flex-col gap-6'>


                <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className={formik.errors.email && formik.touched.email ? "flex border rounded-xl relative border-red-700 " : "flex border rounded-xl relative"}>
                        <input className="w-full py-4 px-6 rounded-xl bg-transparent focus:outline-none border-none peer" type='email' name='email' placeholder='Email'
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4 peer-focus:text-slate-500'>  <HiAtSymbol size={25} /></span>
                    </div>

                    {formik.errors.email && formik.touched.email ? <small className='text-red-700'>{formik.errors.email}</small> : null}

                    <div className={formik.errors.password && formik.touched.password ? "flex border rounded-xl relative border-red-700 " : "flex border rounded-xl relative"}>
                        <input className="w-full py-4 px-6  rounded-xl bg-slate-50 focus:outline-none border-none peer" type={`${show ? "text" : "password"}`} name='password' placeholder='Password'
                            {...formik.getFieldProps('password')}
                        />
                        <span className='icon flex items-center px-4 peer-focus:text-slate-500 hover:cursor-pointer hover:text-slate-500' onClick={() => setShow(!show)}> <HiFingerPrint size={25} /> </span>
                    </div>

                    {formik.errors.password && formik.touched.password ? <small className='text-red-700'>{formik.errors.password}</small> : null}

                    <div>
                        <button className='w-full bg-gradient-to-r from-slate-500 to-slate-600 rounded-md py-3 text-gray-50 text-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-slate-500 hover:text-gray-700 hover:border' type='submit'>Login</button>
                    </div>
                </form>
                <span className='text-slate-500'>
                    Don't Remember your Password? <ForgetModal />
                </span>

            </section>
        </div>
    )
}
