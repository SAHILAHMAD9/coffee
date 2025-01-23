"use client"
import React, { useEffect, useState } from 'react';
import { EvervaultCard, Icon } from "@/components/ui/HoverCard";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';
import { cn } from "@/lib/utils";
import Input from "@/components/ui/Input";
import dbConnect from '@/db/dbConnect';
import User from '@/models/User';
import Link from 'next/link';

const Page = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        console.log("API Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Fetched data:client", data);

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  // console.log(users);

  const sessionName = session?.user?.name;
  const sessionImage = session?.user?.image;
  const sessionUsername = session?.user?.username;

  // const [hoverParams, setHoverParams] = useState({
  //   username : "",
  //   name : "",
  //   image:""
  // });

  // useEffect(() => {
  //  name  : session.name,
  // },[session])

  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center relative items-center text-white">
      {/* Cover Image Container */}
      <div className='absolute top-0 w-full p-2 sm:p-4 h-[250px] sm:h-[350px] lg:h-[450px]'>
        <img
          src={'/Cover.jpg'}
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
          <EvervaultCard username={sessionUsername} name={sessionName} src={sessionImage || '/Cover.jpg'} />
        </div>
        

        <div className='relative flex items-center justify-center flex-col border border-white/[0.2] m-10 py-8'>
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -right-3 text-white" />

          <p className='text-4xl font-mono font-bold'>Explore More Developers</p>
          {/* Profile Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                      gap-4 sm:gap-6 lg:gap-14 
                      mt-8 sm:mt-12 lg:mt-16 
                      px-2 sm:px-4 lg:px-8'>
            {loading && <p>Loading users...</p>}
            {error && <p>Error: {error}</p>}
            {users.length === 0 && !loading && !error && <p>No users found</p>}
            {users.map((user) => (
              <ProfileCard
                key={user._id}
                user={user}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}



const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page;