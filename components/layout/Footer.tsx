// 页脚组件 - 深林绿背景，4列布局

import React from 'react';
import { MapPinIcon, MailIcon, PhoneIcon, MessageCircleIcon } from '@/components/ui/Icons';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const materialLinks = [
    t('materialLink1'),
    t('materialLink2'),
    t('materialLink3'),
    t('materialLink4'),
    t('materialLink5'),
  ];

  const quickLinks = [
    { name: t('quickLink1'), href: '#applications' },
    { name: t('quickLink2'), href: '#capabilities' },
    { name: t('quickLink3'), href: '#about' },
    { name: t('quickLink4'), href: '#contact' },
    { name: t('quickLink5'), href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="font-title font-bold text-xl tracking-widest-custom mb-4">
              SHENGXIN PLASTIC
            </div>
            <p className="text-sm text-white text-opacity-80 leading-relaxed">
              {t('company')}
            </p>
            <div className="text-sm text-white text-opacity-80 leading-relaxed pt-2">
              <p>{t('addressL1')}</p>
              <p>{t('addressL2')}</p>
              <p>{t('addressL3')}</p>
              <p>{t('addressL4')}</p>
            </div>
          </div>

          {/* Column 2: Materials */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('materials')}</h4>
            <ul className="space-y-3">
              {materialLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#materials"
                    className="text-white text-opacity-80 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-accent hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('contact')}</h4>
            <div className="space-y-4 text-white text-opacity-80">
              <div className="flex items-start">
                <MapPinIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm">{t('location')}</p>
              </div>
              <div className="flex items-start">
                <MailIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a
                  href="mailto:tengk958@hotmail.com"
                  className="text-sm hover:text-accent transition-colors duration-300"
                >
                  tengk958@hotmail.com
                </a>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm">+86 139 5783 3126</p>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm">+1 215 433 3611</p>
              </div>
              <div className="flex items-start">
                <MessageCircleIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm">{t('im')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white border-opacity-20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-white text-opacity-60 text-center md:text-left">
              {t('copyright')} | 浙ICP备XXXXXXXX号
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
