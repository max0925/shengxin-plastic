// CTA 板块 - 强转化区域，白色背景

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { MailIcon, PhoneIcon, MessageCircleIcon } from '@/components/ui/Icons';
import { useTranslations, useLocale } from 'next-intl';

const CTA: React.FC = () => {
  const t = useTranslations('cta');
  const locale = useLocale();
  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center pb-8">
          {/* Label */}
          <div className="text-[#FF8F00] text-xs md:text-sm font-bold tracking-widest-custom mb-3 uppercase" data-animate="fade-up" data-delay="0">
            {t('label')}
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C2B25] mb-4 font-title px-4" data-animate="fade-up" data-delay="100">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto px-4" data-animate="fade-up" data-delay="200">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 mb-8 px-4" data-animate="fade-up" data-delay="300">
            <Link
              href={`/${locale}/contact-us`}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-md bg-[#1B5E3A] text-white hover:bg-[#145230] transition-all duration-300 w-full md:w-auto shadow-lg hover:shadow-xl"
            >
              {t('bookCall')}
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-y-1 text-xs md:text-sm text-gray-700 pt-6 border-t border-gray-300 px-4" data-animate="fade-up" data-delay="400">
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
            <div className="flex flex-col gap-1.5 text-xs md:text-sm text-center md:text-left">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.181a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.172c0-.652.52-1.181 1.162-1.181zm5.813 0c.642 0 1.162.529 1.162 1.181a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.652.52-1.181 1.162-1.181zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229 2.785 0 5.16-1.652 5.16-3.654 0-1.165-.907-2.13-2.037-2.13a1.099 1.099 0 00-1.07 1.116c0 .609.54 1.106 1.07 1.106.32 0 .601-.152.77-.39-.23.582-.894 1.007-1.678 1.007-1.237 0-2.24-.982-2.24-2.191 0-1.209 1.003-2.191 2.24-2.191.709 0 1.337.312 1.733.794.18-.27.48-.476.848-.476.642 0 1.162.529 1.162 1.181s-.52 1.181-1.162 1.181c-.642 0-1.162-.529-1.162-1.181a2.344 2.344 0 00-2.24-2.344c-1.878 0-3.402 1.556-3.402 3.466s1.524 3.467 3.402 3.467c.914 0 1.74-.355 2.354-.929.154.264.426.453.748.453 1.473 0 2.67-1.221 2.67-2.729 0-2.858-2.939-5.181-6.556-5.181z"/>
                </svg>
                WeChat: tk_heihei
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
