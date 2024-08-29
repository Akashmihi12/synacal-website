import React from "react";
import ResearchDataBlock from "./ResearchDataBlock";

function LatestResearch() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[78%] h-[1076px]  flex flex-col gap-y-[40px] ">
        <div className="w-full h-[48px] flex">
          <div className="h-full w-[89%] ">
            <span className="text-[40px] font-[500px] leading-[48px] text-[#0A0A0A]">
              Latest Research
            </span>
          </div>
          <div className="h-full w-[11%] ">
            <div className="w-full h-full border-[1px] border-black rounded-[57px] flex items-center justify-center">
              <span className="text-[14px] font-[600px] leading-[16.71px] text-black">
                See All
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[988px]  grid grid-rows-[57%,43%] gap-[16px]">
          <div className="w-full h-full  grid grid-cols-2 gap-3">
            <ResearchDataBlock
              backgroundText="Innovative Technologies and Their Impact on Operational Efficiency"
              imageUrl="/research/research1.svg"
              date="Published 20 November, 2024"
              content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
            />
            <ResearchDataBlock
              backgroundText="Innovative Technologies and Their Impact on Operational Efficiency"
              date="Published 20 November, 2024"
              imageUrl="/research/research1.svg"
              content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
            />
          </div>
          <div className="w-full h-full  grid grid-cols-3 gap-3">
            <ResearchDataBlock
              date="Published 20 November, 2024"
              imageUrl="/research/subresearch1.svg"
              content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
            />
            <ResearchDataBlock
              date="Published 20 November, 2024"
              imageUrl="/research/subresearch2.svg"
              content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
            />
            <ResearchDataBlock
              date="Published 20 November, 2024"
              imageUrl="/research/subresearch3.svg"
              content="Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestResearch;
