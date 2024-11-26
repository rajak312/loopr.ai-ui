import OverViewChart from "@/components/custom-components/OverViewChart";
import RecentTransactionCard from "@/components/custom-components/RecentTransactionCard";
import StatsCard from "@/components/custom-components/StatsCard";
import TransactionTable from "@/components/custom-components/TransactionTable";
import React from "react";

const Home = () => {
  return (
    <div className="p-10 space-y-6">
      <StatsCard />
      <div className="flex justify-between ">
        <OverViewChart />
        <RecentTransactionCard />
      </div>
      <TransactionTable />
    </div>
  );
};

export default Home;
