import React from "react";
import { Outlet } from "react-router-dom";
import HostLayoutHeader from "./HostLayoutHeader";

const HostLayout = () => {
  return (
    <>
      <HostLayoutHeader />
      <Outlet />
    </>
  );
};

export default HostLayout;
