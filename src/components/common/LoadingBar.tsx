import React from 'react';
import { useData } from '../../context/DataContext';

const LoadingBar: React.FC = () => {
  const { requestsLoading, usersLoading } = useData();
  const isLoading = requestsLoading || usersLoading;

  return (
    <div className="sticky z-50 w-full top-16"> 
    {isLoading && (
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div 
          className="bg-blue-600 h-1.5 rounded-full shimmer-effect-loading dark:bg-blue-500" 
          style={{ width: "100%" }} 
          // Apply the shimmer animation to the element
        ></div>
      </div>
    )}
  </div>
  );
};

export default LoadingBar;
