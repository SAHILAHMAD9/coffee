"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Dropbox } from './Dropbox'
import toast from 'react-hot-toast'

export const Navbar = () => {
  const { data: session } = useSession()
  const username = session?.user?.username || localStorage.getItem('username');

  return (
    <div className="flex flex-wrap items-center justify-between bg-[#28282B] md:p-1 p-2">
      {/* Logo Section */}
      <Link href='/'>
        <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
          <span>
            <img src="Cup.gif" width={46} alt="Cup Logo" />
          </span>
          <p className="relative z-20 ml-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            MyCoffee
          </p>
        </div>
      </Link>
      <div className='flex flex-row  items-center justify-between relative'>
        <div className='flex top-0 left-0'>
          {
            username ?
              (<Dropbox />)
              :
              ('')
          }
        </div>
        {/* Buttons Section */}
        <div className="flex relative px-6 gap-2 sm:gap-4 items-center sm:mt-0">
          {/* Sign Up Button */}
          {
            username ?
              (
                <Link href={`/home`}>
                  <button className="relative inline-flex h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
                      Home
                    </span>
                  </button>
                </Link>
              )
              :
              (
                <Link href='/signup'>
                  <button className="relative inline-flex h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
                      Sign Up
                    </span>
                  </button>
                </Link>
              )
          }

          {/* Log In Button */}
          {
            username ?
              (
                <button onClick={() => {
                  signOut()
                  localStorage.clear()
                  toast.success('Successfully Logged Out')
                }} className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
                    Log Out
                  </span>
                </button>
              )
              :
              (
                <Link href='/login'>
                  <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
                      Log In
                    </span>
                  </button>
                </Link>
              )
          }
        </div>
      </div>
    </div>

  )
}
