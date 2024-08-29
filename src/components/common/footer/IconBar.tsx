import React from "react";
import Image from "next/image";

type IconBarProps = {
  icon: string;
  text: string;
};

function IconBar({ icon, text }: IconBarProps) {
  return (
    <div className="w-full h-full grid grid-cols-[20%,80%] items-center">
      <div className="w-[70%] h-[70%] relative">
        <Image
          src={icon}
          alt="company logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-[16px] leading-[24px] font-medium">{text}</div>
    </div>
  );
}

export default IconBar;
