import { BsInfoCircle } from "react-icons/bs";

const ErrorTooltip = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="relative flex items-center group">
      <BsInfoCircle className="text-red-500 dark:text-red-300" />

      <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-white py-1.5 px-4.5 text-sm font-medium opacity-0 drop-shadow-4 group-hover:opacity-100 dark:bg-meta-4">
        <span className="absolute w-2 h-2 rotate-45 -translate-x-1/2 bg-white rounded-l-sm -bottom-1 left-1/2 -z-10 dark:bg-meta-4"></span>
        {errorMessage}
      </div>
    </div>
  );
};
export default ErrorTooltip;
