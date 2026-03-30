#!/bin/bash

# 联系表单邮件功能测试脚本
# 用法: ./TEST_EMAIL.sh

echo "🧪 测试联系表单邮件功能"
echo "=========================="
echo ""

# 检查服务器是否运行
echo "📡 检查开发服务器..."
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ 开发服务器未运行！"
    echo "请先运行: npm run dev"
    exit 1
fi
echo "✅ 开发服务器运行中"
echo ""

# 测试中文表单
echo "📧 发送测试邮件（中文）..."
RESPONSE=$(curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "测试用户",
    "company": "测试公司",
    "email": "test@example.com",
    "phone": "+86 139 1234 5678",
    "subject": "测试询盘 - 请忽略",
    "message": "这是一条自动测试消息，用于验证邮件功能是否正常工作。如果您收到此邮件，说明系统配置成功！",
    "locale": "zh"
  }')

echo "响应: $RESPONSE"
echo ""

# 检查响应
if echo "$RESPONSE" | grep -q '"success":true'; then
    echo "✅ 中文邮件发送成功！"
    echo ""
    echo "📬 请检查邮箱："
    echo "   1. 公司邮箱: tengk958@hotmail.com"
    echo "   2. 测试邮箱: test@example.com"
    echo ""
else
    echo "❌ 邮件发送失败！"
    echo "错误信息: $RESPONSE"
    exit 1
fi

# 等待一下
sleep 2

# 测试英文表单
echo "📧 发送测试邮件（英文）..."
RESPONSE=$(curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "company": "Test Company",
    "email": "test@example.com",
    "phone": "+1 215 123 4567",
    "subject": "Test Inquiry - Please Ignore",
    "message": "This is an automated test message to verify the email functionality is working correctly. If you receive this email, the system is configured successfully!",
    "locale": "en"
  }')

echo "响应: $RESPONSE"
echo ""

# 检查响应
if echo "$RESPONSE" | grep -q '"success":true'; then
    echo "✅ 英文邮件发送成功！"
    echo ""
    echo "🎉 所有测试通过！"
    echo ""
    echo "📋 后续步骤："
    echo "   1. 检查 tengk958@hotmail.com 是否收到两封邮件"
    echo "   2. 检查 test@example.com 是否收到两封确认邮件"
    echo "   3. 验证邮件内容和格式是否正确"
    echo "   4. 在 Vercel 上配置环境变量"
    echo ""
else
    echo "❌ 邮件发送失败！"
    echo "错误信息: $RESPONSE"
    exit 1
fi

echo "✨ 测试完成！"
