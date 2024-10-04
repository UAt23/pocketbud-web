"use client"

import Image from "next/image";
import React, { FC } from "react";

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
   const [isMenuOpen, setMenuOpen] = React.useState(false);
   const [isOverMenu, setOverMenu] = React.useState(false);

   const openMenu = () => {
      setMenuOpen(true);
   }

   const closeMenu = () => {
      if(!isOverMenu) setMenuOpen(false);
   }
   
   const mouseOverMenu = () => {
      setMenuOpen(s => !s);
   }

	return (
         <div className="flex justify-between items-center py-2 px-4">
            <div className="text-neutral-800">
               Somethings
            </div>
            <div onMouseOver={openMenu} onMouseLeave={closeMenu} className="flex relative">
               <div className="border-2 border-[#374151] rounded-full p-2 transition-shadow duration-200 hover:shadow-lg">
                  <Image
                     src={"/icons/user-stroke-rounded.svg"}
                     alt="User icon"
                     width={24}
                     height={24}
                  />
               </div>
               <div className="absolute -bottom-24 right-0">
                  <ul onMouseOver={mouseOverMenu} className={`animate-reveal ${isMenuOpen ? "flex flex-col p-4 m-1 bg-white rounded-lg shadow-xl min-w-32 z-10" : "hidden"}`}>
                     <li className="text-neutral-800 text-sm">My Profile</li>
                     <li className="text-neutral-800 text-sm">Accounts</li>
                     <li className="text-neutral-800 text-sm">Logout</li>
                  </ul>
               </div>
            </div>
         </div>
      );
};

export default Topbar;
