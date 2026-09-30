import CTABannerImage from "@/public/images/CTA_Frame.png";

export function CreatorCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#063ee8] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${CTABannerImage.src})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-12 text-center sm:px-6 sm:py-14 lg:py-16">
        <h2 className="mx-auto max-w-2xl text-[28px] font-bold leading-[1.18] tracking-[-1px] sm:tracking-[-1.5px] md:text-[34px] text-white lg:text-[38px]">
          Unlock Your Potential as a
          <br className="hidden sm:block" />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-2xl sm:mt-7 text-[14px] leading-6 text-white/80 sm:text-[15px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="
            mt-6 rounded-full
            bg-[#d9ff00]
            px-6 py-4
            text-sm font-medium
            text-[#111827]
            transition
            hover:scale-105
            hover:bg-[#c9f000]
          "
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}