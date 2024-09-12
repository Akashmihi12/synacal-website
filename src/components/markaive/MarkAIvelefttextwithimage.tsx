import React from "react";
import Image from "next/image";
import './buttonstyle.css'; // Import the CSS file for button hover effect

const MarkAIvelefttextwithimage = () => {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-black mb-4">
            A tool that works for you
          </h2>
          <p className="text-gray-600 mb-4">
            Digital transformation is more than just a buzzword – it’s a
            critical process that can help your business thrive in today’s
            ever-changing landscape.
          </p>
          <p className="text-gray-600 mb-6">
            At its core, digital transformation is about leveraging data,
            automation, and innovation to create a more agile, efficient,
            and customer-centric organization.
          </p>

          {/* Tag buttons */}
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Insightful
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Strategic
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Actionable
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Clarity
            </button>
            <button className="px-4 py-2 bg-white border section-button text-sm text-black font-semibold">
              Discernment
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
            src="/markaive/MarkAIve_lefttext_with_image.png"
            alt="MarkAIve Left Side Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MarkAIvelefttextwithimage;
