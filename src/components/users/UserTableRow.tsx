import React, { useState } from "react";
import { User } from "./UsersTable";
import ViewEditUserModal from "./ViewEditUserModal";
import { RoleTag } from "./RoleTag";

const UserTableRow: React.FC<{ user: User }> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    // setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setSelectedItem(null);
  };
  return (
    <>
      <tr>
        <td className="w-px h-px whitespace-nowrap">
          <div className="py-3 ps-6">
            <label htmlFor="hs-at-with-checkboxes-1" className="flex">
              <input
                type="checkbox"
                className="text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-at-with-checkboxes-1"
              />
              <span className="sr-only">Checkbox</span>
            </label>
          </div>
        </td>
        <td className="w-px h-px whitespace-nowrap">
          <div className="py-3 ps-6 lg:ps-3 xl:ps-0 pe-6">
            <div className="flex items-center gap-x-3">
              <img
                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {user.username}
                </span>
                <span className="block text-sm text-gray-500">
                  {user.email}{" "}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="h-px w-72 whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex flex-wrap">
              {user.roles.map((role, index) => (
                <RoleTag key={index} role={role} />
              ))}
            </div>
            {/* <span className="block text-sm text-gray-500">Human resources</span> */}
          </div>
        </td>
        <td className="w-px h-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
              <svg
                className="w-2.5 h-2.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Active
            </span>
          </div>
        </td>

        <td className="w-px h-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-500">{user.createdAt}</span>
          </div>
        </td>
        <td className="w-px h-px whitespace-nowrap">
          <div className="px-6 py-1.5">
            <button
              //   onClick={openModal}
              disabled
              className="inline-flex items-center text-sm font-medium text-blue-600 cursor-not-allowed gap-x-1 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
      {isModalOpen && <ViewEditUserModal item={user} onClose={closeModal} />}
    </>
  );
};

export default UserTableRow;
