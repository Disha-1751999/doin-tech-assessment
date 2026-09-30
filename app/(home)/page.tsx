import { CourseCategories } from "@/ui/HomeComponents/CourseCategories";
import CoursesSection from "@/ui/HomeComponents/CoursesSection";
import { CreatorCTA } from "@/ui/HomeComponents/CreatorCTA";
import { FeedbackSection } from "@/ui/HomeComponents/FeedbackSection";
import { GrowthShowcase } from "@/ui/HomeComponents/GrowthShowcase";
import { Hero } from "@/ui/HomeComponents/Hero";
import { Testimonial } from "@/ui/HomeComponents/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <CoursesSection />
      <CourseCategories />
      <GrowthShowcase />
      <CreatorCTA />
      <FeedbackSection />
    </>
  );
}
