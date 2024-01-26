import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import UsersTable from "../../components/users/UsersTable";

const Users = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />
      <div className="flex flex-col gap-10">
        <UsersTable />
      </div>
    </>
  );
};

export default Users;
