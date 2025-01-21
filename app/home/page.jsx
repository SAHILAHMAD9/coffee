"use client"
import React, { useEffect, useState } from 'react';
import { EvervaultCard, Icon } from "@/components/ui/HoverCard";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';
import { cn } from "@/lib/utils";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [Form , setForm] = useState({
    name : "" ,
    massage : "" ,
    amount : ""
  })

  function changeHandler(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
        ...prev,
        [name]: value,
    }));
    console.log(Form);
}


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
        <div className='relative flex items-center justify-between w-full gap-4 m-4 flex-col md:flex-row py-8'>

        {/* ****************** MASSAGE BOX ***************** */}

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Supporters
          </h1>
        </div>

                {/* ****************** PAYMENT FORM ***************** */}

        <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-even ts-none" />

          <div className="mx-auto relative z-20 w-full h-full border border-slate-900  p-4 md:px-8 shadow-input bg- black">
                            <h2 className="font-bold text-xl sm:text-2xl text-neutral-200">
                                Make a Payment
                            </h2>
                            <form className="my-6 sm:my-8">
                                <LabelInputContainer className="mb-4">
                                    {/* <Label className='text-white text-sm sm:text-base' htmlFor="name">Email Address</Label> */}
                                    <Input 
                                        onChange={changeHandler} 
                                        name="name" 
                                        value={Form.name} 
                                        id="name" 
                                        placeholder="Your Name" 
                                        type="text" 
                                        className="text-sm sm:text-base"
                                        autoComplete="new-name" 
                                    />
                                </LabelInputContainer>
                                
                                <LabelInputContainer className="mb-4">
                                    {/* <Label className='text-white text-sm sm:text-base' htmlFor="massage">Password</Label> */}
                                    <Input 
                                        onChange={changeHandler} 
                                        name="massage" 
                                        value={Form.massage} 
                                        id="massage" 
                                        placeholder="Type Your Massage" 
                                        type="text"
                                        className="text-sm sm:text-base" 
                                        autoComplete="new-massage"
                                    />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    {/* <Label className='text-white text-sm sm:text-base' htmlFor="massage">Password</Label> */}
                                    <Input 
                                        onChange={changeHandler} 
                                        name="amount" 
                                        value={Form.amount} 
                                        id="amount" 
                                        placeholder="Enter the Amount" 
                                        type="number"
                                        className="text-sm sm:text-base" 
                                        autoComplete="new-amaount"
                                    />
                                </LabelInputContainer>

                                <button
                                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit">
                                    Pay &rarr;
                                    <BottomGradient />
                                </button>
                               <div className='flex flex-row items-center justify-between gap-8 py-4'>
                               <div
                                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 flex items-center justify-center bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                                    Pay 50
                                    <BottomGradient />
                                </div>
                                <div
                                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 flex items-center justify-center bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                                    Pay 100
                                    <BottomGradient />
                                </div>
                                <div
                                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 flex items-center justify-center bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                                    Pay 500
                                    <BottomGradient />
                                </div>
                               </div>

                                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 sm:my-8 h-[1px] w-full" />
                            </form>
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