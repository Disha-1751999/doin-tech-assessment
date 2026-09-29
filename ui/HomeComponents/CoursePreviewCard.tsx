import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function CoursePreviewCard({
  image,
}: {
  image: string;
}) {
  return (
    <Card className="absolute left-[8%] top-0 z-20 w-52.5 rounded-[14px] border-[#dedfe4] bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
      <CardContent className="p-2">
        <div className="relative h-27 overflow-hidden rounded-[9px]">
          <Image
            src={image}
            alt="Figma course"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-2 left-2 flex gap-1">
            <span className="rounded-full bg-white/80 px-2 py-1 text-[6px] text-gray-600">
              17 Lessons
            </span>

            <span className="rounded-full bg-white/80 px-2 py-1 text-[6px] text-gray-600">
              2 hours 16 mins
            </span>
          </div>
        </div>

        <h4 className="mt-2 text-[11px] font-semibold">
          Learn Figma from Basic
        </h4>

        <p className="text-[7px] text-[#0057ff]">
          by purepearl studio
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-full bg-[#f5f5f5] px-2 py-1 text-[7px]">
            Beginner
          </span>

          <div className="flex items-center gap-1">
            <span className="text-[8px]">4.5</span>
            <Star size={8} className="fill-gray-300 text-gray-300" />
          </div>
        </div>

        <div className="mt-2 text-[11px] font-bold text-[#0057ff]">
          $25
          <span className="ml-0.5 text-[6px] font-normal text-gray-400">
            /lifetime
          </span>
        </div>
      </CardContent>
    </Card>
  );
}