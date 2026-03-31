// Pump & Valve Bodies 详情页面

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

// 零部件数据 - 使用 key 来对应翻译
const components = [
  {
    image: '/industrial-parts/C1.jpg',
    nameKey: 'c1Name',
    descKey: 'c1Desc',
  },
  {
    image: '/industrial-parts/C3.jpg',
    nameKey: 'c3Name',
    descKey: 'c3Desc',
  },
];

export default async function PumpValveBodiesPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('pumpValveBodies');

  return (
    <main className="bg-white">
      {/* 面包屑导航 */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${params.locale}`} className="hover:text-[#1B5E3A] transition">
              {t('home')}
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/#applications`} className="hover:text-[#1B5E3A] transition">
              {t('applications')}
            </Link>
            <span>/</span>
            <Link href={`/${params.locale}/applications/industrial-parts`} className="hover:text-[#1B5E3A] transition">
              {t('industrialParts')}
            </Link>
            <span>/</span>
            <span className="text-[#1B5E3A] font-semibold">{t('title')}</span>
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
                src="/industrial-parts/valve.jepg.jpeg"
                alt="Pump & Valve Bodies"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 右侧：产品介绍 */}
            <div>
              <h1
                className="text-4xl md:text-5xl font-extrabold text-[#1B5E3A] mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t('title')}
              </h1>
              <div className="space-y-4 text-[#37474F] leading-relaxed">
                <p className="text-base md:text-lg">
                  {t('description')}
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
            {t('keyComponents')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* 零部件图片 */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={component.image}
                    alt={t(component.nameKey)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 零部件信息 */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C2B25] mb-2">
                    {t(component.nameKey)}
                  </h3>
                  <p className="text-sm text-[#37474F] leading-relaxed">{t(component.descKey)}</p>
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
            {t('ctaTitle')}
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            {t('ctaText')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${params.locale}/applications/industrial-parts`}
              className="bg-[#1B5E3A] text-white px-8 py-4 font-semibold rounded hover:bg-[#145230] transition text-lg shadow-lg hover:shadow-xl"
            >
              {t('backToIndustrialParts')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
