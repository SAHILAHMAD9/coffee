"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signIn , signOut } from 'next-auth/react'

export const Navbar = () => {
  const { data: session } = useSession()
  
  return (
    <div className="flex flex-wrap items-center justify-between bg-black p-2">
      {/* Logo Section */}
      <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold">
        <span>
          <img src="Cup.gif" width={46} alt="Cup Logo" />
        </span>
        <p className="relative z-20 ml-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          MyCoffee
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap px-6 gap-2 sm:gap-4 mt-2 sm:mt-0">
        {/* Sign Up Button */}
        <button className="relative inline-flex h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
            Sign Up
          </span>
        </button>

        {/* Log In Button */}
        <Link href='/login'>
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
              Log In
            </span>
          </button>
        </Link>
      </div>
    </div>

  )
}
