import React from "react";
import { clans } from "../constants";
import Imgclan from "../assets/clans.jpg";
import ReactReadMoreReadLess from "react-read-more-read-less";

const Clan = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen py-12 px-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white tracking-tight">
          Our <span className="text-indigo-500">Clans</span>
        </h2>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <img
            src={Imgclan}
            alt="Clans"
            className="rounded-3xl shadow-2xl border border-gray-700 w-full lg:w-1/2 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Clans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {clans.map((clan, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-200 text-base leading-relaxed font-serif">
                  <ReactReadMoreReadLess
                    charLimit={150}
                    readMoreText={"Read More"}
                    readLessText={"Show Less"}
                  >
                    {clan.text}
                  </ReactReadMoreReadLess>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-indigo-400 font-semibold text-lg">
                  {clan.user}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clan;
