import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";

const AllProduct = () => {
  const data = useLoaderData() || [];

  return (
    <div>
      <div className="text-3xl font-bold mb-5">All Toys ({data.length})</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5">
        {data.map((cards) => (
          <Card key={cards.toyId} cards={cards} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
