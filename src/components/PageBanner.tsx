interface PageBannerProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative bg-[#1B3C73] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563EB]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-blue-200/80 text-sm">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-blue-300/50">/</span>}
              {item.href ? (
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C320,100 640,20 960,60 C1120,80 1280,40 1440,50 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
