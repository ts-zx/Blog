// 国际化字典 - 两种语言
// 用法：const { t } = useT(); t("nav.home")

export const translations = {
  "zh-CN": {
    // 导航
    "nav.home": "首页",
    "nav.posts": "文章",
    "nav.about": "关于",
    // 首页
    "home.greeting": "你好，我是",
    "home.browseAll": "浏览所有文章",
    "home.aboutMe": "关于我",
    "home.latestPosts": "最新文章",
    "home.viewAll": "全部",
    // 文章卡片
    "post.readingTime": "分钟阅读",
    "post.minRead": "分钟",
    // 文章详情
    "post.backToList": "← 返回所有文章",
    "post.backToPosts": "← 回到文章列表",
    "post.comments": "评论",
    // 搜索
    "search.placeholder": "搜索文章...",
    "search.button": "搜索",
    "search.open": "打开搜索",
    "search.close": "关闭搜索",
    "search.noResults": "没有找到相关文章",
    "search.placeholderHint": "试试搜索「React」或「生活」",
    "search.cancel": "取消",
    // 背景设置
    "bg.title": "自定义背景",
    "bg.close": "关闭",
    "bg.dragHint": "拖动定位 / 滚轮缩放",
    "bg.opacity": "图片透明度",
    "bg.blur": "模糊度",
    "bg.overlay": "蒙层（保证文字清晰）",
    "bg.zoom": "缩放",
    "bg.zoomIn": "放大",
    "bg.zoomOut": "缩小",
    "bg.focalPoint": "焦点",
    "bg.reset": "重置",
    "bg.change": "更换",
    "bg.clear": "清除背景",
    "bg.done": "完成",
    "bg.privacyTip": "🔒 图片只存在你的浏览器本地，不会上传到服务器",
    // 主题切换
    "theme.toggleLight": "切换到浅色模式",
    "theme.toggleDark": "切换到深色模式",
    // 菜单
    "menu.open": "打开菜单",
    "menu.close": "关闭菜单",
    "menu.title": "菜单",
    "menu.escClose": "按 ESC 关闭",
    // 站点切换
    "site.current": "当前",
    // 通用
    "common.minutes": "分钟",
    "common.minRead": "分钟阅读",
    // 页脚
    "footer.copyright": "© {year} {author} · Powered by Next.js",
    // 404
    "notFound.title": "404",
    "notFound.desc": "This page could not be found.",
    "notFound.backHome": "返回首页",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.posts": "Posts",
    "nav.about": "About",
    // Home
    "home.greeting": "Hi, I'm",
    "home.browseAll": "Browse all posts",
    "home.aboutMe": "About me",
    "home.latestPosts": "Latest posts",
    "home.viewAll": "All",
    // Post card
    "post.readingTime": "min read",
    "post.minRead": "min",
    // Post detail
    "post.backToList": "← Back to all posts",
    "post.backToPosts": "← Back to posts",
    "post.comments": "Comments",
    // Search
    "search.placeholder": "Search posts...",
    "search.button": "Search",
    "search.open": "Open search",
    "search.close": "Close search",
    "search.noResults": "No matching posts found",
    "search.placeholderHint": "Try searching for \"React\" or \"life\"",
    "search.cancel": "Cancel",
    // Background
    "bg.title": "Custom Background",
    "bg.close": "Close",
    "bg.dragHint": "Drag to position / scroll to zoom",
    "bg.opacity": "Image opacity",
    "bg.blur": "Blur",
    "bg.overlay": "Overlay (for text clarity)",
    "bg.zoom": "Zoom",
    "bg.zoomIn": "Zoom in",
    "bg.zoomOut": "Zoom out",
    "bg.focalPoint": "Focal",
    "bg.reset": "Reset",
    "bg.change": "Change",
    "bg.clear": "Clear background",
    "bg.done": "Done",
    "bg.privacyTip": "🔒 Image stored locally in your browser, never uploaded to any server",
    // Theme
    "theme.toggleLight": "Switch to light mode",
    "theme.toggleDark": "Switch to dark mode",
    // Menu
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "menu.title": "Menu",
    "menu.escClose": "Press ESC to close",
    // Site switcher
    "site.current": "Current",
    // Common
    "common.minutes": "min",
    "common.minRead": "min read",
    // Footer
    "footer.copyright": "© {year} {author} · Powered by Next.js",
    // 404
    "notFound.title": "404",
    "notFound.desc": "This page could not be found.",
    "notFound.backHome": "Back to home",
  },
} as const;

export type Locale = keyof typeof translations;
export const DEFAULT_LOCALE: Locale = "zh-CN";
export const SUPPORTED_LOCALES: Locale[] = ["zh-CN", "en"];

export const LOCALE_LABELS: Record<Locale, { native: string; english: string; flag: string }> = {
  "zh-CN": { native: "简体中文", english: "Chinese", flag: "🇨🇳" },
  en: { native: "English", english: "English", flag: "🇺🇸" },
};
