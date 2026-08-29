import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";
import {
  Shield,
  Eye,
  Target,
  Heart,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="ABOUT US"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ghee.jpeg"
                  alt="Aashish Premium Ghee"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1B3C73] rounded-2xl p-6 text-white shadow-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-blue-200 text-sm">Pure & Natural</p>
              </div>
            </div>
            <div>
              <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847] mb-6 leading-tight">
                Bringing Purity to
                <br />
                <span className="text-[#1B3C73]">Every Indian Kitchen</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aashish Impex was born from a vision to provide pure, unadulterated dairy products and food essentials to every household and business in India. Our journey began with a simple belief — that everyone deserves access to quality food products.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we proudly offer premium Buffalo Ghee, Cow Ghee, and Kabuli Chana, with an exciting range of new products coming soon. Every product that bears the Aashish name goes through rigorous quality checks to ensure it meets our standards of excellence.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Manufactured by DEVANK MILK AND MILK PRODUCTS PVT. LTD.",
                  "FSSAI License No: 11418850000020",
                  "Packed & Marketed by Aashish Impex, Indore",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-[#65A30D] shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847]">
              OUR MISSION & VISION
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#1B3C73] to-[#2563EB]" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-[#1B3C73]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2847] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver pure, high-quality dairy products and food essentials at fair prices,
                  making premium nutrition accessible to every household and business across India.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#65A30D] to-[#84cc16]" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-[#65A30D]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2847] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India&apos;s most trusted dairy and foods brand, known for uncompromising quality,
                  purity, and innovation in every product we create.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Values
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847]">
              WHY CHOOSE AASHISH
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality",
                desc: "Every product undergoes strict quality tests. We never compromise on purity.",
                color: "bg-blue-50",
                iconColor: "text-[#1B3C73]",
              },
              {
                icon: Leaf,
                title: "Purity",
                desc: "100% natural ingredients with no adulterants or artificial additives.",
                color: "bg-green-50",
                iconColor: "text-[#65A30D]",
              },
              {
                icon: Heart,
                title: "Trust",
                desc: "Built on decades of trust. Our customers are our biggest advocates.",
                color: "bg-red-50",
                iconColor: "text-red-500",
              },
              {
                icon: Sparkles,
                title: "Tradition",
                desc: "Blending traditional methods with modern quality standards.",
                color: "bg-amber-50",
                iconColor: "text-amber-500",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center p-6"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 ${item.color} rounded-2xl flex items-center justify-center`}
                  >
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-lg text-[#0F2847] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2563EB] font-semibold text-sm tracking-widest uppercase mb-3">
              Our Leadership
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2847]">
              MEET THE FOUNDERS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Ashish Jain", role: "Founder", image: "/images/founder1.jpeg" },
              { name: "Nitin Jain", role: "Co-Founder", image: "/images/founder2.jpeg" },
            ].map((person, i) => (
              <Card key={i} className="border-none shadow-lg overflow-hidden group">
                <div className="h-80 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg text-[#0F2847]">{person.name}</h3>
                  <p className="text-[#2563EB] text-sm">{person.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1B3C73] to-[#0F2847] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Join the Aashish Family
          </h2>
          <p className="text-blue-200/70 max-w-xl mx-auto mb-8">
            Discover our range of premium dairy products and food essentials. Quality you can trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products"><Button size="lg"
              className="bg-[#65A30D] hover:bg-[#4d7c0f] text-white rounded-full px-8 font-semibold"
            >
                View Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button></Link>
            <Link href="/contact"><Button variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white hover:text-[#1B3C73] px-8"
            >Get In Touch</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
