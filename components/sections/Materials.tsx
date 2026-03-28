// Materials 板块 - 展示材料和改性能力

'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const materials = [
  { name: 'PA6', descKey: 'PA6', image: '/PA6.jpg' },
  { name: 'PA66', descKey: 'PA66', image: '/PA66pellets.jpg' },
  { name: 'PP', descKey: 'PP', image: '/PPpellets.jpeg' },
  { name: 'ABS', descKey: 'ABS', image: '/ABSpellets.jpeg' },
  { name: 'PS', descKey: 'PS', image: '/PS.jpg' },
  { name: 'PE', descKey: 'PE', image: '/PE.jpg' },
  { name: 'PBT', descKey: 'PBT', image: '/PBT.jpg' },
  { name: 'PC/ABS', descKey: 'PC_ABS', image: '/PCpellets.jpeg' },
];

export default function Materials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('materials');
  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="materials">
      {/* 绿色背景上半部分 */}
      <div className="bg-[#1B5E3A] pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-10 h-[3px] bg-white/60 mb-3" />
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3">{t('label')}</p>
          <h2 className="text-white text-3xl font-extrabold uppercase tracking-wide leading-tight max-w-lg">
            {t('title')}
          </h2>
        </div>
      </div>

      {/* 卡片区域 - 用负margin往上覆盖绿色区域 */}
      <div className="max-w-7xl mx-auto px-6 -mt-24">
        <div className="relative flex items-center">
          {/* 左箭头 */}
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 text-[#1B5E3A] hover:text-[#00695C] transition mr-4 p-2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* 滑页内容 */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex-1"
          >
            {materials.map((m) => (
              <div key={m.name} className="snap-start flex-shrink-0 w-[200px]">
                {/* 图片区域 - 所有卡片完全一样的尺寸 */}
                <div className="w-[200px] h-[200px] overflow-hidden bg-gray-700">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="pt-3">
                  <h4 className="font-bold text-sm text-[#1C2B25] uppercase tracking-wide">
                    {m.name}
                  </h4>
                  <p className="text-xs text-[#37474F] mt-1 leading-relaxed">{t(`items.${m.descKey}.desc`)}</p>
                  <a
                    href="#"
                    className="text-[#1B5E3A] text-xs font-semibold mt-2 inline-block hover:underline"
                  >
                    {t('readMore')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 右箭头 */}
          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 text-[#1B5E3A] hover:text-[#00695C] transition ml-4 p-2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modification Capabilities 部分 */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 bg-white">
        <h3 className="text-lg font-bold text-text-dark mb-6">{t('capabilitiesLabel')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 卡片 1: Mechanical & Structural */}
          <div className="bg-white rounded-lg overflow-hidden h-full">
            <div className="h-1 bg-[#1B5E3A]"></div>
            <div className="p-6">
              <h4 className="font-bold text-text-dark mb-4">{t('mechanical')}</h4>
              <ul className="space-y-2 text-sm text-text-body">
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('mechanicalItems.glass')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('mechanicalItems.impact')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('mechanicalItems.highTemp')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('mechanicalItems.escr')}
                </li>
              </ul>
            </div>
          </div>

          {/* 卡片 2: Safety & Protection */}
          <div className="bg-white rounded-lg overflow-hidden h-full">
            <div className="h-1 bg-[#00695C]"></div>
            <div className="p-6">
              <h4 className="font-bold text-text-dark mb-4">{t('safety')}</h4>
              <ul className="space-y-2 text-sm text-text-body">
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('safetyItems.flame')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('safetyItems.antiStatic')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('safetyItems.antibacterial')}
                </li>
              </ul>
            </div>
          </div>

          {/* 卡片 3: Weathering & Durability */}
          <div className="bg-white rounded-lg overflow-hidden h-full">
            <div className="h-1 bg-[#FF8F00]"></div>
            <div className="p-6">
              <h4 className="font-bold text-text-dark mb-4">{t('weathering')}</h4>
              <ul className="space-y-2 text-sm text-text-body">
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('weatheringItems.uv')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('weatheringItems.weather')}
                </li>
              </ul>
            </div>
          </div>

          {/* 卡片 4: Appearance & Custom */}
          <div className="bg-white rounded-lg overflow-hidden h-full">
            <div className="h-1 bg-[#546E7A]"></div>
            <div className="p-6">
              <h4 className="font-bold text-text-dark mb-4">{t('appearance')}</h4>
              <ul className="space-y-2 text-sm text-text-body">
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('appearanceItems.highGloss')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('appearanceItems.antiSqueak')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('appearanceItems.color')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('appearanceItems.custom')}
                </li>
                <li className="flex items-start">
                  <span className="text-[#00695C] mr-2">✓</span>
                  {t('appearanceItems.oem')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
