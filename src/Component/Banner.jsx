import React from 'react';
import banner from "../assets/Toys-store-png.png";


const Banner = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10">

      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Toys Shop <span className="text-red-600">for Kids</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
                    Welcome to our magical toy shop where fun meets learning! Explore a wide range of safe, high-quality, and engaging toys designed to spark imagination and creativity in children of all ages. Whether you're looking for educational puzzles, soft plushies, action figures, or creative DIY kits — we have something special for every curious mind. Bring joy and adventure into your child's life with toys they'll love and cherish.
        </p>
        <button className='btn bg-secondary py-4 px-5 text-white font-medium text-2xl mt-5'>
            Shope Now
        </button>
      </div>

  
      <div className="md:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="Toys Banner"
          className="w-full max-w-md md:max-w-full rounded-2xl object-cover"
        />
      </div>
    </div>
    );
};

export default Banner;