import React from "react";
import UserIcon from "@/assets/user.svg";
import SearchIcon from "@/assets/search-normal.svg";
import BellIcon from "@/assets/bell.svg";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <div className=" h-[75px] flex items-center justify-between px-4 forground ">
      <div className="flex items-center gap-2">
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <ChevronLeft />
            </SheetTrigger>
            <SheetContent
              className="w-max p-0 bg-transparent m-0 border-none"
              side="left"
            >
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <SideBar />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <h1 className="font-semibold text-xl">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden  rounded-lg h-[33px] sm:flex bg-[#282C35] p-2">
          <input
            type="text"
            className="bg-transparent  focus:outline-none border-none"
          />
          <Image src={SearchIcon} width={25} height={25} alt="smsIcon" />
        </div>
        <div className="hidden sm:block">
          <Image src={BellIcon} width={30} height={40} alt="smsIcon" />
        </div>
        <div className="hidden sm:block">
          <Image src={UserIcon} width={30} height={40} alt="smsIcon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
