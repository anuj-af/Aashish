"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/info", label: "Info" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1B3C73] shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-xl tracking-wide">Aashish</span>
            <span className="text-blue-200 text-[10px] -mt-1 tracking-wider">Nature&apos;s Best in Every Spoon</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-white/20 text-white"
                  : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="hidden lg:flex items-center">
          <Button
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#1B3C73] gap-2 px-6"
          >
            <Phone className="h-4 w-4" />
            9009200014
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-[#1B3C73] border-none">
            <SheetTitle className="text-white font-bold text-xl px-2 mb-6">Aashish</SheetTitle>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-white/20 text-white"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 px-4">
              <Button
                variant="outline"
                className="w-full rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#1B3C73] gap-2"
              >
                <Phone className="h-4 w-4" />
                9009200014
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
