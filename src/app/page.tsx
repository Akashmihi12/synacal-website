import Image from "next/image";
import Header from "@/components/common/header/Header";
import HeadNotice from "@/components/HeadNotice";
import TopServices from "@/components/topServices/TopServices";
import ProductHeader from "@/components/product/ProductHeader";

export default function Home() {
  return (
    <main>
      <div className=" mt-[106px] w-full bg-background-color">
        <HeadNotice />
      </div>
      <div className="mt-[98px] w-full bg-background-color">
        <TopServices />
      </div>
      <div className="mt-[139.29px]">
        <ProductHeader />
      </div>
      <div className="h-[40px] w-full bg-background-color"></div>
    </main>
  );
}
