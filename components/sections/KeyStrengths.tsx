import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

/**
 * 核心优势组件
 * - 展示企业的 4 大核心竞争力
 * - 4 列网格布局
 * - 每张卡片包含图标、数字、标题和描述
 */
const KeyStrengths: React.FC = () => {
  // 核心优势数据
  const strengths = [
    {
      icon: '🏭',
      number: '20万+',
      title: '年产能（吨）',
      titleEn: 'Annual Capacity',
      description: '拥有现代化生产基地，配备先进的改性生产线，年产能超过 20 万吨',
    },
    {
      icon: '🤝',
      number: '500+',
      title: '服务客户',
      titleEn: 'Customers Served',
      description: '为全球 500 多家知名企业提供高品质改性塑料产品和解决方案',
    },
    {
      icon: '🔬',
      number: '50+',
      title: '研发专利',
      titleEn: 'R&D Patents',
      description: '拥有专业研发团队，获得 50 余项国家发明专利和实用新型专利',
    },
    {
      icon: '✓',
      number: '99.8%',
      title: '产品合格率',
      titleEn: 'Quality Rate',
      description: '严格的质量管理体系，通过 ISO9001、IATF16949 等国际认证',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="为什么选择我们" subtitle="Why Choose Us" />

        {/* 优势卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengths.map((strength, index) => (
            <Card
              key={index}
              className={`text-center animate-fade-in-up delay-${index * 100}`}
            >
              {/* 图标 */}
              <div className="text-5xl mb-4">{strength.icon}</div>

              {/* 大数字 */}
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {strength.number}
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-bold text-text-dark mb-2">
                {strength.title}
              </h3>
              <p className="text-sm text-secondary font-medium mb-4">
                {strength.titleEn}
              </p>

              {/* 描述 */}
              <p className="text-sm text-text-body leading-relaxed">
                {strength.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStrengths;
