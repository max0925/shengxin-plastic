import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

/**
 * 产品矩阵组件
 * - 展示 6 大产品类别
 * - 3x2 网格布局
 * - 每个产品卡片包含图片占位、标题、描述和链接
 */
const Products: React.FC = () => {
  // 产品数据
  const products = [
    {
      name: '改性 PP',
      nameEn: 'Modified PP',
      description:
        '高强度、高韧性聚丙烯材料，广泛应用于汽车零部件、家电外壳等领域',
      icon: '🧪',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
    },
    {
      name: '改性 ABS',
      nameEn: 'Modified ABS',
      description:
        '优异的冲击强度和表面光泽，适用于电子电器、日用品等高品质外观件',
      icon: '⚡',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
    },
    {
      name: '改性 PA',
      nameEn: 'Modified PA',
      description:
        '高耐热、高强度尼龙材料，满足发动机周边、结构件等苛刻工况需求',
      icon: '🔥',
      color: 'bg-gradient-to-br from-red-50 to-red-100',
    },
    {
      name: '改性 PC',
      nameEn: 'Modified PC',
      description:
        '优异的透明性和耐候性，应用于汽车灯具、电子面板、安全防护等领域',
      icon: '💎',
      color: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
    },
    {
      name: '改性 PBT',
      nameEn: 'Modified PBT',
      description:
        '优良的电气性能和尺寸稳定性，适用于电子连接器、开关等精密部件',
      icon: '⚙️',
      color: 'bg-gradient-to-br from-green-50 to-green-100',
    },
    {
      name: '特种工程塑料',
      nameEn: 'Special Engineering Plastics',
      description:
        '高性能改性材料，包括 PC/ABS、PA/ABS 等合金材料，满足特殊应用需求',
      icon: '🚀',
      color: 'bg-gradient-to-br from-amber-50 to-amber-100',
    },
  ];

  return (
    <section id="products" className="section-padding bg-bg-section">
      <div className="container-custom">
        <SectionTitle title="产品中心" subtitle="Our Products" />

        {/* 产品卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              padding="large"
              className={`group animate-fade-in-up delay-${index * 100}`}
            >
              {/* 图标占位区域 */}
              <div
                className={`w-full h-48 ${product.color} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-3">{product.icon}</div>
                  <p className="text-xs text-text-body opacity-60">
                    产品图片区域<br />
                    建议尺寸：600x400px
                  </p>
                </div>
              </div>

              {/* 产品信息 */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-text-dark group-hover:text-secondary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-secondary">
                  {product.nameEn}
                </p>
                <p className="text-text-body leading-relaxed">
                  {product.description}
                </p>

                {/* 了解更多链接 */}
                <a
                  href="#"
                  className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors duration-300 group/link"
                >
                  了解更多
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
