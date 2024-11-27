import React, { useState } from "react";
import msgIcon from "@/assets/sms.svg";
import appsIcon from "@/assets/element-3.svg";
import transactionIcon from "@/assets/wallet-minuss.svg";
import transtIcon from "@/assets/wallet-2.svg";
import analiticsIcon from "@/assets/presention-chart.svg";
import userIcon from "@/assets/person.svg";
import settingIcon from "@/assets/setting-2.svg";
import LogoIcon from "@/assets/Icon.svg";
import Image from "next/image";

const SideMenuStaticData = [
  {
    icon: appsIcon,
    menu_name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: transactionIcon,
    menu_name: "Transactions",
    path: "/transactions",
  },
  {
    icon: transtIcon,
    menu_name: "Wallet",
    path: "/wallet",
  },
  {
    icon: analiticsIcon,
    menu_name: "Analytics",
    path: "/analytics",
  },
  {
    icon: userIcon,
    menu_name: "Personal",
    path: "/personal",
  },
  {
    icon: msgIcon,
    menu_name: "Message",
    path: "/message",
  },
  {
    icon: settingIcon,
    menu_name: "Setting",
    path: "/setting",
  },
];

const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("Dashboard");

  const handleMenuClick = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  return (
    <div className="w-[213px] forground h-full flex justify-center py-4">
      <div className="flex flex-col gap-4">
        <div className="my-6 flex items-center gap-2">
          <Image src={LogoIcon} width={30} height={40} alt="smsIcon" />
          <h1 className="text-3xl font-bold">Penta</h1>
        </div>
        <div className="flex flex-col gap-10">
          {SideMenuStaticData.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4  cursor-pointer ${
                selectedMenu === item.menu_name
                  ? "font-bold text-[#1FCB4F]"
                  : "text-[#a9a9a9]"
              }`}
              onClick={() => handleMenuClick(item.menu_name)}
            >
              <Image
                src={item.icon}
                width={30}
                height={40}
                alt={item.menu_name}
              />
              <h4 className="text-lg">{item.menu_name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
