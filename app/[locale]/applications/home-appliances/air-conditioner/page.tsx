// Air Conditioner 详情页面

import Link from 'next/link';

// 零部件数据
const components = [
  {
    image: '/HomeAppliances/A1.jpg',
    nameEn: 'Wind Wheel',
    nameZh: '风叶',
    material: 'PP with glass fiber, high dimensional stability',
  },
  {
    image: '/HomeAppliances/A2.jpg',
    nameEn: 'Drain Pump',
    nameZh: '排水泵',
    material: 'PP with impact modification, chemical resistant',
  },
  {
    image: '/HomeAppliances/A3.jpg',
    nameEn: 'Filter Frame',
    nameZh: '过滤网框',
    material: 'ABS flame retardant, UL94 V0',
  },
  {
    image: '/HomeAppliances/A4.jpg',
    nameEn: 'Bracket',
    nameZh: '支架',
    material: 'PA66 GF30, high temperature resistant',
  },
  {
    image: '/HomeAppliances/A5.jpg',
    nameEn: 'Cross Flow Fan',
    nameZh: '贯流风扇',
    material: 'AS/ABS with UV stabilization',
  },
];

export default function AirConditionerPage({ params }: { params: { locale: string } }) {
  return (
    <main className="bg-white">
      {/* 面包屑导航 */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${params.locale}`} className="hover:text-[#1B5E3A] transition">
              Home
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/#applications`} className="hover:text-[#1B5E3A] transition">
              Applications
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/applications/home-appliances`} className="hover:text-[#1B5E3A] transition">
              Home Appliances
            </Link>
            <span>/</span>
            <span className="text-[#1B5E3A] font-semibold">Air Conditioner</span>
          </nav>
        </div>
      </section>

      {/* 产品介绍部分 - 左图右文 */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* 左侧：主图 */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src="/HomeAppliances/AirConditioner.jpg"
                alt="Air Conditioner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 右侧：产品介绍 */}
            <div>
              <h1
                className="text-4xl md:text-5xl font-extrabold text-[#1B5E3A] mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Air Conditioner
              </h1>
              <div className="space-y-4 text-[#37474F] leading-relaxed">
                <p className="text-base md:text-lg">
                  We supply high-performance modified plastics for air conditioner manufacturers, meeting strict requirements for flame retardancy, impact resistance, heat deflection, and dimensional stability.
                </p>
                <p className="text-base md:text-lg">
                  Our compounds are used in critical structural components, airflow systems, and housings — providing reliable performance under continuous operation and temperature cycling.
                </p>
                <p className="text-base md:text-lg">
                  From indoor units to outdoor enclosures, we deliver materials that meet UL, IEC, and industry-specific certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 零部件卡片网格 */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1B5E3A] mb-10 md:mb-12 uppercase tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Key Components
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* 零部件图片 */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={component.image}
                    alt={component.nameEn}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 零部件信息 */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C2B25] mb-2">
                    {component.nameEn}
                    <span className="text-gray-500 text-sm font-normal ml-2">/ {component.nameZh}</span>
                  </h3>
                  <p className="text-sm text-[#37474F] leading-relaxed">{component.material}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1C2B25] mb-4">
            Need materials for air conditioner components?
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            We provide custom formulations tailored to your exact specifications and testing requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${params.locale}/#contact`}
              className="bg-[#FF8F00] text-white px-8 py-4 font-semibold rounded hover:bg-[#F57C00] transition text-lg"
            >
              Request a Quote
            </Link>
            <Link
              href={`/${params.locale}/applications/home-appliances`}
              className="border-2 border-[#1B5E3A] text-[#1B5E3A] px-8 py-4 font-semibold rounded hover:bg-[#1B5E3A] hover:text-white transition text-lg"
            >
              Back to Home Appliances
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
