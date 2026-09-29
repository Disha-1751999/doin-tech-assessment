import CoursePreviewCard from "./CoursePreviewCard";
import ProgressCard from "./ProgressCard";
import NeonDecoration from "./NeonDecoration";
import Image from "next/image";
import BannerImage from "@/public/images/banner_1.png";

export default function FirstGrowthVisual() {
  return (
    <div className="relative min-h-90">
      {/* Course card */}
      <CoursePreviewCard image="/images/figma-course.png" />

      {/* Person */}
      <Image
        src={BannerImage}
        alt="Student"
        width={440}
        height={500}
        className="absolute bottom-0 left-[20%] z-10 h-82.5 w-auto object-contain"
      />

      {/* Progress */}
      <ProgressCard />

      {/* Decoration */}
      <NeonDecoration />
    </div>
  );
}