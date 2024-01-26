import { User } from "./UsersTable";

const ViewEditUserModal = ({
  item,
  onClose,
}: {
  item: User;
  onClose: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center block w-full h-full min-h-screen px-4 py-5 z-999999 bg-black/90">
      <div className="max-w-142.5 dark:bg-boxdark w-full rounded-lg bg-white px-8 py-12  ">
        <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Sign Up Form
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-5.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Re-type Password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="flex flex-wrap -mx-3 gap-y-4">
                <div className="w-full px-3 2xsm:w-1/2">
                  <button className="block w-full p-3 font-medium text-center text-white transition border rounded border-primary bg-primary hover:bg-opacity-90">
                    Sign Up
                  </button>
                </div>
                <div className="w-full px-3 2xsm:w-1/2">
                  <button
                    onClick={onClose}
                    className="block w-full p-3 font-medium text-center text-black transition border rounded bg-gray hover:border-meta-1 hover:bg-meta-1 dark:bg-meta-4 dark:hover:border-meta-1 dark:hover:bg-meta-1 border-stroke hover:text-white dark:border-strokedark dark:text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewEditUserModal;
