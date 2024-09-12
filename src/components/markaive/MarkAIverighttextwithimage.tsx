import React from "react";
import Image from "next/image";
import './buttonstyle.css'; // Import the CSS file for button hover effect

const MarkAIverighttextwithimage = () => {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
            src="/markaive/MarkAIve_righttext_with_image.png"
            alt="MarkAIve Right Side Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-black mb-4">
            A tool that scales with your business
          </h2>
          <p className="text-gray-600 mb-4">
            MarkAIve is designed to grow alongside your business needs, offering
            scalable solutions that adapt to your operational changes.
          </p>
          <p className="text-gray-600 mb-6">
            At its core, MarkAIve empowers businesses to optimize workflows,
            improve decision-making, and scale rapidly in response to market
            demands.
          </p>

          {/* Tag buttons */}
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Flexible
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Scalable
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Powerful
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Customizable
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Agile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkAIverighttextwithimage;
