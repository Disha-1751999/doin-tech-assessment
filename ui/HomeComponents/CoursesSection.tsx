

"use client";

import Image from "next/image";
import { Star, BarChart3 } from "lucide-react";

import CourseImage1 from "@/public/images/course_1.jpg";
import CourseImage2 from "@/public/images/course_2.jpg";
import CourseImage3 from "@/public/images/course_3.jpg";
import CourseImage4 from "@/public/images/course_4.jpg";
import CourseImage5 from "@/public/images/course_5.jpg";
import CourseImage6 from "@/public/images/course_6.jpg";

import AuthorImage1 from "@/public/images/author_1.png";
import AuthorImage2 from "@/public/images/author_2.png";
import AuthorImage3 from "@/public/images/author_3.png";
import AuthorImage4 from "@/public/images/author_4.png";



const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image:
      CourseImage1,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    image:
      CourseImage2,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    image:
      CourseImage3,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },{
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    image:
      CourseImage4,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "Mastering Money Management",
    author: "purepearl studio",
    image:
      CourseImage5,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image:
      CourseImage6,
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
];

const avatars = [
  AuthorImage1,
  AuthorImage2,
  AuthorImage3,
  AuthorImage4,
];

export default function CoursesSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-260 px-5 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-212.5 text-center">
          <h2 className="text-[28px] font-bold leading-[1.18] tracking-[-1px] sm:tracking-[-1.5px] md:text-[34px] text-[#080d25] lg:text-[38px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-[#9a9ca7] sm:text-[15px]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            <br className="hidden sm:block" />
            fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        {/* Categories */}
        <div className="mx-auto mt-9 flex max-w-237.5 flex-wrap justify-center gap-2 sm:gap-x-3 sm:gap-y-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-3 py-2 text-[12px] sm:px-3.75 sm:py-2.25 sm:text-[13px] font-medium transition ${
                index === 0
                  ? "bg-[#c6ff00] text-[#111827]"
                  : "bg-[#f5f5f7] text-[#4b4d57] hover:bg-[#ededf0]"
              }`}
            >
              {category}
            </button>
          ))}

          <button className="rounded-full px-0.5 py-2.25 text-[13px] font-medium text-[#004cff]">
            + More
          </button>
        </div>

        {/* Course Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  course,
}: {
  course: (typeof courses)[number];
}) {
  return (
    <article className="rounded-[20px] border border-[#dedfe4] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      {/* Image */}
      <div className="relative h-41 overflow-hidden rounded-[11px]">
        <Image
          src={course?.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Image overlay stats */}
        <div className="absolute bottom-3.75 left-2.5 right-2.5 flex items-center justify-between gap-1">
          <Stat>{course.lessons}</Stat>
          <Stat>{course.duration}</Stat>
          <Stat>{course.comments}</Stat>
        </div>
      </div>

      {/* Title + rating */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
  <h3 className="truncate text-[17px] font-semibold leading-5 tracking-[-0.4px] text-[#111318]">
    {course.title}
  </h3>

  <p className="mt-1 text-[10px] text-[#777984]">
    by{" "}
    <span className="text-[#0057ff]">
      {course.author}
    </span>
  </p>
</div>

        <div className="flex shrink-0 items-center gap-1 text-[14px] text-[#64666e]">
          <span>{course.rating}</span>
          <Star
            size={14}
            className="fill-[#bfc1c8] text-[#bfc1c8]"
          />
        </div>
      </div>

      {/* Level + Avatars */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[11px] font-medium text-[#555861]">
          <BarChart3 size={12} />
          Beginner
        </div>

        <div className="flex items-center">
          {avatars.map((avatar, index) => (
            <Image
              key={index}
              src={avatar}
              alt=""
              width={28}
              height={28}
              className={`h-7 w-7 rounded-full border-2 border-white object-cover ${
                index !== 0 ? "-ml-2" : ""
              }`}
            />
          ))}

          <span className="-ml-2 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-[#c6ff00] px-1 text-[10px] font-semibold text-[#172000]">
            26+
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1 pb-1">
        <span className="text-[17px] font-bold text-[#0057ff]">
          $25
        </span>
        <span className="text-[10px] text-[#92949c]">
          /lifetime
        </span>
      </div>
    </article>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-white/75 px-2 py-1 text-[9px] sm:px-3 sm:py-1.5 sm:text-[10px] font-medium text-[#555861] backdrop-blur-md">
      {children}
    </span>
  );
}