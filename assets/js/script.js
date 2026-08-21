const categoryMap = {
  escc: "医疗 AI",
  chd: "医疗 AI",
  "sepsis-rl": "医疗 AI",
  triage: "医疗 AI",
  tcm: "工业智能",
  attribution: "数据科学",
  dfu: "数据科学"
};

const thumbColors = {
  "医疗 AI": ["#0e7490", "#0b1e2b"],
  "工业智能": ["#2563eb", "#101828"],
  "数据科学": ["#7c3aed", "#131024"]
};

const awards = [
  {
    id: "dcic-2026",
    year: "2026",
    title: "数字中国创新大赛（DCIC）",
    award: "全国一等奖",
    rank: "1/5",
    project: { id: "tcm", title: "中药制药生产全流程风险监测与预警系统" },
    tags: ["数字健康赛道"],
    description: "数字中国创新大赛（DCIC）是由数字中国建设峰会组委会主办的国家级赛事，围绕数字中国建设重点领域设置多个赛道。数字健康赛道聚焦医疗健康数据融合与智能决策，推动数字技术与真实医疗场景深度融合。",
    hosts: ["数字中国建设峰会组委会", "国家发展改革委", "国家数据局", "国家网信办", "工业和信息化部", "福建省人民政府"],
    images: [
      { src: "./assets/images/awards/dcic/2072278577.jpg", alt: "数字中国创新大赛现场照片 1" },
      { src: "./assets/images/awards/dcic/IMG_4292.jpg", alt: "数字中国创新大赛现场照片 2" },
      { src: "./assets/images/awards/dcic/IMG_4276.jpg", alt: "数字中国创新大赛现场照片 3" },
      { src: "./assets/images/awards/dcic/IMG_4476.jpg", alt: "数字中国创新大赛现场照片 4" }
    ],
    highlights: [
      "数字中国创新大赛数字健康赛道全国一等奖",
      "作为第 1 完成人牵头项目落地与决赛现场答辩路演",
      "方案聚焦中药质控智能决策"
    ]
  },
  {
    id: "siemens-2025",
    year: "2025",
    title: "西门子 Xcelerator 公开赛",
    award: "全国三等奖 + 行业突破奖",
    badges: ["全国三等奖", "行业突破奖"],
    badgeStyle: "blue",
    rank: "1/7",
    project: { id: "tcm", title: "中药制药生产全流程风险监测与预警系统" },
    description: "西门子 Xcelerator 公开赛是西门子面向开发者与创新团队举办的数字化创新赛事，围绕工业数字化与智能制造征集解决方案，推动前沿技术在真实工业场景中的落地应用。",
    hosts: ["西门子（中国）有限公司", "国际智能制造联盟产业委员会"],
    hostFormat: "join",
    images: [
      { src: "./assets/images/awards/siemens/工博会展厅.jpg", alt: "西门子 Xcelerator 公开赛工博会展厅" },
      { src: "./assets/images/awards/siemens/奖杯与奖状.jpg", alt: "西门子 Xcelerator 公开赛奖杯与奖状" },
      { src: "./assets/images/awards/siemens/路演照片.jpg", alt: "西门子 Xcelerator 公开赛路演照片" },
      { src: "./assets/images/awards/siemens/西门子大合照.jpg", alt: "西门子 Xcelerator 公开赛大合照" }
    ],
    highlights: ["西门子 Xcelerator 数字化创新赛道", "全国三等奖 + 行业突破奖", "作为第 1 完成人牵头方案落地与决赛路演答辩"]
  },
  {
    id: "sh-graduate-2024",
    year: "2024",
    title: "上海市优秀毕业生",
    award: "省级荣誉",
    rank: "",
    hosts: ["上海市教育委员会"],
    hostLabel: "颁发机构",
    summary: "硕士研究生毕业于华东师范大学数据科学与工程学院，获上海市普通高等学校优秀毕业生称号。",
    highlights: ["华东师范大学数据科学与工程学院", "硕士研究生", "上海市普通高等学校优秀毕业生"],
    fallbackDisabled: true,
    hideHighlights: true
  },
  {
    id: "nice-data-2024",
    year: "2024",
    title: "长三角国家技术创新中心数据要素应用大赛",
    award: "一等奖",
    rank: "1/1",
    summary: "以数据要素在医疗场景中的应用为主题，独立完成方案并获一等奖。",
    highlights: ["职工创新项目赛道", "独立完成（1/1）", "一等奖"]
  },
  {
    id: "data-factors-guangdong-2024",
    year: "2024",
    title: "“数据要素 ×”大赛广东分赛医疗健康赛道",
    award: "优秀奖",
    rank: "",
    summary: "围绕多源医疗数据融合与模型构建，形成可落地的数据要素应用方案。",
    highlights: ["医疗健康赛道", "多源数据融合与建模", "优秀奖"]
  },
  {
    id: "port-data-2024",
    year: "2024",
    title: "第三届数智港航数据创新应用大赛",
    award: "优秀奖",
    rank: "2/3",
    summary: "面向港航场景构建算法模型，完成数据创新应用方案。",
    highlights: ["算法模型赛道", "团队排名 2/3", "优秀奖"]
  },
  {
    id: "bigdata-health-2023",
    year: "2023",
    title: "第二届中国大数据大赛卫生健康大数据创新应用赛道",
    award: "全国一等奖（工信部）",
    rank: "5/5",
    summary: "卫生健康大数据创新应用方案获全国一等奖。",
    highlights: ["工信部主办", "全国一等奖", "作为第 5 完成人参与"]
  },
  {
    id: "guangci-2023",
    year: "2023",
    title: "广慈-思南产医融合国际创新大赛",
    award: "全国三等奖",
    rank: "4/5",
    summary: "提出产医融合创新创意方案，获全国三等奖。",
    highlights: ["创新创意赛道", "产医融合方向", "全国三等奖"]
  },
  {
    id: "ccf-2022",
    year: "2022",
    title: "CCF 大数据与计算智能大赛",
    award: "全国二等奖",
    rank: "1/2",
    project: {
      url: "https://github.com/ZhendongTang/Data-Lake-Performance-Optimization",
      title: "数据湖流批一体性能优化（Data Lake Performance Optimization）"
    },
    description: "CCF 大数据与计算智能大赛（BDCI）由中国计算机学会（CCF）主办、DataFountain 平台承办，围绕大数据与人工智能真实业务场景设置赛题，是国内具有影响力的大数据算法赛事之一。",
    hosts: ["中国计算机学会（CCF）"],
    images: [
      { src: "./assets/images/awards/ccf-bdci/244963dbcba0ebe3601448560fbe1a57.jpg", alt: "CCF 大数据与计算智能大赛现场照片 1" },
      { src: "./assets/images/awards/ccf-bdci/e49bcd0667331253c69bc6c3c3fb7141.jpg", alt: "CCF 大数据与计算智能大赛现场照片 2" }
    ],
    highlights: ["数据湖流批一体性能优化", "第 1 完成人", "全国二等奖"]
  },
  {
    id: "kaggle-2022",
    year: "2022",
    title: "Kaggle 美国运通违约预测",
    award: "铜牌",
    rank: "1/5",
    summary: "信用违约风险建模竞赛，获得铜牌。",
    highlights: ["Kaggle 竞赛", "违约风险预测", "铜牌"]
  }
];

