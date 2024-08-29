import React from "react";
import QandASet from "./QandASet";

function QandABlock() {
  return (
    <div className="w-full h-[440px]  flex justify-center">
      <div className="w-[60%] h-full  grid grid-cols-2">
        <div className="w-full h-full ">
          <div className="h-[112px] w-full ">
            <span className="text-[48px] font-medium leading-[56px] text-[#0A0A0A]">
              Frequently Asked Questions
            </span>
          </div>
        </div>
        <div className="w-full h-full ">
          <QandASet />
        </div>
      </div>
    </div>
  );
}

export default QandABlock;
