// About Us 页面

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import AboutStats from '@/components/about/AboutStats';
import ProgressBar from '@/components/about/ProgressBar';
import ScrollReveal from '@/components/about/ScrollReveal';

export const dynamic = 'force-dynamic';

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('about');

  return (
    <main className="bg-white">
      {/* Hero 区域 - factory.jpg 背景 + 遮罩 */}
      <section className="relative h-[65vh] min-h-[550px]">
        {/* 背景图片 */}
        <img
          src="/factory.jpg"
          alt="Factory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* 暗化遮罩 */}
        <div className="absolute inset-0 bg-black/65" />

        {/* 内容 */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-6 text-center">
          <ScrollReveal animation="fade-up" delay={0}>
            <h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              {t('title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <nav className="flex items-center justify-center gap-3">
              <span className="text-white/70 text-sm">{t('breadcrumbAbout')}</span>
              <span className="text-white/70">›</span>
              <Link
                href={`/${params.locale}`}
                className="text-white/70 hover:text-white underline text-sm transition"
              >
                {t('breadcrumbBack')}
              </Link>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* 公司简介区 - 白色背景 */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* 左侧：文字区 */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
            {/* 小标签 */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="text-[#00695C] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                {t('label')}
              </div>
            </ScrollReveal>

            {/* 标题 */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h2
                className="text-[#1B5E3A] text-3xl lg:text-4xl font-extrabold mb-8 leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {t('mainTitle')}
              </h2>
            </ScrollReveal>

            {/* 段落 */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="space-y-4 text-[#37474F] text-base leading-relaxed mb-8">
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
              </div>
            </ScrollReveal>

            {/* 分隔线 */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="w-16 h-0.5 bg-[#1B5E3A] mb-8"></div>
            </ScrollReveal>

            {/* 数字统计区域 */}
            <ScrollReveal animation="fade-up" delay={400}>
              <AboutStats
                foundedLabel={t('statFounded')}
                outputLabel={t('statOutput')}
                areaLabel={t('statArea')}
              />
            </ScrollReveal>

            {/* Contact Us 按钮 */}
            <ScrollReveal animation="fade-up" delay={500}>
              <Link
                href={`/${params.locale}/contact-us`}
                className="inline-block bg-[#1B5E3A] text-white px-8 py-3 font-semibold rounded hover:bg-[#00695C] transition w-fit"
              >
                {t('contactUs')}
              </Link>
            </ScrollReveal>
          </div>

          {/* 右侧：工厂图片区域 - 带装饰色块 */}
          <div className="relative py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
            <ScrollReveal animation="fade-right" delay={200}>
              {/* 工厂图片 */}
              <div className="relative w-full aspect-[4/3]">
                {/* 绿色装饰色块 - 左上角背后露出 */}
                <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-36 h-48 md:w-40 md:h-56 bg-[#006B3F] opacity-90 z-0"></div>

                {/* 图片本体 */}
                <div className="relative z-10 w-full h-full overflow-hidden shadow-lg">
                  <img
                    src="/unnamed-3.jpg"
                    alt="Factory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 核心优势区 - 深绿色背景 */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#1B5E3A]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* 左侧：标题和进度条 */}
            <div>
              {/* 标题 - 带装饰线 */}
              <ScrollReveal animation="fade-up" delay={0}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-1 h-16 bg-[#FF8F00] rounded-full"></div>
                  <h2
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                  >
                    {t('excellenceTitle')}
                  </h2>
                </div>
              </ScrollReveal>

              {/* 进度条动画 */}
              <ScrollReveal animation="fade-up" delay={100}>
                <ProgressBar label={t('qualityLabel')} value={99.8} color="orange" />
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={200}>
                <ProgressBar label={t('deliveryLabel')} value={95} color="orange" />
              </ScrollReveal>

              {/* 认证资质 - Badge 样式 */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="mb-8">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {['ISO 9001', 'SGS', 'ROHS', 'REACH', 'UL'].map((cert) => (
                      <span
                        key={cert}
                        className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 优势文字 */}
              <ScrollReveal animation="fade-up" delay={400}>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  {t('excellenceText')}
                </p>
              </ScrollReveal>
            </div>

            {/* 右侧：单张工厂照片 */}
            <ScrollReveal animation="scale-in" delay={200}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/unnamed-2.jpg"
                    alt="Factory Products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 联系 CTA - 白色背景 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <ScrollReveal animation="fade-up" delay={0}>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1C2B25] mb-8">
              {t('ctaTitle')}
            </h3>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/${params.locale}/contact-us`}
                className="bg-[#FF8F00] text-white px-8 py-4 font-semibold rounded hover:bg-[#F57C00] transition text-lg"
              >
                {t('requestQuote')}
              </Link>
              <Link
                href={`/${params.locale}/contact-us`}
                className="border-2 border-[#1B5E3A] text-[#1B5E3A] px-8 py-4 font-semibold rounded hover:bg-[#1B5E3A] hover:text-white transition text-lg"
              >
                {t('contactUs')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
