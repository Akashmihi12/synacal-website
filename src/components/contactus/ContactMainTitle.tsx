import React from "react";

const ContactMainTitle = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] h-[144px] flex flex-col">
        <div className="flex flex-col items-center h-[144px] bg-background-color font-semibold text-[64px] leading-[72px]">
          <div>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #272727, #191919)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get in
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              touch
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #272727, #191919)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              with us!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMainTitle;
