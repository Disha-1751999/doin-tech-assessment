import Image from "next/image";
import RevenueCard from "./RevenueCard";
import NeonDecoration from "./NeonDecoration";
import StudentsCard from "./StudentsCard";
import BannerImage from "@/public/images/banner_2.png";

export default function SecondGrowthVisual() {
  return (
    <div className="relative min-h-95">
      <RevenueCard
        className="left-0 top-5"
        title="Total Revenue"
        value="$120.29"
        date="July-28"
      />

      <RevenueCard
        className="left-0 top-26.25"
        title="Year to Date"
        value="$1,200.38"
        date="2023"
      />

      

      <NeonDecoration />

      <StudentsCard />
    </div>
  );
}