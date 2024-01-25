import { useData } from "../context/DataContext";
import DashboardCardSkeleton from "./common/skeletons/DashboardCardSkeleton";

const CardTwo = () => {
  const { usersCount, usersLoading ,usersError} = useData();
  if (usersLoading) {
    return <DashboardCardSkeleton />;
  }
  if(usersError) return <><h4>Error:{usersError.message}</h4></>
  console.log(usersCount)
  return (
    <div className="flex items-center p-4 bg-white rounded dark:border-strokedark dark:bg-boxdark ">
      <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-green-200 rounded">
        <svg
          className="w-6 h-6 text-green-700 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <span className="text-xl font-bold dark:text-white">{usersCount}</span>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Total Users</span>
          <span className="ml-2 text-sm font-semibold text-green-500">
            +12.6%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
