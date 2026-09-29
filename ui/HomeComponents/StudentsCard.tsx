import {Card, CardContent} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",    
"/images/avatar3.png",
  "/images/avatar4.png",
  "/images/avatar5.png",
];

export default function StudentsCard() {
  return (
    <Card className="absolute bottom-5 left-[25%] z-20 w-45 rounded-xl border-0 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <CardContent className="p-3">
        <p className="text-[8px] font-medium text-gray-600">
          Happy Students
        </p>

        <div className="mt-1 flex items-center gap-1">
          <span className="text-[7px]">4.5</span>

          <div className="flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                size={7}
                className="fill-[#ffc400] text-[#ffc400]"
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center">
          {avatars.slice(0, 5).map((avatar, index) => (
            <Avatar
              key={avatar}
              className={`h-7 w-7 border-2 border-white ${
                index !== 0 ? "-ml-2" : ""
              }`}
            >
              <AvatarImage src={avatar} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ))}

          <span className="-ml-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#c8ff00] px-1 text-[7px] font-bold">
            2K+
          </span>
        </div>
      </CardContent>
    </Card>
  );
}