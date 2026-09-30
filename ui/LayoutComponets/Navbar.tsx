"use client";

import Link from "next/link";
import { Menu, MenuIcon, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "@/public/images/Header_Logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-primary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <nav className="hidden h-20 grid-cols-3 items-center md:grid">
          {/* Left - Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="shrink-0 text-2xl font-bold tracking-tight text-white"
            >
              <Image
                src={Logo}
                alt="Logo"
                height={40}
                width={135}
                priority
                className=""
              />
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-poppins text-base font-medium text-gray-50 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right - Actions */}
          <div className="flex items-center justify-end gap-3">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/login">Sign In</Link>
            </Button>

            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#get-started">Join Us</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/cart" aria-label="Shopping bag">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="flex h-20 items-center justify-between md:hidden">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            <Image
              src={Logo}
              alt="Logo"
              height={40}
              width={135}
              priority
              className=""
            />
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
            render={  <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>}
            >
            
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-90 bg-gray-50 border-none ">
              <SheetHeader>
                <SheetTitle><MenuIcon/></SheetTitle>
              </SheetHeader>

              <div className="mt-2 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}


                <Link
                  href="/login"
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Sign In
                </Link>
                 <Link
                  href="/login"
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                 Join Us
                </Link>

                <Link
                  href="/login"
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                 Cart
                </Link>

               
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
