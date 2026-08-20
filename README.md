# 汤振东 GitHub 主页

静态个人主页，已按 GitHub Pages 根域名 `ZhendongTang.github.io` 部署。

## 文件

- `index.html`：主页入口
- `style.css`：纸张质感、响应式排版
- `app.js`：项目数据与选项卡交互

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
git commit -m "update homepage"
git push origin main
```

GitHub 仓库 **Settings → Pages** 中 Source 选择 `main` / root。

线上地址：`https://ZhendongTang.github.io/`
