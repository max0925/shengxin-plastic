// About Us 页面

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('about');

  return (
    <main className="bg-white">
      {/* Hero 区域 - 深绿色背景 */}
      <section className="bg-[#1B5E3A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            {t('title')}
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            <span>{t('breadcrumbAbout')}</span>
            <span>›</span>
            <Link href={`/${params.locale}`} className="hover:text-white transition">
              {t('breadcrumbBack')}
            </Link>
          </nav>
        </div>
      </section>

      {/* 公司简介区 - 白色背景 */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* 左侧：文字区 */}
            <div>
              {/* 小标签 */}
              <div className="text-[#00695C] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t('label')}
              </div>

              {/* 标题 */}
              <h2
                className="text-[#1B5E3A] text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 uppercase leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {t('mainTitle')}
              </h2>

              {/* 三个数据 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-[#FF8F00] text-3xl font-bold mb-1">37+</div>
                  <div className="text-[#37474F] text-xs uppercase tracking-wide">{t('yearsExperience')}</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-[#FF8F00] text-3xl font-bold mb-1">20,000+</div>
                  <div className="text-[#37474F] text-xs uppercase tracking-wide">{t('annualOutput')}</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-[#FF8F00] text-3xl font-bold mb-1">500+</div>
                  <div className="text-[#37474F] text-xs uppercase tracking-wide">{t('customersServed')}</div>
                </div>
              </div>

              {/* 段落 */}
              <div className="space-y-4 text-[#37474F] text-base leading-relaxed mb-8">
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
              </div>

              {/* Learn More 按钮 */}
              <Link
                href={`/${params.locale}/#contact`}
                className="inline-block bg-[#FF8F00] text-white px-8 py-3 font-semibold rounded hover:bg-[#F57C00] transition"
              >
                {t('learnMore')}
              </Link>
            </div>

            {/* 右侧：工厂图片 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/factory.jpg"
                alt="Factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势区 - 深绿色背景 */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#1B5E3A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* 左侧：标题和进度条 */}
            <div>
              <h2
                className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 uppercase leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {t('excellenceTitle')}
              </h2>

              {/* 进度条 1: Quality */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80 text-sm font-bold uppercase tracking-wider">
                    {t('qualityLabel')}
                  </span>
                  <span className="text-white text-2xl font-bold">{t('qualityPercent')}</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF8F00] rounded-full" style={{ width: '99.8%' }}></div>
                </div>
              </div>

              {/* 进度条 2: On-Time Delivery */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80 text-sm font-bold uppercase tracking-wider">
                    {t('deliveryLabel')}
                  </span>
                  <span className="text-white text-2xl font-bold">{t('deliveryPercent')}</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF8F00] rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              {/* 认证 */}
              <div className="text-white/70 text-xs uppercase tracking-wide mb-6">
                {t('certifications')}
              </div>

              {/* 优势文字 */}
              <p className="text-white/90 text-base leading-relaxed">
                {t('excellenceText')}
              </p>
            </div>

            {/* 右侧：两张工厂内部照片 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="/unnamed-1.jpg"
                  alt="Factory Interior 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="/unnamed-2.jpg"
                  alt="Factory Interior 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系 CTA - 白色背景 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1C2B25] mb-8">
            {t('ctaTitle')}
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${params.locale}/#contact`}
              className="bg-[#FF8F00] text-white px-8 py-4 font-semibold rounded hover:bg-[#F57C00] transition text-lg"
            >
              {t('requestQuote')}
            </Link>
            <Link
              href={`/${params.locale}/#contact`}
              className="border-2 border-[#1B5E3A] text-[#1B5E3A] px-8 py-4 font-semibold rounded hover:bg-[#1B5E3A] hover:text-white transition text-lg"
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
