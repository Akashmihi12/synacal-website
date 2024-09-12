import React from "react";
import Image from "next/image"; // Import Image from next for optimization

const Hero = () => {
  return (
    <div className="relative w-full min-h-[80vh] mt-36"> {/* Add margin-top here */}
      {/* Background Image spanning the full screen width */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/markaive/bg_markaive_hero.png')`, // Path to the background image
        }}
      ></div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex justify-center py-8">
        {/* Container for the main hero image */}
        <div className="w-[85%] max-w-7xl">
          <Image
            src="/markaive/markaive_hero.png" // Path to the hero image
            alt="MarkAIve Hero Image"
            width={1600} // Adjusted width
            height={900} // Adjusted height
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
