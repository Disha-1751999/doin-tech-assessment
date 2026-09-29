// components/auth/AuthVisual.tsx

"use client";

import Image from "next/image";
import { AuthMode } from "./Auth";

import BannerImage1 from "@/public/images/banner_1.png";
import BannerImage2 from "@/public/images/banner_2.png";

interface AuthVisualProps {
  mode: AuthMode;
}

export default function AuthVisual({ mode }: AuthVisualProps) {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[470px]">
      {/* Decorative frame - login only */}
      {mode === "login" && (
        <div
          className="
            absolute
            left-0 top-1/2
            h-[320px] w-[390px]
            -translate-y-1/2
            border-[3px]
            border-[#25a5ff]
          "
        />
      )}

      {/* Back card */}
      <div
        className="
          absolute
          left-[5%]
          top-[18%]
          w-[230px]
          rotate-[-1deg]
          overflow-hidden
          rounded-[17px]
          bg-white
          shadow-lg
          sm:w-[250px]
        "
      >
        <Image
          src={BannerImage1}
          alt=""
          className="h-auto w-full"
        />

        <div className="p-3">
          <h3 className="text-[15px] font-bold text-black">
            Build Digital
          </h3>

          <p className="mt-1 text-[8px] text-[#777]">
            by purepearl studio
          </p>

          <div className="mt-3">
            <span className="rounded-full bg-[#f1f1f1] px-3 py-1 text-[8px]">
              Beginner
            </span>
          </div>

          <p className="mt-3 text-[14px] font-bold text-[#1556E8]">
            $25<span className="text-[8px] text-[#888]">/lifetime</span>
          </p>
        </div>
      </div>

      {/* Main card */}
      <div
        className="
          absolute
          left-[20%]
          top-[3%]
          z-10
          w-[250px]
          overflow-hidden
          rounded-[18px]
          bg-white
          shadow-xl
          sm:w-[265px]
        "
      >
        <div className="p-3">
          <Image
            src={BannerImage2}
            alt=""
            className="h-[125px] w-full rounded-[10px] object-cover"
          />
        </div>

        <div className="px-3 pb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-black">
              the Power of Big Data
            </h3>

            <span className="text-[12px]">
              4.5 <span className="text-[#C8FF00]">★</span>
            </span>
          </div>

          <p className="text-[8px] text-[#777]">
            by purepearl studio
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-[#f2f2f2] px-3 py-1 text-[8px]">
              ▥ Beginner
            </span>

            <div className="flex -space-x-2">
              {["1", "2", "3", "4"].map((item) => (
                <div
                  key={item}
                  className="h-6 w-6 rounded-full border-2 border-white bg-gray-300"
                />
              ))}

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[7px] text-white">
                26+
              </div>
            </div>
          </div>

          <p className="mt-3 text-[14px] font-bold text-[#1556E8]">
            $25
            <span className="text-[8px] font-normal text-[#888]">
              /lifetime
            </span>
          </p>
        </div>
      </div>

      {/* Lime decoration */}
      <div
        className="
          absolute
          left-[8%]
          top-[10%]
          z-20
          h-[65px]
          w-[65px]
          rounded-full
          border-[17px]
          border-[#C8FF00]
        "
      />

      {/* Arrow */}
      <div
        className="
          absolute
          bottom-[0]
          left-[7%]
          z-20
          h-0 w-0
          border-l-[42px]
          border-r-[42px]
          border-t-[80px]
          border-l-transparent
          border-r-transparent
          border-t-[#C8FF00]
          rotate-[18deg]
        "
      />

      {/* Happy students */}
      <div
        className="
          absolute
          bottom-[5%]
          right-[7%]
          z-30
          rounded-[14px]
          bg-[#C8FF00]
          px-4 py-3
        "
      >
        <p className="text-[10px] font-medium text-black">
          Happy Students
        </p>

        <p className="text-[8px] text-black">
          4.5 (20K) ★
        </p>

        <div className="mt-2 flex -space-x-2">
          {["1", "2", "3", "4", "5"].map((item) => (
            <div
              key={item}
              className="h-7 w-7 rounded-full border-2 border-[#C8FF00] bg-gray-400"
            />
          ))}

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[7px] text-white">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}