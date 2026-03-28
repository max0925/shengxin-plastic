'use client';

import React, { useEffect, useState, useRef } from 'react';

/**
 * 数据展示组件
 * - 深林绿背景，白色文字
 * - 4 个关键数据的展示
 * - 数字计数动画效果（当进入视口时触发）
 */
const DataShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 数据配置
  const stats = [
    {
      value: 200000,
      suffix: '+',
      label: '年产能',
      labelEn: 'Annual Capacity',
      unit: '吨',
    },
    {
      value: 500,
      suffix: '+',
      label: '服务客户',
      labelEn: 'Customers',
      unit: '家',
    },
    {
      value: 50,
      suffix: '+',
      label: '研发专利',
      labelEn: 'Patents',
      unit: '项',
    },
    {
      value: 99.8,
      suffix: '%',
      label: '产品合格率',
      labelEn: 'Quality Rate',
      unit: '',
      isDecimal: true,
    },
  ];

  // 监听滚动，当组件进入视口时触发动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-primary text-white">
      <div className="container-custom">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            用数据说话
          </h2>
          <p className="text-lg text-white text-opacity-80">
            Our Achievements in Numbers
          </p>
        </div>

        {/* 数据网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <CountUpCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* 底部说明 */}
        <div className="text-center mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="text-sm text-white text-opacity-60">
            数据截至 2025 年 12 月 | Data as of December 2025
          </p>
        </div>
      </div>
    </section>
  );
};

// 单个数据卡片组件（带计数动画）
interface CountUpCardProps {
  value: number;
  suffix: string;
  label: string;
  labelEn: string;
  unit: string;
  isDecimal?: boolean;
  isVisible: boolean;
  delay: number;
}

const CountUpCard: React.FC<CountUpCardProps> = ({
  value,
  suffix,
  label,
  labelEn,
  unit,
  isDecimal = false,
  isVisible,
  delay,
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  // 数字计数动画
  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // 动画持续时间
      const steps = 60; // 动画步数
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(timer);
        } else {
          setCurrentValue(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  // 格式化数字
  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <div className="text-center">
      {/* 大数字 */}
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-3">
        {formatNumber(currentValue)}
        {suffix}
      </div>

      {/* 单位 */}
      {unit && (
        <div className="text-xl md:text-2xl text-white text-opacity-80 mb-2">
          {unit}
        </div>
      )}

      {/* 标签 */}
      <div className="text-lg md:text-xl font-medium text-white mb-1">
        {label}
      </div>
      <div className="text-sm text-white text-opacity-70">{labelEn}</div>
    </div>
  );
};

export default DataShowcase;
