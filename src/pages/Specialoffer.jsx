import React from 'react';
import Gift from "../assets/gift.png"

const Specialoffer = () => {
    return (
        <div>
            <section className="  p-10 rounded-xl text-center my-10 bg-amber-50">
                <img className='flex justify-center w-[100px] mx-auto py-3' src={Gift} alt="" />
                <h2 className="text-3xl font-bold mb-4"> Special Offer!</h2>
                <p className="text-lg mb-6">
                    Buy <span className="font-bold text-secondary">2</span> Toys & Get <span className="font-bold text-secondary">1</span> Free!
                    <br />
                    Limited Time Only 
                </p>
                <button className="btn bg-secondary text-white hover:bg-base-200">
                    Shop Now
                </button>
            </section>

        </div>
    );
};

export default Specialoffer;