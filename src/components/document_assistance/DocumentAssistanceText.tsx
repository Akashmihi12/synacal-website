import React from "react";
import DataBar from "./DataBar";

type DocumentAssistanceTextProps = {
  title?: string;
  content?: string;
  dataContent: string[];
};

function DocumentAssistanceText({
  title,
  content,
  dataContent,
}: DocumentAssistanceTextProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[144px] w-full ">
        <span className="text-[40px] font-semibold leading-[47.73px] text-black">
          {title}
        </span>
      </div>
      <div className="h-[96px] w-full  mt-2">
        <span className="text-[18px] font-normal leading-[32px] text-[#31323E]">
          {content}
        </span>
      </div>
      <div className="h-[168px] w-full  mt-3 flex flex-col gap-3">
        <DataBar content={dataContent[0]} />
        <DataBar content={dataContent[1]} />
        <DataBar content={dataContent[2]} />
      </div>
      <div className="h-[42px] w-full  mt-[68px]">
        <div className=" w-full h-[42px] flex items-end gap-[4px]">
          <div className=" h-[42px] w-[27.85%]">
            <div className="h-[42px] rounded-[57px]  gap-[4px] border-[1px] border-black text-center flex items-center justify-center text-black font-semibold text-[14px]">
              Explore
            </div>
          </div>
          <div className=" h-[42px] w-[27.85%] flex items-center justify-center">
            <span className="text-[14px] font-semibold leading-[16.71px] text-black">
              Get a demo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentAssistanceText;
