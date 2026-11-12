# yoycol　—　yoycolpod.com

> 帽子 POD 工厂 · B2B 批发获客站（面向 dropshippers / Etsy / Amazon / Temu 卖家）
> **总控台（4 个站全貌）→ `D:\Claw\docs\网站总控台.md`**

| | |
|---|---|
| **域名** | `yoycolpod.com`（www CNAME → `*.vercel-dns-017.com`），DNS 在阿里云 hichina |
| **托管** | **Vercel** |
| **部署** | **GitHub push 即自动上线**（Vercel 自动构建） |
| **仓库** | `github.com/Vanquisher2026/yoycol-website` |
| **栈** | Next.js 16.2.6 · React 19.2.4 · Tailwind 4 · Turbopack |
| **转化入口** | WhatsApp `+86 133 4832 5895` / `info@yoycolpod.com`（**纯询盘，无购物车**） |
| **产品** | 14 个 POD 帽型（棒球帽 / 渔夫帽 / 毛线帽 / 针织帽 / 贝雷帽 / 雷锋帽 / 遮阳帽 / 童装帽…） |

## 常用命令

```bash
npm run dev      # 本地开发
npm run build    # 构建
npm run start    # 生产启动
```

## 关键路径

| 路径 | 内容 |
|------|------|
| `src/app/page.tsx` | 首页（产品列表内联在此） |
| `src/app/products/` | 产品列表 + `[slug]` 详情页 |
| `src/app/about/` · `contact/` | 关于 / 联系 |
| `src/components/OrganizationSchema.tsx` | Organization 结构化数据 |
| `src/components/WebsiteSchema.tsx` | WebSite 结构化数据 |
| `src/app/sitemap.ts` | sitemap（14 个产品 + 4 个静态页） |

## 配套目录

| 目录 | 作用 |
|------|------|
| `D:\poju\pod独立站调研` | 调研侧：竞品分析、询盘邮件模板、工厂溯源报告 |
| `D:\web\腾讯云服务器\v2ray-yoycol-qr.png` | 本站的独立代理节点配置 |

## 当前待办（2026-11-12）

1. 🔴 **零统计代码** —— GA / GTM / Yandex Metrika / Meta Pixel / Clarity 全部缺失 → 投放 ROI 完全无法衡量，WhatsApp 点击也没有事件
2. 🟠 无 `/privacy`、`/terms` 页 —— 面向欧美卖家，通常是合规基线
3. 🟠 Facebook domain verification 已在页面里，但无 Pixel/事件，社媒投放链路未闭环
4. 🟢 2026-11-11 已删除经营主体与地区信息（页脚 / about / contact / metadata publisher / OrganizationSchema）

---

*本文件由 AI 维护。改站点前先看 `D:\Claw\docs\网站总控台.md`。*
