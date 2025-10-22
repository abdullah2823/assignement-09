import React from 'react';

const Card = () => {
    return (
        <div>
            <div class="card w-72 bg-base-100 shadow-xl border mx-auto">
          <figure class="px-5 pt-5">
            <img
              src="https://i.ibb.co/YTg8rWh/toy-car.jpg"
              alt="Toy Car"
              class="rounded-xl w-full h-40 object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-lg font-bold">afdkjhasdjfh</h2>
            <p class="text-sm text-gray-600">Available: <span class="font-semibold">15 pcs</span></p>
            <p class="text-sm text-gray-600">Price: <span class="font-bold text-green-600">$25</span></p>

            <div class="flex items-center gap-1 text-yellow-500">
              ⭐⭐⭐⭐☆ <span class="text-gray-600 ml-1 text-sm">(4.0)</span>
            </div>

            <div class="card-actions mt-2">
              <button class="btn btn-primary w-full">View More</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Card;