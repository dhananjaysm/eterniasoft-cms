import { useData } from "../context/DataContext";
import DashboardCardSkeleton from "./common/skeletons/DashboardCardSkeleton";

const CardThree = () => {
  const {subsCount,subsLoading,subsError} = useData()
  
  if (subsLoading) {
    return <DashboardCardSkeleton />;
  }
  if(subsError) return <><h4>Error:{subsError.message}</h4></>
  return (
    <div className="flex items-center p-4 bg-white rounded dark:border-strokedark dark:bg-boxdark ">
      <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-red-200 rounded dark:bg-red-900">
        <svg
          className="w-6 h-6 text-red-700 fill-current dark:text-red-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <span className="text-xl font-bold dark:text-white">{subsCount}</span>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Total Subscriptions</span>
          <span className="ml-2 text-sm font-semibold text-red-500 dark:text-red-300">-8.1%</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
