import React from 'react';

// 卡片组件属性接口
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'small' | 'medium' | 'large';
}

/**
 * 卡片组件 - 通用容器组件
 * hover: 是否启用悬停效果
 * padding: 内边距大小
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'medium',
}) => {
  // 内边距样式
  const paddingStyles = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  // 悬停效果
  const hoverStyles = hover
    ? 'hover:shadow-card-hover hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-bg-card rounded-lg shadow-card transition-all duration-300 ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
