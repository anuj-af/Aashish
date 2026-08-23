import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Award,
  Truck,
  HeartHandshake,
  CheckCircle2,
  Play,
  ArrowRight,
  Leaf,
  Star,
  Users,
  Package,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2847] via-[#1B3C73] to-[#1e40af] overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#2563EB]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1D4ED8]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <Badge className="bg-[#65A30D] hover:bg-[#65A30D] text-white mb-6 px-4 py-1.5 text-xs font-medium rounded-full">
                <Leaf className="h-3 w-3 mr-1" /> PREMIUM QUALITY
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                PURE & FRESH{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  THAT&apos;S WHAT
                </span>
                <span className="block text-[#60a5fa]">WE DELIVER</span>
              </h1>
              <p className="text-blue-200/80 text-lg mb-8 max-w-lg leading-relaxed">
                Aashish brings you nature&apos;s finest dairy products and food essentials. From premium ghee to quality pulses — purity in every spoon.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products"><Button size="lg"
                  className="bg-[#65A30D] hover:bg-[#4d7c0f] text-white rounded-full px-8 font-semibold shadow-lg shadow-green-900/20"
                >
                    Our Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button></Link>
                <Link href="/about"><Button variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white hover:text-[#1B3C73] px-8 font-semibold"
                >
                    <Play className="mr-2 h-4 w-4" /> Know More
                  </Button></Link>
              </div>

              {/* Floating badge */}
              <div className="mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
                <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Natural & Organic</p>
                  <p className="text-blue-200/60 text-xs">100% Pure, No Adulterants</p>
                </div>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative hidden lg:flex justify-center">
              <div className="relative w-[420px] h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/30 to-transparent rounded-[3rem] rotate-6" />
                <div className="absolute inset-4 bg-white/5 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/10">
                  <Image
                    src="/images/ghee.jpeg"
                    alt="Aashish Premium Ghee"
                    fill
                    className="object-cover p-4 rounded-[2.5rem]"
                    priority
                  />
                </div>
                {/* Stat badges */}
                <div className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Package className="h-5 w-5 text-[#1B3C73]" />
                  </div>
                  <div>
                    <p className="text-[#1B3C73] font-bold text-lg">6+</p>
                    <p className="text-gray-500 text-xs">Products</p>
                  </div>
                </div>
                <div className="absolute -left-4 bottom-24 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <Star className="h-5 w-5 text-[#65A30D]" />
                  </div>
                  <div>
                    <p className="text-[#1B3C73] font-bold text-lg">100%</p>
                    <p className="text-gray-500 text-xs">Pure Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,60 C320,100 640,20 960,60 C1120,80 1280,40 1440,50 L1440,100 L0,100 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
                About Aashish
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847] mb-6 leading-tight">
                WE CREATE THE BEST
                <br />
                <span className="text-[#1B3C73]">DAIRY PRODUCTS</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aashish Impex is committed to delivering the finest dairy products and food essentials.
                Our premium ghee, pulses, and upcoming range of dairy products are crafted with care,
                ensuring purity and quality in every product.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "FSSAI Licensed & Certified Products",
                  "Premium quality ingredients sourced responsibly",
                  "Committed to purity, quality, and customer trust",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#65A30D] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about"><Button className="bg-[#1B3C73] hover:bg-[#0F2847] text-white rounded-full px-8"
              >Read More</Button></Link>
            </div>

            {/* Right - Image grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                    <Image
                      src="/images/ghee.jpeg"
                      alt="Aashish Ghee"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#2563EB] rounded-2xl p-6 text-white text-center">
                    <p className="text-3xl font-bold">6+</p>
                    <p className="text-blue-200 text-sm">Products</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                    <Image
                      src="/images/kabuli-chana.jpeg"
                      alt="Kabuli Chana"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#65A30D] rounded-2xl p-6 text-white text-center">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-green-100 text-sm">Pure Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-500 text-sm mb-8">
            Trusted By <span className="text-[#1B3C73] font-bold">Businesses</span> Across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["Quality Assured", "FSSAI Certified", "Trusted Brand", "Pan India"].map((item) => (
              <span key={item} className="text-xl font-bold text-[#1B3C73]/50 italic">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847]">
              OUR COMMITMENT TO QUALITY
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "100% Pure",
                desc: "No adulterants, no compromise. Only the purest ingredients in every product.",
              },
              {
                icon: Award,
                title: "FSSAI Certified",
                desc: "All products are FSSAI licensed and certified for safety and quality.",
              },
              {
                icon: Truck,
                title: "Pan-India Delivery",
                desc: "We deliver our premium products across India with care and speed.",
              },
              {
                icon: HeartHandshake,
                title: "Customer First",
                desc: "Your satisfaction is our priority. Dedicated support for all queries.",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="border-none shadow-lg hover:shadow-xl transition-shadow group text-center p-6"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#1B3C73] transition-colors">
                    <feature.icon className="h-8 w-8 text-[#1B3C73] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0F2847] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B3C73] to-[#0F2847] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Package, value: "6+", label: "Products" },
              { icon: Users, value: "500+", label: "Happy Customers" },
              { icon: Star, value: "15kg", label: "Ghee Packs" },
              { icon: Award, value: "100%", label: "Quality Assured" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="w-14 h-14 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-[#60a5fa]" />
                </div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-blue-200/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847] mb-4">
            WE SERVE YOU THE BEST
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Experience the purity and quality of Aashish products. From our farms to your table — nature&apos;s best in every spoon.
          </p>
          <Link href="/contact"><Button size="lg"
            className="bg-[#1B3C73] hover:bg-[#0F2847] text-white rounded-full px-10 font-semibold"
          >Contact Us</Button></Link>
        </div>
      </section>
    </>
  );
}
