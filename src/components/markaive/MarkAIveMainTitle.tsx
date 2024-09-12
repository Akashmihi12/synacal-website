import React from "react";
import "./buttonstyle.css"; // Import the custom CSS for button hover effect

const MarkAIveMainTitle = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-[70%] h-[144px] flex flex-col">
        {/* Title with Gradient Styling */}
        <div className="flex flex-col items-center h-[144px] font-semibold text-[40px] leading-[47.73px] text-center">
          <div>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #272727, #191919)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Elevate Your Business with
            </span>
          </div>
          <div>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Intelligent Solutions
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-600 mt-4 text-lg text-center">
          At Synacal, we are committed to delivering exceptional products that drive value for our clients.
          Our team of experts combines technical prowess with deep industry knowledge to develop solutions 
          that address your unique challenges and propel your business forward.
        </div>

        {/* Explore Button with Custom CSS for Hover Effect */}
        <div className="mt-8 text-center">
          <button className="explore-button px-6 py-3 rounded-full bg-white font-semibold text-md">
            Explore Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkAIveMainTitle;
