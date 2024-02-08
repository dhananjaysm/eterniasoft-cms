import { useQuery } from "@apollo/client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { GET_USER_PROFILE_QUERY } from "../graphql/query";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  authToken: string;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
  userId: string;
  setUserId: (userId: string) => void;
  userData?: any; // Optional type for user data
  userLoading: boolean;
  userError?: Error; // Optional type for error
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); //FIXME: Make it false
  const [authToken, setAuthToken] = useState("");
  const [userId, setUserId] = useState("");
  const setAndStoreAuthToken = (token: string) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token); // Store token in local storage
    setIsAuthenticated(true);
  };

  const setAndStoreUserId = (userId: string) => {
    setUserId(userId);
    localStorage.setItem("userId", userId);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken && storedUserId) {
      setAuthToken(storedToken);
      setUserId(storedUserId);

      setIsAuthenticated(true);
    }
  }, []);

  const clearAuthToken = () => {
    setAuthToken("");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };
  // Use `skip` option to conditionally execute the query
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER_PROFILE_QUERY, {
    variables: { userId },
    skip: !isAuthenticated || !userId, // Skip the query if not authenticated or userId is not available
  });
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authToken,
        setAuthToken: setAndStoreAuthToken,
        clearAuthToken,
        userId,
        setUserId: setAndStoreUserId,
        userData,
        userLoading,
        userError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
