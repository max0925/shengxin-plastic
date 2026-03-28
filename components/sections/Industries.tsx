'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

/**
 * 行业应用组件
 * - 展示 5 大应用行业
 * - Tab 切换交互
 * - 左侧图片，右侧文字介绍
 */
const Industries: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 行业数据
  const industries = [
    {
      name: '汽车行业',
      nameEn: 'Automotive',
      icon: '🚗',
      description:
        '为汽车行业提供轻量化、高强度的改性塑料解决方案，应用于保险杠、仪表板、门板、发动机周边零部件等。产品通过 IATF16949 认证，符合主机厂严苛的质量要求。',
      features: [
        '轻量化设计，降低油耗',
        '优异的耐候性和耐化学性',
        '满足内饰 VOC 和气味要求',
        '通过主机厂认证体系',
      ],
    },
    {
      name: '家电行业',
      nameEn: 'Home Appliances',
      icon: '🏠',
      description:
        '提供高光泽、高韧性、阻燃等级高的改性塑料，广泛应用于冰箱、洗衣机、空调、小家电等产品外壳及内部结构件，满足家电行业对外观和安全性的双重要求。',
      features: [
        '优异的表面光泽和质感',
        '良好的尺寸稳定性',
        '阻燃等级达 UL94 V-0',
        '环保无卤阻燃方案',
      ],
    },
    {
      name: '电子电器',
      nameEn: 'Electronics',
      icon: '📱',
      description:
        '为电子电器行业提供高精密、高性能的改性材料，应用于连接器、开关、插座、手机配件等精密部件，具有优异的电气性能和加工稳定性。',
      features: [
        '优异的电气绝缘性能',
        '高精密成型加工性',
        '良好的耐热老化性能',
        '符合 RoHS 和 REACH 法规',
      ],
    },
    {
      name: '新能源',
      nameEn: 'New Energy',
      icon: '🔋',
      description:
        '针对新能源汽车、光伏、储能等新兴领域，提供耐高温、高阻燃、高绝缘的特种改性材料，满足动力电池包、充电桩、光伏组件等应用的严格要求。',
      features: [
        '耐高温可达 150°C 以上',
        '阻燃等级 UL94 V-0',
        '优异的电气绝缘性能',
        '低烟无卤环保材料',
      ],
    },
    {
      name: '建筑建材',
      nameEn: 'Construction',
      icon: '🏗️',
      description:
        '提供耐候、耐老化、高强度的改性塑料，应用于门窗型材、管材管件、装饰板材等建筑领域，具有优异的户外耐候性和长期使用稳定性。',
      features: [
        '优异的户外耐候性',
        '长期使用不变色',
        '良好的机械强度',
        '环保健康无污染',
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="行业应用" subtitle="Industry Applications" />

        {/* Tab 切换按钮 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-bg-section text-text-body hover:bg-secondary hover:text-white'
              }`}
            >
              <span className="mr-2">{industry.icon}</span>
              {industry.name}
            </button>
          ))}
        </div>

        {/* 行业内容展示 */}
        <div className="bg-bg-card rounded-2xl shadow-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧图片占位 */}
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-gradient-to-br from-bg-section to-bg-page rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-7xl mb-4">
                    {industries[activeIndex].icon}
                  </div>
                  <p className="text-sm text-text-body opacity-60">
                    {industries[activeIndex].name}应用场景图片<br />
                    建议尺寸：800x600px
                  </p>
                </div>
              </div>
            </div>

            {/* 右侧文字内容 */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-text-dark mb-2">
                  {industries[activeIndex].name}
                </h3>
                <p className="text-lg text-secondary font-medium">
                  {industries[activeIndex].nameEn}
                </p>
              </div>

              <p className="text-text-body leading-relaxed text-lg">
                {industries[activeIndex].description}
              </p>

              {/* 特性列表 */}
              <div className="space-y-3">
                <h4 className="font-bold text-text-dark">核心优势：</h4>
                <ul className="space-y-2">
                  {industries[activeIndex].features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-text-body"
                    >
                      <span className="text-secondary mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 了解更多按钮 */}
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-primary transition-all duration-300 hover:shadow-lg"
              >
                了解更多解决方案
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
