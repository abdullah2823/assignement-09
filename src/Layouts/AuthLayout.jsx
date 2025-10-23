import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
