import Link from "next/link";
import { Globe, AtSign, Share2, Rss, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const usefulLinks = [
  { href: "/info", label: "Manufacturer Info" },
  { href: "/admin", label: "Admin" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Support" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2847] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-extrabold text-xl">Aashish</h3>
                <p className="text-blue-300 text-[10px] -mt-0.5">Nature&apos;s Best in Every Spoon</p>
              </div>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Premium quality dairy products and food essentials. Committed to purity, quality, and trust since our inception.
            </p>
            <div className="flex gap-3">
              {[Globe, AtSign, Share2, Rss].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Subscribe Our Newsletter</h4>
            <p className="text-blue-200/70 text-sm mb-4">
              Get the latest updates on new products and upcoming sales.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 flex-1"
              />
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200/50 text-sm">
            Aashish Impex &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-blue-200/50 text-sm">
            Packed & Marketed by Aashish Impex, 23, Ware House Road, Siyaganj, Indore (M.P.) - 452007
          </p>
        </div>
      </div>
    </footer>
  );
}
