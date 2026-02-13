import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-6">
      
      <div className="text-center bg-gray-900/70 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-gray-700 max-w-lg w-full transform hover:scale-105 transition-all duration-500">
        
        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-indigo-500 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 leading-relaxed">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/40"
        >
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
