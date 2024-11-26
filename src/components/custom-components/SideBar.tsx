import React from "react";
import smsIcon from "@/assets/sms.svg";
import LogoIcon from "@/assets/Icon.svg";
import Image from "next/image";

const SideMenuStaticData = [
  {
    icon: smsIcon,
    menu_name: "Dashboard",
    path: "/",
  },
  {
    icon: smsIcon,
    menu_name: "Transactions",
    path: "/",
  },
  {
    icon: smsIcon,
    menu_name: "Wallet",
    path: "/",
  },
  {
    icon: smsIcon,
    menu_name: "Analytics",
    path: "/",
  },
  {
    icon: smsIcon,
    menu_name: "Personal",
    path: "/",
  },
  {
    icon: smsIcon,
    menu_name: "Message",
    path: "/",
  },
  {
    icon: smsIcon,
    menu_name: "Setting",
    path: "/",
  },
];

const SideBar = () => {
  return (
    <div className="w-[213px] h-full forground flex justify-center py-4 ">
      <div className="flex flex-col gap-4">
        <div className="my-6 flex items-center gap-2">
          <Image src={LogoIcon} width={30} height={40} alt="smsIcon" />

          <h1 className="text-3xl font-bold">Penta</h1>
        </div>
        <div className="flex flex-col gap-10 ">
          {SideMenuStaticData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <Image src={item.icon} width={30} height={40} alt="smsIcon" />
              <h4 className="text-lg">{item.menu_name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
