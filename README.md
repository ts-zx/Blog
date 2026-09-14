# 📝 Next.js + MDX Blog Template | 博客模板

> **A batteries-included, free, easy-to-deploy personal blog template.**
> **一个开箱即用、免费、易部署的个人博客模板。**

[English](#english) | [简体中文](#简体中文)

---

## English

### ✨ Features

- ✅ **MDX support** — Write posts like Markdown with embedded components
- ✅ **TypeScript + Tailwind CSS**
- ✅ **Cloudflare Pages** free hosting (with Functions)
- ✅ **Dark mode** with circular theme-switch animation
- ✅ **RSS / Sitemap / SEO** ready out of the box
- ✅ **View counter + Likes** powered by Cloudflare KV
- ✅ **giscus comments** (GitHub Discussions-based)
- ✅ **Pagefind full-text search** (build-time indexed)
- ✅ **i18n** — Chinese (default) and English, switchable in the header
- ✅ **Responsive design** — looks great on mobile and desktop
- ✅ **Custom draggable background image**

### 🚀 Quick Start

#### 1. Use this template

Click **Use this template → Create a new repository** at the top of this page.

#### 2. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

#### 3. Configure your site

Open `src/app/site.config.ts` and fill in the TODO fields:

```typescript
{
  name: "Your Site Name",
  description: "One-line description",
  author: "Your Name",
  email: "you@example.com",
  github: "https://github.com/your-username",
  url: "https://your-domain.com",
  // ...
}
```

> ⚠️ Every field with a `TODO` comment must be updated.

#### 4. Customize content

- Edit `src/app/about/page.tsx` for your "About" page
- Add posts in `content/posts/*.mdx`

#### 5. Deploy to Cloudflare Pages

##### A. Create KV namespace (for views + likes)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages → KV**
2. Click **Create a namespace**, name it exactly `VIEWS`
3. Copy the **Namespace ID** (you'll need it later)

##### B. Create Pages project

1. **Workers & Pages → Create application → Pages → Connect to Git**
2. Select your forked repository
3. **Build settings**:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. **Environment variables**:
   - `NODE_VERSION` = `20`
   - `NEXT_TELEMETRY_DISABLED` = `1`
5. **Functions → KV namespace bindings**:
   - Variable name: `VIEWS`
   - KV namespace: select the `VIEWS` you just created
6. Click **Save and Deploy**

##### C. (Optional) Custom domain

1. Pages project → **Custom domains → Set up a custom domain**
2. Enter your domain and follow the DNS instructions
3. HTTPS certificate is issued automatically

#### 6. (Optional) Enable giscus comments

> ⚠️ **Privacy note**: giscus loads comments from a public GitHub Discussions repo you own. If you want a fully private comment system, consider self-hosting alternatives like **Twikoo**, **Artalk**, or **Waline**.

1. Create a **public GitHub repo** (for comments only)
2. Repo **Settings → General → Features** → enable **Discussions**
3. Visit https://giscus.app
4. Get your `repo`, `repoId`, `category`, `categoryId`
5. Fill them in `src/app/site.config.ts` under `giscus`
6. Set `enabled: true`
7. Commit and push — auto-deploys

### 📁 Project Structure

```
.
├── content/posts/         # Your posts (.mdx files)
├── functions/api/         # Cloudflare Pages Functions
│   ├── likes/             # Likes API
│   └── views/             # Views API
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # About page
│   │   ├── posts/         # Post routes
│   │   ├── layout.tsx     # Global layout
│   │   ├── page.tsx       # Home page
│   │   └── site.config.ts # ⭐ Site config (edit this)
│   ├── components/        # React components
│   └── lib/               # Utilities (i18n, theme, etc.)
└── README.md
```

### 🛠 Local development

```bash
npm install        # install deps
npm run dev        # start dev server (http://localhost:3000)
npm run build      # build for production (outputs to out/)
npm run worker:dev # preview Cloudflare Functions locally
```

### 🌐 i18n

The template ships with **Chinese (simplified)** as default and **English** as secondary. Add more languages by editing `src/lib/i18n.ts`.

### 📜 License

MIT — use freely, attribution appreciated.

---

## 简体中文

### ✨ 特性

- ✅ **MDX 支持** — 写文章像 Markdown，支持嵌入组件
- ✅ **TypeScript + Tailwind CSS**
- ✅ **Cloudflare Pages 免费部署**（自带 Functions）
- ✅ **暗色模式**，带圆形主题切换动画
- ✅ **RSS / Sitemap / SEO** 开箱即用
- ✅ **阅读量 + 点赞**（基于 Cloudflare KV）
- ✅ **giscus 评论**（基于 GitHub Discussions）
- ✅ **Pagefind 全文搜索**（构建时索引）
- ✅ **中英双语** — 默认中文，顶部可切换英文
- ✅ **响应式设计** — 移动端和桌面端都好看
- ✅ **可拖动的自定义背景图**

### 🚀 快速开始

#### 1. 使用此模板

点击页面顶部 **Use this template → Create a new repository**。

#### 2. 克隆并安装

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

#### 3. 配置站点

打开 `src/app/site.config.ts`，填入 TODO 字段：

```typescript
{
  name: "你的站名",
  description: "一句话描述",
  author: "你的名字",
  email: "你的邮箱",
  github: "https://github.com/your-username",
  url: "https://your-domain.com",
  // ...
}
```

> ⚠️ 所有带 `TODO` 注释的字段都要改。

#### 4. 自定义内容

- 修改 `src/app/about/page.tsx` 的"关于我"内容
- 在 `content/posts/*.mdx` 写文章

#### 5. 部署到 Cloudflare Pages

##### A. 创建 KV 命名空间（阅读量 + 点赞用）

1. 进入 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages → KV**
2. 点击 **Create a namespace**，名称必须叫 `VIEWS`
3. 复制 **Namespace ID**（后面要用）

##### B. 创建 Pages 项目

1. **Workers & Pages → Create application → Pages → Connect to Git**
2. 选择你 fork 的仓库
3. **Build settings**：
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. **环境变量**：
   - `NODE_VERSION` = `20`
   - `NEXT_TELEMETRY_DISABLED` = `1`
5. **Functions → KV namespace bindings**：
   - Variable name: `VIEWS`
   - KV namespace: 选择刚创建的 `VIEWS`
6. 点击 **Save and Deploy**

##### C. （可选）自定义域名

1. Pages 项目 → **Custom domains → Set up a custom domain**
2. 输入你的域名，按提示添加 DNS 记录
3. HTTPS 证书自动签发

#### 6. （可选）启用 giscus 评论

> ⚠️ **隐私提示**：giscus 会从你**自己的** GitHub Discussions 仓库加载评论。如果想完全私有化评论系统，可以考虑自托管的 **Twikoo**、**Artalk** 或 **Waline**。

1. 创建一个**公开的 GitHub 仓库**（专门存评论）
2. 仓库 **Settings → General → Features** → 勾选 **Discussions**
3. 访问 https://giscus.app/zh-CN
4. 获取 `repo`、`repoId`、`category`、`categoryId`
5. 填到 `src/app/site.config.ts` 的 `giscus` 字段
6. 把 `enabled` 改成 `true`
7. commit 推送，自动部署

### 📁 目录结构

```
.
├── content/posts/         # 你的文章（.mdx）
├── functions/api/         # Cloudflare Pages Functions
│   ├── likes/             # 点赞 API
│   └── views/             # 阅读量 API
├── public/                # 静态资源
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # 关于页面
│   │   ├── posts/         # 文章路由
│   │   ├── layout.tsx     # 全局布局
│   │   ├── page.tsx       # 首页
│   │   └── site.config.ts # ⭐ 站点配置（主要改这个）
│   ├── components/        # React 组件
│   └── lib/               # 工具函数（i18n、主题等）
└── README.md
```

### 🛠 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器（http://localhost:3000）
npm run build      # 构建生产版本（输出到 out/）
npm run worker:dev # 本地预览 Cloudflare Functions
```

### 🌐 国际化

模板默认 **简体中文**，**英文** 作为第二语言。在 `src/lib/i18n.ts` 里可以加更多语言。

### 📜 协议

MIT — 随便用，欢迎保留原作者信息。
