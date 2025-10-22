# MK SaaS Template

一个功能完整的 Next.js SaaS 应用模板，集成了现代化的技术栈和丰富的功能特性。

## 🚀 项目特性

### 核心技术栈
- **框架**: Next.js 15.2.1 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4.0
- **UI组件**: Radix UI + shadcn/ui
- **数据库**: Drizzle ORM + MySQL
- **认证**: Better Auth
- **支付**: Stripe
- **邮件**: Resend
- **存储**: Cloudflare R2 / S3
- **文档**: Fumadocs

### 主要功能模块

#### 🔐 用户认证系统
- GitHub OAuth 登录
- Google OAuth 登录
- 邮箱密码登录
- 密码重置功能
- 用户权限管理

#### 💳 支付系统
- Stripe 集成
- 订阅计划管理
- 一次性支付
- 积分系统
- 账单管理

#### 🤖 AI 功能
- 文本生成 (OpenAI, Google, DeepSeek, Fireworks)
- 图像生成 (Replicate, FAL)
- AI 聊天功能
- 音频/视频处理
- 内容分析

#### 📧 邮件系统
- Resend 邮件服务
- 邮件模板
- 新闻订阅
- 通知系统

#### 📊 分析统计
- Google Analytics
- Umami Analytics
- OpenPanel Analytics
- Plausible Analytics
- PostHog Analytics
- 多种分析工具支持

#### 📝 内容管理
- MDX 文档系统
- 博客功能
- 多语言支持 (i18n)
- SEO 优化

#### 🎨 UI/UX 特性
- 响应式设计
- 暗色/亮色主题
- 动画效果 (Framer Motion)
- 拖拽排序
- 数据表格
- 图表展示

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── [locale]/          # 国际化路由
│   │   ├── (marketing)/   # 营销页面
│   │   ├── (protected)/   # 受保护页面
│   │   └── auth/          # 认证页面
│   └── api/               # API 路由
├── components/            # React 组件
├── config/               # 配置文件
├── db/                   # 数据库相关
├── lib/                  # 工具函数
├── hooks/                # 自定义 Hooks
├── types/                # TypeScript 类型定义
└── styles/               # 样式文件
```

## 🛠️ 开发环境设置

### 环境要求
- Node.js 18+
- pnpm (推荐) 或 npm
- MySQL 数据库

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd mksaas_template-main
```

2. **安装依赖**
```bash
pnpm install
```

3. **环境配置**
```bash
cp env.example .env.local
```

4. **配置环境变量**
编辑 `.env.local` 文件，配置以下必要变量：
- `DATABASE_URL`: 数据库连接字符串
- `BETTER_AUTH_SECRET`: 认证密钥
- `NEXT_PUBLIC_BASE_URL`: 应用基础URL
- 其他服务API密钥 (Stripe, Resend, OAuth等)

5. **数据库设置**
```bash
# 生成数据库迁移文件
pnpm db:generate

# 推送数据库变更
pnpm db:push

# 或运行迁移
pnpm db:migrate
```

6. **启动开发服务器**
```bash
pnpm dev
```

## 📜 可用脚本

```bash
# 开发
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm start            # 启动生产服务器

# 代码质量
pnpm lint             # 代码检查
pnpm lint:fix         # 自动修复代码问题
pnpm format           # 代码格式化

# 数据库
pnpm db:generate      # 生成数据库迁移
pnpm db:migrate       # 运行数据库迁移
pnpm db:push          # 推送数据库变更
pnpm db:studio        # 打开数据库管理界面

# 内容管理
pnpm content          # 处理MDX内容

# 邮件开发
pnpm email            # 启动邮件模板开发服务器

# 部署
pnpm preview          # 预览构建结果
pnpm deploy           # 部署到Cloudflare
```

## 🔧 配置说明

### 数据库配置
项目使用 Drizzle ORM 和 MySQL，配置文件位于 `drizzle.config.ts`

### 文档系统
使用 Fumadocs 构建文档系统，配置位于 `source.config.ts`

### 国际化
支持多语言，配置文件位于 `src/i18n/`

## 🚀 部署

### Vercel 部署
1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量
3. 自动部署

### Docker 部署
```bash
# 构建Docker镜像
docker build -t mksaas-template .

# 运行容器
docker run -p 3000:3000 mksaas-template
```

### Cloudflare Pages 部署
```bash
pnpm deploy
```

## 📚 文档

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Drizzle ORM 文档](https://orm.drizzle.team/)
- [Better Auth 文档](https://www.better-auth.com/)
- [Fumadocs 文档](https://fumadocs.dev/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🆘 支持

如有问题，请查看文档或提交 Issue。
