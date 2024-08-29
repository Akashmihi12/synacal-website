import React from "react";
import DescriptionCard from "./DescriptionCard";
import Image from "next/image";

function ProjectGrid() {
  return (
    <div className=" w-full h-full flex justify-center">
      <div className="w-[73.55%] h-[864px] grid grid-rows-2 gap-y-[14px]">
        <div className="grid grid-cols-[40%,60%] h-full gap-x-2">
          <div className=" rounded-[26px]">
            <DescriptionCard text1="100+" text2="Projects" text3="Deceived" />
          </div>
          <div className="w-full h-[424px] rounded-[26px]">
            <div className="w-full h-full rounded-[26px] overflow-hidden relative ">
              <Image
                src="/videothumbnail1.svg"
                alt="video tag Tag"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[60%,40%] h-full gap-x-2">
          <div className="w-full h-[424px] rounded-[26px]">
            <div className="w-full h-[424px] rounded-[26px] overflow-hidden relative ">
              <Image
                src="/videothumbnail2.svg"
                alt="video tag Tag"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className=" rounded-[26px]">
            <DescriptionCard text1="20+" text2="Satisfied" text3="Clients" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
