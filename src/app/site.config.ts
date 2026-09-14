// ⚠️ 模板配置文件 - 你必须先修改这里再部署！
//
// 步骤：
// 1. 替换下面所有 TODO 标记的内容
// 2. giscus 评论系统需要先在自己 GitHub 上创建一个仓库并启用 Discussions
//    然后访问 https://giscus.app/zh-CN 获取 repo/repoId/category/categoryId
// 3. Cloudflare KV 命名空间需要自己创建（见 README.md）

export const siteConfig = {
  // ====== 基础信息（必填）======
  name: "我的小站", // TODO: 你的站名
  description: "记录、思考、分享", // TODO: 一句话描述
  author: "YourName", // TODO: 你的名字/昵称
  email: "you@example.com", // TODO: 联系邮箱（可选，留空则隐藏）
  github: "https://github.com/your-username", // TODO: 你的 GitHub 主页
  url: "https://your-domain.com", // TODO: 你的站点 URL（用于 RSS、sitemap、SEO）
  language: "zh-CN", // 站点语言（zh-CN / en / ja 等）

  // ====== 导航菜单（必填）======
  nav: [
    { href: "/", label: "首页" },
    { href: "/posts", label: "文章" },
    { href: "/about", label: "关于" },
  ],

  // ====== 阅读量统计（可选）======
  // 关闭后文章页不会显示阅读量数字
  views: {
    enabled: true, // TODO: 改成 false 关闭
  },

  // ====== 点赞功能（可选）======
  likes: {
    enabled: true, // TODO: 改成 false 关闭
  },

  // ====== giscus 评论系统（可选）======
  // 启用方法：
  //   1. 在你的 GitHub 上创建一个公开仓库（用于存评论）
  //   2. 仓库 Settings → Features → 勾选 Discussions
  //   3. 访问 https://giscus.app/zh-CN 配置
  //   4. 把获得的 repo / repoId / category / categoryId 填到下面
  giscus: {
    enabled: false, // TODO: 改成 true 启用
    repo: "", // TODO: 例如 "your-username/your-blog-comments"
    repoId: "", // TODO: 在 giscus.app 获取
    category: "", // TODO: 例如 "Announcements"
    categoryId: "", // TODO: 在 giscus.app 获取
  },
};

export type SiteConfig = typeof siteConfig;
