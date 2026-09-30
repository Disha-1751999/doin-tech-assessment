"use client";

import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Laptop,
  Megaphone,
  Palette,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type CourseCategory = {
  title: string;
  icon: React.ElementType;
};

const categories: CourseCategory[] = [
  {
    title: "Design",
    icon: Palette,
  },
  {
    title: "Development",
    icon: Code2,
  },
  {
    title: "IT & Software",
    icon: Laptop,
  },
  {
    title: "Business",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Photography",
    icon: Camera,
  },
];

export function CourseCategories() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Heading */}
         <div className="mx-auto max-w-212.5 text-center">
          <h2 className="text-[28px] font-bold leading-[1.18] tracking-[-1px] sm:tracking-[-1.5px] md:text-[34px] text-[#080d25] lg:text-[38px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-[#9a9ca7] sm:text-[15px]">
           At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various 
            <br className="hidden sm:block" />
            fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  icon: Icon,
}: CourseCategory) {
  return (
    <Card className="group rounded-2xl  ring ring-[#E6E7EB]! bg-white shadow-none transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">
      <CardContent className="flex h-28.75 flex-col items-center justify-center p-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8ff00] text-[#252a19]">
          <Icon size={21} strokeWidth={2.5} />
        </div>

        <p className="mt-3 text-[14px] font-medium text-[#22242b]">
          {title}
        </p>
      </CardContent>
    </Card>
  );
}