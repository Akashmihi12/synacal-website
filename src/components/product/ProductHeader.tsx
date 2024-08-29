import React from "react";
import Image from "next/image";

function ProductHeader() {
  return (
    <div className="h-[450px] w-full bg-black flex  items-center ">
      <div className="h-[252px] w-[32.55%]  ml-[23.25%] mr-[11%] flex flex-col">
        <div className=" w-full h-[114px]">
          <span className="text-[48px] font-semibold leading-[57.28px] text-[#FFFFFF]">
            Smart Products Made for Success
          </span>
        </div>
        <div className=" w-full h-[64px] mt-[8px]">
          <span className="text-[20px] font-normal leading-[32px] text-[#EDEDED]">
            Explore our innovative products that drive your success and
            efficiency.
          </span>
        </div>
        <div className=" w-full h-[66px] flex items-end gap-[4px]">
          <div className=" h-[42px] w-[27.85%]">
            <div className="h-[42px] rounded-[57px]  gap-[4px] border-[1px] border-white text-center flex items-center justify-center text-white font-semibold text-[14px]">
              See All Products
            </div>
          </div>
          <div className=" h-[42px] w-[27.85%] flex items-center justify-center">
            <span className="text-[14px] font-semibold leading-[16.71px] text-[#FFFFFF]">
              Get a demo
            </span>
          </div>
        </div>
      </div>
      <div className="w-[28%] h-[91.53%]  ">
        <Image src="/openart.png" alt="Cubic" width={411.84} height={411.84} />
      </div>
    </div>
  );
}

export default ProductHeader;
