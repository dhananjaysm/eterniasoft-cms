import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { BsCalendar2CheckFill, BsClockFill } from "react-icons/bs";
import {
  CREATE_PLAN_MUTATION,
  UPDATE_PLAN_MUTATION,
} from "../../graphql/mutations";
import { GET_ALL_PLANS } from "../../graphql/query";
import useProductStore from "../../store/globalStore";
type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  status: string;
  billingCycle: string;
  autoRenew: boolean;
  trialPeriodDays: number;
  createdAt: string;
  updatedAt: string;
  
};

type PlansQueryData = {
  findPlans: Plan[];
};
interface PlanFormProps {
  plan?: Plan;
}
const PlanForm: React.FC<PlanFormProps> = ({ plan }) => {
  const [name, setName] = useState(plan?.name ?? "");
  const [description, setDescription] = useState(plan?.description ?? "");
  const [price, setPrice] = useState<number | undefined>(plan?.price);
  const [duration, setDuration] = useState<number | undefined>(plan?.duration);
  const [status, setStatus] = useState(plan?.status ?? "ACTIVE");
  const [billingCycle, setBillingCycle] = useState(plan?.billingCycle ?? "");
  const [autoRenew, setAutoRenew] = useState(plan?.autoRenew ?? true);
  const [trialPeriodDays, setTrialPeriodDays] = useState<number | undefined>(
    plan?.trialPeriodDays
  );
  const { selectProductIds } = useProductStore();
  useEffect(() => {
    // If the plan prop has productIds, select those products in the store
    if (plan?.productIds) {
      selectProductIds(plan.productIds);
    } else {
      // If there is no plan or the plan doesn't include productIds,
      // you might want to clear the selection or handle it differently
      // For example, to clear the selection, you could call a store action like:
      // clearSelectedProductIds();
    }
  }, [plan, selectProductIds]);
  // Using the useMutation hook to initiate the create plan mutation
  const [createPlan, { loading, error }] = useMutation(CREATE_PLAN_MUTATION, {
    update(cache, { data: { createPlan } }) {
      // Fetch the plans from the cache
      const existingPlans = cache.readQuery<PlansQueryData>({
        query: GET_ALL_PLANS,
      });

      // Add the new plan to the cache
      if (existingPlans && createPlan) {
        cache.writeQuery({
          query: GET_ALL_PLANS,
          data: {
            findPlans: [...existingPlans.findPlans, createPlan],
          },
        });
      }
    },
  });

  const [updatePlan, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_PLAN_MUTATION, {
      update(cache, { data: { updatePlan } }) {
        // Fetch the plans from the cache
        const existingPlans = cache.readQuery<PlansQueryData>({
          query: GET_ALL_PLANS,
        });

        // Add the new plan to the cache
        if (existingPlans && updatePlan) {
          cache.writeQuery({
            query: GET_ALL_PLANS,
            data: {
              findPlans: [...existingPlans.findPlans, updatePlan],
            },
          });
        }
      },
    });

  const handleCreatePlan = async () => {
    const planData = {
      autoRenew,
      billingCycle,
      description,
      duration: trialPeriodDays, // Assuming you want to use trialPeriodDays as duration
      name,
      price: price,
      status,
      trialPeriodDays: trialPeriodDays,
      productIds: selectedProductIds,
    };
    if (plan) {
      try {
        const response = await updatePlan({
          variables: { id: plan.id, planData },
          // Additional options like refetchQueries or optimisticResponse could be included here
        });
        // Process successful creation, like showing a message or redirecting
        console.log("Updated Plan", response.data);
      } catch (e) {
        // Process error, like showing an error message
      }
    } else {
      try {
        const response = await createPlan({ variables: { planData } });
        // Process successful creation, like showing a message or redirecting
        console.log("Created Plan", response.data);
      } catch (e) {
        // Process error, like showing an error message
      }
    }
  };

  const isLoading = loading || updateLoading;
  // if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  return (
    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">New Plan</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreatePlan();
        }}
      >
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Plan Name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Price
            </label>
            <input
              type="number"
              value={price !== undefined ? price : ""}
              onChange={(e) =>
                setPrice(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="Enter Plan Price"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="block mb-3 text-black dark:text-white">
              Billing Cycle
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <span className="absolute z-30 -translate-y-1/2 top-1/2 left-4">
                <BsCalendar2CheckFill />
              </span>
              <select
                onChange={(e) => setBillingCycle(e.currentTarget.value)}
                className="relative z-20 w-full px-12 py-3 transition bg-transparent border rounded outline-none appearance-none border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
              >
                <option value="monthly">Monthy</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Trial Period Days
            </label>
            <input
              type="number"
              value={trialPeriodDays !== undefined ? trialPeriodDays : ""}
              onChange={(e) =>
                setTrialPeriodDays(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              placeholder="Trial Period"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <div>
              <label
                htmlFor="autoRenewCheckbox"
                className="flex items-center cursor-pointer select-none"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="autoRenewCheckbox"
                    className="sr-only"
                    onChange={() => {
                      setAutoRenew(!autoRenew);
                    }}
                  />
                  <div
                    className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                      autoRenew && "border-primary bg-gray dark:bg-transparent"
                    }`}
                  >
                    <span
                      className={`opacity-0 ${autoRenew && "!opacity-100"}`}
                    >
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                Auto Renewal
              </label>
            </div>
          </div>

          <div className="mb-4.5">
            <label className="block mb-3 text-black dark:text-white">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              placeholder="Plan Description"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>

          <button
            disabled={isLoading}
            className="flex items-center justify-center w-full gap-2 p-3 font-medium rounded bg-primary text-gray"
          >
            <span> {plan ? "Update Plan" : "Create Plan"}</span>
            <span>
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : null}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanForm;
