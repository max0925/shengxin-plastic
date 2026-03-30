// 通用滚动动画系统 - 使用 Intersection Observer + data 属性

'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // 查找所有带 data-animate 属性的元素
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.getAttribute('data-delay') || '0';

            // 添加延迟后触发动画
            setTimeout(() => {
              target.classList.add('animate-in');
            }, parseInt(delay));

            // 只触发一次，触发后停止观察
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.15, // 元素露出 15% 时触发
        rootMargin: '0px',
      }
    );

    // 观察所有需要动画的元素
    animatedElements.forEach((el) => observer.observe(el));

    // 清理函数
    return () => observer.disconnect();
  }, []);

  return null; // 这个组件不渲染任何内容，只负责设置观察器
}
