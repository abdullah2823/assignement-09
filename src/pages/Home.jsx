import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const data = useLoaderData() || [];
  const popularToys = data.slice(0, 8);

  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        Popular Toys ({data.length})
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5">
        {popularToys.map((cards) => (
          <Card key={cards.toyId} cards={cards} />
        ))}
      </div>

      <div className="flex justify-end mt-5">
        <Link to="/allproduct">
          <button className="btn btn-outline bg-secondary text-white py-3 px-5 flex items-center gap-2">
            See all products <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
