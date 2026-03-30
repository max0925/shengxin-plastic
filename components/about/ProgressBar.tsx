// 带动画的进度条组件

'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProgressBar({
  label,
  value,
  color = 'orange',
}: {
  label: string;
  value: number;
  color?: 'orange' | 'green';
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const [showShimmer, setShowShimmer] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // 触发 CSS transform 动画
          setIsVisible(true);

          // 数字递增动画用 requestAnimationFrame
          const duration = 2200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // 使用 cubic-bezier(0.25, 0.46, 0.45, 0.94) 等效的缓动曲线
            const eased = progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            // 只更新数字显示，不触发 layout
            setDisplayValue(eased * value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // 动画完成后触发 shimmer 效果
              setTimeout(() => setShowShimmer(true), 100);
              setTimeout(() => setShowShimmer(false), 800);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const gradientClass =
    color === 'orange'
      ? 'bg-gradient-to-r from-[#F57C00] to-[#FF8F00]'
      : 'bg-gradient-to-r from-[#00695C] to-[#1B5E3A]';

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-white/90 text-sm font-bold uppercase tracking-wider">
          {label}
        </span>
        <span
          className="text-white text-3xl font-extrabold"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            willChange: 'contents'
          }}
        >
          {displayValue.toFixed(1)}%
        </span>
      </div>
      <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          ref={barRef}
          className={`h-full rounded-full ${gradientClass} shadow-lg relative`}
          style={{
            transform: `scaleX(${isVisible ? value / 100 : 0})`,
            transformOrigin: 'left',
            transition: 'transform 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            boxShadow: '0 0 20px rgba(255, 143, 0, 0.4)',
            willChange: 'transform',
          }}
        >
          {/* 发光效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Shimmer 光泽扫过效果 */}
          {showShimmer && (
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{
                animation: 'shimmer 0.7s ease-out',
                willChange: 'transform',
              }}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
