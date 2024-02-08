import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import {
  GET_COMPLETE_USER_PROFILE,
} from "../../graphql/query";

const ViewEditUser = () => {
  let { userId } = useParams();
  const { data, loading, error } = useQuery(GET_COMPLETE_USER_PROFILE, {
    variables: {
      userId: userId,
    },
  });
  if (loading) return <>loading...</>;
  const userData = data?.findUserById;

  return (
    <div className="min-h-screen pb-10 bg-gray-50">
      <div className="mx-auto">
        <main className="">
          <div className="px-4 py-6 bg-white">
            <div className="">
              <h2 className="text-2xl font-semibold text-gray-900">
                User:{userData?.firstName}
              </h2>
              {/* <div className="flex items-center justify-between">
                <div className="my-6 mr-4 flex w-full items-center justify-between rounded-lg border px-3 py-3 sm:w-[350px] sm:flex-initial">
                  <input
                    className="w-full text-sm outline-none"
                    type="text"
                    placeholder="Search Mentors"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-5 text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                    <span className="hidden sm:block">Category</span>
                  </div>
                  <div className="hidden md:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                      />
                    </svg>
                    <span>Sort By : Popular</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="px-4">
            <div className="flex items-center justify-between my-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Plan
              </h2>
              {/* <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-900"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div> */}
            </div>
            <div className="p-6 mb-6 bg-white rounded-lg sm:w-1/2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="object-cover w-10 h-10 mr-2 rounded-full"
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      Kotler Philips
                    </h3>
                    <span className="block text-xs font-normal text-gray-500">
                      Web Developer
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-indigo-500">
                  <span className="mr-0.5">+</span>Follow
                </p>
              </div>
              <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 text-base text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                  </svg>
                  <span className="mr-1">40</span> Task
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-5 mr-1 text-yellow-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  4,7 (750 Reviews)
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="my-5">
              <h2 className="text-lg font-semibold text-gray-900">All Plans</h2>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
              <div className="p-6 mb-6 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Alex Stanton
                      </h3>
                      <span className="block text-xs font-normal text-gray-500">
                        UI / UX Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    <span className="mr-0.5">+</span>Follow
                  </p>
                </div>
                <p className="my-6 text-sm font-normal text-gray-500">
                  Hi, I'm Jessica Jane. I am a doctoral student at Harvard
                  University majoring in Web . . .
                </p>
                <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="mr-1">40</span> Task
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-5 mr-1 text-yellow-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    4,7 (750 Reviews)
                  </div>
                </div>
              </div>
              <div className="p-6 mb-6 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Antoine
                      </h3>
                      <span className="block text-xs font-normal text-gray-500">
                        Android Developer
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    <span className="mr-0.5">+</span>Follow
                  </p>
                </div>
                <p className="my-6 text-sm font-normal text-gray-500">
                  Hi, I'm Alex Stanton. I am a doctoral student at Oxford
                  University majoring in UI / UX . . .
                </p>
                <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="mr-1">40</span> Task
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-5 mr-1 text-yellow-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    4,7 (750 Reviews)
                  </div>
                </div>
              </div>
              <div className="p-6 mb-6 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Richard Kyle
                      </h3>
                      <span className="block text-xs font-normal text-gray-500">
                        2D Design
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    <span className="mr-0.5">+</span>Follow
                  </p>
                </div>
                <p className="my-6 text-sm font-normal text-gray-500">
                  Hi, I'm Antoine Griezmann. I'm an Android Developer at Google
                  company . . .
                </p>
                <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="mr-1">40</span> Task
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-5 mr-1 text-yellow-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    4,7 (750 Reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="my-5">
              <h2 className="text-lg font-semibold text-gray-900">
                All Products
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
              <div className="p-6 mb-6 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Alex Stanton
                      </h3>
                      <span className="block text-xs font-normal text-gray-500">
                        UI / UX Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    <span className="mr-0.5">+</span>Follow
                  </p>
                </div>
                <p className="my-6 text-sm font-normal text-gray-500">
                  Hi, I'm Jessica Jane. I am a doctoral student at Harvard
                  University majoring in Web . . .
                </p>
                <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="mr-1">40</span> Task
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-5 mr-1 text-yellow-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    4,7 (750 Reviews)
                  </div>
                </div>
              </div>
              <div className="p-6 mb-6 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Antoine
                      </h3>
                      <span className="block text-xs font-normal text-gray-500">
                        Android Developer
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    <span className="mr-0.5">+</span>Follow
                  </p>
                </div>
                <p className="my-6 text-sm font-normal text-gray-500">
                  Hi, I'm Alex Stanton. I am a doctoral student at Oxford
                  University majoring in UI / UX . . .
                </p>
                <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="mr-1">40</span> Task
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-5 mr-1 text-yellow-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    4,7 (750 Reviews)
                  </div>
                </div>
              </div>
              <div className="p-6 mb-6 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="object-cover w-10 h-10 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Richard Kyle
                      </h3>
                      <span className="block text-xs font-normal text-gray-500">
                        2D Design
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    <span className="mr-0.5">+</span>Follow
                  </p>
                </div>
                <p className="my-6 text-sm font-normal text-gray-500">
                  Hi, I'm Antoine Griezmann. I'm an Android Developer at Google
                  company . . .
                </p>
                <div className="flex items-center justify-between mt-6 text-sm font-semibold text-gray-900">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span className="mr-1">40</span> Task
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-5 mr-1 text-yellow-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                    4,7 (750 Reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewEditUser;
