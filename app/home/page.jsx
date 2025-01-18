"use client"
import React, { useEffect } from 'react';
import { EvervaultCard, Icon } from "@/components/ui/HoverCard";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center relative items-center text-white">
      {/* Cover Image Container */}
      <div className='absolute top-0 w-full p-2 sm:p-4 h-[250px] sm:h-[350px] lg:h-[450px]'>
        <img
          src='/Cover.jpg'
          className='w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl object-cover'
          alt='Cover image'
        />
      </div>

      {/* Main Content Container */}
      <div className='flex flex-col w-full mt-[100px] items-center justify-center sm:mt-[150px] lg:mt-[200px] px-4 sm:px-6 lg:px-8'>
        {/* Evervault Card Container */}
        <div className="border border-white/[0.2] flex flex-col items-start 
                      w-[90%] sm:w-[70%] lg:max-w-sm mx-auto p-3 sm:p-4 
                      relative h-[20rem] sm:h-[25rem] lg:h-[30rem]">
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -right-3 text-white" />
          <EvervaultCard src='/Cover.jpg' />
        </div>
        <div className='relative flex items-center justify-center flex-col border border-white/[0.2] m-10 py-8'>
        <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -right-3 text-white" />

          <p className='text-4xl font-mono font-bold'>Explore More Developers</p>
          {/* Profile Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-4 sm:gap-6 lg:gap-10 
                      mt-8 sm:mt-12 lg:mt-16 
                      px-2 sm:px-4 lg:px-8'>

            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;