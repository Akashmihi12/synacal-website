import React from "react";
import Image from "next/image";

const HelpYou = () => {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Form Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Let us know if we can help you
          </h2>
          <p className="text-gray-600 mb-8">
            Let’s Talk About Your Query, Don’t hesitate to reach out via email -{" "}
            <span className="text-blue-500">hello@synacal.com</span>
          </p>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 mb-4 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 mb-4 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Leave us a message"
            className="p-3 mb-4 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
          ></textarea>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">
              You agree to our friendly{" "}
              <span className="text-blue-500 underline">privacy policy</span>
            </p>
          </div>

          <button className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/markaive/MarkAIve_Help_You.png"            // Path to the image in the public folder
            alt="Help You"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpYou;
