import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import PlanForm from "../../components/plans/PlanForm";
import ProductListing from "../../components/plans/ProductListing";
import { useLocation, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_PLAN_QUERY } from "../../graphql/query";

const ViewEditPlan = () => {
  let { planId } = useParams();
  const { data, loading, error } = useQuery(GET_PLAN_QUERY, {
    variables: {
      planId: planId,
    },
    skip: !planId,
  });
  return (
    <>
      <Breadcrumb pageName="View/Edit Plan" />
      <div className="relative">
        {" "}
        {/* Relative positioning context */}
        {/* Form and listing */}
        <div className="grid grid-cols-1 gap-1/2 sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            <PlanForm plan={data?.findPlan} />
          </div>
          <div className="flex flex-col gap-9">
            <ProductListing />
          </div>
        </div>
        {/* Loading overlay */}
        {loading && (
          <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
            <div role="status">
              <div className="w-16 h-16 border-4 border-solid rounded-full animate-spin border-primary border-t-transparent"></div>

              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {/* Error handling */}
        {error && <div>Error: {error.message}</div>}
      </div>
    </>
  );
};

export default ViewEditPlan;
