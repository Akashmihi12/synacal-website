"use client";

import React from "react";
import './buttonstyle.css'; // Reuse the button styles from MarkAIve

const ContactForm = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-[600px] h-[700px]">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
          <textarea
            placeholder="Leave us a message"
            className="p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-black text-black"
          ></textarea>
        </div>

        <div className="mt-4 flex justify-start">
          <button
            type="submit"
            className="explore-button px-6 py-3 font-semibold rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
