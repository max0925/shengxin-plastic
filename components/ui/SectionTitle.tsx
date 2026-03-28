import React from 'react';

// 板块标题组件属性接口
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * 板块标题组件 - 用于各个板块的标题展示
 * title: 中文标题
 * subtitle: 英文副标题
 * centered: 是否居中显示
 */
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-body font-medium opacity-80">
          {subtitle}
        </p>
      )}
      {/* 装饰线条 */}
      <div
        className={`mt-6 w-16 h-1 bg-secondary ${centered ? 'mx-auto' : ''}`}
      ></div>
    </div>
  );
};

export default SectionTitle;
