"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";


export function ProfileCard({user}) {
  const router = useRouter();
  const backgroundImage = user.image || 'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';
  
  const profileClick = () => {
    // console.log(user);
    router.push(`/paymentgateway/${user.username}`);
  } 
 

  return (
    (<div onClick={profileClick} className="max-w-xs w-full group/card">
      <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          ` bg-cover`
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={user?.profilepic || "/Cover.jpg"}
            className="h-10 w-10 rounded-full border-2 object-cover" />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {user.name}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {user.role}
          </h1>
          <p className="font-normal text-sm text-gray-50 w -[21 2px] sm:w- [28 8px] relative z-10 my-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {user.description}
          </p>
        </div>
      </div>
    </div>)
  );
}
export default ProfileCard;