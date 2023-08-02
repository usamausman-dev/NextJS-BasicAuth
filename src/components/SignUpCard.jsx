import React, { useState } from 'react'
import { register_validation } from '../../lib/validation'
import { useFormik } from 'formik';
import { HiAtSymbol, HiFingerPrint, HiUser } from 'react-icons/hi'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react'
import axios from 'axios';

export default function SignUpCard() {

    const [show, setShow] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        },
        onSubmit,
        validate: register_validation
    });


    async function onSubmit(values) {

        const payload = {
            firstname: values.firstName,
            lastname: values.lastName,
            organization: values.organizationName,
            email: values.email,
            password: values.password
        }
        // const headers = {
        //     'Content-Type': 'application/json',
        // }

        // axios.post('/api/auth/signup', payload, {
        //     headers: headers
        // })
        //     .then(function (response) {
        //         if (response.status === 201) {
        //             alert("Register Successful")
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error.response);
        //     });

        console.log(payload)

    }



    return (
        <div className='text-center pt-10'>
            <section className='mx-5 flex flex-col gap-6'>

                <form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>


                    <div className={formik.errors.firstName && formik.touched.firstName ? "flex border rounded-xl relative border-red-700 " : "flex border rounded-xl relative"}>
                        <input className="w-full py-4 px-6 rounded-xl bg-transparent focus:outline-none border-none peer" type='text' name='firstName' placeholder='First Name'
                            {...formik.getFieldProps('firstName')}
                        />
                        <span className='icon flex items-center px-4 peer-focus:text-slate-500'>  <HiUser size={25} /></span>
                    </div>

                    {formik.errors.firstName && formik.touched.firstName ? <small className='text-red-700'>{formik.errors.firstName}</small> : null}



                    <div className={formik.errors.lastName && formik.touched.lastName ? "flex border rounded-xl relative border-red-700 " : "flex border rounded-xl relative"}>
                        <input className="w-full py-4 px-6 rounded-xl bg-transparent focus:outline-none border-none peer" type='text' name='lastName' placeholder='Last Name'
                            {...formik.getFieldProps('lastName')}
                        />
                        <span className='icon flex items-center px-4 peer-focus:text-slate-500'>  <HiUser size={25} /></span>
                    </div>

                    {formik.errors.lastName && formik.touched.lastName ? <small className='text-red-700'>{formik.errors.lastName}</small> : null}




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
                        <button className='w-full bg-gradient-to-r from-slate-500 to-slate-600 rounded-md py-3 text-gray-50 text-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-slate-500 hover:border-slate-500  hover:border' type='submit'>Sign Up</button>
                    </div>
                </form>

            </section>
        </div>
    )
}
