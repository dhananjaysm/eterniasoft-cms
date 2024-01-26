import React, { createContext, useState, useContext, useEffect } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  authToken: string;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
  userId: string;
  setUserId: (userId: string) => void;
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
