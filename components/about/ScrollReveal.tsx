// 滚动触发动画组件

'use client';

import { useEffect, useRef, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 添加延迟后触发动画
          setTimeout(() => {
            element.classList.add('reveal-active');
          }, delay);
        }
      },
      {
        threshold: 0.15, // 元素露出 15% 就开始动画
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <>
      <div ref={ref} className={`reveal reveal-${animation} ${className}`}>
        {children}
      </div>

      <style jsx global>{`
        /* 初始状态 */
        .reveal {
          opacity: 0;
          will-change: transform, opacity;
        }

        .reveal-fade-up {
          transform: translateY(40px);
        }

        .reveal-fade-left {
          transform: translateX(-40px);
        }

        .reveal-fade-right {
          transform: translateX(40px);
        }

        .reveal-scale-in {
          transform: scale(0.95);
        }

        /* 激活状态 */
        .reveal-active {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* 确保 transform 正确重置 */
        .reveal-active.reveal-fade-up {
          transform: translateY(0);
        }

        .reveal-active.reveal-fade-left {
          transform: translateX(0);
        }

        .reveal-active.reveal-fade-right {
          transform: translateX(0);
        }

        .reveal-active.reveal-scale-in {
          transform: scale(1);
        }
      `}</style>
    </>
  );
}
