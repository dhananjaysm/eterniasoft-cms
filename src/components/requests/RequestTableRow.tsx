import React from "react";
import { RequestType } from "./RequestsTable";
import { useRequestStore } from "../../store/globalStore";

const RequestTableRow = ({
  showForm,
  setShowForm,
  request,
}: {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  request: RequestType;
}) => {

  const {setSelectedRequest} = useRequestStore();
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 dark:text-white ">
            {request?.user?.username}
          </h2>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {request?.user?.email}
          </p>
        </div>
      </td>
      {!showForm && (
        <>
          <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
              {request?.requestType}
            </div>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div>
              <h4 className="font-bold text-graydark dark:text-bodydark2">
                {request?.plan?.name}
              </h4>
            </div>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
              {request?.approvals &&
                request?.approvals.map((approval, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-6 h-6 -mx-1 text-white bg-blue-500 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                  >
                    {approval.approver.username[0].toUpperCase()}
                    <span className="absolute w-auto p-2 mx-2 text-xs text-white transition-opacity duration-300 transform translate-y-1/2 bg-black rounded-lg shadow-lg opacity-0 -translate-x-1/3 min-w-max hover:opacity-100">
                      {approval.approver.username}
                    </span>
                  </div>
                ))}
              {/* If you have more approvals than you want to display, add a +number div */}
              {request?.approvals && request?.approvals.length > 4 && (
                <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                  +{request?.approvals.length - 4}
                </p>
              )}
            </div>
          </td>
        </>
      )}

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center space-x-2">
          {/* Assuming 'approvalSteps' is an array of step objects with 'status' */}
          {request?.approvals &&
            request.approvals.map((approval, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${
                    approval.approved ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  {index + 1}
                </div>
                {/* Tooltip to show status text on hover */}
                <span className="absolute w-auto p-2 m-2 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 -translate-y-full bg-black rounded-lg shadow-lg opacity-0 min-w-max left-1/2 hover:opacity-100">
                  {approval.approved ? "Approved" : "Pending"} by{" "}
                  {approval.approver.username}
                </span>
              </div>
            ))}
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button
          onClick={() => {
            setSelectedRequest(request);
            setShowForm(!showForm)
            
          }}
          className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default RequestTableRow;
