// Capabilities 板块 - 左侧深林绿文字区（40%）+ 右侧白色（60%）图片和数字

'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function AnimatedNumber({ target, duration = 3000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart 缓动
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const Capabilities: React.FC = () => {
  const t = useTranslations('capabilities');
  return (
    <section id="capabilities" className="relative overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[650px]">
        {/* 左侧绿色 2/5 = 40% */}
        <div className="lg:col-span-2 bg-[#1B5E3A] p-10 lg:p-12">
          <p className="text-white/50 text-xs tracking-[0.15em] uppercase mb-3">
            {t('label')}
          </p>
          <h2
            className="text-white text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.08em] leading-tight mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t('title')}
          </h2>
          <p className="text-white/50 text-sm mb-10">
            {t('subtitle')}
          </p>

          {/* 竖列布局，每项一行 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">01</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{t('production')}</h4>
                <p className="text-white/50 text-sm">
                  {t('productionDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">02</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{t('qcLab')}</h4>
                <p className="text-white/50 text-sm">
                  {t('qcLabDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">03</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{t('leadTime')}</h4>
                <p className="text-white/50 text-sm">
                  {t('leadTimeDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">04</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{t('export')}</h4>
                <p className="text-white/50 text-sm">
                  {t('exportDesc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">05</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{t('certs')}</h4>
                <p className="text-white/50 text-sm">{t('certsDesc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">06</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-0.5">{t('support')}</h4>
                <p className="text-white/50 text-sm">
                  {t('supportDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧 3/5：白色背景 + 地图 + 工厂图片 + 数字 */}
        <div className="lg:col-span-3 bg-white relative flex flex-col">
          {/* 地图背景层：撑满右侧上部，半透明 */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/map.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain opacity-15"
            />

            {/* 工厂图片 */}
            <div className="absolute bottom-16 right-6 w-[55%] z-10">
              <img src="/factory.jpg" alt="Shengxin factory" className="w-full" />
            </div>
          </div>

          {/* 数字动画条 - 白色背景，大号彩色数字 */}
          <div className="flex bg-white">
            <div className="px-8 py-6 flex-1">
              <span
                className="text-[#1B5E3A] text-5xl lg:text-6xl font-extrabold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <AnimatedNumber target={1989} duration={3000} />
              </span>
              <p className="text-gray-500 text-sm mt-1 tracking-wide">{t('established')}</p>
            </div>
            <div className="px-8 py-6 flex-1">
              <span
                className="text-[#FF8F00] text-5xl lg:text-6xl font-extrabold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <AnimatedNumber target={20000} duration={3000} />
                <span className="text-4xl">⁺</span>
              </span>
              <p className="text-gray-500 text-sm mt-1 tracking-wide">{t('annualOutput')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
