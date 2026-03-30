// Materials 板块 - 展示材料和改性能力

'use client';

import { useRef, useEffect, useState } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 复制卡片以实现无限滚动
  const duplicatedMaterials = [...materials, ...materials, ...materials];

  // 初始化滚动位置到中间组
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 160 + 12; // 卡片宽度 + gap
      scrollRef.current.scrollLeft = materials.length * cardWidth;
    }
  }, []);

  // 监听手动滚动，实现无限循环（仅在用户停止滚动后执行）
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // 如果用户正在拖拽，不执行边界重置
      if (isDragging) return;

      // 清除之前的定时器
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // 延迟执行边界检查，只在用户停止滚动后执行
      scrollTimeoutRef.current = setTimeout(() => {
        const cardWidth = 160 + 12;
        const singleSetWidth = materials.length * cardWidth;

        // 当滚动到边界时，无缝重置位置
        if (scrollContainer.scrollLeft >= singleSetWidth * 2 - 50) {
          scrollContainer.scrollLeft = singleSetWidth;
        } else if (scrollContainer.scrollLeft <= 50) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
      }, 150); // 150ms 延迟，确保用户已停止滚动
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isDragging]);

  // 箭头按钮滚动
  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      // 根据屏幕大小计算卡片宽度
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 160 : 200; // 卡片宽度
      const gap = isMobile ? 12 : 16; // gap 间距
      const scrollDistance = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  // 鼠标拖拽支持
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    // 清除滚动定时器，防止在拖拽时触发边界重置
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // 降低滚动速度倍数，提升控制感
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // 触摸滑动支持（移动端）
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    // 清除滚动定时器，防止在触摸时触发边界重置
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // 降低滚动速度倍数，提升控制感
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="materials">
      {/* 绿色背景上半部分 */}
      <div className="bg-[#1B5E3A] pt-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="w-10 h-[3px] bg-white/60 mb-3" data-animate="fade-up" data-delay="0" />
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-3" data-animate="fade-up" data-delay="100">{t('label')}</p>
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide leading-tight max-w-lg" data-animate="fade-up" data-delay="200">
            {t('title')}
          </h2>
        </div>
      </div>

      {/* 卡片区域 - 用负margin往上覆盖绿色区域 */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 md:-mt-24">
        <div className="relative flex items-center">
          {/* 左箭头 */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex flex-shrink-0 text-[#1B5E3A] hover:text-[#00695C] transition mr-4 p-2"
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

          {/* 滑页内容 - 手动滚动轮播 */}
          <div
            ref={scrollRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide flex-1 cursor-grab active:cursor-grabbing"
            onMouseLeave={handleMouseUpOrLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollBehavior: isDragging ? 'auto' : 'smooth',
            }}
          >
            {duplicatedMaterials.map((m, index) => (
              <div
                key={`${m.name}-${index}`}
                className="flex-shrink-0 w-[160px] md:w-[200px]"
              >
                {/* 图片区域 - 所有卡片完全一样的尺寸 */}
                <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] overflow-hidden bg-gray-700">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                </div>
                <div className="pt-3">
                  <h4 className="font-bold text-sm text-[#1C2B25] uppercase tracking-wide">
                    {m.name}
                  </h4>
                  <p className="text-xs text-[#37474F] mt-1 leading-relaxed">{t(`items.${m.descKey}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 右箭头 */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex flex-shrink-0 text-[#1B5E3A] hover:text-[#00695C] transition ml-4 p-2"
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-12 bg-white">
        <h3 className="text-lg font-bold text-text-dark mb-6" data-animate="fade-up" data-delay="0">{t('capabilitiesLabel')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 卡片 1: Mechanical & Structural */}
          <div className="bg-white rounded-lg overflow-hidden h-full" data-animate="scale-in" data-delay="0">
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
          <div className="bg-white rounded-lg overflow-hidden h-full" data-animate="scale-in" data-delay="100">
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
          <div className="bg-white rounded-lg overflow-hidden h-full" data-animate="scale-in" data-delay="200">
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
          <div className="bg-white rounded-lg overflow-hidden h-full" data-animate="scale-in" data-delay="300">
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
