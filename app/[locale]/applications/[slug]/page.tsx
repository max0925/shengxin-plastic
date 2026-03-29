// 应用行业详情页面 - 动态路由

import Link from 'next/link';

// Home Appliances 产品数据
const homeApplianceProducts = [
  { name: 'Air Conditioner', image: '/HomeAppliances/AirConditioner.jpg', link: 'air-conditioner' },
  { name: 'LED Lighting', image: '/HomeAppliances/LEDLighting.jpg', link: null },
  { name: 'Audio Systems', image: '/HomeAppliances/AudioSystems.jpg', link: null },
  { name: 'Dishwasher', image: '/HomeAppliances/Dishwasher.jpg', link: null },
  { name: 'Oven', image: '/HomeAppliances/Oven.jpg', link: null },
  { name: 'Television', image: '/HomeAppliances/Television.jpg', link: null },
  { name: 'Induction Cooker', image: '/HomeAppliances/InductionCooker.jpg', link: null },
];

const applicationData: Record<string, { title: string; description: string; image: string; details: string[] }> = {
  'home-appliances': {
    title: 'Home Appliances',
    image: '/HomeAppliances.jpg',
    description: 'We supply modified plastics for major home appliance manufacturers, providing materials that meet strict flame retardancy, impact resistance, and aesthetic requirements.',
    details: [
      'Washing machine drums and panels — PP with glass fiber reinforcement',
      'Air conditioner housings — ABS with UV stabilization',
      'Refrigerator interior parts — PP with anti-bacterial modification',
      'Small appliance enclosures — PC/ABS blends for high gloss finish',
      'Flame-retardant components — UL94 V0 rated PP and ABS compounds',
    ],
  },
  'automotive': {
    title: 'Automotive',
    image: '/Automotive.jpg',
    description: 'Our modified plastics serve the automotive industry for non-structural components, interior trim, and under-hood applications requiring heat and impact resistance.',
    details: [
      'Interior trim panels — PP with talc filling for dimensional stability',
      'Clips and fasteners — PA66 with glass fiber reinforcement',
      'Dashboard components — PC/ABS for heat resistance and aesthetics',
      'Wire harness covers — flame-retardant PA6 compounds',
      'Under-hood brackets — PA66 GF30 for high temperature resistance',
    ],
  },
  'construction': {
    title: 'Construction',
    image: '/Construction.jpg',
    description: 'We provide weather-resistant, UV-stabilized, and flame-retardant plastics for construction applications including pipes, profiles, and fittings.',
    details: [
      'PVC pipe compounds — weather resistant with UV stabilization',
      'Window profile materials — impact modified for cold climate durability',
      'Cable ducting — flame-retardant PP compounds',
      'Insulation components — PE with flame retardant modification',
      'Waterproofing membrane materials — custom PE formulations',
    ],
  },
  'consumer-electronics': {
    title: 'Consumer Electronics',
    image: '/ConsumerElectronics.jpg',
    description: 'Our engineering plastics meet the stringent requirements of consumer electronics for precision, aesthetics, and flame retardancy.',
    details: [
      'Phone and tablet enclosures — PC/ABS high-gloss compounds',
      'Connector housings — PA66 GF reinforced for precision molding',
      'LED lighting components — flame-retardant PC compounds',
      'Wearable device parts — lightweight, impact-modified materials',
      'Audio equipment housings — ABS with anti-static modification',
    ],
  },
  'industrial-parts': {
    title: 'Industrial Parts',
    image: '/IndustrialParts.jpg',
    description: 'We supply high-performance compounds for industrial applications demanding mechanical strength, chemical resistance, and long-term durability.',
    details: [
      'Gears and bearings — POM and PA66 with wear-resistant modification',
      'Conveyor components — UHMWPE and reinforced PP',
      'Pump housings — glass fiber reinforced PA6 for chemical resistance',
      'Electrical enclosures — flame-retardant PC and ABS compounds',
      'Machine guards — impact-modified PC for transparency and strength',
    ],
  },
};

