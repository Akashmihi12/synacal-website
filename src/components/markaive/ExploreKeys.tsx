import React from "react";

const ExploreKeys = () => {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl text-center">
        {/* Title and subtitle */}
        <h2 className="text-3xl font-semibold text-black mb-4">
          Exploring the Key Benefits for You
        </h2>
        <p className="text-gray-600 mb-8">
          Transform your business into a future-proof, agile, and efficient organization with our digital transformation services. 
          Gain a competitive edge, improve customer experience, and unlock new growth opportunities with our expertise and innovative solutions.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg h-40 sm:h-60"></div>
          <div className="bg-gray-100 rounded-lg h-40 sm:h-60"></div>
          <div className="bg-purple-100 rounded-lg h-40 sm:h-60"></div>
          <div className="bg-gray-100 rounded-lg h-40 sm:h-60"></div>
          <div className="bg-orange-100 rounded-lg h-40 sm:h-60"></div>
          <div className="bg-gray-100 rounded-lg h-40 sm:h-60"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreKeys;
