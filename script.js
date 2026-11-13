// ===== 작품 데이터 — 이미지: images/works/*.svg (1800×1000, 9:5). 실제 작품으로 교체: src를 "images/works/파일명.jpg" 로 =====
const artworks = [
  { id: "agency-landing", src: "images/works/01-agency-landing.svg", cat: "web", tool: "HTML · CSS", title: { ko: "디지털 에이전시 랜딩 페이지", en: "Digital Agency Landing Page", ru: "Лендинг для digital-агентства" } },
  { id: "mobile-app", src: "images/works/02-mobile-app.svg", cat: "ui", tool: "Figma", title: { ko: "모바일 앱 디자인", en: "Mobile App Design", ru: "Дизайн мобильного приложения" } },
  { id: "color-palette", src: "images/works/03-color-palette.svg", cat: "illust", tool: "Illustrator", title: { ko: "컬러 팔레트 & 일러스트", en: "Color Palette & Illustrations", ru: "Палитры и иллюстрации" } },
  { id: "portfolio-site", src: "images/works/05-portfolio-coding.svg", cat: "web", tool: "HTML · CSS", title: { ko: "포트폴리오 웹사이트 코딩", en: "Portfolio Website Coding", ru: "Вёрстка сайта-портфолио" } },
  { id: "ui-library", src: "images/works/06-ui-library.svg", cat: "ui", tool: "Figma", title: { ko: "UI 컴포넌트 라이브러리", en: "UI Component Library", ru: "UI-кит компонентов" } },
  { id: "digital-illustration", src: "images/works/07-digital-illustration.svg", cat: "illust", tool: "Illustrator", title: { ko: "디지털 일러스트레이션", en: "Digital Illustration", ru: "Цифровая иллюстрация" } },
  { id: "travel-app", src: "images/works/08-travel-app.svg", cat: "ui", tool: "Figma", title: { ko: "여행 앱 프로토타입", en: "Travel App Prototype", ru: "Прототип приложения для путешествий" } },
  { id: "branding", src: "images/works/09-branding.svg", cat: "design", tool: "Photoshop · Canva", title: { ko: "브랜딩 & 그래픽 디자인", en: "Branding & Graphics", ru: "Брендинг и графика" } },
];

// 사이트 주소 (QR 코드에 사용)
const SITE_URL = "https://kuxowqq.github.io/portfolio_milla/";

