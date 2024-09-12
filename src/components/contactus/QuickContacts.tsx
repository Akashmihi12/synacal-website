import React from "react";
import Image from "next/image";

const QuickContacts = () => {
  return (

    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-[600px] h-[700px]">

      <h2 className="text-2xl font-semibold text-black">Quick Contacts</h2>


      <p className="mt-4 text-black">
        At Synacal, we’re dedicated to helping businesses like yours achieve their digital transformation goals. Whether you’re looking to build a new software product, improve your IT strategy, or streamline your operations with AI and data analytics, our team of specialists is here to help.
      </p>
      <p className="mt-4 text-black">
        We understand that every business is unique, and that’s why we offer personalized consultations to discuss your specific needs and goals.
      </p>


      <div className="mt-6 space-y-4">

        <div className="flex items-center space-x-4">
          <div className="w-[40px] h-[40px]">
            <Image src="/logo/call.png" alt="Phone Icon" width={40} height={40} />
          </div>
          <p className="text-black font-medium">+94 70 457 5691</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[40px] h-[40px]">
            <Image src="/logo/email.png" alt="Email Icon" width={40} height={40} />
          </div>
          <p className="text-black font-medium">hello@synacal.ai</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[40px] h-[40px]">
            <Image src="/logo/map.png" alt="Map Icon" width={40} height={40} />
          </div>
          <p className="text-black font-medium">Address Here</p>
        </div>
      </div>
    </div>
  );
};

export default QuickContacts;
