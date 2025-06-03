# NShop - Next.js 服装购物网站

这是一个使用 Next.js 构建的现代服装购物网站。

## 功能特点

- 响应式设计，适配各种设备
- 产品展示和分类浏览
- 产品详情页
- 购物车功能
- 结账流程
- Stripe 支付集成
- 关于我们和联系我们页面

## 安装

1. 克隆仓库

```bash
git clone <repository-url>
cd nshop
```

2. 安装依赖

```bash
npm install
```

3. 设置环境变量
   创建一个`.env.local`文件，添加以下内容：

```
# Stripe API密钥
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

从[Stripe 开发者控制台](https://dashboard.stripe.com/test/apikeys)获取测试 API 密钥，并替换上面的占位符值。

4. 启动开发服务器

```bash
npm run dev
```

5. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## Stripe 支付测试

在测试环境中，可以使用以下测试卡号：

- **成功支付**: 4242 4242 4242 4242
- **需要验证**: 4000 0025 0000 3155
- **余额不足**: 4000 0000 0000 9995

对于所有测试卡：

- 有效期：任意未来日期
- CVC：任意 3 位数
- 邮编：任意 5 位数

## 构建生产版本

```bash
npm run build
npm start
```

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- Stripe 支付 API

## 注意事项

- 当前实现的 Stripe 支付是模拟版本
- 在生产环境中，需要使用真实的 Stripe API 密钥
- 需要实现完整的后端支付处理逻辑和订单管理系统

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
