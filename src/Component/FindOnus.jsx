import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindOnus = () => {
  return (
    <div className="p-3">
      <h1 className="font-bold mb-5 py-3 text-2xl">Find on us</h1>
      <div className="join join-vertical w-full">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 join-item flex items-center gap-2"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 join-item flex items-center gap-2"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 join-item flex items-center gap-2"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  );
};

export default FindOnus;
