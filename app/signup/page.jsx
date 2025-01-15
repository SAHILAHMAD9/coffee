"use client";
import React from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from "react";

export default function page() {
    const { data: session } = useSession();
    console.log(session);

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

    // const [showPassword, setSetshowPassword] = useState(false);
    return (
        <div className="bg-black w-full min-h-screen flex justify-center p-2 items-center ">
            <div
                className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                <h2 className="font-bold text-2xl text-neutral-200">
                    Welcome
                </h2>
                <p className=" text-sm max-w-sm mt-2 text-neutral-300">
                    Sign Up to Buy me a COFFEE
                </p>
                <form className="my-8" >
                    <div
                        className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label className='text-white' htmlFor="firstname">First name
                            </Label>
                            <Input onChange={changeHandler} name="firstname" value={Form.firstname} id="firstname" placeholder="Sahil" type="text" autoComplete="new-firstname"/>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label className='text-white' htmlFor="lastname">Last name</Label>
                            <Input onChange={changeHandler} name="lastname" value={Form.lastname} id="lastname" placeholder="Ahmad" type="text" autoComplete="new-lastname"/>
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label className='text-white' htmlFor="email">Email Address</Label>
                        <Input onChange={changeHandler} name="email" value={Form.email} id="email" placeholder="sahilahmad3504@gmail.com" type="email" autoComplete="new-email"/>
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
