import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableOne from "../../components/TableOne";
import TableThree from "../../components/TableThree";
import TableTwo from "../../components/TableTwo";
import PlansTable from "../../components/plans/PlansTable";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Plans = () => {
  return (
    <>
      <Breadcrumb pageName="Plans" />

      <div className="flex flex-col gap-10">
        <PlansTable />
      </div>
    </>
  );
};

export default Plans;
