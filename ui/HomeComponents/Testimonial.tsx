import Image from "next/image";

import TestimonialLogo1 from "@/public/images/testimonial_logo_1.png";
import TestimonialLogo2 from "@/public/images/testimonial_logo_2.png";
import TestimonialLogo3 from "@/public/images/testimonial_logo_3.png";
import TestimonialLogo4 from "@/public/images/testimonial_logo_4.png";
import TestimonialLogo5 from "@/public/images/testimonial_logo_5.png";
const logos = [
  {
    name: "Logoipsum",
    src: TestimonialLogo1,
  },
  {
    name: "Logoipsum",
    src: TestimonialLogo2,
  },
  {
    name: "Logoipsum",
    src: TestimonialLogo3,
  },
  {
    name: "Logoipsum",
    src: TestimonialLogo4,
  },
   {
    name: "Logoipsum",
    src: TestimonialLogo5,
  },
];

export function Testimonial() {
  return (
    <section className="w-full overflow-hidden bg-gray-100 py-6 sm:py-8 md:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10 md:gap-x-14 lg:gap-x-18">
            {logos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex min-w-30 items-center justify-center gap-2 text-base font-bold text-gray-400 sm:min-w-35 sm:text-lg md:min-w-40 md:text-xl"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="h-7 w-auto opacity-60 sm:h-8 md:h-10"
                />

                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}