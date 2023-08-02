import { useState } from 'react'
import { Tab } from '@headlessui/react'
import LoginCard from './LoginCard'
import SignUpCard from './SignUpCard'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LoginTabs() {

    return (
        <div className="w-full py-6 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-slate-900/20 p-1">
                    <Tab className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-slate-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2',
                        selected ? 'bg-white shadow' : 'text-slate-100 hover:bg-white/[0.12] hover:text-white')
                    }
                    >
                        Sign In
                    </Tab>

                    <Tab className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2',
                        selected ? 'bg-white shadow' : 'text-slate-100 hover:bg-white/[0.12] hover:text-white')
                    }
                    >
                        Sign Up
                    </Tab>
                </Tab.List>


                <Tab.Panels className="mt-2">
                    <Tab.Panel className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2')}>
                        <LoginCard />
                    </Tab.Panel>

                    <Tab.Panel className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2')}>
                        <SignUpCard />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
