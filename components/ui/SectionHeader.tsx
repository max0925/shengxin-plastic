// 板块标题组件 - 统一的板块开头样式（标签 + 主标题 + 说明文字）

import React from 'react';

interface SectionHeaderProps {
  label: string; // 大写标签，如 "MATERIALS"
  title: string; // 主标题
  description?: string; // 可选说明文字
  centered?: boolean; // 是否居中
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  centered = true,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* 小字标签 */}
      <div className="text-secondary text-sm font-semibold tracking-widest-custom mb-3">
        {label.toUpperCase()}
      </div>

      {/* 主标题 */}
      <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-title">
        {title}
      </h2>

      {/* 说明文字 */}
      {description && (
        <p className={`text-base md:text-lg text-text-body ${centered ? 'max-w-3xl mx-auto' : 'max-w-3xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
