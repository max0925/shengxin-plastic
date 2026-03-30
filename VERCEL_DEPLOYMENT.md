# 🚀 Vercel 部署配置指南

## ⚠️ 重要：部署前必须配置环境变量

在将项目部署到 Vercel 之前，**必须**在 Vercel 中配置环境变量，否则联系表单的邮件功能将无法工作。

---

## 📋 Vercel 环境变量配置步骤

### 方法 1：通过 Vercel Dashboard（推荐）

1. **登录 Vercel**
   - 访问：https://vercel.com/dashboard
   - 选择您的项目

2. **进入设置页面**
   - 点击项目顶部的 "Settings" 标签
   - 或直接访问：`https://vercel.com/[your-username]/[project-name]/settings`

3. **添加环境变量**
   - 在左侧菜单找到 "Environment Variables"
   - 点击进入环境变量配置页面

4. **添加 RESEND_API_KEY**
   ```
   Key:   RESEND_API_KEY
   Value: re_SnRuj66b_LZW6rcnksRCpbugU7ZFn9B7k
   ```

   **重要选项**：
   - ✅ Production（生产环境）
   - ✅ Preview（预览环境）
   - ✅ Development（开发环境）

   建议勾选所有三个环境，确保所有部署都能使用邮件功能。

5. **（可选）添加 RESEND_FROM_EMAIL**
   ```
   Key:   RESEND_FROM_EMAIL
   Value: onboarding@resend.dev
   ```

   如果您已经在 Resend 验证了自己的域名，可以改为：
   ```
   Value: noreply@yourdomain.com
   ```

6. **保存配置**
   - 点击 "Save" 按钮
   - Vercel 会自动触发重新部署

### 方法 2：通过 Vercel CLI

```bash
# 安装 Vercel CLI（如果还没安装）
npm i -g vercel

# 登录
vercel login

# 添加环境变量
vercel env add RESEND_API_KEY

# 系统会提示输入值，粘贴：
# re_SnRuj66b_LZW6rcnksRCpbugU7ZFn9B7k

# 选择环境（建议选择所有）
# [x] Production
# [x] Preview
# [x] Development
```

---

## 🔄 重新部署

添加环境变量后，需要重新部署才能生效：

### 方法 1：通过 Dashboard
1. 进入项目 Deployments 页面
2. 点击最新部署右侧的 "..." 菜单
3. 选择 "Redeploy"

### 方法 2：推送代码
```bash
git add .
git commit -m "Configure email service"
git push
```

### 方法 3：使用 CLI
```bash
vercel --prod
```

---

## ✅ 验证配置

### 1. 检查环境变量是否设置成功

在部署后：
1. 进入 Vercel Dashboard → Settings → Environment Variables
2. 确认看到 `RESEND_API_KEY`
3. 值应该显示为 `***...***`（已加密）

### 2. 测试邮件功能

部署完成后：
1. 访问您的生产环境网站
2. 进入联系页面：`https://yourdomain.com/zh/contact-us`
3. 填写并提交表单
4. 检查 `tengk958@hotmail.com` 邮箱
5. 确认收到询盘邮件

### 3. 查看日志（如果有问题）

1. Vercel Dashboard → Deployments
2. 点击最新的部署
3. 点击 "Functions" 标签
4. 找到 `/api/contact` 函数
5. 查看日志输出

---

## 🔒 安全注意事项

### ✅ 做到了：
- API Key 存储在环境变量中（不在代码里）
- `.env.local` 已在 `.gitignore` 中（不会提交到 Git）
- Vercel 加密存储环境变量

### ⚠️ 注意事项：
- **永远不要**在代码中硬编码 API Key
- **永远不要**将 `.env.local` 提交到 Git
- **定期轮换** API Key（建议每 3-6 个月）
- 如果 Key 泄露，立即在 Resend Dashboard 中删除并创建新的

---

## 📊 监控和限制

### Resend 免费版限制

- ✅ 每天 100 封邮件
- ✅ 每月 3,000 封邮件
- ✅ 1 个验证域名
- ✅ API 访问

### 监控使用量

1. 访问 Resend Dashboard：https://resend.com/overview
2. 查看 "Usage" 部分
3. 监控每日发送量

### 如果超出限制

**临时方案**：
- 等到第二天重置（每日限额）
- 联系客户时手动回复邮件

**长期方案**：
- 升级到付费计划
- 实现速率限制（防止滥用）
- 添加 CAPTCHA 验证

