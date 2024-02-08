import React, { useState } from "react";
import { User } from "./UsersTable";
import ViewEditUserModal from "./ViewEditUserModal";
import { RoleTag } from "./RoleTag";
import { useNavigate } from "react-router";
import useUserStore from "../../store/globalStore";

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
  const navigate = useNavigate();
  const {setSelectedUser} = useUserStore()
  return (
    <>
      <tr>
        <td className="w-px h-px whitespace-nowrap">
          <div className="py-3 ps-6 pe-6">
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
              onClick={() => {
                
                navigate(`/users/view/${user?.id}`)
              }}
              className="inline-flex items-center text-sm font-medium text-blue-600 gap-x-1 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              View
            </button>
          </div>
        </td>
      </tr>
      {isModalOpen && <ViewEditUserModal item={user} onClose={closeModal} />}
    </>
  );
};

export default UserTableRow;
export const UserSkeleton = () => {
  return (
    <tr>
      <td className="w-px h-px whitespace-nowrap">
        <div className="py-3 ps-6 lg:ps-3 xl:ps-0 pe-6">
          <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 rounded-full skeleton-box animate-pulse"></div>
            <div className="grow">
              <div className="w-48 h-8 skeleton-box animate-pulse"></div>
              <div className="w-32 h-4 skeleton-box animate-pulse"></div>
            </div>
          </div>
        </div>
      </td>
      <td className="h-px w-72 whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex flex-wrap">
            <div className="w-48 h-6 rounded-full skeleton-box animate-pulse" />
            <div className="w-48 h-6 ml-2 rounded-full skeleton-box animate-pulse" />
          </div>
        </div>
      </td>
      <td className="w-px h-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="w-24 h-8 rounded-full skeleton-box animate-pulse"></div>
        </div>
      </td>
      <td className="w-px h-px whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="w-48 h-8 skeleton-box animate-pulse"></div>
        </div>
      </td>
      <td className="w-px h-px whitespace-nowrap">
        <div className="px-6 py-1.5">
          <div className="w-32 h-8 rounded-full skeleton-box animate-pulse"></div>
        </div>
      </td>
    </tr>
  );
};
