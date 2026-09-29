export function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#063ee8]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)
          `,
          backgroundSize: "66px 66px",
        }}
      />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-5 -top-8">
        <div className="h-20 w-24 rotate-12 rounded-full bg-[#d9ff00] blur-[1px]" />
        <div className="absolute left-10 top-14 h-14 w-20 -rotate-12 rounded-full bg-[#d9ff00]" />
      </div>

      <div className="pointer-events-none absolute left-[16%] top-5 hidden sm:block">
        <div className="h-16 w-10 rotate-45 rounded-full bg-white" />
        <div className="absolute left-4 top-5 h-12 w-9 rotate-45 rounded-full bg-white" />
      </div>

      {/* Yellow triangle */}
      <div
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-5
          h-0
          w-0
          border-b-76
          border-l-30p
          border-r-30
          border-b-[#d9ff00]
          border-l-transparent
          border-r-transparent
          rotate-25
        "
      />

      {/* White blob */}
      <div
        className="
          pointer-events-none
          absolute
          -right-5
          top-8
          h-32
          w-20
          rotate-25
          rounded-[35%]
          bg-white
        "
      />

      {/* Bottom left ring */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-10
          h-40
          w-40
          rounded-full
          border-34
          border-[#d9ff00]
        "
      />

      {/* Bottom right squiggle */}
      <div className="pointer-events-none absolute -bottom-5 right-8 rotate-[-10deg]">
        <div className="h-16 w-24 rounded-full bg-[#d9ff00]" />
        <div className="-mt-7 ml-5 h-16 w-24 rounded-full bg-[#d9ff00]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 text-center sm:py-14 lg:py-16">
        <h2 className="mx-auto max-w-2xl text-[34px] font-bold leading-[1.18] tracking-[-1.5px] text-white sm:text-[38px]">
          Unlock Your Potential as a
          <br className="hidden sm:block" />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-6 text-white/80 sm:text-[15px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="
            mt-6
            rounded-full
            bg-[#d9ff00]
            px-6
            py-4
            text-sm
            font-medium
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