import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

import HeroFrame from "@/public/images/Hero_Frame.png";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function Hero() {
  return (
    <section className="relative mt-20 w-full overflow-hidden">
      {/* Hero background */}
      <div className="relative min-h-162.5 w-full sm:min-h-170  lg:aspect-1300/800 lg:min-h-0">
        <Image
          src={HeroFrame}
          alt=""
          priority
          sizes="100vw"
          fill
          className="h-auto w-full block  "
        />

        {/* Content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-full max-w-7xl items-start justify-center px-4 pt-16   sm:px-6 sm:pt-20 lg:px-8 xl:pt-18">
            <div className="w-full max-w-5xl text-center">
              {/* Heading */}
              <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Get Access to Hundreds
                <span className="block">Courses Available</span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl px-2 text-sm font-normal leading-6 text-white/80 sm:mt-6 sm:px-4 sm:text-base sm:leading-7 md:text-lg">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>

              {/* Search */}
              <div className="mx-auto mt-7 w-full md:w-[70%] max-w-md sm:max-w-xl sm:mt-8">
                <div className="flex w-full items-center gap-2 sm:gap-3">
                  <InputGroup className="h-10 sm:h-12 text-gray-500 min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-3 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 sm:px-4">
                    <InputGroupAddon align="inline-start">
                      <SearchIcon className="size-4 sm:size-5" />
                    </InputGroupAddon>

                    <InputGroupInput
                      id="course-search"
                      placeholder="Course, topic, creator"
                      className="text-sm text-gray-500 sm:text-base"
                    />
                  </InputGroup>

                  <Button
                    className=" h-10 sm:h-12 shrink-0 rounded-full bg-secondary px-5 text-sm hover:bg-secondary/90 sm:px-8 sm:text-base"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}