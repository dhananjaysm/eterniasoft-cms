import React, { useState } from "react";
import UserTableRow, { UserSkeleton } from "./UserTableRow";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/query";
import AddUserModal from "./AddUserModal";

export type User = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
};
const UsersTable = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const users = data?.findAllUsers;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => {
  //   // setSelectedItem(item);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   // setSelectedItem(null);
  // };
  return (
    <>
      <div className="px-4 ">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden bg-white border shadow-sm border-body/20 rounded-xl dark:bg-slate-900 dark:border-boxdark">
                <div className="grid gap-3 px-6 py-4 border-b border-body/20 md:flex md:justify-between md:items-center dark:border-gray-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      All Users
                    </h2>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      {/* <a
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border rounded-lg shadow-sm border-body/20 gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        View all
                      </a> */}

                      <button
                        // onClick={openModal}
                        disabled
                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg cursor-not-allowed gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                        Add user
                      </button>
                    </div>
                  </div>
                </div>

                <table className="min-w-full divide-y divide-body/20 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="py-3 ps-6 pe-6 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                            Name
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                            Roles
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                            Status
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                            Created
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!loading ? (
                      users.map((user: User) => (
                        <UserTableRow key={user.id} user={user} />
                      ))
                    ) : (
                      <UserSkeleton />
                    )}
                  </tbody>
                </table>

                {/* <div className="grid gap-3 px-6 py-4 border-t border-gray-200 md:flex md:justify-between md:items-center dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        6
                      </span>{" "}
                      results
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Next
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* {isModalOpen && <AddUserModal onClose={closeModal} />} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
