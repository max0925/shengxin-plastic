// Hero 板块 - hero.png 背景 + 左右渐变遮罩

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useTranslations, useLocale } from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-[#1B5E3A]">
      {/* 背景图 - 用 img 标签最可靠，优先加载 */}
      <img
        src="/hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
      />

      {/* 黑色半透明遮罩 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* 内容层 */}
      <div className="relative z-10 h-full flex items-center text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full">
          {/* 文字内容靠左，最多占 60% 宽度 */}
          <div className="max-w-2xl">
            {/* Small Label */}
            <div className="text-xs md:text-sm tracking-widest-custom text-white text-opacity-70 mb-4 animate-fade-in-up">
              {t('company')}
            </div>

            {/* Main Heading */}
            <h1 className={`font-bold text-white mb-6 md:mb-8 font-title animate-fade-in-up delay-100 ${locale === 'zh' ? 'text-3xl md:text-5xl lg:text-[4.5rem] leading-[1.2] tracking-[0.05em]' : 'text-3xl md:text-5xl lg:text-7xl'}`}>
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className={`text-white text-opacity-90 mb-8 md:mb-12 animate-fade-in-up delay-200 ${locale === 'zh' ? 'text-base md:text-xl lg:text-2xl leading-relaxed tracking-wide' : 'text-base md:text-lg lg:text-xl'}`}>
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-in-up delay-300">
              <Button href="#materials" variant="primary" size="large" className="bg-[#1B5E3A] border-[#1B5E3A] hover:bg-[#00695C] hover:border-[#00695C] w-full sm:w-auto">
                {t('viewMaterials')}
              </Button>
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md bg-[#FF8F00] text-white hover:bg-[#F57C00] transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
              >
                {t('getQuote')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 向下滚动提示箭头 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
