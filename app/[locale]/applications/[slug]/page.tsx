// 应用行业详情页面 - 动态路由

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

// Home Appliances 产品数据 - 使用 key 来对应翻译
const homeApplianceProducts = [
  { key: 'airConditioner', image: '/HomeAppliances/AirConditioner.jpg', link: 'air-conditioner' },
  { key: 'ledLighting', image: '/HomeAppliances/LEDLighting.jpg', link: 'led-lighting' },
  { key: 'audioSystems', image: '/HomeAppliances/AudioSystems.jpg', link: null },
  { key: 'dishwasher', image: '/HomeAppliances/Dishwasher.jpg', link: null },
  { key: 'oven', image: '/HomeAppliances/Oven.jpg', link: null },
  { key: 'television', image: '/HomeAppliances/Television.jpg', link: null },
  { key: 'inductionCooker', image: '/HomeAppliances/InductionCooker.jpg', link: null },
];

// Automotive 产品数据
const automotiveProducts = [
  { key: 'dashboardPanel', image: '/automotive/DashboardPanel.jpg', link: null },
  { key: 'doorTrim', image: '/automotive/DoorTrim.jpg', link: null },
  { key: 'engineCover', image: '/automotive/EngineCover.jpg', link: null },
  { key: 'bumperBracket', image: '/automotive/BumperBracket.jpg', link: null },
  { key: 'wireHarnessConnector', image: '/automotive/WireHarnessConnector.jepg.jpeg', link: null },
];

// Construction 产品数据
const constructionProducts = [
  { key: 'drainagePipes', image: '/construction/DrainagePipes.png', link: null },
  { key: 'pipeFittings', image: '/construction/PipeFittings.png', link: null },
  { key: 'buildingProfiles', image: '/construction/BuildingProfiles.jpg', link: null },
  { key: 'waterproofPanels', image: '/construction/WaterproofPanels.jpg', link: null },
  { key: 'cableTrays', image: '/construction/CableTrays.jpg', link: null },
];

// Consumer Electronics 产品数据
const consumerElectronicsProducts = [
  { key: 'phoneHousing', image: '/consumer-electronics/PhoneHousing.jpeg', link: null },
  { key: 'chargerHousing', image: '/consumer-electronics/ChargerHousing.jpg', link: null },
  { key: 'smartSpeaker', image: '/consumer-electronics/SmartSpeaker.jepg.jpeg', link: null },
  { key: 'connectors', image: '/consumer-electronics/Connectors.jepg.jpg', link: null },
  { key: 'coolingFan', image: '/consumer-electronics/CoolingFan.jepg.jpg', link: null },
];

