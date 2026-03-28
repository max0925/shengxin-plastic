// 导航栏组件 - 深绿色背景，响应式汉堡菜单

'use client';

import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@/components/ui/Icons';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    // 把当前路径中的语言前缀替换
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B5E3A] shadow-md py-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Desktop Navbar Layout: Logo (Left), Links (Middle-Left), Lang/Contact (Right) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Box: Logo + Nav Items */}
            <div className="flex items-center gap-12 flex-1">
              <span className="text-white text-xl font-extrabold tracking-[0.15em] uppercase">
                SHENGXIN
              </span>

              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                <a href="#materials" className="text-white/80 text-sm font-medium tracking-[0.05em] uppercase hover:text-white transition">
                  {t('materials')}
                </a>
                <a href="#applications" className="text-white/80 text-sm font-medium tracking-[0.05em] uppercase hover:text-white transition">
                  {t('applications')}
                </a>
                <a href="#about" className="text-white/80 text-sm font-medium tracking-[0.05em] uppercase hover:text-white transition">
                  {t('about')}
                </a>
              </div>
            </div>

            {/* Right: Contact & Language Switch */}
            <div className="flex-1 flex justify-end items-center gap-6">
              <a href="#contact" className="bg-white/10 text-white text-sm font-semibold tracking-[0.05em] uppercase px-5 py-2.5 hover:bg-white/20 transition rounded-md">
                {t('contact')}
              </a>
              <div className="w-px h-5 bg-white/30" />
              <button onClick={switchLocale} className="text-white/80 text-sm font-medium hover:text-white transition flex items-center gap-1.5 focus:outline-none">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{locale === 'en' ? '中文' : 'EN'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden text-white text-xl font-extrabold tracking-[0.15em] uppercase">
            SHENGXIN
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col space-y-3 py-4 border-t border-white border-opacity-20">
            <a
              href="#materials"
              className="text-white hover:text-accent transition-colors duration-300 font-title font-medium uppercase text-[13px] tracking-[0.05em] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('materials')}
            </a>
            <a
              href="#applications"
              className="text-white hover:text-accent transition-colors duration-300 font-title font-medium uppercase text-[13px] tracking-[0.05em] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('applications')}
            </a>
            <a
              href="#about"
              className="text-white hover:text-accent transition-colors duration-300 font-title font-medium uppercase text-[13px] tracking-[0.05em] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('about')}
            </a>
            <a
              href="#contact"
              className="bg-white/10 text-white text-xs font-semibold tracking-[0.05em] uppercase px-5 py-2.5 hover:bg-white/20 transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact')}
            </a>

            {/* 语言切换 - Mobile */}
            <button
              onClick={switchLocale}
              className="text-white/80 text-sm font-medium hover:text-white transition flex items-center justify-center gap-1.5 py-2"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{locale === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
