"use client";
import React, { useEffect, useState } from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/LampDemo";
import toast from "react-hot-toast";
import { logInUser } from "@/actions/useractions";

export default function page() {
    const { data: session } = useSession();
    const [Form, setForm] = useState({
        email: "",
        password: ""
    })
    const router = useRouter();

    function changeHandler(event) {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const username = session?.user?.username || localStorage.getItem('username');

    useEffect(() => {
        document.title = "Login - Get Me A COFFEE"
        // console.log(session)
        if (username) {
            toast.success('Successfully Logged In!')
            router.push('/dashboard');
        }
    }, [username])
    
const handleSummit = async (e) => {
    e.preventDefault();
    try {
        let user = await logInUser(Form);
        if (user.success) {
                //   console.log("User created:", user);
            const username = user?.user?.username;
                localStorage.setItem("username", username);
                toast.success('Successfully Logged In!!!');
                //nagivate
                router.push('/dashboard');
        } else {
            toast.error('Email or Password Incorrect!')
            console.log("Email or Password Incorrect!");
        }
    } catch (error) {
        console.log("Error in handleSummit:", error);
    }
}
    return (
            <div className="bg-black w-full min-h-screen flex flex-col justify-center items-center ">
                <LampContainer className='pt-32 sm:pt-44 md:pt-44'>
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative md:mt-40 login bg-gradient-to-br from-slate-300 to-slate-500 rounded-2xl w-[20rem] sm:w-[28rem] md:w-[35rem] text-transparent"
                    >
                            <div className="mx-auto w-full rounded-2xl p-4 md:p-8 shadow-input bg-black">
                            <h2 className="font-bold text-xl sm:text-2xl text-neutral-200">
                                Welcome
                            </h2>
                            <p className="text-xs sm:text-sm max-w-sm mt-2 text-neutral-300">
                                Log In to Buy me a COFFEE
                            </p>
                            
                            <form onSubmit={handleSummit} className="my-6 sm:my-8">
                                <LabelInputContainer className="mb-4">
                                    <Label className='text-white text-sm sm:text-base' htmlFor="email">Email Address</Label>
                                    <Input 
                                        onChange={changeHandler} 
                                        name="email" 
                                        value={Form.email} 
                                        id="email" 
                                        placeholder="sahilahmad3504@gmail.com" 
                                        type="email" 
                                        className="text-sm sm:text-base"
                                        autoComplete="new-email" 
                                    />
                                </LabelInputContainer>
                                
                                <LabelInputContainer className="mb-4">
                                    <Label className='text-white text-sm sm:text-base' htmlFor="password">Password</Label>
                                    <Input 
                                        onChange={changeHandler} 
                                        name="password" 
                                        value={Form.password} 
                                        id="password" 
                                        placeholder="••••••••" 
                                        type="password"
                                        className="text-sm sm:text-base" 
                                        autoComplete="new-password"
                                    />
                                </LabelInputContainer>

                                <button
                                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit">
                                    Log In &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 sm:my-8 h-[1px] w-full" />
                            </form>

                            <div className="flex flex-col space-y-3 sm:space-y-4">
                                <button
                                    onClick={() => signIn('github')}
                                    className="relative group/btn flex space-x-2 items-center justify-start px-3 sm:px-4 w-full text-black rounded-md h-9 sm:h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                    type="submit">
                                    <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                                    <span className="text-neutral-300 text-xs sm:text-sm">
                                        GitHub
                                    </span>
                                    <BottomGradient />
                                </button>

                                <button 
                                    onClick={() => signIn('google')}
                                    className="relative group/btn flex space-x-2 items-center justify-start px-3 sm:px-4 w-full text-black rounded-md h-9 sm:h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                    type="submit">
                                    <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
                                    <span className="text-neutral-300 text-xs sm:text-sm">
                                        Google
                                    </span>
                                    <BottomGradient />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </LampContainer>
            </div>
    );
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