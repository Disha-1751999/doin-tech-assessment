import Sarah from "@/public/images/author_1.png";
import James from "@/public/images/author_1.png";
import Alex from "@/public/images/author_1.png";
import { FeedbackCard } from "./FeedbackCard";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: Sarah,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: James,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: Alex,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function FeedbackSection() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{
        background: `
          radial-gradient(
            600px 500px at 80% 25%,
            rgba(210, 255, 0, 0.30),
            transparent 70%
          ),
          radial-gradient(
            550px 450px at 5% 100%,
            rgba(190, 204, 255, 0.65),
            transparent 70%
          ),
          linear-gradient(
            135deg,
            #ffffff 0%,
            #ffffff 40%,
            #f8fff0 70%,
            #f0f3ff 100%
          )
        `,
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className="
                max-w-md
                text-[28px] font-bold leading-[1.18] tracking-[-1px] sm:tracking-[-1.5px] md:text-[34px] text-black/90 lg:text-[38px]
              "
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[14px] leading-6 text-[#777985] sm:text-[15px]">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <FeedbackCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}