const awardLinkMap = {
  "dcic-2026": [
    { label: "单位新闻", url: "https://mp.weixin.qq.com/s/HKj0pTnCjFj3BSkjLsNyXw" },
    { label: "数字中国创新大赛官网", url: "https://www.dcic-china.com/" }
  ],
  "siemens-2025": [
    { label: "获奖官方链接", url: "https://mp.weixin.qq.com/s/eCaFwEh1_C3v6nko1wqNHw" }
  ],
  "sh-graduate-2024": [
    { label: "学校官方报道", url: "https://mp.weixin.qq.com/s/HuiaJ2HpxFRqVDyJja7kgg" }
  ],
  "data-factors-guangdong-2024": [
    { label: "广东省人民政府", url: "https://www.gd.gov.cn/" }
  ],
  "guangci-2023": [
    { label: "瑞金医院", url: "https://www.rjh.com.cn/" }
  ],
  "ccf-2022": [
    { label: "大赛官网", url: "https://www.datafountain.cn/special/BDCI2022" },
    { label: "官方报道", url: "https://zhuanlan.zhihu.com/p/656188389" }
  ],
  "kaggle-2022": [
    { label: "Kaggle 竞赛页", url: "https://www.kaggle.com/competitions/amex-default-prediction" }
  ]
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[ch]);
}

function categoryFor(id) {
  return categoryMap[id] || "数据科学";
}

