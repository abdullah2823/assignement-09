import React from "react";
import Navbar from "../Component/Navbar";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Specialoffer from "../pages/Specialoffer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Home />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-3 border-2">left </section>
        <section className="col-span-6 border-2"><Outlet /></section>
        <section className="col-span-3 border-2">Right</section>
      </main>
      <section>
        <Specialoffer />
      </section>
      <footer className="mt-7">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
