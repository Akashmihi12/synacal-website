import React from "react";
import SponsorList from "./SponserList";

function SponsorGrid() {
  return (
    <div className="h-[276px] w-full">
      <div
        className="w-full h-full bg-[#080917] flex items-center"
        // style={{
        //   backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
        // }}
      >
        <SponsorList />
      </div>
    </div>
  );
}

export default SponsorGrid;
