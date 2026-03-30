# API 测试说明

## 已完成的修复

### 1. ✅ 修复 from 邮箱地址
```typescript
// 修改前：使用环境变量或默认值
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

// 修改后：固定使用 Resend 要求的格式
const fromEmail = 'Shengxin Plastic <onboarding@resend.dev>';
```

### 2. ✅ 添加详细日志
- 在发送邮件前记录配置信息
- 记录 Resend API 返回结果
- 在 catch 块添加完整错误日志：
  ```typescript
  console.error('Full error:', JSON.stringify(error, null, 2));
  console.error('Error name:', error.name);
  console.error('Error message:', error.message);
  console.error('Error stack:', error.stack);
  ```

### 3. ✅ 验证环境变量
`.env.local` 配置正确：
```
RESEND_API_KEY=re_SnRuj66b_LZW6rcnksRCpbugU7ZFn9B7k
```

### 4. ✅ 暂时禁用客户确认邮件
客户确认邮件已注释掉，只保留发送到 `tengk958@hotmail.com` 的询盘通知。

---

## 🧪 本地测试步骤

### 步骤 1: 启动开发服务器

```bash
cd /Users/deadpool/Desktop/Plastic
npm run dev
```

等待服务器启动完成，看到：
```
✓ Ready in XXXms
○ Local: http://localhost:3000
```

### 步骤 2: 在新终端测试 API

**方法 1: 使用 cURL（推荐）**

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试用户",
    "company": "测试公司",
    "email": "test@example.com",
    "phone": "+86 139 1234 5678",
    "subject": "API测试 - 请忽略",
    "message": "这是一条测试消息，用于验证邮件功能",
    "locale": "zh"
  }'
```

**方法 2: 使用浏览器**

1. 访问：`http://localhost:3000/zh/contact-us`
2. 填写表单
3. 点击"发送消息"

### 步骤 3: 查看 Terminal 日志

在运行 `npm run dev` 的终端中，您应该看到：

✅ **成功的日志**（预期）：
```
Attempting to send email with config: {
  from: 'Shengxin Plastic <onboarding@resend.dev>',
  to: 'tengk958@hotmail.com',
  subject: '[网站询盘] API测试 - 请忽略 - 来自 测试用户',
  bodyPreview: { name: '测试用户', email: 'test@example.com', subject: 'API测试 - 请忽略' }
}
Company email send result: { id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' }
```

❌ **失败的日志**（如果有错误）：
```
Failed to send company email: { ... }
Full error details: { ... }
```

### 步骤 4: 检查邮箱

如果成功，检查 `tengk958@hotmail.com` 邮箱（可能需要等待 1-2 分钟）。

---

## 🔍 常见错误和解决方案

### 错误 1: "RESEND_API_KEY is not configured"

**原因**：环境变量未加载

**解决方案**：
```bash
# 确认 .env.local 存在
cat .env.local

# 重启开发服务器
# Ctrl+C 停止，然后重新运行
npm run dev
```

### 错误 2: "Invalid from address"

**原因**：from 邮箱格式不正确

**解决方案**：已修复，现在使用 `'Shengxin Plastic <onboarding@resend.dev>'`

### 错误 3: "API key invalid"

**原因**：
- API Key 错误
- Resend 账号问题

**解决方案**：
1. 访问 https://resend.com/api-keys
2. 验证 API Key 是否有效
3. 如果需要，创建新的 API Key
4. 更新 `.env.local`

### 错误 4: "Failed to send email"

**可能原因**：
- 超出 Resend 免费版限制（100封/天）
- 网络问题
- Resend 服务问题

**解决方案**：
1. 查看 Resend Dashboard: https://resend.com/logs
2. 检查使用量: https://resend.com/overview
3. 查看 Terminal 完整错误信息

---

## 📊 测试检查清单

本地测试：
- [ ] 开发服务器正常启动
- [ ] API 返回 200 状态码
- [ ] Terminal 显示发送成功日志
- [ ] 收到邮件在 tengk958@hotmail.com

如果失败：
- [ ] 记录 Terminal 中的错误信息
- [ ] 记录 API 响应内容
- [ ] 检查 .env.local 配置
- [ ] 验证 Resend Dashboard

---

## 💡 调试技巧

### 查看详细的 API 响应

```bash
curl -v -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"测试","email":"test@example.com","subject":"测试","message":"测试","locale":"zh"}'
```

`-v` 标志会显示完整的 HTTP 请求和响应头。

### 测试最小化请求

```bash
# 只提供必填字段
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试",
    "email": "test@example.com",
    "subject": "测试",
    "message": "测试消息",
    "locale": "zh"
  }'
```

---

## 📝 需要告诉我的信息

如果测试失败，请提供：

1. **Terminal 中的错误日志**（完整的）
2. **cURL 的响应**（JSON 内容）
3. **Resend Dashboard 的日志**（如果有）
4. **发生错误的时间**

这些信息将帮助快速定位问题。
