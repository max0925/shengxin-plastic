import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

/**
 * 新闻资讯组件
 * - 展示最新的 3 条新闻
 * - 1 大 2 小的布局
 * - 包含日期、标题、摘要和阅读链接
 */
const News: React.FC = () => {
  // 新闻数据
  const news = [
    {
      date: '2025-03-15',
      category: '企业动态',
      categoryEn: 'Company News',
      title: '绿塑未来荣获"国家级绿色工厂"认证',
      summary:
        '经过严格的评审和现场审核，我司成功获得工信部颁发的"国家级绿色工厂"认证，标志着公司在绿色制造、节能减排等方面达到行业领先水平。',
      image: '🏆',
      isFeatured: true,
    },
    {
      date: '2025-03-10',
      category: '产品发布',
      categoryEn: 'Product Launch',
      title: '新一代高性能阻燃 PA6 材料正式投产',
      summary:
        '采用创新无卤阻燃技术，阻燃等级达 UL94 V-0，耐温可达 180°C，主要应用于新能源汽车电池包结构件。',
      image: '🔬',
      isFeatured: false,
    },
    {
      date: '2025-03-05',
      category: '行业资讯',
      categoryEn: 'Industry News',
      title: '公司与国际汽车巨头达成战略合作',
      summary:
        '成功签约某国际知名汽车品牌，为其提供轻量化改性 PP 材料，助力新能源汽车降本增效。',
      image: '🤝',
      isFeatured: false,
    },
  ];

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="新闻资讯" subtitle="News & Insights" />

        {/* 新闻网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 第一条新闻 - 大卡片 */}
          <Card
            className="lg:col-span-2 animate-fade-in-up"
            padding="large"
          >
            {/* 图片占位区域 */}
            <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-3">{news[0].image}</div>
                <p className="text-sm opacity-80">
                  特色新闻图片<br />
                  建议尺寸：1200x675px
                </p>
              </div>
            </div>

            {/* 新闻信息 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-accent text-white rounded-full font-medium">
                  {news[0].category}
                </span>
                <span className="text-text-body opacity-70">{news[0].date}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-text-dark hover:text-secondary transition-colors duration-300 cursor-pointer">
                {news[0].title}
              </h3>

              <p className="text-text-body leading-relaxed text-lg">
                {news[0].summary}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors duration-300 group"
              >
                阅读更多
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </Card>

          {/* 右侧两条小新闻 */}
          <div className="space-y-6">
            {news.slice(1).map((item, index) => (
              <Card
                key={index}
                className={`animate-fade-in-up delay-${(index + 1) * 100}`}
                padding="medium"
              >
                {/* 图片占位 */}
                <div className="aspect-video bg-gradient-to-br from-bg-section to-bg-page rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">{item.image}</div>
                    <p className="text-xs text-text-body opacity-60">
                      新闻图片<br />
                      600x400px
                    </p>
                  </div>
                </div>

                {/* 新闻信息 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2 py-1 bg-secondary text-white rounded font-medium">
                      {item.category}
                    </span>
                    <span className="text-text-body opacity-70">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-text-dark hover:text-secondary transition-colors duration-300 cursor-pointer line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-text-body leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-secondary font-medium hover:text-primary transition-colors duration-300 group"
                  >
                    阅读更多
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 查看全部新闻链接 */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg font-medium text-lg"
          >
            查看全部新闻
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
