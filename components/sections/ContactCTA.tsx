import React from 'react';
import Button from '@/components/ui/Button';

/**
 * 联系/询盘 CTA 组件
 * - 深青色背景
 * - 居中的标题和按钮
 * - 联系方式展示
 */
const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-secondary text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* 标题部分 */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              期待与您合作
            </h2>
            <p className="text-xl md:text-2xl text-white text-opacity-90 font-medium">
              Ready to Collaborate
            </p>
          </div>

          {/* 描述文字 */}
          <p className="text-lg md:text-xl text-white text-opacity-80 leading-relaxed max-w-2xl mx-auto">
            无论您需要定制化的改性塑料解决方案，还是想了解我们的产品和服务，我们的专业团队随时准备为您提供支持
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="accent" size="large" className="text-lg px-10">
              在线询盘
            </Button>
            <Button variant="outline" size="large" className="text-lg px-10">
              下载产品目录
            </Button>
          </div>

          {/* 联系方式网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white border-opacity-30">
            {/* 电话 */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">电话咨询</h4>
              <p className="text-white text-opacity-80">Phone</p>
              <a
                href="tel:+8676912345678"
                className="text-accent hover:text-white transition-colors duration-300 font-medium block"
              >
                +86 769 1234 5678
              </a>
            </div>

            {/* 邮箱 */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">邮件咨询</h4>
              <p className="text-white text-opacity-80">Email</p>
              <a
                href="mailto:info@greenplast.com"
                className="text-accent hover:text-white transition-colors duration-300 font-medium block"
              >
                info@greenplast.com
              </a>
            </div>

            {/* 地址 */}
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">公司地址</h4>
              <p className="text-white text-opacity-80">Location</p>
              <p className="text-white text-opacity-90 leading-relaxed">
                中国 广东省 东莞市<br />
                松山湖高新技术产业开发区
              </p>
            </div>
          </div>

          {/* 工作时间 */}
          <div className="pt-8 text-sm text-white text-opacity-60">
            <p>工作时间：周一至周五 9:00-18:00 | Working Hours: Mon-Fri 9:00-18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
