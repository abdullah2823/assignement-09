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
      <main className="w-11/12 mx-auto grid grid-cols-12">
        
        <section className="col-span-9 border-2"><Outlet /></section>
        <section className="col-span-3 border-2"><Rightside></Rightside></section>
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