// ===== 다국어 텍스트 =====
const i18n = {
  ko: {
    "nav.about": "소개", "nav.works": "작품", "nav.contact": "연락하기",
    "name": "카밀라",
    "cover.eyebrow": "ILLUSTRATION<br>&amp; DRAWING", "cover.role": "아티스트 · 일러스트레이터", "cover.credit": "Illustration by Kamilla",
    "cover.pitch": "디자인, 기술, 창의성을 결합해 의미 있는 디지털 경험을 만드는 크리에이티브 디자이너이자 개발자입니다.",
    "cover.tag1": "UI/UX 디자인", "cover.tag2": "웹 디자인", "cover.tag3": "프론트엔드 개발", "cover.tag4": "그래픽 디자인",
    "about.title": "ABOUT ME",
    "about.specialty": "SPECIALTY", "about.specialtyValue": "Illustration", "about.facts": "ABOUT KAMILLA",
    "about.age": "2008년생", "about.ru": "러시아어", "about.en": "영어", "about.ko": "한국어",
    "nav.skills": "스킬", "skills.title": "MY SKILLS", "skills.sub": "제가 작업할 때 사용하는 도구들이에요",
    "skills.w1": "Design", "skills.w2": "Create", "skills.w3": "Inspire",
    "works.title": "SELECTED WORKS", "works.sub": "디자인, 웹사이트, 일러스트 작업들",
    "works.all": "전체", "works.web": "웹사이트", "works.ui": "UI/UX", "works.illust": "일러스트", "works.design": "그래픽 디자인",
    "works.soon": "더 많은 작품이 곧 올라와요…",
    "theme.dark": "다크 모드로 전환", "theme.light": "라이트 모드로 전환",
    "project.back": "작품 목록으로 돌아가기", "project.backShort": "작품",
    "project.overview": "프로젝트 개요", "project.role": "나의 역할", "project.process": "디자인 & 개발 과정", "project.tools": "도구 & 기술", "project.features": "주요 특징", "project.discipline": "분야", "project.toolsLabel": "도구", "project.focus": "포커스", "project.prev": "이전 프로젝트", "project.next": "다음 프로젝트",
    "contact.title": "LET'S<br>CONNECT!",
    "contact.thanks": "제 포트폴리오를 봐 주셔서 감사해요. 작업 의뢰, 협업, 또는 그냥 인사도 언제나 환영해요!",
    "contact.copy": "복사", "contact.copied": "복사됨!",
    "contact.qr": "스캔해서 더 많은 작품을 보세요!", "footer.by": "Designed by Kamilla",
    "nav.journey": "여정",
    "nav.interests": "관심사",
    "about.origin": "카자흐스탄 알마티 → 한국",
    "about.p1": "안녕하세요! 제 이름은 카밀라이고, 18살이에요. 카자흐스탄 알마티에서 왔고, 지금은 한국에 살고 있어요.",
    "about.p2": "저는 호기심이 많고 창의적인 사람이에요. 새로운 아이디어를 발견하고 예술과 디자인으로 저를 표현하는 것을 좋아해요.",
    "about.p3": "여가 시간에는 그림 그리기, 음악 듣기, 비디오 게임, 그리고 친구들과 시간 보내는 것을 좋아해요.",
    "about.p4": "디자인, 건축, 기술에 관심이 많아요. 새로운 것을 배우고, 다양한 스타일을 실험하고, 제 아이디어를 현실로 만드는 것을 좋아해요.",
    "about.p5": "모든 삶의 경험은 새로운 시각을 열어 주고, 모든 창의적인 아이디어는 특별한 무언가가 될 수 있다고 믿어요.",
    "journey.title": "MY JOURNEY",
    "journey.s1t": "시작 · 건축",
    "journey.s1": "저의 창작 여정은 건축에 대한 관심에서 시작됐어요. 건물과 인테리어, 그리고 아이디어가 실제 프로젝트가 되어 가는 과정에 늘 매료되었어요.",
    "journey.s2t": "건축 도면 & 3D",
    "journey.s2": "건축 도면을 그리고, 평면도를 만들고, 3D 모델링을 실험하는 것이 즐거웠어요. 단순한 스케치가 입체적인 공간으로 바뀌는 모습을 보는 것이 정말 흥미로웠어요.",
    "journey.s3t": "디지털 디자인 & 웹",
    "journey.s3": "이후 디지털 디자인과 웹 개발의 세계를 알게 되었어요. HTML을 배우기 시작했고, Figma를 익히고, Adobe Photoshop으로 아이디어를 현실로 만들기 시작했어요.",
    "journey.s4t": "카자흐스탄 → 한국",
    "journey.s4": "카자흐스탄에서 한국으로 이사한 것도 제 여정에서 중요한 부분이 되었어요. 새로운 문화를 알아 가면서 더 열린 마음과 독립심, 호기심을 갖게 되었어요.",
    "journey.s5t": "지금",
    "journey.s5": "저는 아직 저만의 방향을 찾아가는 중이에요. 새로운 기술을 배우고 다양한 창작의 가능성을 탐험하고 있어요. 저에게는 여정 자체가 목적지만큼 중요해요.",
    "interests.title": "MY INTERESTS",
    "interests.lead": "공부와 창작 프로젝트 외에도 저에게 영감을 주는 것들이 많아요.",
    "interests.1s": "그림 & 예술",
    "interests.1": "그림을 그리고 다양한 비주얼 스타일을 실험하는 것을 좋아해요. 제 상상력을 표현하는 가장 좋아하는 방법 중 하나예요.",
    "interests.2s": "음악",
    "interests.2": "음악은 언제나 저와 함께해요. 새로운 노래를 찾는 것을 좋아하고, 쉬거나 무언가를 할 때 음악을 들어요.",
    "interests.3s": "비디오 게임",
    "interests.3": "비디오 게임을 하며 가상 세계를 탐험하고, 다양한 이야기와 모험에 빠져드는 것을 좋아해요.",
    "interests.4s": "건축 & 디자인",
    "interests.4": "독특한 공간, 흥미로운 건물, 인테리어 디자인과 3D 시각화에 매력을 느껴요.",
    "interests.5s": "친구 & 새로운 경험",
    "interests.5": "친구들과 시간을 보내고, 추억을 나누고, 새로운 것에 도전하는 것을 좋아해요.",
  },
  en: {
    "nav.about": "About", "nav.works": "Works", "nav.contact": "Contact",
    "name": "Kamilla",
    "cover.eyebrow": "ILLUSTRATION<br>&amp; DRAWING", "cover.role": "Artist · Illustrator", "cover.credit": "Illustration by Kamilla",
    "cover.pitch": "Creative Designer & Developer crafting meaningful digital experiences through design, technology, and creativity.",
    "cover.tag1": "UI/UX Design", "cover.tag2": "Web Design", "cover.tag3": "Frontend Development", "cover.tag4": "Graphic Design",
    "about.title": "ABOUT ME",
    "about.specialty": "SPECIALTY", "about.specialtyValue": "Illustration", "about.facts": "ABOUT KAMILLA",
    "about.age": "born 2008", "about.ru": "Russian", "about.en": "English", "about.ko": "Korean",
    "nav.skills": "Skills", "skills.title": "MY SKILLS", "skills.sub": "Tools I use in my work",
    "skills.w1": "Design", "skills.w2": "Create", "skills.w3": "Inspire",
    "works.title": "SELECTED WORKS", "works.sub": "Design, websites and illustration",
    "works.all": "All", "works.web": "Websites", "works.ui": "UI/UX", "works.illust": "Illustration", "works.design": "Graphic Design",
    "works.soon": "More works coming soon…",
    "theme.dark": "Switch to dark mode", "theme.light": "Switch to light mode",
    "project.back": "Back to Selected Works", "project.backShort": "Works",
    "project.overview": "Project Overview", "project.role": "My Role & Contributions", "project.process": "Design & Development Process", "project.tools": "Tools & Technologies", "project.features": "Key Features", "project.discipline": "Discipline", "project.toolsLabel": "Tools", "project.focus": "Focus", "project.prev": "Previous project", "project.next": "Next project",
    "contact.title": "LET'S<br>CONNECT!",
    "contact.thanks": "Thank you for taking the time to view my portfolio. Commissions, collaborations, or just saying hi — always welcome!",
    "contact.copy": "Copy", "contact.copied": "Copied!",
    "contact.qr": "Scan to see more of my work!", "footer.by": "Designed by Kamilla",
    "nav.journey": "Journey",
    "nav.interests": "Interests",
    "about.origin": "Almaty, Kazakhstan → South Korea",
    "about.p1": "Hi! My name is Kamilla and I'm 18 years old. I'm originally from Almaty, Kazakhstan, but I currently live in South Korea.",
    "about.p2": "I'm a curious and creative person who loves discovering new ideas and expressing myself through art and design.",
    "about.p3": "In my free time, I love drawing, listening to music, playing video games and spending time with friends.",
    "about.p4": "I'm interested in design, architecture and technology. I enjoy learning new things, experimenting with different styles and turning my ideas into something real.",
    "about.p5": "I believe every life experience opens up new perspectives, and every creative idea can become something special.",
    "journey.title": "MY JOURNEY",
    "journey.s1t": "The Beginning · Architecture",
    "journey.s1": "My creative journey began with an interest in architecture. I've always been fascinated by buildings, interiors and the very process of turning ideas into real projects.",
    "journey.s2t": "Drafting & 3D",
    "journey.s2": "I enjoyed architectural drafting, drawing floor plans and experimenting with 3D modeling. It was fascinating to watch simple sketches turn into three-dimensional spaces.",
    "journey.s3t": "Digital Design & Web",
    "journey.s3": "Later, I discovered the world of digital design and web development. I started learning HTML, got to know Figma and began using Adobe Photoshop to bring my ideas to life.",
    "journey.s4t": "Kazakhstan → Korea",
    "journey.s4": "Moving from Kazakhstan to South Korea also became an important part of my personal journey. Getting to know a new culture taught me to be more open, independent and curious.",
    "journey.s5t": "Today",
    "journey.s5": "I'm still finding my direction, learning new skills and exploring different creative possibilities. For me, the journey itself matters just as much as the destination.",
    "interests.title": "MY INTERESTS",
    "interests.lead": "Beyond studying and working on creative projects, I'm inspired by many other things.",
    "interests.1s": "",
    "interests.2s": "",
    "interests.3s": "",
    "interests.4s": "",
    "interests.5s": "",
    "interests.1": "I love drawing and experimenting with different visual styles. It's one of my favorite ways to express my imagination.",
    "interests.2": "Music is always with me. I love discovering new songs and listening to music while I relax or work on something.",
    "interests.3": "I enjoy playing video games, exploring virtual worlds and diving into different stories and adventures.",
    "interests.4": "I'm fascinated by unusual spaces, interesting buildings, interior design and 3D visualization.",
    "interests.5": "I love spending time with friends, sharing memories and trying something new.",
  },
  ru: {
    "nav.about": "Обо мне", "nav.works": "Работы", "nav.contact": "Контакты",
    "name": "Камилла",
    "cover.eyebrow": "ИЛЛЮСТРАЦИЯ<br>И РИСУНОК", "cover.role": "Художница · Иллюстратор", "cover.credit": "Иллюстрация — Камилла",
    "cover.pitch": "Креативный дизайнер и разработчик, создающий продуманные цифровые решения на стыке дизайна, технологий и творчества.",
    "cover.tag1": "UI/UX-дизайн", "cover.tag2": "Веб-дизайн", "cover.tag3": "Frontend-разработка", "cover.tag4": "Графический дизайн",
    "about.title": "ОБО МНЕ",
    "about.specialty": "СПЕЦИАЛИЗАЦИЯ", "about.specialtyValue": "Иллюстрация", "about.facts": "О КАМИЛЛЕ",
    "about.age": "2008 г.р.", "about.ru": "Русский", "about.en": "Английский", "about.ko": "Корейский",
    "nav.skills": "Навыки", "skills.title": "МОИ НАВЫКИ", "skills.sub": "Инструменты, с которыми я работаю",
    "skills.w1": "Дизайн", "skills.w2": "Творчество", "skills.w3": "Вдохновение",
    "works.title": "ИЗБРАННЫЕ РАБОТЫ", "works.sub": "Дизайн, сайты и иллюстрации",
    "works.all": "Все", "works.web": "Сайты", "works.ui": "UI/UX", "works.illust": "Иллюстрации", "works.design": "Графдизайн",
    "works.soon": "Скоро здесь появятся новые работы…",
    "theme.dark": "Включить тёмную тему", "theme.light": "Включить светлую тему",
    "project.back": "Назад к избранным работам", "project.backShort": "Работы",
    "project.overview": "О проекте", "project.role": "Моя роль и вклад", "project.process": "Процесс дизайна и разработки", "project.tools": "Инструменты и технологии", "project.features": "Ключевые особенности", "project.discipline": "Направление", "project.toolsLabel": "Инструменты", "project.focus": "Фокус", "project.prev": "Предыдущий проект", "project.next": "Следующий проект",
    "contact.title": "ДАВАЙТЕ<br>ОБЩАТЬСЯ!",
    "contact.thanks": "Спасибо, что посмотрели моё портфолио! Заказы, сотрудничество или просто привет — всегда рада.",
    "contact.copy": "Копировать", "contact.copied": "Скопировано!",
    "contact.qr": "Сканируйте, чтобы увидеть больше работ!", "footer.by": "Дизайн — Камилла",
    "nav.journey": "Мой путь",
    "nav.interests": "Интересы",
    "about.origin": "Алматы, Казахстан → Южная Корея",
    "about.p1": "Привет! Меня зовут Камилла, мне 18 лет. Я родом из Алматы, Казахстан, но сейчас живу в Южной Корее.",
    "about.p2": "Я любознательный и творческий человек, которому нравится открывать для себя новые идеи и выражать себя через искусство и дизайн.",
    "about.p3": "В свободное время я люблю рисовать, слушать музыку, играть в видеоигры и проводить время с друзьями.",
    "about.p4": "Меня интересуют дизайн, архитектура и технологии. Мне нравится узнавать что-то новое, экспериментировать с разными стилями и превращать свои идеи во что-то реальное.",
    "about.p5": "Я верю, что каждый жизненный опыт открывает новые перспективы, а каждая творческая идея может превратиться во что-то особенное.",
    "journey.title": "МОЙ ПУТЬ",
    "journey.s1t": "Начало · Архитектура",
    "journey.s1": "Мой творческий путь начался с интереса к архитектуре. Меня всегда завораживали здания, интерьеры и сам процесс превращения идей в реальные проекты.",
    "journey.s2t": "Чертежи и 3D",
    "journey.s2": "Мне нравилось заниматься архитектурным черчением, создавать планы и экспериментировать с 3D-моделированием. Было интересно наблюдать, как обычные наброски превращаются в трёхмерные пространства.",
    "journey.s3t": "Цифровой дизайн и веб",
    "journey.s3": "Позже я открыла для себя мир цифрового дизайна и веб-разработки. Я начала изучать HTML, знакомиться с Figma и использовать Adobe Photoshop, чтобы воплощать свои идеи в жизнь.",
    "journey.s4t": "Казахстан → Корея",
    "journey.s4": "Переезд из Казахстана в Южную Корею также стал важной частью моего личного пути. Знакомство с новой культурой научило меня быть более открытой, самостоятельной и любознательной.",
    "journey.s5t": "Сейчас",
    "journey.s5": "Я всё ещё нахожусь в поиске своего направления, изучаю новые навыки и исследую разные творческие возможности. Для меня сам путь не менее важен, чем конечная цель.",
    "interests.title": "МОИ ИНТЕРЕСЫ",
    "interests.lead": "Помимо учёбы и работы над творческими проектами, меня вдохновляет множество других вещей.",
    "interests.1s": "Рисование и искусство",
    "interests.1": "Мне нравится рисовать и экспериментировать с разными визуальными стилями. Это один из моих любимых способов выразить своё воображение.",
    "interests.2s": "Музыка",
    "interests.2": "Музыка всегда сопровождает меня. Я люблю находить новые песни и слушать музыку, когда отдыхаю или чем-то занимаюсь.",
    "interests.3s": "Видеоигры",
    "interests.3": "Мне нравится играть в видеоигры, исследовать виртуальные миры и погружаться в разные истории и приключения.",
    "interests.4s": "Архитектура и дизайн",
    "interests.4": "Меня увлекают необычные пространства, интересные здания, дизайн интерьеров и 3D-визуализация.",
    "interests.5s": "Друзья и новые впечатления",
    "interests.5": "Я люблю проводить время с друзьями, делиться воспоминаниями и пробовать что-то новое.",
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

let lang = store.get("lang");
if (!i18n[lang]) lang = "ru";
let filter = "all";
let visible = [];
const t = (k) => i18n[lang][k] ?? k;

// ===== 스크롤 등장 =====
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  io.unobserve(en.target);
}), { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
function observe(root = document) {
  $$("[data-stagger]", root).forEach((g) => [...g.children].forEach((c, i) => c.style.setProperty("--d", `${0.1 + i * 0.08}s`)));
  $$(".reveal", root).forEach((el) => io.observe(el));
}

// ===== 작품 그리드 =====
function renderGrid() {
  const grid = $("#grid");
  visible = artworks.filter((a) => filter === "all" || a.cat === filter);
  grid.innerHTML = visible.map((a, i) => `
    <article class="card reveal" data-i="${i}" data-id="${a.id}" style="--d:${(i % 3) * 0.08}s" tabindex="0" role="button" aria-label="${a.title[lang]}">
      <div class="thumb"><img src="${a.src}" alt="${a.title[lang]}" loading="lazy" /><span class="view" aria-hidden="true"><svg><use href="#i-arrow"/></svg></span></div>
      <h4>${a.title[lang]}</h4>
      <small>${t("works." + a.cat)} · ${a.tool}</small>
    </article>`).join("");
  observe(grid);
}
$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn || btn.dataset.filter === filter) return;
  $$("#filters button").forEach((b) => b.classList.toggle("active", b === btn));
  filter = btn.dataset.filter;
  const grid = $("#grid");
  grid.classList.add("fading");
  setTimeout(() => { renderGrid(); grid.classList.remove("fading"); }, reduceMotion ? 0 : 300);
});

