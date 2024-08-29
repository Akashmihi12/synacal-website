import React from "react";
import Image from "next/image";

type TopServicesBlockProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function TopServicesBlock({
  imageUrl,
  title,
  description,
}: TopServicesBlockProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className=" w-[19.2%] h-[19.2%]">
        <Image src={imageUrl} alt="SoundWave" width={192} height={192} />
      </div>
      <div className=" w-full h-[9.63%] mt-[13.55%] flex items-center">
        <span className="text-[24px] leading-[32px] font-medium text-black">
          {title}
        </span>
      </div>
      <div className=" h-[28.9%] mt-[2.52%] w-full">
        <span className="text-[20px] leading-[32px] font-normal text-black">
          {description}
        </span>
      </div>
      <div className=" h-[12.65%] mt-[13.55%] w-full">
        <div className="h-[42px] rounded-[57px] w-[128px] gap-[4px] border-[1px] border-black text-center flex items-center justify-center text-black font-semibold text-[14px]">
          Read More
        </div>
      </div>
    </div>
  );
}

export default TopServicesBlock;
