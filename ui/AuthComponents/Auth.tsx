import Image from "next/image";
import AuthForm from "./AuthForm";
import AuthImage from "@/public/images/Auth_side_image.png";
import ShortLogo from "@/public/images/Logo_short.png";

export type AuthMode = "login" | "register";

interface AuthProps {
  mode: AuthMode;
}

const authContent = {
  register: {
    eyebrow: "Create an Account",
    title: "Welcome to",
    titleAccent: "ByteSpace",
    descriptionTitle: "Sign up and come in",
    description:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
  },

  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    titleAccent: "",
    descriptionTitle: "Sign in with ease",
    description:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
};

export default function Auth({ mode }: AuthProps) {
  const content = authContent[mode];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#063DE0]">
      <div
        className="
          relative
          min-h-screen
          w-full

          bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:84px_84px]
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <div
          className="
            absolute
            left-5
            top-5
            z-20
            h-8
            w-8

            sm:left-8
            sm:top-7

            lg:left-10
            lg:top-8

            xl:left-[11.5%]
          "
        >
          <Image
            src={ShortLogo}
            alt="ByteSpace"
            fill
            priority
            sizes="40px"
            className="object-contain"
          />
        </div>

        {/* =====================================================
            AUTH CONTENT
        ====================================================== */}

        <div
          className="
            mx-auto
            flex
            min-h-screen
            w-full
            flex-col

            px-5
            pb-10
            pt-24

            sm:px-8
            sm:pt-28

            md:px-10
            md:pt-32

            lg:grid
            lg:grid-cols-[450px_1fr]
            lg:items-start
            lg:gap-[55px]
            lg:px-0
            lg:pt-[108px]

            xl:grid-cols-[450px_475px]
            xl:gap-[55px]

            lg:max-w-[980px]
            xl:max-w-[980px]
          "
        >
          {/* ===================================================
              LEFT SIDE
          ==================================================== */}

          <section className="w-full font-satoshi">
            {/* Heading */}
            <div
              className="
                mb-8
                w-full
                max-w-[390px]

                sm:mb-10

                lg:mb-[48px]
              "
            >
              <h2
                className="
                  text-[18px]
                  font-medium
                  leading-[1.2]
                  text-white

                  sm:text-[19px]

                  lg:text-[20px]
                "
              >
                {content.descriptionTitle}
              </h2>

              <p
                className="
                  mt-3
                  max-w-[390px]
                  text-[12px]
                  leading-[1.65]
                  text-white/80

                  sm:text-[13px]

                  lg:text-[14px]
                "
              >
                {content.description}
              </p>
            </div>

            {/* Illustration */}
            <div
              className="
                flex
                w-full
                justify-center

                lg:block
              "
            >
              <Image
                src={AuthImage}
                alt=""
                priority
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 500px, 450px"
                className="
                  h-auto
                  w-full
                  max-w-[450px]
                  object-contain
                "
              />
            </div>
          </section>

          {/* ===================================================
              RIGHT SIDE
          ==================================================== */}

          <section
            className="
              mt-12
              flex
              w-full
              justify-center

              sm:mt-14

              lg:mt-0
              lg:justify-end
            "
          >
            <AuthForm
              mode={mode}
              eyebrow={content.eyebrow}
              title={content.title}
              titleAccent={content.titleAccent}
            />
          </section>
        </div>
      </div>
    </main>
  );
}