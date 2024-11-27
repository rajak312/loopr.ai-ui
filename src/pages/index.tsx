import OverViewChart from "@/components/custom-components/OverViewChart";
import RecentTransactionCard from "@/components/custom-components/RecentTransactionCard";
import StatsCard from "@/components/custom-components/StatsCard";
import TransactionTable from "@/components/custom-components/TransactionTable";
import React from "react";

const Home = () => {
  return (
    <div className="p-10 h-screen space-y-6">
      <StatsCard />
      <div className="grid grid-cols-1 md:flex md:flex-row justify-between gap-4 ">
        <OverViewChart />
        <RecentTransactionCard />
      </div>
      <TransactionTable />
    </div>
  );
};

export default Home;
