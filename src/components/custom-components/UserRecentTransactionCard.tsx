import Image from "next/image";
import React from "react";
import UserIcon from "@/assets/user.svg";

const UserRecentTransactionCard = () => {
  return (
    <div className="flex items-center justify-between border-b p-2 ">
      <div className="flex items-center gap-2">
        <div>
          <Image src={UserIcon} width={50} height={50} alt="smsIcon" />
        </div>
        <div>
          <small>Tranfers from</small>
          <h1 className="font-bold">Matheus Ferrero</h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[#1FCB4F]">+554.09</h1>
      </div>
    </div>
  );
};

export default UserRecentTransactionCard;
