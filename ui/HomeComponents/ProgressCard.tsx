import { Card, CardContent } from "@/components/ui/card";

export default function ProgressCard() {
  return (
    <Card className="w-31.25 rounded-[9px] border-0 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
      <CardContent className="p-3">
        <p className="text-[7px] text-gray-500">
          Learning Progress
        </p>

        <p className="mt-1 text-[27px] font-bold leading-none text-[#292a31]">
          55%
        </p>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
        </div>
      </CardContent>
    </Card>
  );
}