// About Us 统计数据组件 - 带动画

'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ target, duration = 2200 }: { target: number; duration?: number }) {
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
            // 使用 cubic-bezier(0.25, 0.46, 0.45, 0.94) 等效的丝滑缓动曲线
            const eased = progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            // 平滑递增，不要出现跳跃感
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} style={{ willChange: 'contents' }}>{count.toLocaleString()}</span>;
}

export default function AboutStats({
  foundedLabel,
  outputLabel,
  areaLabel,
}: {
  foundedLabel: string;
  outputLabel: string;
  areaLabel: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 md:gap-10 mb-8">
      {/* 成立年份 - 深绿色 */}
      <div className="flex-1 min-w-0">
        <div
          className="text-[#1B5E3A] text-4xl md:text-5xl font-extrabold mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          <AnimatedNumber target={1989} />
        </div>
        <p className="text-gray-500 text-sm md:text-base tracking-wide">{foundedLabel}</p>
      </div>

      {/* 年产量 - 琥珀金 */}
      <div className="flex-1 min-w-0">
        <div
          className="text-[#FF8F00] text-4xl md:text-5xl font-extrabold mb-3 flex items-baseline gap-1"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          <AnimatedNumber target={20000} />
          <span className="text-3xl md:text-4xl">⁺</span>
        </div>
        <p className="text-gray-500 text-sm md:text-base tracking-wide">{outputLabel}</p>
      </div>

      {/* 厂房面积 - 琥珀金 */}
      <div className="flex-1 min-w-0">
        <div
          className="text-[#FF8F00] text-4xl md:text-5xl font-extrabold mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          <AnimatedNumber target={11500} />
        </div>
        <p className="text-gray-500 text-sm md:text-base tracking-wide">{areaLabel}</p>
      </div>
    </div>
  );
}
