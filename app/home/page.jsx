"use client"
import React ,{ useEffect } from 'react';
import { EvervaultCard, Icon } from "@/components/ui/HoverCard";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
  const {data : session} = useSession();
  const router = useRouter();
  
  return (
    <div className="bg-black w-full min-h-screen flex justify-center relative items-center text-white">
    <div className='absolute top-0 min-w-full m-2 p-2 h-1/2'>
    <img
          src='/Cover.jpg'
          className='w-full h-full rounded-2xl object-cover'
          alt='Cover image'
        />
    </div>
    <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
 
      <EvervaultCard  src='/Cover.jpg'/>
    </div>
    
    </div>
  )
}
export default page;