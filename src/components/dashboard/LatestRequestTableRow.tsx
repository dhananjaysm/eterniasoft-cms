import { RequestType } from "../requests/RequestsTable";
import { useRequestStore } from "../../store/globalStore";
import { formatDateTimeFromString } from "../../utils/helper";
import { MdTimelapse } from "react-icons/md";

const LatestRequestTableRow = ({
  showForm,
  setShowForm,
  request,
  index
}: {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  request: RequestType;
  index:number
}) => {
  const { setSelectedRequest } = useRequestStore();
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input
            type="checkbox"
            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />

          <span className="">{index+1}</span>
        </div>
      </td>
      {!showForm && (
        <>
          <td className="hidden px-4 py-4 text-sm text-gray-500 sm:table-cell dark:text-gray-300 whitespace-nowrap">
            {formatDateTimeFromString(request?.createdAt)}
          </td>
          <td className="hidden px-4 py-4 text-sm font-medium text-gray-700 sm:table-cell whitespace-nowrap">
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2  ${
                request?.status == "approved"
                  ? "text-emerald-500 bg-emerald-100/60"
                  : "text-yellow-500 bg-yellow-100/60"
              } dark:bg-gray-800`}
            >
              {request?.status == "approved" ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <MdTimelapse />
              )}

              <h2 className="text-sm font-normal">{request?.status}</h2>
            </div>
          </td>
        </>
      )}
      <td className="hidden px-4 py-4 text-sm text-gray-500 sm:table-cell dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center justify-center w-6 h-6 -mx-1 text-white bg-blue-500 border-2 border-white rounded-full dark:border-gray-700 shrink-0">
            {request?.user?.username[0].toUpperCase()}
          </div>
          <div>
            <h2 className="hidden text-sm font-medium text-gray-800 sm:table-cell dark:text-white ">
              {request?.user?.username}
            </h2>
            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
              {request?.user?.email}
            </p>
          </div>
        </div>
      </td>
      {!showForm && (
        <td className="hidden px-4 py-4 text-sm text-gray-500 sm:table-cell dark:text-gray-300 whitespace-nowrap">
          {request?.plan?.name}
        </td>
      )}
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => {
              setShowForm(!showForm);
              setSelectedRequest(request);
            }}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
          >
            View
          </button>
        </div>
      </td>
    </tr>
  );
};

export default LatestRequestTableRow;

export const RowSkeleton = () => {
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="w-4 h-4 bg-gray-200 rounded-full skeleton-box animate-pulse"></div>
          <span className="w-32 h-8 bg-gray-200 skeleton-box animate-pulse"></span>
        </div>
      </td>

      <>
        <td className="hidden px-4 py-4 text-sm text-gray-500 sm:table-cell dark:text-gray-300 whitespace-nowrap">
          <div className="w-48 h-8 bg-gray-200 skeleton-box animate-pulse"></div>
        </td>
        <td className="hidden px-4 py-4 text-sm font-medium text-gray-700 sm:table-cell whitespace-nowrap">
          <div className="w-48 h-8 bg-gray-200 rounded-full skeleton-box animate-pulse"></div>
        </td>
      </>

      <td className="hidden px-4 py-4 text-sm text-gray-500 sm:table-cell dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full skeleton-box animate-pulse"></div>
          <div>
            <div className="w-32 h-8 bg-gray-200 skeleton-box animate-pulse"></div>
            <div className="w-48 h-4 bg-gray-200 skeleton-box animate-pulse"></div>
          </div>
        </div>
      </td>

      <td className="hidden px-4 py-4 text-sm text-gray-500 sm:table-cell dark:text-gray-300 whitespace-nowrap">
        <div className="w-48 h-8 bg-gray-200 skeleton-box animate-pulse"></div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <div className="w-32 h-8 bg-gray-200 rounded-full skeleton-box animate-pulse"></div>
          <div className="w-32 h-8 bg-gray-200 rounded-full skeleton-box animate-pulse"></div>
        </div>
      </td>
    </tr>
  );
};
