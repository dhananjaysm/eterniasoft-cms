// DataContext.js
import { useQuery } from "@apollo/client";
import React, { useContext, createContext } from "react";
import { GET_ALL_REQUESTS_QUERY, GET_ALL_USERS_QUERY, GET_REQUESTS_COUNT_QUERY, GET_SUBS_COUNT_QUERY, GET_USERS_COUNT_QUERY } from "../graphql/query";
const POLL_INTERVAL_MS = 6000; // Poll every 60 seconds

interface IDataContext {
  requestsCount: number;
  requestsLoading: boolean;
  requestsError: any;

  usersCount: number;
  usersLoading: boolean;
  usersError: any;

  subsCount:number;
  subsLoading:boolean;
  subsError:any
}

const DataContext = createContext<IDataContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {
   // Fetch requests count
   const {
    data: requestsData,
    loading: requestsLoading,
    error: requestsError,
    // startPolling: startRequestsPolling,
    // stopPolling: stopRequestsPolling,
  } = useQuery(GET_REQUESTS_COUNT_QUERY);

  // Fetch users count
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
    // startPolling: startUsersPolling,
    // stopPolling: stopUsersPolling,
  } = useQuery(GET_USERS_COUNT_QUERY);

  const {
    data: subsData,
    loading: subsLoading,
    error: subsError,
    // startPolling: startUsersPolling,
    // stopPolling: stopUsersPolling,
  } = useQuery(GET_SUBS_COUNT_QUERY);

  const contextValue: IDataContext = {
    requestsCount: requestsData?.requestsCount,
    requestsLoading,
    requestsError,
    usersCount: usersData?.usersCount,
    usersLoading,
    usersError,
    subsCount:subsData?.subsCount,
    subsLoading,
    subsError
  };

  // Start polling when the component mounts and stop when it unmounts
  // React.useEffect(() => {
  //   startRequestsPolling(POLL_INTERVAL_MS);
  //   startUsersPolling(POLL_INTERVAL_MS);
  //   return () => {
  //     stopRequestsPolling();
  //     stopUsersPolling();
  //   };
  // }, [startRequestsPolling, startUsersPolling, stopRequestsPolling, stopUsersPolling]);


  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = (): IDataContext => {
  const context = useContext<IDataContext | null>(DataContext);
  if (context === null) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
