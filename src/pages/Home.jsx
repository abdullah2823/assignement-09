import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const data = useLoaderData();
  // cosnt [toyName, availableQuantity, price, rating, pictureURL] =data
  const popularToys = data.slice(0, 8)


  return (
    <div>
      <div className="text-3xl font-bold">Popular Toys({data.length})</div>
      <div className="grid grid-cols-3 py-5 gap-3">
        {popularToys.map(cards => (
          <Card key={cards.toyId} cards={cards} />
        ))}

      </div>
      <Link>
      <button className="btn btn-outline bg-secondary text-white py-6 flex justify-end-safe">See all product <FaArrowRightLong />
</button>
      </Link>
    </div>
  );
};

export default Home;
