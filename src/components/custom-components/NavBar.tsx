import React from "react";
import UserIcon from "@/assets/user.svg";
import BellIcon from "@/assets/bell.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="h-[75px] flex items-center justify-between px-4 forground">
      <div>
        <h1 className="font-semibold text-xl">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className=" rounded-lg h-[33px] flex bg-[#282C35] p-2">
          <input
            type="text"
            className="bg-transparent  focus:outline-none border-none"
          />
          <Image src={BellIcon} width={25} height={25} alt="smsIcon" />
        </div>
        <div>
          <Image src={BellIcon} width={30} height={40} alt="smsIcon" />
        </div>
        <div>
          <Image src={UserIcon} width={30} height={40} alt="smsIcon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
