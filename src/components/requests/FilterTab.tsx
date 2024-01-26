import { useState } from "react";

const FilterTabs: React.FC<{ onFilterChange: (tab: string) => void }> = ({
  onFilterChange,
}) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onFilterChange(tab); // Notify parent component about the filter change
  };

  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg divide-bodydark1 border-bodydark1 dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        <button
          className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
            activeTab === "all"
              ? "bg-bodydark2 dark:bg-black text-white dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          onClick={() => handleTabClick("all")}
        >
          View all
        </button>

        <button
          className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
            activeTab === "pending"
              ? "bg-bodydark2 dark:bg-black text-white dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          onClick={() => handleTabClick("pending")}
        >
          Pending
        </button>

        <button
          className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
            activeTab === "approved"
              ? "bg-bodydark2 dark:bg-black text-white dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          onClick={() => handleTabClick("approved")}
        >
          Approved
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;
