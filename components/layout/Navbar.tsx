// 导航栏组件 - 深绿色背景，响应式汉堡菜单

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@/components/ui/Icons';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto pl-3 pr-6">
        <div className="flex items-center justify-between">
          {/* Desktop Navbar Layout: Logo (Left), Links (Middle-Left), Lang/Contact (Right) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Box: Logo + Nav Items */}
            <div className="flex items-center gap-12 flex-1">
              <Link href={`/${locale}`} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="盛欣塑化 Shengxin Plastics"
                  width={210}
                  height={52}
                  className="h-[52px] w-auto"
                  priority
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                <Link href={`/${locale}#materials`} className="text-white/80 text-sm font-medium tracking-[0.05em] uppercase hover:text-white transition">
                  {t('materials')}
                </Link>
                <Link href={`/${locale}#applications`} className="text-white/80 text-sm font-medium tracking-[0.05em] uppercase hover:text-white transition">
                  {t('applications')}
                </Link>
                <Link href={`/${locale}/about`} className="text-white/80 text-sm font-medium tracking-[0.05em] uppercase hover:text-white transition">
                  {t('about')}
                </Link>
              </div>
            </div>

            {/* Right: Contact & Language Switch */}
            <div className="flex-1 flex justify-end items-center gap-6">
              <Link href={`/${locale}/contact-us`} className="bg-white/10 text-white text-sm font-semibold tracking-[0.05em] uppercase px-5 py-2.5 hover:bg-white/20 transition rounded-md">
                {t('contact')}
              </Link>
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
          <Link href={`/${locale}`} className="lg:hidden flex items-center">
            <Image
              src="/logo.png"
              alt="盛欣塑化 Shengxin Plastics"
              width={170}
              height={46}
              className="h-[46px] w-auto"
              priority
            />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#1B5E3A] z-50 flex flex-col items-center justify-center gap-8">
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <Link
              href={`/${locale}#materials`}
              className="text-white text-2xl font-semibold uppercase tracking-wide hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('materials')}
            </Link>
            <Link
              href={`/${locale}#applications`}
              className="text-white text-2xl font-semibold uppercase tracking-wide hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('applications')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-white text-2xl font-semibold uppercase tracking-wide hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/contact-us`}
              className="text-white text-2xl font-semibold uppercase tracking-wide hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <button
              onClick={() => { switchLocale(); setMenuOpen(false); }}
              className="text-white/70 text-lg mt-4 flex items-center gap-2 hover:text-white transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{locale === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
