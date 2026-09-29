export default function NeonDecoration({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute z-30 h-5.5 w-20 rotate-25 rounded-full bg-[#c8ff00] blur-[1px] ${className}`}
      style={{
        boxShadow: "0 0 15px rgba(200,255,0,0.25)",
      }}
    >
      <div className="absolute -top-3 left-4 h-5.5 w-16.25 rotate-25 rounded-full bg-[#c8ff00]" />
      <div className="absolute top-3 left-7 h-5 w-14 rotate-25 rounded-full bg-[#c8ff00]" />
    </div>
  );
}