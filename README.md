# Shengxin Plastic Official Website

宁波市海曙盛欣塑化有限公司官方网站 - 专业改性塑料 B2B 网站

## 项目简介

这是一个面向全球制造业采购商的塑料改性工厂官网首页。设计风格专业、克制，以深林绿为主色调，传达环保可持续理念。

### 核心目标

让海外采购商在 30 秒内了解：
- 我们能做什么（材料类型和改性能力）
- 为什么可信（产能、认证、经验）
- 怎么联系我们（多渠道联系方式）

## 技术栈

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **字体**: Google Fonts (Montserrat, Inter, Noto Sans SC)

## 设计特点

### 配色方案

```css
--primary:    #1B5E3A  /* 深林绿 - 导航、Hero、页脚 */
--secondary:  #00695C  /* 深青色 - 链接、高亮 */
--accent:     #FF8F00  /* 琥珀金 - CTA按钮 */
--text-dark:  #1C2B25  /* 近黑绿 - 标题 */
--text-body:  #37474F  /* 蓝灰色 - 正文 */
```

### 设计原则

- **一屏一信息**: 每个板块只传达一个核心信息
- **大量留白**: 板块间距 80-100px，内容不堆砌
- **克制动效**: 仅使用淡入上移动画（0.6s）
- **专业沉稳**: 无花哨渐变、无卡通风、信息密度适中

## 项目结构

```
├── app/
│   ├── layout.tsx              # 全局布局
│   ├── page.tsx                # 首页
│   └── globals.css             # 全局样式
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # 导航栏
│   │   └── Footer.tsx          # 页脚
│   ├── sections/
│   │   ├── Hero.tsx            # 首屏
│   │   ├── Materials.tsx       # 材料板块
│   │   ├── Applications.tsx    # 应用板块
│   │   ├── Capabilities.tsx    # 能力板块
│   │   └── CTA.tsx             # 转化板块
│   └── ui/
│       ├── Button.tsx          # 按钮组件
│       ├── SectionHeader.tsx   # 板块标题
│       └── Badge.tsx           # 徽章组件
└── package.json
```

## 页面板块

### 1. Hero - 首屏（100vh）
- 深林绿渐变背景
- 居中标题和副标题
- 两个 CTA 按钮
- 底部向下箭头动画

### 2. Materials - 材料板块
- 基础树脂列表（9种）
- 改性能力网格（8项）
- 左右两栏布局

### 3. Applications - 应用场景
- 5 个行业卡片
- 汽车 / 家电 / 建筑 / 电子 / 工业
- 图片占位 + 描述

### 4. Capabilities - 企业能力
- 6 大能力项列表
- 右侧工厂图片占位
- 生产能力 / QC / 交期 / 认证等

### 5. CTA - 转化区域
- 深林绿背景
- 3 个 CTA 按钮横排
- 底部联系方式

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start
```

## 开发服务器

启动后访问：http://localhost:3000 (或端口 3001)

## 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1023px
- **桌面**: ≥ 1024px
- **大屏**: ≥ 1920px

## 待完善内容

- [ ] 替换图片占位为实际产品/工厂照片
- [ ] 更新真实联系方式（邮箱、电话）
- [ ] 添加在线询盘表单功能
- [ ] 完善 About 页面
- [ ] 集成 Google Analytics

## 注意事项

### TODO 标记

代码中标记 `// TODO: 替换为真实信息` 的地方需要更新：
- 邮箱地址
- 电话号码
- ICP 备案号

### 图片占位说明

所有深灰色占位块都标注了应放置的图片类型，例如：
- 汽车内饰零件特写
- 工厂车间全景
- 产品应用场景等

## SEO 优化

- ✅ 语义化 HTML 结构
- ✅ 完整的 meta 标签
- ✅ 描述性页面标题
- ✅ Alt 文本（图片添加后）
- ⏳ 结构化数据（待添加）
- ⏳ Sitemap（待生成）

## 浏览器支持

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- 移动端浏览器

## License

© 2026 宁波市海曙盛欣塑化有限公司 版权所有
