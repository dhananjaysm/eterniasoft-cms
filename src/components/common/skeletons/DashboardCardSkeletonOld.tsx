 const DashboardCardSkeleton = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 shimmer-effect"></div>

      <div className="flex items-end justify-between mt-4 shimmer-effect">
        <div>
          <div className="w-3/4 h-4 rounded bg-slate-200"></div>{" "}
          {/* Placeholder for title */}
          <div className="w-1/2 h-2 mt-2 rounded bg-slate-200"></div>{" "}
          {/* Placeholder for subtitle */}
        </div>

        <div className="flex items-center gap-1">
          <div className="w-10 h-2 rounded bg-slate-200"></div>{" "}
          {/* Placeholder for percentage or other info */}
          <div className="w-6 h-6 rounded bg-slate-200"></div>{" "}
          {/* Placeholder for icon or small graphic */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCardSkeleton


