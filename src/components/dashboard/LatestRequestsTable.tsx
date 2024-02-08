import { useQuery } from "@apollo/client";
import { RequestType } from "../requests/RequestsTable";
import LatestRequestTableRow, { RowSkeleton } from "./LatestRequestTableRow";
import { GET_ALL_REQUESTS } from "../../graphql/query";
import { useState } from "react";
import ViewRequestDrawer from "../requests/ViewRequestDrawer";
import { AnimatePresence, motion } from "framer-motion";

const LatestRequestsTable = () => {
  const { data, loading, error } = useQuery(GET_ALL_REQUESTS);
  const [showForm, setShowForm] = useState(false);
  const filteredRequests = data?.getAllRequests;
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

  return (
    <div className="flex">
      <div
        className={`overflow-hidden flex-grow ${
          showForm ? "w-1/2" : "w-full "
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <button className="flex items-center gap-x-2">
                            <span>Request ID</span>
                          </button>
                        </div>
                      </th>
                      {!showForm && (
                        <>
                          <th
                            scope="col"
                            className="hidden sm:table-cell px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Date
                          </th>

                          <th
                            scope="col"
                            className="hidden sm:table-cell px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Status
                          </th>
                        </>
                      )}

                      <th
                        scope="col"
                        className="hidden sm:table-cell px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        User
                      </th>

                      {!showForm && (
                        <th
                          scope="col"
                          className="hidden sm:table-cell px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Plan/Product
                        </th>
                      )}

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {!loading ? (
                      filteredRequests?.map((request: RequestType,index:number) => (
                        <LatestRequestTableRow
                          showForm={showForm}
                          setShowForm={setShowForm}
                          key={request.id}
                          request={request}
                          index={index}
                        />
                      ))
                    ) : (
                      <RowSkeleton />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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

export default LatestRequestsTable;
