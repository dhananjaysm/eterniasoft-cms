import { useData } from "../../context/DataContext";
import DashboardCardSkeleton from "../common/skeletons/DashboardCardSkeleton";
import { BsBellFill } from 'react-icons/bs'; // Assuming you're using react-icons for icons
import ErrorTooltip from "./ErrorTooltip";

const RequestCountCard = () => {
  const { requestsCount, requestsLoading, requestsError } = useData();

  if (requestsLoading) {
    return <DashboardCardSkeleton />;
  }

  return (
    <div className="flex items-center p-4 bg-white rounded dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-red-200 rounded dark:bg-red-900">
        <BsBellFill className="w-6 h-6 text-red-700 dark:text-red-300" />
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold dark:text-white">
            {requestsError ? 'Error' : requestsCount}
          </span>
          {requestsError && <ErrorTooltip errorMessage={requestsError.message} />}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">
            Total Requests
          </span>
          {/* {!requestsError && (
            <span className="ml-2 text-sm font-semibold text-red-500 dark:text-red-300">
              -8.1%
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default RequestCountCard;

