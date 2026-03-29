// CTA 板块 - 强转化区域，白色背景

import React from 'react';
import Button from '@/components/ui/Button';
import { MailIcon, PhoneIcon, MessageCircleIcon } from '@/components/ui/Icons';
import { useTranslations } from 'next-intl';

const CTA: React.FC = () => {
  const t = useTranslations('cta');
  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center pb-8">
          {/* Label */}
          <div className="text-[#FF8F00] text-xs md:text-sm font-bold tracking-widest-custom mb-3 uppercase">
            {t('label')}
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C2B25] mb-4 font-title px-4">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 mb-8 px-4">
            <Button variant="accent" size="large" className="w-full md:w-auto">
              {t('requestQuote')}
            </Button>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-md border-2 border-[#1B5E3A] text-[#1B5E3A] hover:bg-[#1B5E3A] hover:text-white transition-all duration-300 w-full md:w-auto"
            >
              {t('sendSpec')}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-md border-2 border-[#1B5E3A] text-[#1B5E3A] hover:bg-[#1B5E3A] hover:text-white transition-all duration-300 w-full md:w-auto"
            >
              {t('bookCall')}
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-y-1 text-xs md:text-sm text-gray-500 pt-6 border-t border-gray-300 px-4">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              tengk958@hotmail.com
            </span>
            <span className="hidden md:inline text-gray-300">·</span>
            <div className="flex flex-col text-xs md:text-sm text-center md:text-left">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +86 139 5783 3126
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 215 433 3611
              </span>
            </div>
            <span className="hidden md:inline text-gray-300">·</span>
            <div className="flex flex-col text-xs md:text-sm text-center md:text-left">
              <span>WhatsApp</span>
              <span>WeChat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
