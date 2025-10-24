import React from "react";
import Navbar from "../Component/Navbar";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Specialoffer from "../pages/Specialoffer";
import Banner from "../Component/Banner";
import Rightside from "../Component/Rightside";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <section className="order-2 md:order-1 md:col-span-9 rounded-lg p-4 shadow-lg bg-white">
          <Outlet />
        </section>

        <section className="order-1 md:order-2 md:col-span-3 rounded-lg p-4 shadow-lg bg-white md:sticky md:top-20 h-fit">
          <Rightside />
        </section>
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
