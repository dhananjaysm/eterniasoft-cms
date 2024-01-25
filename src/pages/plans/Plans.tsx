import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import TableThree from "../../components/TableThree";
import TableTwo from "../../components/TableTwo";
import PlansTable from "../../components/plans/PlansTable";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {" "}
          {/* Adjusted this line to make heading and button inline */}
          <h2 className="font-semibold text-black text-title-md2 dark:text-white">
            Plans
          </h2>
          {/* Create Button next to the Plans heading */}
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={() => navigate("/plans/create")}
          >
            Create
          </button>
        </div>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/">Dashboard /</Link>
            </li>
            <li className="text-primary">Plans</li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-col gap-10">
        <PlansTable />
      </div>
    </>
  );
};

export default Plans;
