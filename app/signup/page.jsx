"use client";
import React, { useState, useEffect } from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/LampDemo";
import toast from "react-hot-toast";
import { signUpUser } from "@/actions/useractions";
import { storage } from "@/utils/localstorage";


export default function page() {
    const { data: session } = useSession();
    const router = useRouter();
    const [username, setUsername] = useState(null);
    const [Form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    function changeHandler(event) {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    useEffect(() => {
        setUsername(session?.user?.username || storage.get('username'));
    }, [session, username]);


    useEffect(() => {
        document.title = "SignUp - Get Me A COFFEE"
        // console.log(session)
        if (username) {
            toast.success("Successfully Singed Up!")
            router.push('/dashboard');
        }
    }, [username])

    const handleSummit = async (e) => {
        e.preventDefault();
        try {
            let user = await signUpUser(Form);
            if (user.success) {
                // console.log("User created:", user);
                const username = user?.user?.username;
                storage.set("username", username);
                toast.success('Successfully Signed Up!!!');
                //nagivate
                router.push('/dashboard');
            } else {
                toast.error('Email Already Exist!')
                console.log("User Exist Already");
            }
        } catch (error) {
            console.log("Error in handleSummit:", error);
        }
    };
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
                    className="relative md:mt-40 sm:mt-44 mt-20 signup bg-gradient-to-br from-slate-300 to-slate-500 rounded-2xl w-[20rem] sm:w-[28rem] md:w-[35rem] text-transparent"
                >
                    <div
                        className=" w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-black">
                        <h2 className="font-bold font-mono text-2xl text-neutral-200">
                            Welcome
                        </h2>
                        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
                            Sign Up to Buy me a COFFEE
                        </p>
                        <form onSubmit={handleSummit} className="my-8" >
                            <div
                                className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                <LabelInputContainer>
                                    <Label className='text-white' htmlFor="firstname">First name
                                    </Label>
                                    <Input onChange={changeHandler} name="firstname" value={Form.firstname} id="firstname" placeholder="Sahil" type="text" autoComplete="new-firstname" />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label className='text-white' htmlFor="lastname">Last name</Label>
                                    <Input onChange={changeHandler} name="lastname" value={Form.lastname} id="lastname" placeholder="Ahmad" type="text" autoComplete="new-lastname" />
                                </LabelInputContainer>
                            </div>
                            <LabelInputContainer className="mb-4">
                                <Label className='text-white' htmlFor="email">Email Address</Label>
                                <Input onChange={changeHandler} name="email" value={Form.email} id="email" placeholder="sahilahmad3504@gmail.com" type="email" autoComplete="new-email" />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label className='text-white' htmlFor="password">Password</Label>
                                <Input onChange={changeHandler} name="password" value={Form.password} id="password" placeholder="••••••••" type="password" autoComplete="new-password" />
                            </LabelInputContainer>

                            <button
                                className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit">
                                Sign up &rarr;
                                <BottomGradient />
                            </button>

                            <div
                                className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                        </form>
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => signIn(('github'))}
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit">
                                <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </button>
                            <button onClick={() => { signIn(("google")) }}
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit">
                                <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
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
