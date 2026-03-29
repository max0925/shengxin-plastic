// About Us 统计数据组件 - 带动画

'use client';

import { useEffect, useRef, useState } from 'react';

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

export default function AboutStats({
  yearsText,
  outputText,
  customersText,
}: {
  yearsText: string;
  outputText: string;
  customersText: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="text-center sm:text-left">
        <div className="text-[#FF8F00] text-3xl font-bold mb-1">
          <AnimatedNumber target={37} />+
        </div>
        <div className="text-[#37474F] text-xs uppercase tracking-wide">{yearsText}</div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-[#FF8F00] text-3xl font-bold mb-1">
          <AnimatedNumber target={20000} />+
        </div>
        <div className="text-[#37474F] text-xs uppercase tracking-wide">{outputText}</div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-[#FF8F00] text-3xl font-bold mb-1">
          <AnimatedNumber target={500} />+
        </div>
        <div className="text-[#37474F] text-xs uppercase tracking-wide">{customersText}</div>
      </div>
    </div>
  );
}
