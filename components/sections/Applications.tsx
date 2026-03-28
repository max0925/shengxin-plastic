// Applications 板块 - 按行业展示应用场景

import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CarIcon, HomeIcon, Building2Icon, SmartphoneIcon, CogIcon } from '@/components/ui/Icons';
import { useTranslations } from 'next-intl';

const Applications: React.FC = () => {
  const t = useTranslations('applications');
  const applications = [
    {
      icon: <HomeIcon size={48} className="text-secondary" />,
      key: 'home',
      image: '/HomeAppliances.jpg',
    },
    {
      icon: <CarIcon size={48} className="text-secondary" />,
      key: 'auto',
      image: '/Automotive.jpg',
    },
    {
      icon: <Building2Icon size={48} className="text-secondary" />,
      key: 'construction',
      image: '/Construction.jpg',
    },
    {
      icon: <SmartphoneIcon size={48} className="text-secondary" />,
      key: 'electronics',
      image: '/ConsumerElectronics.jpg',
    },
    {
      icon: <CogIcon size={48} className="text-secondary" />,
      key: 'industrial',
      image: '/IndustrialParts.jpg',
    },
  ];

  return (
    <section id="applications" className="py-12 md:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* 板块标题 */}
        <div className="text-center mb-8">
          <div className="text-secondary text-sm font-bold tracking-widest-custom mb-3 uppercase">
            {t('label')}
          </div>
          <h2 className="text-4xl font-bold text-text-dark mb-3 font-title">
            {t('title')}
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* 图片网格 - 4px 间隔 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {applications.map((app) => (
            <div key={app.key} className="group relative overflow-hidden">
              {/* 图片撑满 */}
              <img
                src={app.image}
                alt={t(`items.${app.key}.title`)}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* 底部渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* 文字内容 */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold mb-1">{t(`items.${app.key}.title`)}</h3>
                <p className="text-white/70 text-sm">{t(`items.${app.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
