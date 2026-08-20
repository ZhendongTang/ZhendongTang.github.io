# 汤振东 GitHub 主页

基于开源模板 [vCard - Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)（MIT License）重新设计的个人主页，可直接部署到 GitHub Pages 根域名 `ZhendongTang.github.io`。

## 功能

- 关于 / 履历 / 项目 / 奖项 / 联系五个主视图，支持 URL 深链。
- 项目卡片支持筛选，点击后弹出完整背景、做法、结果与关键指标。
- 荣誉奖项采用左右联动布局，点击左侧奖项后右侧直接展示详情与相关链接。
- 响应式深色侧边栏布局，移动端可折叠联系方式。
- 适配中文系统字体，并保留基础 SEO 与分享元数据。

## 文件

- `index.html`：主页结构
- `assets/css/style.css`：模板样式 + 中文定制样式
- `assets/js/projects.js`：项目数据
- `assets/js/script.js`：导航、筛选、项目弹窗与交互
- `logos/`：机构 Logo
- `TEMPLATE-LICENSE`：上游模板 MIT 许可证

## 本地预览

双击 `index.html`，或在仓库目录运行：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 部署

本仓库就是 GitHub Pages 仓库，直接推送到 `ZhendongTang/ZhendongTang.github.io` 的 `main` 分支即可：

```bash
git add .
git commit -m "redesign homepage"
git push origin main
```

GitHub 仓库 **Settings → Pages** 中 Source 选择 `main` / root。

线上地址：`https://ZhendongTang.github.io/`
