import React from "react";

const Card = ({ cards }) => {
  const { toyName, availableQuantity, price, rating, image } = cards;
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl border-gray-400 mx-auto">
        <figure className="px-5 pt-5">
          <img
            src={`${image}?auto=format&fit=crop&w=600&q=80`}
            alt={toyName}
            className="rounded-xl w-full h-40 object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{toyName}</h2>
          <p className="text-sm text-gray-600">
            Available:{" "}
            <span className="font-semibold">{availableQuantity}</span>
          </p>
          <p className="text-sm text-gray-600">
            Price: <span className="font-bold text-green-600">${price}</span>
          </p>

          <div className="flex items-center gap-1 text-yellow-500">
            ⭐⭐⭐⭐☆{" "}
            <span className="text-gray-600 ml-1 text-sm">({rating})</span>
          </div>

          <div className="card-actions mt-2">
            <button className="btn btn-primary w-full">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
