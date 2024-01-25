import React from "react";
import CardFour from "../components/CardFour";
import CardOne from "../components/CardOne";
import CardThree from "../components/CardThree";
import CardTwo from "../components/CardTwo";
import ChartOne from "../components/ChartOne";
import ChartThree from "../components/ChartThree";
import ChartTwo from "../components/ChartTwo";
import ChatCard from "../components/ChatCard";
// import MapOne from "../components/MapOne";
import TableOne from "../components/TableOne";

const Dashboard = () => {
 
  return (
    <>
     <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-3 md:grid-cols-2">
        <CardOne />
        <CardTwo />
        <CardThree />
        {/* <CardFour /> */}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChatCard />
        <ChartThree />
        {/* <MapOne /> */}
        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