---

## 🌐 自定义发件人域名（可选）

目前邮件从 `onboarding@resend.dev` 发送。要使用您自己的域名：

### 步骤 1：在 Resend 添加域名

1. 访问：https://resend.com/domains
2. 点击 "Add Domain"
3. 输入您的域名（如 `shengxinplastic.com`）

### 步骤 2：配置 DNS 记录

Resend 会提供需要添加的 DNS 记录：
```
Type: TXT
Name: _resend
Value: [provided-value]

Type: MX
Name: @
Value: [provided-value]

Type: TXT
Name: @
Value: [provided-value]
```

在您的域名注册商（如阿里云、腾讯云）添加这些记录。

### 步骤 3：等待验证

- 通常需要 10-30 分钟
- Resend 会自动检测
- 验证成功后会收到邮件通知

### 步骤 4：更新环境变量

1. 在 Vercel 中更新 `RESEND_FROM_EMAIL`：
   ```
   RESEND_FROM_EMAIL=noreply@shengxinplastic.com
   ```

2. 重新部署

**推荐的发件人邮箱**：
- `noreply@shengxinplastic.com` - 无需回复的通知
- `contact@shengxinplastic.com` - 官方联系邮箱
- `inquiry@shengxinplastic.com` - 询盘专用

---

## 🐛 故障排查

### 问题 1：表单提交后显示错误

**可能原因**：
- 环境变量未配置
- API Key 错误
- Resend 服务问题

**解决方案**：
1. 检查 Vercel 环境变量是否正确
2. 查看函数日志（Vercel Dashboard → Functions）
3. 验证 API Key 在 Resend Dashboard 是否有效

### 问题 2：邮件未收到

**检查清单**：
- [ ] 检查垃圾邮件文件夹
- [ ] 等待 1-2 分钟（可能有延迟）
- [ ] 查看 Resend Logs：https://resend.com/logs
- [ ] 确认未超出每日限额
- [ ] 测试用其他邮箱接收

### 问题 3：部署失败

**常见原因**：
- TypeScript 编译错误
- 缺少依赖
- 环境变量引用错误

**解决方案**：
```bash
# 本地测试构建
npm run build

# 检查是否有错误
# 修复后再推送到 Vercel
```

---

## 📈 生产环境最佳实践

### 1. 监控和告警

考虑设置：
- Vercel 的日志监控
- Resend 的邮件发送监控
- 错误告警（Sentry 等）

### 2. 速率限制

未来可以添加：
```typescript
// 防止表单滥用
// 限制：每个 IP 每小时最多 5 次提交
```

### 3. 数据备份

考虑将询盘保存到数据库：
- Vercel Postgres
- MongoDB Atlas
- Supabase

### 4. CAPTCHA 验证

添加 Google reCAPTCHA v3：
- 防止机器人提交
- 保护表单安全

---

## 📞 需要帮助？

### Resend 支持
- 文档：https://resend.com/docs
- 邮箱：support@resend.com
- 社区：https://resend.com/discord

### Vercel 支持
- 文档：https://vercel.com/docs
- 社区：https://github.com/vercel/vercel/discussions

---

## ✅ 部署检查清单

部署前确认：

- [ ] ✅ 已获取 Resend API Key
- [ ] ✅ 已在 `.env.local` 配置（本地测试）
- [ ] ⚠️ **待完成：在 Vercel 添加 `RESEND_API_KEY` 环境变量**
- [ ] ⚠️ **待完成：重新部署项目**
- [ ] 待完成：测试生产环境表单
- [ ] 待完成：确认收到测试邮件
- [ ] （可选）验证自定义域名
- [ ] （可选）配置 `RESEND_FROM_EMAIL`

---

## 🎉 完成！

配置完成后，您的联系表单将能够：
- ✅ 接收客户询盘
- ✅ 发送到 tengk958@hotmail.com
- ✅ 自动发送确认邮件给客户
- ✅ 精美的 HTML 邮件模板
- ✅ 中英文双语支持

**现在就去 Vercel 配置环境变量吧！** 🚀

---

**快速链接**：
- 🔗 [Vercel Dashboard](https://vercel.com/dashboard)
- 🔗 [Resend Dashboard](https://resend.com/overview)
- 🔗 [Resend Logs](https://resend.com/logs)
- 🔗 [环境变量配置](https://vercel.com/docs/concepts/projects/environment-variables)
