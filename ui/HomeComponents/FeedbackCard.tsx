import Image, { StaticImageData } from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  image: StaticImageData | string;
};

export function FeedbackCard({
  name,
  role,
  quote,
  image,
}: TestimonialCardProps) {
  return (
    <article
      className="
        rounded-2xl
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(0,0,0,0.03)]
      "
    >
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h3 className="text-[16px] font-semibold text-[#171923]">
            {name}
          </h3>

          <p className="mt-0.5 text-[14px] text-[#004cff]">
            {role}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[14px] leading-[1.75] text-[#666873]">
        &ldquo;{quote}&rdquo;
      </p>
    </article>
  );
}