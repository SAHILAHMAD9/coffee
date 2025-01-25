'use client'
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const Dropbox = () => {
  const { data: session } = useSession();
  const [showDropDown, setshowDropDown] = useState(false);
  
  return (
    <div className="h-full flex flex-col bg -black z- 20 min-w-50 gap-2  items-center rounded-full m-1 relative left-0 top-0 ">
      <button
        onClick={() => setshowDropDown(!showDropDown)}
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm pe-1 font-medium rounded-full w-full md:me-0  text-white"
        type="button"
      >
        <span className="sr-only"></span>
        <img
          className="w-8 h-8 me-2 rounded-full"
          src={session?.user?.image || 'profile.gif'}
          alt="user photo"
        />
        <div className="flex items-center justify-center w-auto"> {session?.user?.name}</div>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownAvatarName"
        onBlur={() => {
          setTimeout(() => {
            setshowDropDown(false)
          }, 100);
        }}
        className={`z-10 ${showDropDown ? "" : 'hidden'} divide-y absolute top-10 rounded-lg p-0 left-0 m-0 bg-gray-700 shadow min-w-44 `}
      >
        <div className="px-4 py-3 text-sm text-white">
          <div className="font-medium">Pro User</div>
          <div className="truncate">{session?.user?.email}</div>
        </div>
        <ul
          className="py- text-md text-gray-200"
          aria-labelledby="dropdownAvatarNameButton"
        >
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2  hover:bg-gray-600 hover:rounded-sm hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <a
              className="block px-4 py-2  hover:bg-gray-600 hover:rounded-sm hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <div
              onClick={() => {
                signOut()
                toast.success('Successfully Logged Out')
                }}
              className="block px-4 py-2  text-xl fo nt-semibold hover:bg-gray-600 hover:rounded-sm hover:text-white"
            >
              Log Out
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