// Industrial Parts 产品数据
const industrialPartsProducts = [
  { key: 'gears', image: '/industrial-parts/Gears.jpg', link: null },
  { key: 'bearingBushings', image: '/industrial-parts/BearingBushings.jepg.jpeg', link: 'bearing-bushings' },
  { key: 'conveyorComponents', image: '/industrial-parts/ConveyorComponents.jpg', link: null },
  { key: 'pumpValveBodies', image: '/industrial-parts/valve.jepg.jpeg', link: 'pump-valve-bodies' },
  { key: 'electricalInsulators', image: '/industrial-parts/ElectricalInsulators.jepg', link: null },
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

export default async function ApplicationPage({ params }: { params: { slug: string; locale: string } }) {
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

  // 使用 Bento Grid 布局的应用
  const bentoGridApps = ['home-appliances', 'automotive', 'construction', 'consumer-electronics', 'industrial-parts'];

  if (bentoGridApps.includes(params.slug)) {
    // 根据 slug 选择对应的翻译命名空间和产品数据
    let translationKey = '';
    let products: any[] = [];

    switch (params.slug) {
      case 'home-appliances':
        translationKey = 'homeAppliances';
        products = homeApplianceProducts;
        break;
      case 'automotive':
        translationKey = 'automotive';
        products = automotiveProducts;
        break;
      case 'construction':
        translationKey = 'construction';
        products = constructionProducts;
        break;
      case 'consumer-electronics':
        translationKey = 'consumerElectronics';
        products = consumerElectronicsProducts;
        break;
      case 'industrial-parts':
        translationKey = 'industrialParts';
        products = industrialPartsProducts;
        break;
    }

    const t = await getTranslations(translationKey);

    // 将产品数据转换为包含翻译名称的格式
    const translatedProducts = products.map(product => ({
      name: t(product.key),
      image: product.image,
      link: product.link
    }));

    return (
      <main>
        {/* Hero 区域 */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img src={data.image} alt={t('title')} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-end pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
              <p className="text-white/60 text-sm mb-2 uppercase tracking-wide">APPLICATIONS</p>
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-title">{t('title')}</h1>
            </div>
          </div>
        </section>

        {/* 产品网格区域 */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Overview 文字 */}
            <p className="text-[#37474F] text-base md:text-lg leading-relaxed max-w-3xl mb-10">
              {t('overview')}
            </p>

            {/* Bento Grid 布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2">
              {/* 根据产品数量动态渲染 */}
              {params.slug === 'home-appliances' ? (
                <>
                  {/* Home Appliances: 7个产品的布局 */}
                  <div className="md:col-span-1 lg:col-span-1">
                    <ProductCard product={translatedProducts[0]} locale={params.locale} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-2">
                    <ProductCard product={translatedProducts[1]} locale={params.locale} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-2">
                    <ProductCard product={translatedProducts[2]} locale={params.locale} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-1">
                    <ProductCard product={translatedProducts[3]} locale={params.locale} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-1">
                    <ProductCard product={translatedProducts[4]} locale={params.locale} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-1">
                    <ProductCard product={translatedProducts[5]} locale={params.locale} />
                  </div>
                  <div className="md:col-span-2 lg:col-span-1">
                    <ProductCard product={translatedProducts[6]} locale={params.locale} />
                  </div>
                </>
              ) : (
                <>
                  {/* 其他应用：5个产品的布局 */}
                  <div className="md:col-span-1 lg:col-span-1">
                    <ProductCard product={translatedProducts[0]} locale={params.locale} slug={params.slug} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-2">
                    <ProductCard product={translatedProducts[1]} locale={params.locale} slug={params.slug} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-2">
                    <ProductCard product={translatedProducts[2]} locale={params.locale} slug={params.slug} />
                  </div>
                  <div className="md:col-span-1 lg:col-span-1">
                    <ProductCard product={translatedProducts[3]} locale={params.locale} slug={params.slug} />
                  </div>
                  <div className="md:col-span-2 lg:col-span-3">
                    <ProductCard product={translatedProducts[4]} locale={params.locale} slug={params.slug} />
                  </div>
                </>
              )}
            </div>

            {/* 底部 CTA */}
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-gray-500 text-base md:text-lg mb-6">{t('ctaText')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`/${params.locale}/#materials`}
                  className="bg-[#1B5E3A] text-white px-6 md:px-8 py-3 md:py-4 font-semibold rounded hover:bg-[#145230] transition text-base md:text-lg shadow-lg hover:shadow-xl"
                >
                  {t('viewMaterials')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

    // 其他应用使用统一的新布局（和 home-appliances 风格一致）
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
          {/* Overview 文字 - 单栏宽幅布局 */}
          <p className="text-[#37474F] text-base md:text-lg leading-relaxed max-w-3xl mb-10">
            {data.description}
          </p>

          {/* 应用特点网格 - 视觉化卡片展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {data.details.map((detail, i) => (
              <div
                key={i}
                className="group relative overflow-hidden h-48 bg-gradient-to-br from-[#1B5E3A] to-[#00695C] rounded-lg hover:shadow-xl transition-all duration-300"
              >
                {/* 背景纹理 */}
                <div className="absolute inset-0 bg-black/10" />

                {/* 内容 */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="flex items-start gap-3">
                    <span className="text-white font-bold text-2xl flex-shrink-0">✓</span>
                    <p className="text-white text-sm md:text-base leading-relaxed">{detail}</p>
                  </div>

                  {/* 装饰性元素 */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部 CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-500 text-base md:text-lg mb-6">Need a material for this application?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/${params.locale}#materials`}
                className="bg-[#1B5E3A] text-white px-6 md:px-8 py-3 md:py-4 font-semibold rounded hover:bg-[#145230] transition text-base md:text-lg shadow-lg hover:shadow-xl"
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
function ProductCard({ product, locale, slug }: { product: { name: string; image: string; link: string | null }; locale: string; slug?: string }) {
  const cardContent = (
    <>
      {/* 产品图片 - 撑满整个卡片 */}
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* 半透明黑色遮罩 */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 产品名称 - 左上角，直接叠在图片上 */}
      <div className="absolute top-4 left-4 z-10">
        <h3
          className="text-white font-bold text-sm uppercase tracking-wider"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700
          }}
        >
          {product.name}
        </h3>
      </div>

      {/* 箭头 - 右下角，直接叠在图片上 - 只在有子页面时显示 */}
      {product.link && (
        <div className="absolute bottom-4 right-4 z-10">
          <svg
            className="w-8 h-8 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      )}
    </>
  );

  if (product.link) {
    return (
      <Link href={`/${locale}/applications/${slug}/${product.link}`} className="group relative overflow-hidden h-64 md:h-80 lg:h-96 block">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
      {cardContent}
    </div>
  );
}
