# ⚠️ API 返回 500 错误 - 需要查看日志

## 当前状态

✅ API 已修复：
- from 邮箱改为：`'Shengxin Plastic <onboarding@resend.dev>'`
- 添加了详细错误日志
- 禁用了客户确认邮件
- .env.local 配置正确

❌ API 测试失败：
```json
{"success":false,"error":"Failed to send inquiry email"}
```

---

## 🔍 需要检查的内容

### 请查看运行 `npm run dev` 的 Terminal 窗口

在那个窗口中，应该会看到类似这样的日志：

```
Attempting to send email with config: {
  from: 'Shengxin Plastic <onboarding@resend.dev>',
  to: 'tengk958@hotmail.com',
  subject: '[网站询盘] API测试 - 请忽略 - 来自 测试用户',
  bodyPreview: { ... }
}

Failed to send company email: { ... }
Full error details: { ... }
```

---

## 📋 需要您提供的信息

请复制粘贴 Terminal 中显示的：

1. **"Attempting to send email with config:"** 后面的内容
2. **"Failed to send company email:"** 后面的错误信息
3. **"Full error details:"** 后面的完整错误

---

## 🔧 可能的原因

根据错误内容，可能是：

### 1. API Key 问题
- Resend API Key 无效
- API Key 权限不足

### 2. 邮箱地址问题
- from 地址格式错误（已修复）
- to 地址被 Resend 拒绝

### 3. Resend 服务问题
- 账号未激活
- 超出免费版限制
- 服务暂时不可用

### 4. 请求格式问题
- HTML 模板有问题
- 字符编码问题

---

## 🧪 备用测试方法

### 测试 1: 验证 API Key

访问 Resend Dashboard 确认：
- API Key 是否有效: https://resend.com/api-keys
- 账号状态: https://resend.com/overview

### 测试 2: 最小化测试

临时简化代码，只发送最基本的邮件：

```typescript
const result = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'tengk958@hotmail.com',
  subject: 'Test',
  html: '<p>Test</p>',
});
```

如果这样都失败，说明是 API Key 或账号问题。

---

## 📞 等待您的反馈

请提供 Terminal 中的错误日志，我可以根据具体错误信息进一步诊断和修复。

**注意**：错误日志可能包含敏感信息，如果有疑虑，可以删除或模糊处理后再发给我。
