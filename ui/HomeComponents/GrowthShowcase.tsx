import { GrowthRow } from "@/ui/HomeComponents/GrowthRow";
import BannerImage2 from "@/public/images/banner_2.png";
import BannerImage1 from "@/public/images/banner_1.png";
import Image from "next/image";

export function GrowthShowcase() {
  return (
    <section
      className="overflow-hidden py-14 md:py-24"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `
          radial-gradient(
            700px 500px at 5% 8%,
            rgba(204, 255, 0, 0.28),
            transparent 70%
          ),
          radial-gradient(
            700px 550px at 100% 8%,
            rgba(220, 226, 255, 0.75),
            transparent 70%
          ),
          radial-gradient(
            650px 550px at 100% 100%,
            rgba(188, 202, 255, 0.72),
            transparent 70%
          ),
          radial-gradient(
            550px 450px at 0% 100%,
            rgba(204, 255, 0, 0.32),
            transparent 70%
          )
        `,
      }}
    >
      <div className="mx-auto max-w-6xl space-y-16 px-5 sm:px-6 md:space-y-20">

        {/* ROW 1 */}
        <GrowthRow
          title={
            <>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </>
          }
          description={
            <>
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </>
          }
          stats={[
            { value: "12K", label: "Students" },
            { value: "70+", label: "Courses" },
            { value: "16", label: "Creators" },
          ]}
        >
         <Image
  src={BannerImage2}
  alt="Course creator"
  width={440}
  height={500}
  priority
  className="
    block
    h-auto
    w-full
    max-w-135
    object-contain
  "
/>
        </GrowthRow>

        {/* ROW 2 */}
        <GrowthRow
          contentPosition="right"
          title={
            <>
              Create & Manage
              <br />
              Courses Easily.
            </>
          }
          description={
            <>
              <strong className="text-[#292a31]">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </>
          }
          checklist={[
            "Share Your Expertise",
            "Monetize Your Passion",
            "Flexibility and Autonomy",
            "Build a Community",
          ]}
        >
          <Image
  src={BannerImage1}
  alt="Course creator"
  width={540}
  height={700}
  priority
  className="
    block
    h-auto
    w-full
    max-w-135
    object-contain
  "
/>
        </GrowthRow>

      </div>
    </section>
  );
}