import { Card, CardContent } from "@/components/ui/card";

export default function RevenueCard({
  className,
  title,
  value,
  date,
}: {
  className?: string;
  title: string;
  value: string;
  date: string;
}) {
  return (
    <Card
      className={`absolute z-20 w-26.25 rounded-[9px] border-0 bg-[#004cff] text-white shadow-lg ${className}`}
    >
      <CardContent className="p-2.5">
        <p className="text-[6px]">
          {title}
        </p>

        <p className="text-[6px] opacity-80">
          {date}
        </p>

        <p className="mt-1 text-[13px] font-bold">
          {value}
        </p>

        <span className="mt-2 inline-flex rounded-full bg-[#c8ff00] px-1.5 py-0.5 text-[6px] font-bold text-black">
          +25
        </span>
      </CardContent>
    </Card>
  );
}