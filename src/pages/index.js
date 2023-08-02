import Image from 'next/image'
import { Inter } from 'next/font/google'
import DummyModal from '@/components/DummyModal'
import LoginTabs from '@/components/LoginTabs'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`bg-gradient-to-b from-zinc-200  backdrop-blur-2xl flex min-h-screen w-[100vw] flex-col items-center justify-center ${inter.className}`} >



      <h1 className='text-4xl mb-6 font-bold'>Welcome</h1>



      <div className="w-[30em] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <LoginTabs />

      </div>


    </main>
  )
}
