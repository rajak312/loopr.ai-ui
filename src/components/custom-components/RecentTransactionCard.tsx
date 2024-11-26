import React from "react";
import UserRecentTransactionCard from "./UserRecentTransactionCard";

const RecentTransactionCard = () => {
  return (
    <div className="card h-[256px] w-full max-w-[500px]">
      <div className="flex justify-between items-center">
        <div>
          <h1>Recent Transation</h1>
        </div>
        <div>
          <p className="text-xs text-green-800">See all</p>
        </div>
      </div>
      <br />
      <div>
        <UserRecentTransactionCard />
        <br />
        <hr />
        <br />
        <UserRecentTransactionCard />
      </div>
    </div>
  );
};

export default RecentTransactionCard;
