import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import PlanForm from "../../components/plans/PlanForm";
import ProductListing from "../../components/plans/ProductListing";
import { useLocation, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_PLAN_QUERY } from "../../graphql/query";

const ViewEditPlan = () => {
    let { planId } = useParams();
    const {data,loading,error} = useQuery(GET_PLAN_QUERY,{
        variables:{
            planId:planId
        },
        skip:!planId
    }) 
  return (
    <>
      <Breadcrumb pageName="View/Edit Plan" />
      <div className="grid grid-cols-1 gap-1/2 sm:grid-cols-2 ">
        <div className="flex flex-col gap-9">
          <PlanForm  plan={data?.findPlan}/>
        </div>
        <div className="flex flex-col gap-9">
          <ProductListing />
        </div>
      </div>
    </>
  );
};

export default ViewEditPlan;
