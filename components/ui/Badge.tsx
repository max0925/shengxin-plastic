// 徽章/标签组件 - 用于材料类型等pill形状标签

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'light';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium';

  const variantStyles = {
    primary: 'bg-secondary text-white',
    light: 'bg-bg-light text-secondary',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
