import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/black_logo.png";

const footerColumns = [
  {
    title: "Featured Courses",
    links: ["Featured Categories", "Business", "IT", "Design"],
  },
  {
    title: "Development",
    links: ["Marketing", "Photography", "Finance", "Sport"],
  },
  {
    title: "Become a Creator",
    links: ["Affiliate Program", "Contact", "Help", "About"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white px-5 py-12 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-296">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[3fr_1fr_1fr_1fr] lg:gap-10 text-gray-950 items-start font-light">
          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="mb-4 flex items-center gap-2">
             <Image
              src={Logo}
              alt="Logo"
              height={37}
              width={171}
              priority
              className=""
            />
            </Link>

            <p className="max-w-125 text-[14px] leading-6 ">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form className="mt-8 flex max-w-123.25 sm:mt-11 flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12.75 w-full shrink-0 sm:flex-1 sm:w-auto rounded-full border border-[#D2D2D2] px-6 text-[14px]  outline-none placeholder:text-[#444] focus:border-[#C8FF00]"
              />

              <button
                type="submit"
                className="h-12.75 rounded-full bg-[#C8FF00] px-7 text-[15px] font-medium text-gray-600  transition hover:bg-[#b9ef00]"
              >
                Search
              </button>
            </form>

            <p className="mt-6 max-w-123.25 text-[12px] leading-5 ">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Footer Links */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-[14px] ">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[14px]  transition hover:text-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t md:mt-24 border-[#D8D8D8] pt-6  text-gray-950 font-light">
          <div className="flex flex-col gap-5 text-[12px]  md:flex-row md:items-center md:justify-between">
            <p>© 2023 ByteSpace. All rights reserved.</p>

            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <Link href="#" className="hover:text-black">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-black">
                Terms of Service
              </Link>

              <Link href="#" className="hover:text-black">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}