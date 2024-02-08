import { useQuery } from "@apollo/client";
import RequestTableRow from "./RequestTableRow";
import { GET_ALL_REQUESTS } from "../../graphql/query";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AddProductForm from "../common/product/AddProductForm";
import ViewRequestDrawer from "./ViewRequestDrawer";
type User = {
  id: string;
  email: string;
  username: string;
};

type Plan = {
  id: string;
  name: string;
};

type Approval = {
  id: string;
  approved: boolean;
  approver: User;
};

export type RequestType = {
  id: string;
  requestId: number;
  requestType: string;
  user: User;
  plan: Plan;
  approvals: Approval[];
  status: string;
  createdAt: string;
  updatedAt: string;
};

type GetAllRequestsResponse = {
  getAllRequests: RequestType[];
};

const RequestsTable = ({ filter }: { filter: string }) => {
  const { data, loading, error } = useQuery(GET_ALL_REQUESTS);
  const filteredRequests = data?.getAllRequests.filter(
    (request: RequestType) => {
      if (filter === "all") return true; // Show all requests
      return request.status.toLowerCase() === filter; // Filter by 'pending' or 'approved'
    }
  );
  const [showForm, setShowForm] = useState(false);

  const formVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "50%",
      transition: { duration: 0.4 },
    },
    exit: {
      width: 0,
      transition: { duration: 0.2 },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex">
      <div
        className={`overflow-hidden border border-bodydark1 dark:border-gray-700 flex-grow ${
          showForm ? "w-1/2" : "w-full "
        } transition-all duration-500 ease-in-out`}
      >
        <table className="min-w-full divide-y divide-bodydark1 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <button className="flex items-center gap-x-3 focus:outline-none">
                  <span>User</span>
                </button>
              </th>
              {!showForm && (
                <>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Type
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Plan
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Approvers
                  </th>
                </>
              )}

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                Status
              </th>

              <th scope="col" className="relative py-3.5 px-4">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-bodydark1 dark:divide-gray-700 dark:bg-gray-900">
            {!loading ? (
              filteredRequests.map((request: RequestType) => (
                <RequestTableRow
                  showForm={showForm}
                  setShowForm={setShowForm}
                  key={request.id}
                  request={request}
                />
              ))
            ) : (
              <>Loading...</>
            )}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="w-1/2 overflow-auto "
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Your form content here */}
            <ViewRequestDrawer showForm={showForm} setShowForm={setShowForm} />
            {/* Form fields */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RequestsTable;
