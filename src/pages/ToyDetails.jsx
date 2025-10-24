import React from "react";
import Navbar from "../Component/Navbar";
import Rightside from "../Component/Rightside";

const ToyDetails = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
        <section className="order-2 md:order-1 md:col-span-9 rounded-lg p-4 shadow-lg bg-white">
         <h1>News Details</h1>
        </section>

        <section className="order-1 md:order-2 md:col-span-3 rounded-lg p-4 shadow-lg bg-white md:sticky md:top-20 h-fit">
          <Rightside />
        </section>
      </main>
    </div>
  );
};

export default ToyDetails;