export default function ApplicationPage({ params }: { params: { slug: string; locale: string } }) {
  const data = applicationData[params.slug];

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1C2B25] mb-4">Application Not Found</h1>
          <Link href={`/${params.locale}/#applications`} className="text-[#1B5E3A] hover:underline">
            Back to Applications
          </Link>
        </div>
      </main>
    );
  }

  // Home Appliances 专用布局
  if (params.slug === 'home-appliances') {
    return (
      <main>
        {/* Hero 区域 */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-end pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wide">APPLICATIONS</p>
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-title">{data.title}</h1>
            </div>
          </div>
        </section>

        {/* 产品网格区域 */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Overview 文字 */}
            <p className="text-[#37474F] text-base md:text-lg leading-relaxed max-w-3xl mb-10">
              We supply flame-retardant, impact-modified, and high-gloss compounds for major appliance manufacturers — from structural housings to aesthetic exterior panels.
            </p>

            {/* Bento Grid 布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
              {/* 第一行：2个卡片 (各占50%) - Air Conditioner, LED Lighting */}
              <div className="md:col-span-1 lg:col-span-1">
                <ProductCard product={homeApplianceProducts[0]} locale={params.locale} />
              </div>
              <div className="md:col-span-1 lg:col-span-2">
                <ProductCard product={homeApplianceProducts[1]} locale={params.locale} />
              </div>

              {/* 第二行：2个卡片 (各占50%) - Audio Systems, Dishwasher */}
              <div className="md:col-span-1 lg:col-span-2">
                <ProductCard product={homeApplianceProducts[2]} locale={params.locale} />
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <ProductCard product={homeApplianceProducts[3]} locale={params.locale} />
              </div>

              {/* 第三行：3个卡片 (各占33%) - Oven, Television, Induction Cooker */}
              <div className="md:col-span-1 lg:col-span-1">
                <ProductCard product={homeApplianceProducts[4]} locale={params.locale} />
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <ProductCard product={homeApplianceProducts[5]} locale={params.locale} />
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <ProductCard product={homeApplianceProducts[6]} locale={params.locale} />
              </div>
            </div>

            {/* 底部 CTA */}
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-gray-500 text-base md:text-lg mb-6">Need custom materials for your appliances?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`/${params.locale}/#contact`}
                  className="bg-[#FF8F00] text-white px-6 md:px-8 py-3 md:py-4 font-semibold rounded hover:bg-[#F57C00] transition text-base md:text-lg"
                >
                  Request a Quote
                </Link>
                <Link
                  href={`/${params.locale}/#materials`}
                  className="border-2 border-[#1B5E3A] text-[#1B5E3A] px-6 md:px-8 py-3 md:py-4 font-semibold rounded hover:bg-[#1B5E3A] hover:text-white transition text-base md:text-lg"
                >
                  View All Materials
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // 其他应用的默认布局
  return (
    <main>
      {/* Hero 区域 */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <p className="text-white/60 text-sm mb-2 uppercase tracking-wide">APPLICATIONS</p>
            <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-title">{data.title}</h1>
          </div>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2B25] mb-4 font-title">Overview</h2>
              <p className="text-[#37474F] text-base md:text-lg leading-relaxed">{data.description}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C2B25] mb-4 font-title">Typical Applications</h2>
              <ul className="space-y-3">
                {data.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1B5E3A] font-bold mt-0.5 text-lg">✓</span>
                    <span className="text-[#37474F] text-sm md:text-base">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-500 text-base md:text-lg mb-6">Need a material for this application?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/${params.locale}/#contact`}
                className="bg-[#FF8F00] text-white px-6 md:px-8 py-3 md:py-4 font-semibold rounded hover:bg-[#F57C00] transition text-base md:text-lg"
              >
                Request a Quote
              </Link>
              <Link
                href={`/${params.locale}/#materials`}
                className="border-2 border-[#1B5E3A] text-[#1B5E3A] px-6 md:px-8 py-3 md:py-4 font-semibold rounded hover:bg-[#1B5E3A] hover:text-white transition text-base md:text-lg"
              >
                View All Materials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// 产品卡片组件
function ProductCard({ product, locale }: { product: { name: string; image: string; link: string | null }; locale: string }) {
  const cardContent = (
    <>
      {/* 产品图片 - 撑满整个卡片 */}
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* 半透明遮罩 - hover时显示 */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

      {/* 产品名称 - 左上角，直接叠在图片上 */}
      <div className="absolute top-4 left-4 z-10">
        <h3
          className="text-[#1B5E3A] font-bold text-sm uppercase tracking-wider"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            textShadow: '0 1px 3px rgba(255,255,255,0.7)'
          }}
        >
          {product.name}
        </h3>
      </div>

      {/* 箭头 - 右下角，直接叠在图片上 */}
      <div className="absolute bottom-4 right-4 z-10">
        <svg
          className="w-8 h-8 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(255,255,255,0.7))' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1B5E3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </>
  );

  if (product.link) {
    return (
      <Link href={`/${locale}/applications/home-appliances/${product.link}`} className="group relative overflow-hidden h-64 md:h-80 lg:h-96 block">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group relative overflow-hidden h-64 md:h-80 lg:h-96">
      {cardContent}
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'home-appliances' },
    { slug: 'automotive' },
    { slug: 'construction' },
    { slug: 'consumer-electronics' },
    { slug: 'industrial-parts' },
  ];
}
