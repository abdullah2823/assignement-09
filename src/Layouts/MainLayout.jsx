import React from "react";
import Navbar from "../Component/Navbar";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Home />
      </header>
      <main>
        <h1 className="text-3xl font-semibold">Main Layout Content</h1>
      </main>
    </div>
  );
};

export default MainLayout;
