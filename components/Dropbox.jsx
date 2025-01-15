'use client'
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
export const Dropbox = () => {
    const {data : session } = useSession();
    const [showDropDown, setshowDropDown] = useState(false);
  return (
    <div className="h-full flex flex-col bg-black z- 20 min- w-50 gap-2  items-center rounded-full m-1 absolute left-0 top-0 ">
      <button
      onClick={()=> setshowDropDown(!showDropDown)}
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm pe-1 font-medium rounded-full w-full md:me-0  text-white"
        type="button"
      >
        <span className="sr-only"></span>
        <img
          className="w-8 h-8 me-2 rounded-full"
          src={session.user.image}
          alt="user photo"
        />
       <div className="flex items-center justify-center w-auto"> {session.user.name}</div>
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
        className={`z-10 ${showDropDown ? "":'hidden'} rounded-lg bg-gray-700 shadow min-w-50 `}
      >
        <div className="px-4 py-3 text-sm text-white">
          <div className="font-medium">Pro User</div>
          <div className="truncate">{session.user.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-200"
          aria-labelledby="dropdownAvatarNameButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
