import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import {
  BsAirplane,
  BsBox2Fill,
  BsCardImage,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsDoorOpen,
  BsGearFill,
  BsMenuApp,
  BsPinMap,
  BsReceipt,
  BsTicketDetailedFill,
} from "react-icons/bs";
import { useAuth } from "../../../context/AuthContext";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { clearAuthToken } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          {/* <img src={Yotour} alt="Logo" className="w-12 h-12" /> */}
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <BsChevronLeft />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        {/* <!-- Sidebar Menu --> */}
        <nav className="px-4 py-4 mt-5 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("dashboard") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsMenuApp />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/users"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("users") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsReceipt />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plans"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("plans") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsReceipt />
                  Plans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("products") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsReceipt />
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/requests"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("requests") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsReceipt />
                  Requests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/approvals"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("approvals") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsReceipt />
                  Approvals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <BsGearFill />
                  Settings
                </NavLink>
              </li>
              <li></li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
          <div>
            <button
              onClick={() => {
                clearAuthToken();
                navigate("/signin");
              }}
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-danger dark:hover:bg-danger ${
                pathname.includes("settings") && "bg-graydark dark:bg-meta-4"
              }`}
            >
              <BsDoorOpen />
              Logout
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
