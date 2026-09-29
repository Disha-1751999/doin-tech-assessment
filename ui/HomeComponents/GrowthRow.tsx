import { ReactNode } from "react";

type GrowthRowProps = {
  title: ReactNode;
  description: ReactNode;
  contentPosition?: "left" | "right";
  children: ReactNode;
  stats?: {
    value: string;
    label: string;
  }[];
  checklist?: string[];
};

export function GrowthRow({
  title,
  description,
  contentPosition = "left",
  children,
  stats,
  checklist,
}: GrowthRowProps) {
  const content = (
    <div className="w-full max-w-117.5">
      <h2
        className="
          text-[28px]
          font-bold
          leading-[1.15]
          tracking-[-1px]
          text-[#080d25]

          sm:text-[32px]

          lg:text-[34px]
          xl:text-[38px]
        "
      >
        {title}
      </h2>

      <div
        className="
          mt-4
          text-[12px]
          leading-[1.7]
          text-[#9a9ca7]

          sm:text-[13px]
          lg:text-[14px]
          xl:text-[15px]
        "
      >
        {description}
      </div>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="mt-6 flex gap-7 sm:mt-7 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[18px] font-bold text-[#004cff] sm:text-[20px]">
                {stat.value}
              </div>

              <div className="mt-0.5 text-[11px] text-[#666873] sm:text-[13px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Checklist */}
      {checklist && checklist.length > 0 && (
        <div className="mt-6 space-y-2.5">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-[11px] text-[#34353c] sm:text-[13px]"
            >
              <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#004cff] text-[8px] text-white">
                ✓
              </span>

              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

const visual = (
  <div className="order-2 flex w-full items-center justify-center lg:order-0">
    <div className="w-full max-w-135">
      {children}
    </div>
  </div>
);

const contentWithOrder = (
  <div
    className={
      contentPosition === "left"
        ? "order-1 lg:order-0"
        : "order-1 lg:order-0"
    }
  >
    {content}
  </div>
);

return (
  <div className="grid items-center justify-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20">
    {contentPosition === "left" ? (
      <>
        {contentWithOrder}
        {visual}
      </>
    ) : (
      <>
        {visual}
        {contentWithOrder}
      </>
    )}
  </div>
);
}