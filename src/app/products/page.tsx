import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageBanner from "@/components/PageBanner";
import { Clock, ArrowRight, Sparkles } from "lucide-react";

type Product = {
  name: string;
  desc: string;
  image: string;
  category: string;
  size: string;
  comingSoon?: boolean;
};

const products: Product[] = [
  {
    name: "Buffalo Ghee",
    desc: "Premium quality buffalo ghee, made from pure buffalo milk. Rich aroma and traditional taste.",
    image: "/images/ghee.jpeg",
    category: "ghee",
    size: "15 Kg Tin",
  },
  {
    name: "Cow Ghee",
    desc: "Pure cow ghee crafted from farm-fresh cow milk. Golden texture and authentic flavor.",
    image: "/images/ghee.jpeg",
    category: "ghee",
    size: "15 Kg Tin",
  },
  {
    name: "Kabuli Chana",
    desc: "Premium Kabuli Chana (Chickpeas) sourced from the finest farms. Available in bulk quantities.",
    image: "/images/kabuli-chana.jpeg",
    category: "pulses",
    size: "Bulk",
  },
  {
    name: "Milk Powder",
    desc: "Premium quality milk powder for all your dairy needs. Rich and creamy.",
    image: "/images/logo.jpeg",
    category: "coming-soon",
    size: "TBA",
    comingSoon: true,
  },
  {
    name: "Butter",
    desc: "Fresh, creamy butter made from pure milk. Perfect for cooking and spreading.",
    image: "/images/logo.jpeg",
    category: "coming-soon",
    size: "TBA",
    comingSoon: true,
  },
  {
    name: "Fresh Cream",
    desc: "Rich and velvety fresh cream for your culinary delights. 100% natural.",
    image: "/images/logo.jpeg",
    category: "coming-soon",
    size: "TBA",
    comingSoon: true,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group overflow-hidden">
      <div className="relative h-56 bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-contain p-4 group-hover:scale-105 transition-transform duration-500 ${
            product.comingSoon ? "opacity-40 blur-[1px]" : ""
          }`}
        />
        {product.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Badge className="bg-[#1B3C73] text-white px-4 py-2 text-sm font-semibold shadow-lg">
              <Clock className="h-4 w-4 mr-2" />
              Coming Soon
            </Badge>
          </div>
        )}
        {!product.comingSoon && (
          <Badge className="absolute top-3 right-3 bg-[#65A30D] hover:bg-[#65A30D] text-white text-xs">
            {product.size}
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-lg text-[#0F2847] mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">{product.desc}</p>
        {!product.comingSoon && (
          <p className="text-[#1B3C73] font-semibold text-sm">
            Available: {product.size}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="PRODUCTS"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full px-6 data-[state=active]:bg-[#1B3C73] data-[state=active]:text-white"
                >
                  All Products
                </TabsTrigger>
                <TabsTrigger
                  value="ghee"
                  className="rounded-full px-6 data-[state=active]:bg-[#1B3C73] data-[state=active]:text-white"
                >
                  Ghee
                </TabsTrigger>
                <TabsTrigger
                  value="pulses"
                  className="rounded-full px-6 data-[state=active]:bg-[#1B3C73] data-[state=active]:text-white"
                >
                  Pulses
                </TabsTrigger>
                <TabsTrigger
                  value="coming-soon"
                  className="rounded-full px-6 data-[state=active]:bg-[#1B3C73] data-[state=active]:text-white"
                >
                  Coming Soon
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((p) => (
                  <ProductCard key={p.name} product={p} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ghee">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products
                  .filter((p) => p.category === "ghee")
                  .map((p) => (
                    <ProductCard key={p.name} product={p} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="pulses">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products
                  .filter((p) => p.category === "pulses")
                  .map((p) => (
                    <ProductCard key={p.name} product={p} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="coming-soon">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products
                  .filter((p) => p.category === "coming-soon")
                  .map((p) => (
                    <ProductCard key={p.name} product={p} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#1B3C73] to-[#2563EB] rounded-2xl p-8 flex items-center gap-6">
              <div className="flex-1">
                <Badge className="bg-white/20 text-white mb-3">Premium Range</Badge>
                <h3 className="text-xl font-bold text-white mb-2">
                  Bulk Orders Available
                </h3>
                <p className="text-blue-200/80 text-sm mb-4">
                  Get special pricing on bulk orders. Contact us for details.
                </p>
                <Link href="/contact"><Button variant="secondary" size="sm" className="rounded-full">Contact Us</Button></Link>
              </div>
              <div className="hidden sm:block w-32 h-32 relative">
                <Image
                  src="/images/ghee.jpeg"
                  alt="Bulk Orders"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#65A30D] to-[#84cc16] rounded-2xl p-8 flex items-center gap-6">
              <div className="flex-1">
                <Badge className="bg-white/20 text-white mb-3">
                  <Sparkles className="h-3 w-3 mr-1" /> Exciting News
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">
                  New Products Coming Soon!
                </h3>
                <p className="text-green-100/80 text-sm mb-4">
                  Milk Powder, Butter & Fresh Cream — launching soon.
                </p>
                <Link href="/contact"><Button variant="secondary" size="sm" className="rounded-full">Stay Updated</Button></Link>
              </div>
              <div className="hidden sm:block w-32 h-32 relative">
                <Image
                  src="/images/kabuli-chana.jpeg"
                  alt="Coming Soon"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WE SERVE YOU THE BEST */}
      <section className="py-20 bg-gradient-to-br from-[#1B3C73] to-[#0F2847]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            WE SERVE YOU THE BEST
          </h2>
          <p className="text-blue-200/70 max-w-xl mx-auto mb-8">
            Every Aashish product is crafted with care, tested for quality, and delivered with love.
          </p>
          <Link href="/contact"><Button size="lg"
            className="bg-[#65A30D] hover:bg-[#4d7c0f] text-white rounded-full px-10 font-semibold"
          >
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button></Link>
        </div>
      </section>
    </>
  );
}
