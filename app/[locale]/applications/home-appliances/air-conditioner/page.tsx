// Air Conditioner 详情页面

import Link from 'next/link';
import { useTranslations } from 'next-intl';

// 零部件数据 - 使用 key 来对应翻译
const components = [
  {
    image: '/HomeAppliances/A1.jpg',
    nameKey: 'a1Name',
    descKey: 'a1Desc',
  },
  {
    image: '/HomeAppliances/A2.jpg',
    nameKey: 'a2Name',
    descKey: 'a2Desc',
  },
  {
    image: '/HomeAppliances/A3.jpg',
    nameKey: 'a3Name',
    descKey: 'a3Desc',
  },
  {
    image: '/HomeAppliances/A4.jpg',
    nameKey: 'a4Name',
    descKey: 'a4Desc',
  },
  {
    image: '/HomeAppliances/A5.jpg',
    nameKey: 'a5Name',
    descKey: 'a5Desc',
  },
];

export default function AirConditionerPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('airConditioner');

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
            <Link href={`/${params.locale}/applications/home-appliances`} className="hover:text-[#1B5E3A] transition">
              {t('homeAppliances')}
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
                {t('title')}
              </h1>
              <div className="space-y-4 text-[#37474F] leading-relaxed">
                <p className="text-base md:text-lg">
                  {t('description1')}
                </p>
                <p className="text-base md:text-lg">
                  {t('description2')}
                </p>
                <p className="text-base md:text-lg">
                  {t('description3')}
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
              href={`/${params.locale}/#contact`}
              className="bg-[#FF8F00] text-white px-8 py-4 font-semibold rounded hover:bg-[#F57C00] transition text-lg"
            >
              {t('requestQuote')}
            </Link>
            <Link
              href={`/${params.locale}/applications/home-appliances`}
              className="border-2 border-[#1B5E3A] text-[#1B5E3A] px-8 py-4 font-semibold rounded hover:bg-[#1B5E3A] hover:text-white transition text-lg"
            >
              {t('backToAppliances')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
