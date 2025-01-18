"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React , { useState , useEffect, use } from 'react'
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/LampDemo";

const page = () => {
    const {data : session } = useSession();
    const router = useRouter();
    const [Form, setForm] = useState({
      name : "",
      email : "",
      username : "",
      profile : "",
      cover : "",
      razorpayid : "",
      razorpaysecret : "",
  })

  function changeHandler(event) {
      const { name, value } = event.target;
      setForm((prev) => ({
          ...prev,
          [name]: value,
      }));
  }

    useEffect(()=>{
        document.title = "Dashboard - Get Me A COFFEE"
if (!session) {
    router.push('/login');
}
    },[session])
  return (
            <div className="bg-black w-full min-h-screen flex justify-center items-center ">
            <LampContainer className='pt-40 sm:pt-44 md:pt-44 '>
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative md:mt-40 sm:mt-44 mt-20 signup bg-gradient-to-br from-slate-300 to-slate-500 rounded-2xl  text-transparent"
                    >
                <div
                    className=" w-full mx-auto md:w-[50rem] rounded-md md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                    <h2 className="font-bold text-2xl text-neutral-200">
                        Welcome to your Dashboard
                    </h2>
                    <p className=" text-sm max-w-sm mt-2 text-neutral-300">
                        Create your Profile
                    </p>
                    <form className="my-8 " >
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="name">Your Name</Label>
                            <Input onChange={changeHandler} name="name" value={Form.name} id="name" placeholder="SAHIL AHMAD" type="text" autoComplete="new-name" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="email">Email Address</Label>
                            <Input onChange={changeHandler} name="email" value={Form.email} id="email" placeholder="sahilahmad3504@gmail.com" type="email" autoComplete="new-email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="username">Username</Label>
                            <Input onChange={changeHandler} name="username" value={Form.username} id="username" placeholder="@sahilahmad3504" type="text" autoComplete="new-username" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="profile">Profile Picture URL</Label>
                            <Input onChange={changeHandler} name="profile" value={Form.profile} id="profile" placeholder="https//sahilAhmadProfileURL.com" type="text" autoComplete="new-profile" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="cover">Cover Pic URL</Label>
                            <Input onChange={changeHandler} name="cover" value={Form.cover} id="cover" placeholder="https//sahilAhmadCoverURL.com" type="text" autoComplete="new-cover" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="razorpayID">RazorPay Id</Label>
                            <Input onChange={changeHandler} name="razorpayID" value={Form.razorpayid} id="razorpayID" placeholder="@sahilahmad3504" type="text" autoComplete="new-razorpayID" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label className='text-white' htmlFor="razorpaySecret">RazorPay Secret</Label>
                            <Input onChange={changeHandler} name="razorpaySecret" value={Form.razorpaysecret} id="razorpaySecret" placeholder="@sahilahmad3504" type="text" autoComplete="new-razorpaySecret" />
                        </LabelInputContainer>

                        <button
                            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit">
                            Create &rarr;
                            <BottomGradient />
                        </button>

                        <div
                            className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 mb-0 h-[1px] w-full" />
                    </form>
                </div>
                </motion.div>
                </LampContainer>
            </div>
  )
}

const BottomGradient = () => {
  return (<>
      <span
          className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span
          className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
      (<div className={cn("flex flex-col space-y-2 w-full", className)}>
          {children}
      </div>)
  );
};

export default page ;