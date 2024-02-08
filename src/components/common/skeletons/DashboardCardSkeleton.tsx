const DashboardCardSkeleton = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded dark:bg-meta-4 shimmer-effect">
        {/* Placeholder for bell icon */}
        {/* <div className="w-6 h-6 rounded-full bg-slate-200"></div> */}
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex items-center justify-between">
          {/* Placeholder for "Error" text */}
          <div className="w-1/4 h-6 rounded bg-slate-200 shimmer-effect"></div>
          {/* Placeholder for information icon */}
          <div className="w-4 h-4 rounded-full bg-slate-200 shimmer-effect"></div>
        </div>
        {/* Placeholder for "Total Requests" text */}
        <div className="w-3/4 h-4 mt-2 rounded bg-slate-200 shimmer-effect"></div>
      </div>
    </div>
  );
};

export default DashboardCardSkeleton;
