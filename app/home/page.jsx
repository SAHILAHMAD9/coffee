"use client"
import React, { useEffect, useState } from 'react';
import { EvervaultCard, Icon } from "@/components/ui/HoverCard";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';
import { cn } from "@/lib/utils";
import toast from 'react-hot-toast';
import { fetchpayments, fetchUser, initiate } from '@/actions/useractions';
import { Meteors } from '@/components/ui/Meteors';
import { storage } from '@/utils/localstorage';

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [sessionUsername, setUsername] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([])
  const [currentUser, setcurrentUser] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    role: "",
    description: ""
  })
  // const sessionName = session?.user?.name || currentUser.name;
  // const sessionImage = session?.user?.image || currentUser.image;
  useEffect(() => {
    setUsername(session?.user?.username || storage.get('username'));
  }, [session, sessionUsername]);
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

  useEffect(() => {
    const getData = async () => {
      let user = await fetchUser(sessionUsername);
      setcurrentUser(user);
      let payment = await fetchpayments(sessionUsername);
      setPayments(payment);
    };
    getData();
  }, [session, sessionUsername])

  // console.log(currentUser);

  useEffect(() => {
    document.title = "Home - Get Me A COFFEE"
    const checkAuth = async () => {
      await new Promise(resolve => setTimeout(resolve, 200));
      if (!sessionUsername || !session) {
        toast.error("Login Again!")
        router.push('/');
      }
      checkAuth();
    }
  }, [sessionUsername]);

  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center relative items-center text-white">
      {/* Cover Image Container */}
      <div className='absolute top-0 w-full p-2 sm:p-4 h-[250px] sm:h-[350px] lg:h-[450px]'>
        <img
          src={currentUser?.coverpic || '/Cover.jpg'}
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
          <EvervaultCard username={sessionUsername} name={currentUser?.name} src={currentUser?.profilepic || '/Cover.jpg'} />
        </div>

        <div className='relative flex items-center justify-between w-full gap-4 m-4 flex-col md:flex-row py-8'>

          {/* ****************** MASSAGE BOX ***************** */}

          <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center py-4 justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className="md:text-4xl text-xl font-bold text-white relative z-20">
              MY Supporters
            </h1>
            <ul className='w-full p-4 flex flex-col items-center justify-center text-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
              {payments.length == 0 && <li>No payments yet</li>}
              {payments.map((payment, index) => {
                return <li key={index} className='px-2 flex gap-2 items-center'>
                  <img width={33} src="/Profile.gif" alt="user avatar" />
                  <span>
                    {payment?.name} donated <span className='font-bold'>₹{payment?.amount}</span> with a message &quot;{payment?.message}&quot;❤️🫡
                  </span>
                </li>
              })}

            </ul>
            <Meteors number={30} />
          </div>

          {/* ****************** PAYMENT paymentFORM ***************** */}

          <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-even ts-none" />

            <div className="mx-auto flex  flex-col items-center justify-center relative z-20 w-full h-full   p-4 md:px-8 ">
              <h1 className="font-bold text-2xl md:text-4xl text-white pb-8 relative z-50">
                About Me
              </h1>

              <p className="font-normal text-center text-base text-slate-300 mb-4 relative z-50">
                {currentUser?.description}
              </p>
              <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
                A total of {payments?.length} payments have been made, raising an impressive ₹{payments.reduce((a, b) => a + b.amount, 0)}.
              </p>
              <Meteors number={30} />
            </div>


          </div>
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