import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import PlanForm from "../../components/plans/PlanForm";
import ProductListing from "../../components/plans/ProductListing";

const CreatePlan = () => {
  return (
    <>
      <Breadcrumb pageName="Create Plan" />
      <div className="grid grid-cols-1 gap-1/2 sm:grid-cols-2 ">
        <div className="flex flex-col gap-9">
          <PlanForm />
        </div>
        <div className="flex flex-col gap-9">
          <ProductListing />
        </div>
      </div>
    </>
  );
};

export default CreatePlan;