// ===== 프로젝트 상세 보기 (내용: projects.js 의 projectDetails) =====
const pj = $("#project"), pjBody = $("#pjBody");
const pad2 = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const bigSrc = (a) => a.cover || a.src;
const pjOutside = () => $$("body > header, body > main, body > .to-top");
let pjList = [], pjIndex = 0, pjPushed = false, pjTimer;

function pjDetail(a) {
  const base = typeof projectDetails !== "undefined" && projectDetails[a.id];
  if (base) return { ...base, ...(base[lang] || {}) };   // 현재 언어 → 없으면 영어
  return {
    title: a.title.en, discipline: t("works." + a.cat), tools: a.tool.split(" · ").map((x) => [x, ""]),
    overview: "", role: [], process: [], features: [], focus: [],
  };
}
const pjSection = (n, title, html) => `<section class="pj-sec"><h2 class="pj-h"><span>${pad2(n)}</span>${title}</h2>${html}</section>`;

function pjMarkup(a, i) {
  const d = pjDetail(a), total = pjList.length;
  const tools = d.tools.map(([name]) => name);
  const pagerItem = (x, dir) => `
    <button class="pj-page ${dir}" data-go="${dir === "prev" ? -1 : 1}">
      <span class="pj-page-img"><img src="${x.src}" alt="" loading="lazy" /></span>
      <span class="pj-page-txt"><small>${t("project." + dir)}</small><b>${esc(pjDetail(x).title)}</b></span>
      <svg aria-hidden="true"><use href="#i-chev"/></svg>
    </button>`;
  let n = 0;
  return `
    <figure class="pj-hero"><img src="${bigSrc(a)}" alt="${esc(d.title)}" /></figure>
    <header class="pj-head">
      <p class="pj-index">( ${pad2(i + 1)} ) <span>${esc(d.discipline)}</span></p>
      <h1 class="pj-title" id="pjTitle">${esc(d.title)}</h1>
      <ul class="pj-tags"><li class="main">${esc(d.discipline)}</li>${tools.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </header>
    <div class="pj-grid">
      <aside class="pj-aside">
        <dl>
          <div><dt>${esc(t("project.discipline"))}</dt><dd>${esc(d.discipline)}</dd></div>
          <div><dt>${esc(t("project.toolsLabel"))}</dt><dd>${tools.map(esc).join("<br>")}</dd></div>
          ${d.focus.length ? `<div><dt>${esc(t("project.focus"))}</dt><dd>${d.focus.map(esc).join("<br>")}</dd></div>` : ""}
        </dl>
      </aside>
      <div class="pj-main">
        ${d.overview ? pjSection(++n, esc(t("project.overview")), `<p class="pj-lead">${esc(d.overview)}</p>`) : ""}
        ${d.role.length ? pjSection(++n, esc(t("project.role")), `<ul class="pj-list">${d.role.map((r) => `<li><svg aria-hidden="true"><use href="#i-check"/></svg><span>${esc(r)}</span></li>`).join("")}</ul>`) : ""}
        ${d.process.length ? pjSection(++n, esc(t("project.process")), `<ol class="pj-steps">${d.process.map(([h, p], k) => `<li><b>${pad2(k + 1)}</b><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("")}</ol>`) : ""}
        ${d.tools.length ? pjSection(++n, esc(t("project.tools")), `<ul class="pj-tools">${d.tools.map(([name, use]) => `<li><b>${esc(name)}</b>${use ? `<span>${esc(use)}</span>` : ""}</li>`).join("")}</ul>`) : ""}
        ${d.features.length ? pjSection(++n, esc(t("project.features")), `<ul class="pj-features">${d.features.map(([h, p]) => `<li><svg aria-hidden="true"><use href="#i-star"/></svg><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("")}</ul>`) : ""}
      </div>
    </div>
    ${total > 1 ? `<nav class="pj-pager" aria-label="Projects">${pagerItem(pjList[(i - 1 + total) % total], "prev")}${pagerItem(pjList[(i + 1) % total], "next")}</nav>` : ""}
    <div class="pj-end"><button class="pj-back-link" data-close><svg aria-hidden="true"><use href="#i-left"/></svg><span>${t("project.back")}</span></button></div>`;
}
function renderProject(i) {
  pjIndex = (i + pjList.length) % pjList.length;
  const a = pjList[pjIndex];
  pjBody.innerHTML = pjMarkup(a, pjIndex);
  $("#pjCount").textContent = `${pad2(pjIndex + 1)} / ${pad2(pjList.length)}`;
  $("#pjPrev").hidden = $("#pjNext").hidden = pjList.length < 2;
  pj.scrollTop = 0;
  if (location.hash !== `#project-${a.id}`) history.replaceState(history.state, "", `#project-${a.id}`);
}
function animateIn() { pjBody.classList.remove("in"); void pjBody.offsetWidth; pjBody.classList.add("in"); }
function showProject(i) {
  clearTimeout(pjTimer);
  if (reduceMotion) return renderProject(i);
  pjBody.classList.add("out");
  pjTimer = setTimeout(() => { renderProject(i); pjBody.classList.remove("out"); animateIn(); }, 260);
}
function openProject(i, list = visible, push = true) {
  pjList = list;
  if (push) { history.pushState({ project: true }, "", `#project-${list[i].id}`); pjPushed = true; }
  renderProject(i);
  animateIn();
  pj.classList.add("open");
  pj.setAttribute("aria-hidden", "false");
  document.body.classList.add("pj-lock");
  pjOutside().forEach((el) => (el.inert = true));
  setTimeout(() => $("#pjBack").focus({ preventScroll: true }), 60);
}
function hideProject() {
  if (!pj.classList.contains("open")) return;
  clearTimeout(pjTimer);
  pj.classList.remove("open");
  pj.setAttribute("aria-hidden", "true");
  document.body.classList.remove("pj-lock");
  pjOutside().forEach((el) => (el.inert = false));
  // 마지막으로 본 프로젝트의 카드로 돌아가기
  const card = $(`#grid .card[data-id="${pjList[pjIndex]?.id}"]`);
  if (card) {
    const r = card.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) card.scrollIntoView({ block: "center" });
    card.focus({ preventScroll: true });
  }
}
function closeProject() {
  if (pjPushed) { pjPushed = false; history.back(); return; }   // popstate → hideProject
  history.replaceState(null, "", location.pathname + location.search);
  hideProject();
}
function projectFromHash() {
  const m = location.hash.match(/^#project-(.+)$/);
  if (!m) return hideProject();
  let list = visible, i = list.findIndex((a) => a.id === m[1]);
  if (i < 0) { list = artworks; i = list.findIndex((a) => a.id === m[1]); }
  if (i < 0) return hideProject();
  if (pj.classList.contains("open")) { pjList = list; renderProject(i); animateIn(); }
  else openProject(i, list, false);
}
addEventListener("popstate", () => { pjPushed = false; projectFromHash(); });

$("#grid").addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) openProject(+c.dataset.i); });
$("#grid").addEventListener("keydown", (e) => {
  const c = e.target.closest(".card");
  if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(+c.dataset.i); }
});
$("#pjBack").onclick = closeProject;
$("#pjPrev").onclick = () => showProject(pjIndex - 1);
$("#pjNext").onclick = () => showProject(pjIndex + 1);
pjBody.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) return showProject(pjIndex + +go.dataset.go);
  if (e.target.closest("[data-close]")) closeProject();
});
document.addEventListener("keydown", (e) => {
  if (!pj.classList.contains("open")) return;
  if (e.key === "Escape") closeProject();
  else if (e.key === "ArrowLeft") showProject(pjIndex - 1);
  else if (e.key === "ArrowRight") showProject(pjIndex + 1);
  else if (e.key === "Tab") {   // 포커스를 창 안에 유지
    const f = $$("button:not([hidden])", pj).filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

// ===== 언어 =====
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  $$("[data-i18n]").forEach((el) => { const v = i18n[l][el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  $$("[data-i18n-html]").forEach((el) => { const v = i18n[l][el.dataset.i18nHtml]; if (v !== undefined) el.innerHTML = v; });
  $$("[data-i18n-label]").forEach((el) => { const v = i18n[l][el.dataset.i18nLabel]; if (v !== undefined) el.setAttribute("aria-label", v); });
  $$(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === l));
  updateThemeBtn();
  const cp = $("#copyMail");
  if (cp && !cp.classList.contains("done")) cp.dataset.tip = t("contact.copy");
  renderGrid();
  if (pj.classList.contains("open")) renderProject(pjIndex);
}
function setLang(l) {
  if (l === lang) return;
  store.set("lang", l);
  const main = $("main");
  main.classList.add("switching");
  setTimeout(() => { applyLang(l); main.classList.remove("switching"); }, reduceMotion ? 0 : 300);
}
$$(".lang button").forEach((b) => (b.onclick = () => setLang(b.dataset.lang)));

// ===== 테마 (라이트 / 다크) — <head> 의 스크립트가 처음 값을 정함 =====
const root = document.documentElement, themeBtn = $("#themeBtn");
const sysDark = matchMedia("(prefers-color-scheme: dark)");
const getTheme = () => (root.dataset.theme === "dark" ? "dark" : "light");
function updateThemeBtn() {
  const dark = getTheme() === "dark";
  themeBtn.setAttribute("aria-label", t(dark ? "theme.light" : "theme.dark"));
  themeBtn.setAttribute("aria-pressed", dark);
  $('meta[name="theme-color"]')?.setAttribute("content", dark ? "#101216" : "#eef3fb");
}
function applyTheme(theme, animate = true) {
  if (theme === getTheme()) return;
  const swap = () => { root.dataset.theme = theme; updateThemeBtn(); };
  if (!animate || reduceMotion) return swap();
  if (document.startViewTransition) return document.startViewTransition(swap);
  root.classList.add("theme-anim");
  swap();
  setTimeout(() => root.classList.remove("theme-anim"), 550);
}
themeBtn.addEventListener("click", () => {
  const next = getTheme() === "dark" ? "light" : "dark";
  store.set("theme", next);
  applyTheme(next);
});
// 직접 고른 적이 없으면 기기 설정 변경을 따라감
sysDark.addEventListener?.("change", (e) => { const s = store.get("theme"); if (s !== "light" && s !== "dark") applyTheme(e.matches ? "dark" : "light"); });

// ===== 모바일 메뉴 =====
const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
menuBtn.onclick = () => { const o = navLinks.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

// ===== 스크롤: 내비 그림자 · 진행 바 · 맨 위로 =====
const nav = $("#nav"), progress = $("#progress"), toTop = $("#toTop");
let ticking = false;
function onScroll() {
  ticking = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  nav.classList.toggle("scrolled", scrollY > 10);
  progress.style.setProperty("--p", max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
  toTop.classList.toggle("show", scrollY > innerHeight * 1.2);
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener("resize", onScroll, { passive: true });
onScroll();

// ===== 현재 섹션 메뉴 표시 =====
const navMap = new Map($$(".nav-links a").map((a) => [a.getAttribute("href").slice(1), a]));
const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  navMap.forEach((a, id) => a.classList.toggle("current", id === en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main > section").forEach((sec) => spy.observe(sec));

// ===== 섹션 등장 =====
if (!reduceMotion) {
  const pgIo = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("pg-in");
    pgIo.unobserve(en.target);
  }), { threshold: 0, rootMargin: "0px 0px -8% 0px" });
  $$(".page:not(.cover)").forEach((pg) => {
    if (pg.getBoundingClientRect().top < innerHeight * 0.92) return;
    pg.classList.add("pg");
    pgIo.observe(pg);
  });
}

// ===== 카드 위 은은한 빛 (마우스 따라) =====
if (matchMedia("(hover: hover)").matches) {
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest?.(".interest, .links a");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, { passive: true });
}

// ===== 이메일 복사 =====
const copyBtn = $("#copyMail");
let copyTimer;
copyBtn?.addEventListener("click", async () => {
  const text = copyBtn.dataset.copy;
  try { await navigator.clipboard.writeText(text); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.append(ta);
    ta.select();
    try { document.execCommand("copy"); } catch {}
    ta.parentNode.removeChild(ta);
  }
  copyBtn.classList.add("done");
  copyBtn.dataset.tip = t("contact.copied");
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => { copyBtn.classList.remove("done"); copyBtn.dataset.tip = t("contact.copy"); }, 1800);
});

// ===== QR 코드 =====
try {
  new QRCode($("#qr"), { text: SITE_URL, width: 160, height: 160, colorDark: "#2b3140", colorLight: "#ffffff" });
} catch { $(".qr-card").style.display = "none"; }

// ===== 시작 =====
$$(".big-word b").forEach((b, i) => (b.style.transitionDelay = `${0.15 + i * 0.06}s`));
applyLang(lang);
observe();
projectFromHash();
const start = () => requestAnimationFrame(() => document.body.classList.add("loaded"));
(document.fonts?.ready ?? Promise.resolve()).then(start);
setTimeout(start, 1200);
