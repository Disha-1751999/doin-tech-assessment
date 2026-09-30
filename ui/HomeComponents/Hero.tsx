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
      <div className="relative min-h-140 w-full sm:min-h-160 md:min-h-170 lg:aspect-1440/1024 lg:min-h-0">
        <Image
          src={HeroFrame}
          alt=""
          priority
          sizes="100vw"
          fill
          className="object-cover object-bottom"
        />

        {/* Content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-full max-w-7xl items-start justify-center px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8 xl:pt-18">
            <div className="w-full max-w-5xl text-center">
              {/* Heading */}
              <h1 className="text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Get Access to Hundreds
                <span className="block">Courses Available</span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2.5xl px-2 text-sm font-light leading-6 text-white/80 sm:mt-6 sm:px-4 sm:leading-7 sm:text-base">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>

              {/* Search */}
              <div className="mx-auto mt-7 w-full max-w-md sm:mt-8 sm:max-w-xl">
                <div className="flex w-full items-center gap-2 sm:gap-3">
                  <InputGroup className="h-11 sm:h-12 text-gray-500 min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-3 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 sm:px-4">
                    <InputGroupAddon align="inline-start">
                      <SearchIcon className="size-3 sm:size-4 text-gray-500" />
                    </InputGroupAddon>

                    <InputGroupInput
                      id="course-search"
                      placeholder="Course, topic, creator"
                      className="text-sm text-gray-500 sm:text-base"
                    />
                  </InputGroup>

                  <Button
                    className="h-11 sm:h-12 shrink-0 rounded-full bg-secondary px-4 text-sm hover:bg-secondary/90 sm:px-8 sm:text-base"
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