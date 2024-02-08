import ChartOne from "../components/ChartOne";
import ChartThree from "../components/ChartThree";
import ChatCard from "../components/ChatCard";
// import MapOne from "../components/MapOne";
import RequestCountCard from "../components/dashboard/RequestCountCard";
import UserCountCard from "../components/dashboard/UserCountCard";
import SubCountCard from "../components/dashboard/SubCountCard";
import LatestRequestsTable from "../components/dashboard/LatestRequestsTable";

const Dashboard = () => {
  return (
    <>
      <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-3 md:grid-cols-2">
        <RequestCountCard />
        <UserCountCard />
        <SubCountCard />
        {/* <CardFour /> */}
      </div>

      {/* <ChartOne /> */}
      <div className="flex flex-col mt-6">
        <LatestRequestsTable />
      </div>
    </>
  );
};

export default Dashboard;
