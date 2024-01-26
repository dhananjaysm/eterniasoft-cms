import React, { useState } from "react";
import { useRequestStore } from "../../store/globalStore";
import { useMutation } from "@apollo/client";
import { APPROVE_REQUEST_MUTATION } from "../../graphql/mutations";
import { useAuth } from "../../context/AuthContext";

const ViewRequestDrawer = () => {
  const { selectedRequest } = useRequestStore();
  const { userId } = useAuth();
  const [approveRequest, { data, loading, error }] = useMutation(
    APPROVE_REQUEST_MUTATION
  );
  const [comments, setComments] = useState("");
  // Check if the logged-in user is among the approvers
  // Find the approval object for the logged-in user
  const userApproval = selectedRequest?.approvals.find(
    (approval) => approval.approver.id === userId
  );

  // Check if the user is an approver by checking if userApproval exists
  const isUserAnApprover = Boolean(userApproval);

  // Function to call the mutation
  const handleApproveRequest = async () => {
    if (!isUserAnApprover || !userApproval) {
      console.error("User is not authorized to approve this request.");
      return;
    }

    try {
      await approveRequest({
        variables: {
          approvalId: userApproval.id, // Use the found approval ID
          approverId: userId,
          comments: comments,
        },
      });
      // Handle success (e.g., show a success message or update UI state)
    } catch (err) {
      // Handle error (e.g., show an error message)
      console.error("Error approving request:", err);
    }
  };

  return (
    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Request:{selectedRequest?.id}
        </h3>
      </div>
      <div className="p-4">
        <div className="mt-4 ">
          <h3 className="text-md dark:text-gray-400">User</h3>
          <p className="dark:text-gray-300">
            {selectedRequest?.user.username} ({selectedRequest?.user.email})
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-md dark:text-gray-400">Plan</h3>
          <p className="dark:text-gray-300">{selectedRequest?.plan.name}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md dark:text-gray-400">Approvals</h3>
          <ul>
            {selectedRequest?.approvals.map((approval) => (
              <li
                key={approval.id}
                className="flex items-center justify-between dark:text-gray-300"
              >
                <span>{approval.approver.username}</span>
                <span
                  className={`font-bold ${
                    approval.approved ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {/* {approval.approved ? "Approved" : "Pending"} */}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-md dark:text-gray-400">Status</h3>
          <p
            className={`font-semibold ${
              selectedRequest?.status === "Approved"
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {selectedRequest?.status}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-md dark:text-gray-400">Created At</h3>
          <p className="dark:text-gray-300">
            {selectedRequest &&
              new Date(selectedRequest.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="text-md dark:text-gray-400">Updated At</h3>
          <p className="dark:text-gray-300">
            {selectedRequest &&
              new Date(selectedRequest?.updatedAt).toLocaleString()}
          </p>
        </div>
        {isUserAnApprover && selectedRequest?.status !=="approved" && (
          <>
            <div>
              <label className="block mb-3 text-black dark:text-white">
                Comments
              </label>
              <textarea
                rows={6}
                value={comments}
                onChange={(e) => setComments(e.currentTarget.value)}
                placeholder="Write comments"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>
            <button
              onClick={handleApproveRequest}
              className="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray"
            >
              {loading ? "Approving..." : "Approve"}
            </button>
          </>
        )}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default ViewRequestDrawer;
