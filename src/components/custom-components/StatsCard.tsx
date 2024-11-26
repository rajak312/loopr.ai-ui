import Image from "next/image";
import React from "react";
import smsIcon from "@/assets/sms.svg";

const StatsStaticData = [
  {
    icon: smsIcon,
    stats_name: "Balance",
    amount: "43,210",
  },
  {
    icon: smsIcon,
    stats_name: "Revenu",
    amount: "41,190",
  },
  {
    icon: smsIcon,
    stats_name: "Expenses",
    amount: "43,210",
  },
  {
    icon: smsIcon,
    stats_name: "Savings",
    amount: "35,210",
  },
];

const StatsCard = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      {StatsStaticData.map((item, idx) => (
        <div
          key={idx}
          className="w-full  min-w-[214.82px]  h-[95.75px] card flex items-center justify-between">
          <div className="flex justify-center items-center rounded-lg h-14 w-14 bg-[#282C35]">
            <Image src={item.icon} width={30} height={40} alt="smsIcon" />
          </div>
          <div className="space-y-2">
            <small className="textt-[#9E9E9E]">{item.stats_name}</small>
            <h1 className="font-semibold text-2xl">${item.amount}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
