// 按钮组件 - 提供主要、次要、描边三种样式

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
  href,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer border-2';

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-primary text-white border-primary hover:bg-opacity-90',
    secondary: 'bg-secondary text-white border-secondary hover:bg-opacity-90',
    outline: 'bg-transparent text-white border-white hover:bg-white hover:text-primary',
    accent: 'bg-accent text-text-dark border-accent hover:bg-opacity-90 hover:shadow-lg',
  };

  const fullClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={fullClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={fullClassName}>
      {children}
    </button>
  );
};

export default Button;
