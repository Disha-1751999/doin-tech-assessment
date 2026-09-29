"use client";

import Link from "next/link";
import { AuthMode } from "./Auth";

interface AuthFormProps {
  mode: AuthMode;
  eyebrow: string;
  title: string;
  titleAccent?: string;
}

export default function AuthForm({
  mode,
  eyebrow,
  title,
  titleAccent,
}: AuthFormProps) {
  const isRegister = mode === "register";

  return (
    <div
      className="
        w-full max-w-102.5
        rounded-[20px]
        bg-white
        px-8 py-9
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        sm:px-10 sm:py-11
        lg:max-w-102.5
        xl:max-w-102.5
      "
    >
      {/* Heading */}
      <div>
        <p className="text-[13px] font-light  text-[#1556E8]">
          {eyebrow}
        </p>

        <h1 className="mt-1 text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#29292D] sm:text-[32px]">
          {title}

          {titleAccent && (
            <>
              <br />
              {titleAccent}
            </>
          )}
        </h1>
      </div>

      {/* Form */}
      <form className="mt-7 space-y-4">
        {isRegister && (
          <FormField
            label="Full Name"
            type="text"
            placeholder="Jamie Davis"
          />
        )}

        <FormField
          label="Email"
          type="email"
          placeholder="designer@example.com"
        />

        <FormField
          label="Password"
          type="password"
          placeholder="********"
        />

        {/* Submit */}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="
              rounded-full
              bg-[#C8FF00]
              px-7 py-2.5
              text-[13px]
              font-medium
              text-black
              transition
              hover:bg-[#baff00]
              active:scale-95
            "
          >
            {isRegister ? "Continue" : "Sign In"}
          </button>
        </div>
      </form>

      {/* Social login */}
      {!isRegister && (
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dedede]" />
            <span className="text-[12px] text-[#999]">or</span>
            <div className="h-px flex-1 bg-[#dedede]" />
          </div>

          <div className="mt-7 flex justify-center gap-3">
            <SocialButton type="facebook">
              <FacebookIcon />
            </SocialButton>

            <SocialButton type="google">
              <GoogleIcon />
            </SocialButton>
          </div>
        </div>
      )}

      {/* Bottom link */}
      <div
        className={`
          text-center text-[13px] text-[#999]
          ${isRegister ? "mt-20" : "mt-14"}
        `}
      >
        {isRegister ? (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-normal text-[#1556E8] hover:underline"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            New user?{" "}
            <Link
              href="/register"
              className="font-normal text-[#1556E8] hover:underline"
            >
              Create an account
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------- Form Field ---------------- */

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-medium text-[#333]">
        {label}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-[37px]
          w-full
          rounded-[9px]
          border
          border-[#e4e4e4]
          bg-white
          px-4
          py-2
          text-[14px]
          text-[#333]
          outline-none
          transition
          placeholder:text-[#999]
          focus:border-[#1556E8]
          focus:ring-2
          focus:ring-[#1556E8]/10
        "
      />
    </label>
  );
}

/* ---------------- Social Button ---------------- */

function SocialButton({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "facebook" | "google";
}) {
  return (
    <button
      type="button"
      aria-label={`Continue with ${type}`}
      className="
        flex h-[52px] w-[52px]
        items-center justify-center
        rounded-[16px]
        border border-[#dedede]
        bg-white
        transition
        hover:bg-[#f7f7f7]
        active:scale-95
      "
    >
      {children}
    </button>
  );
}

/* ---------------- Icons ---------------- */

function FacebookIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="11" fill="#000" />
      <path
        d="M13.4 8.1H15V5.5c-.3 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 3v1.7H8.5v2.9h1.9v5.7h2.9V13h2.4l.4-2.9h-2.8V8.7c0-.5.1-.6.1-.6Z"
        fill="white"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M21.35 12.23c0-.73-.07-1.43-.2-2.1H12v3.97h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.7 2.93-4.2 2.93-7.23Z"
      />
      <path
        fill="#34A853"
        d="M12 21.6c2.63 0 4.84-.87 6.45-2.34l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.7-1.72-5.47-4.03H3.29v2.5A9.75 9.75 0 0 0 12 21.6Z"
      />
      <path
        fill="#FBBC05"
        d="M6.53 13.73A5.86 5.86 0 0 1 6.23 12c0-.6.1-1.2.3-1.73v-2.5H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.23l3.24-2.5Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.24c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.34 14.63 2.4 12 2.4a9.75 9.75 0 0 0-8.71 5.37l3.24 2.5C7.3 7.96 9.46 6.24 12 6.24Z"
      />
    </svg>
  );
}