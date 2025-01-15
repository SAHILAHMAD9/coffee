"use client"
import React from 'react'

import { useSession, signIn , signOut } from 'next-auth/react'

export const page = () => {
    const { data: session } = useSession();
    console.log(session);
   
  return (
    <div>page
    {
        session ? (<button onClick={() => {signOut(("github"))}}>logout</button>) : (<button onClick={() => {signIn(("github"))}}>login with github</button>)
    }
    {
        session ? (<button onClick={() => {signOut(("google"))}}>logout</button>) : (<button onClick={() => {signIn(("google"))}}>login with google</button>)
    }
    </div>
  ) 
}
 
export default page;