function projectThumb(project, category) {
  const [start, end] = thumbColors[category] || thumbColors["数据科学"];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${start}"/>
        <stop offset="1" stop-color="${end}"/>
      </linearGradient>
    </defs>
    <rect width="640" height="400" fill="url(#g)"/>
    <text x="48" y="212" font-size="44" fill="#ffffff" font-family="Microsoft YaHei, sans-serif" font-weight="600">${project.label}</text>
    <text x="48" y="262" font-size="20" fill="#c7d2fe" font-family="Microsoft YaHei, sans-serif">${category}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderProjects() {
  const list = document.getElementById("project-list");
  list.innerHTML = projects.map((project) => {
    const category = categoryFor(project.id);
    const thumb = projectThumb(project, category);
    return `
      <li class="project-item active" data-filter-item data-category="${category}" data-id="${project.id}">
        <a href="#project-${project.id}" data-project-link>
          <figure class="project-img">
            <img src="${thumb}" alt="${escapeHtml(project.label)}" loading="lazy">
          </figure>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-category">${category} · ${escapeHtml(project.period)}</p>
        </a>
      </li>`;
  }).join("");
}

function awardBadgeClass(awardText) {
  if (awardText.includes("一等奖")) return "first";
  if (awardText.includes("二等奖")) return "second";
  if (awardText.includes("三等奖")) return "third";
  return "normal";
}

function awardBadgeMarkup(award) {
  const labels = award.badges || [award.award];
  const style = award.badgeStyle || "";
  return labels.map((label) => `
    <span class="award-badge ${style || awardBadgeClass(label)}">${escapeHtml(label)}</span>`).join("");
}

function renderAwards() {
  const list = document.getElementById("award-list");
  list.innerHTML = awards.map((award) => `
    <button type="button" class="award-item" data-award-id="${award.id}">
      <span class="award-year">${escapeHtml(award.year)}</span>
      <span class="award-title">${escapeHtml(award.title)}</span>
      <span class="award-meta">
        ${awardBadgeMarkup(award)}
        ${award.rank ? `<span class="award-badge award-rank">位次 ${escapeHtml(award.rank)}</span>` : ""}
      </span>
    </button>`).join("");
  renderAwardDetail(awards[0], false);
}

function renderAwardDetail(award, updateUrl = true) {
  document.querySelectorAll(".award-item").forEach((btn) => {
    const active = btn.dataset.awardId === award.id;
    btn.classList.toggle("active", active);
    if (active) {
      btn.setAttribute("aria-current", "true");
    } else {
      btn.removeAttribute("aria-current");
    }
  });

  const detail = document.getElementById("award-detail");
  const highlights = award.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const knownLinks = awardLinkMap[award.id] || [];
  const links = award.fallbackDisabled
    ? [...knownLinks]
    : [
        ...knownLinks,
        { label: "查看相关报道", url: `https://www.bing.com/search?q=${encodeURIComponent(award.title)}` }
      ];
  const linkMarkup = links.map((link) => {
    const internal = link.url.startsWith("#");
    return `
    <a class="award-link" href="${escapeHtml(link.url)}"${internal ? "" : ' target="_blank" rel="noopener noreferrer"'}>
      ${escapeHtml(link.label)}
      <ion-icon name="${internal ? "arrow-forward-outline" : "open-outline"}"></ion-icon>
    </a>`;
  }).join("");
  const hostMarkup = award.hosts
    ? award.hostFormat === "join"
      ? `<p class="award-hosts">${award.hosts.map((item) => escapeHtml(item)).join("、")}</p>`
      : award.hosts.length > 1
        ? `<p class="award-hosts">${escapeHtml(award.hosts[0])}（${award.hosts.slice(1).map((item) => escapeHtml(item)).join("、")}）</p>`
        : `<p class="award-hosts">${escapeHtml(award.hosts[0])}</p>`
    : "";
  const rankTags = (award.tags || []).map((item) => `<span class="award-badge award-rank">${escapeHtml(item)}</span>`).join("");
  const projectMarkup = award.project
    ? `
    <a class="award-project" href="${award.project.url ? escapeHtml(award.project.url) : `#project-${escapeHtml(award.project.id)}`}"${award.project.url ? ' target="_blank" rel="noopener noreferrer"' : ""}>
      <ion-icon name="${award.project.url ? "open-outline" : "folder-open-outline"}"></ion-icon>
      <span>关联项目：${escapeHtml(award.project.title)}</span>
    </a>`
    : `<p class="award-summary">${escapeHtml(award.summary)}</p>`;
  const imageMarkup = (award.images || []).map((image) => `
    <a class="award-photo" href="${escapeHtml(image.src)}" target="_blank" rel="noopener noreferrer">
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy">
    </a>`).join("");
  detail.innerHTML = `
    <h3>${escapeHtml(award.title)}</h3>
    <div class="award-detail-meta">
      <span>${escapeHtml(award.year)}</span>
      ${awardBadgeMarkup(award)}
      ${award.rank ? `<span class="award-badge award-rank">位次 ${escapeHtml(award.rank)}</span>` : ""}
      ${rankTags}
    </div>
    ${projectMarkup}
    ${award.description ? `<h4>赛事描述</h4><p class="award-description">${escapeHtml(award.description)}</p>` : ""}
    ${award.hosts ? `<h4>${award.hostLabel || "主办单位"}</h4>${hostMarkup}` : ""}
    ${award.hideHighlights ? "" : `<h4>关键信息</h4><ul>${highlights}</ul>`}
    ${imageMarkup ? `<h4>现场照片</h4><div class="award-photos">${imageMarkup}</div>` : ""}
    <h4>相关链接</h4>
    <div class="award-links">${linkMarkup}</div>`;

  if (updateUrl) setHash(`#award-${award.id}`);
}

function renderProjectModal(project) {
  const content = document.getElementById("project-modal-content");
  const metrics = (project.metrics || []).map(([value, label]) => {
    return `<span class="metric"><b>${escapeHtml(value)}</b> ${escapeHtml(label)}</span>`;
  }).join("");
  const approach = (project.approach || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const outcomes = (project.outcomes || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const tags = (project.tags || []).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");

  content.innerHTML = `
    <h3 id="project-modal-title">${escapeHtml(project.title)}</h3>
    <div class="project-meta">${escapeHtml(project.period)} · ${escapeHtml(project.role)} · ${escapeHtml(project.org)}</div>
    <p>${escapeHtml(project.summary)}</p>
    ${metrics ? `<div class="project-metrics">${metrics}</div>` : ""}
    <h4>背景</h4>
    <p>${escapeHtml(project.background)}</p>
    <h4>做法</h4>
    <ul>${approach}</ul>
    <h4>结果</h4>
    <ul>${outcomes}</ul>
    <div class="project-tags">${tags}</div>`;
}

function openProject(id, updateUrl = true) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  renderProjectModal(project);
  document.getElementById("project-modal").classList.add("active");
  document.getElementById("project-modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (updateUrl) setHash(`#project-${id}`);
}

function closeProject() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function applyFilter(selectedValue) {
  document.querySelectorAll("[data-filter-item]").forEach((item) => {
    const active = selectedValue === "全部" || item.dataset.category === selectedValue;
    item.classList.toggle("active", active);
  });
  document.querySelectorAll("[data-filter-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.trim() === selectedValue);
  });
}

function switchPage(name, updateUrl = true, scroll = true) {
  document.querySelectorAll("[data-page]").forEach((page) => {
    page.classList.toggle("active", page.dataset.page === name);
  });
  document.querySelectorAll("[data-nav-link]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === name);
  });
  if (updateUrl) setHash(`#${name}`);
  if (scroll) {
    window.scrollTo({ top: 0, behavior: window.reduceMotion ? "auto" : "smooth" });
  }
}

function setHash(value) {
  try {
    history.replaceState(null, "", value);
  } catch (error) {
    // 本地 file:// 预览时忽略 URL 更新。
  }
}

function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith("#award-")) {
    const id = hash.slice("#award-".length);
    const award = awards.find((item) => item.id === id);
    switchPage("honors", false, false);
    if (award) renderAwardDetail(award, false);
    return;
  }
  if (hash.startsWith("#project-")) {
    const id = hash.slice("#project-".length);
    switchPage("portfolio", false, false);
    openProject(id, false);
    return;
  }
  const name = hash.slice(1);
  if (["about", "resume", "portfolio", "honors", "contact"].includes(name)) {
    switchPage(name, false, false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  window.reduceMotion = reduceMotionQuery.matches;

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("site-theme", next);
      } catch (error) { /* 本地预览时忽略 */ }
    });
  }

  renderProjects();
  renderAwards();
  applyFilter("全部");

  document.querySelectorAll("[data-filter-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.textContent.trim()));
  });

  document.getElementById("project-list").addEventListener("click", (event) => {
    const link = event.target.closest("[data-project-link]");
    if (!link) return;
    event.preventDefault();
    const item = link.closest("[data-filter-item]");
    if (item) openProject(item.dataset.id);
  });

  document.getElementById("award-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-award-id]");
    if (!button) return;
    const award = awards.find((item) => item.id === button.dataset.awardId);
    if (award) renderAwardDetail(award);
  });

  document.querySelectorAll("[data-nav-link]").forEach((btn) => {
    btn.addEventListener("click", () => switchPage(btn.dataset.target));
  });

  const sidebar = document.querySelector("[data-sidebar]");
  document.querySelector("[data-sidebar-btn]").addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  const projectModal = document.getElementById("project-modal");
  document.getElementById("project-modal-close").addEventListener("click", closeProject);
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) closeProject();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && projectModal.classList.contains("active")) closeProject();
  });

  const backToTop = document.getElementById("back-to-top");
  const syncBackToTop = () => backToTop.classList.toggle("show", window.scrollY > 320);
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.reduceMotion ? "auto" : "smooth" });
  });
  window.addEventListener("scroll", syncBackToTop, { passive: true });
  syncBackToTop();

  window.addEventListener("hashchange", handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  } else {
    switchPage("about", false, false);
  }
});

