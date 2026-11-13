// ===== Project details — opened when a card in SELECTED WORKS is clicked =====
// Keys match `id` in the `artworks` list (script.js). To edit a project, change the text here.
// Fields (English); the `ru` and `ko` blocks inside each project hold the same fields translated:
//   title       — large heading on the project page
//   discipline  — category label (e.g. "Web Development")
//   tools       — [name, what it was used for]
//   overview    — short description of the project and its idea
//   role        — My Role & Contributions (list)
//   process     — Design & Development Process: [stage, description]
//   features    — Key Features: [feature, description]
//   focus       — key focus areas (short tags)
const projectDetails = {
  "agency-landing": {
    title: "Digital Agency Landing Page",
    discipline: "Web Development",
    tools: [
      ["HTML5", "Semantic page structure and content sections"],
      ["CSS3", "Layout, typography, color system and responsive behavior"],
    ],
    overview:
      "A modern landing page concept for a digital agency, built around strong visual impact and effortless interaction. The goal was to present the agency's services in a clear, engaging way, guiding visitors from the first screen to the call to action through a confident layout and a well-defined visual hierarchy.",
    role: [
      "Planned the page structure and overall composition of the content.",
      "Designed and built the hero section and the presentation blocks.",
      "Defined the typography, color palette and visual hierarchy.",
      "Implemented responsive layouts for desktop, tablet and mobile screens.",
    ],
    process: [
      ["Structure", "Mapped out the sections and the order in which a visitor should read them."],
      ["Visual direction", "Chose typefaces, colors and spacing to give the page a modern, consistent feel."],
      ["Build", "Translated the layout into semantic HTML and modular CSS, section by section."],
      ["Responsive refinement", "Tested the page across screen sizes and adjusted the grid, type scale and spacing."],
    ],
    features: [
      ["Impactful hero section", "A first screen that communicates the agency's message at a glance."],
      ["Clear visual hierarchy", "Headings, spacing and contrast lead the eye through the content."],
      ["Presentation blocks", "Structured sections that introduce services in a scannable format."],
      ["Fully responsive", "The layout adapts smoothly from large monitors to phones."],
    ],
    focus: ["Modern Web Design", "Responsive Layout", "User Experience"],
    ru: {
      title: "Лендинг для digital-агентства",
      discipline: "Веб-разработка",
      tools: [
        ["HTML5", "Семантическая структура страницы и контентные блоки"],
        ["CSS3", "Вёрстка, типографика, цветовая система и адаптивность"],
      ],
      overview: "Разработка современного лендинга для цифрового агентства с акцентом на визуальную привлекательность и удобство взаимодействия. Задача — ясно и интересно представить услуги агентства и провести посетителя от первого экрана до целевого действия с помощью выразительной композиции и чёткой визуальной иерархии.",
      role: ["Создание структуры и композиции веб-страницы.", "Разработка главного экрана и презентационных блоков.", "Работа с типографикой, цветами и визуальной иерархией.", "Проработка адаптивного отображения для разных устройств."],
      process: [
        ["Структура", "Определение разделов и порядка, в котором посетитель знакомится с контентом."],
        ["Визуальное направление", "Подбор шрифтов, цветов и отступов для современного и цельного образа."],
        ["Вёрстка", "Перенос макета в семантический HTML и модульный CSS — блок за блоком."],
        ["Адаптивная доработка", "Проверка на разных экранах и настройка сетки, размеров шрифта и отступов."],
      ],
      features: [
        ["Выразительный первый экран", "Главная идея агентства считывается с первого взгляда."],
        ["Чёткая визуальная иерархия", "Заголовки, отступы и контраст ведут взгляд по странице."],
        ["Презентационные блоки", "Структурированные секции, в которых легко ориентироваться."],
        ["Полная адаптивность", "Макет плавно подстраивается от больших мониторов до телефонов."],
      ],
      focus: ["Современный веб-дизайн", "Адаптивная вёрстка", "Пользовательский опыт"],
    },
    ko: {
      title: "디지털 에이전시 랜딩 페이지",
      discipline: "웹 개발",
      tools: [
        ["HTML5", "시맨틱한 페이지 구조와 콘텐츠 섹션"],
        ["CSS3", "레이아웃, 타이포그래피, 컬러 시스템, 반응형"],
      ],
      overview: "시각적 매력과 편안한 사용성에 중점을 둔 디지털 에이전시용 모던 랜딩 페이지입니다. 에이전시의 서비스를 명확하고 흥미롭게 소개하고, 자신감 있는 레이아웃과 뚜렷한 시각적 위계를 통해 방문자를 첫 화면에서 행동 유도 버튼까지 자연스럽게 안내하는 것을 목표로 했습니다.",
      role: ["웹 페이지의 구조와 구성 설계", "메인 화면과 소개 블록 디자인", "타이포그래피, 컬러, 시각적 위계 작업", "다양한 기기를 위한 반응형 화면 구현"],
      process: [
        ["구조", "방문자가 콘텐츠를 읽어 나갈 섹션과 순서를 정리했습니다."],
        ["비주얼 방향", "모던하고 일관된 느낌을 위해 서체, 컬러, 여백을 정했습니다."],
        ["구현", "레이아웃을 시맨틱 HTML과 모듈형 CSS로 섹션별로 옮겼습니다."],
        ["반응형 다듬기", "여러 화면 크기에서 확인하며 그리드, 글자 크기, 여백을 조정했습니다."],
      ],
      features: [
        ["인상적인 첫 화면", "에이전시의 메시지를 한눈에 전달합니다."],
        ["명확한 시각적 위계", "제목, 여백, 대비가 시선을 자연스럽게 이끕니다."],
        ["소개 블록", "서비스를 훑어보기 쉬운 형식으로 정리한 섹션입니다."],
        ["완전한 반응형", "큰 모니터부터 휴대폰까지 부드럽게 맞춰집니다."],
      ],
      focus: ["모던 웹 디자인", "반응형 레이아웃", "사용자 경험"],
    },
  },

  "mobile-app": {
    title: "Mobile App Design",
    discipline: "UI/UX Design",
    tools: [["Figma", "Screen layouts, UI components, styles and screen flows"]],
    overview:
      "A mobile application design focused on creating a modern interface that balances aesthetics with ease of use. The project explores how a clean visual language and a thoughtful screen structure can make everyday interactions feel simple and intuitive.",
    role: [
      "Designed the structure and hierarchy of the app screens.",
      "Created the user interface for the key screens.",
      "Selected the color palette and typefaces.",
      "Developed reusable visual components.",
      "Planned the navigation logic and transitions between screens.",
    ],
    process: [
      ["Research & structure", "Defined the main user tasks and organized the screens around them."],
      ["Wireframes", "Sketched low-fidelity layouts to test the information hierarchy."],
      ["Visual design", "Applied color, typography and components to build high-fidelity screens."],
      ["Flow & transitions", "Connected the screens to check that navigation feels logical."],
    ],
    features: [
      ["Clean, modern interface", "A minimal look that keeps the focus on content."],
      ["Consistent components", "Buttons, cards and inputs share one visual language."],
      ["Logical navigation", "Screens connect in a way that matches how people use the app."],
      ["Mobile-first layout", "Designed for comfortable one-handed use on small screens."],
    ],
    focus: ["Mobile UI", "UX Structure", "Visual Consistency"],
    ru: {
      title: "Дизайн мобильного приложения",
      discipline: "UI/UX-дизайн",
      tools: [
        ["Figma", "Макеты экранов, UI-компоненты, стили и переходы между экранами"],
      ],
      overview: "Разработка дизайна мобильного приложения. Основной задачей было создать современный интерфейс, который сочетает эстетику и простоту использования, — и показать, как чистый визуальный язык и продуманная структура экранов делают повседневные действия простыми и интуитивными.",
      role: ["Проектирование структуры экранов.", "Создание пользовательского интерфейса.", "Подбор цветовой палитры и шрифтов.", "Разработка визуальных компонентов.", "Продумывание логики переходов между экранами."],
      process: [
        ["Анализ и структура", "Определение ключевых задач пользователя и организация экранов вокруг них."],
        ["Вайрфреймы", "Черновые схемы экранов для проверки информационной иерархии."],
        ["Визуальный дизайн", "Цвет, типографика и компоненты в детализированных макетах."],
        ["Сценарии и переходы", "Связывание экранов, чтобы навигация была логичной."],
      ],
      features: [
        ["Чистый современный интерфейс", "Минималистичный вид, в центре внимания — контент."],
        ["Единые компоненты", "Кнопки, карточки и поля ввода в одном визуальном стиле."],
        ["Логичная навигация", "Экраны связаны так, как пользователь работает с приложением."],
        ["Mobile-first", "Удобно пользоваться одной рукой на небольшом экране."],
      ],
      focus: ["Мобильный UI", "UX-структура", "Визуальная целостность"],
    },
    ko: {
      title: "모바일 앱 디자인",
      discipline: "UI/UX 디자인",
      tools: [
        ["Figma", "화면 레이아웃, UI 컴포넌트, 스타일, 화면 흐름"],
      ],
      overview: "미적인 감각과 쉬운 사용성을 함께 갖춘 모던한 인터페이스를 목표로 한 모바일 애플리케이션 디자인입니다. 깔끔한 시각 언어와 세심한 화면 구조가 일상적인 동작을 얼마나 단순하고 직관적으로 만들 수 있는지 탐구했습니다.",
      role: ["화면 구조 설계", "사용자 인터페이스 제작", "컬러 팔레트와 서체 선정", "시각 컴포넌트 개발", "화면 간 전환 로직 설계"],
      process: [
        ["분석 & 구조", "사용자의 주요 과제를 정의하고 그에 맞춰 화면을 구성했습니다."],
        ["와이어프레임", "정보 위계를 확인하기 위해 간단한 레이아웃을 그렸습니다."],
        ["비주얼 디자인", "컬러, 타이포그래피, 컴포넌트로 완성도 높은 화면을 만들었습니다."],
        ["흐름 & 전환", "화면을 연결해 내비게이션이 자연스러운지 확인했습니다."],
      ],
      features: [
        ["깔끔하고 모던한 인터페이스", "콘텐츠에 집중할 수 있는 미니멀한 디자인입니다."],
        ["일관된 컴포넌트", "버튼, 카드, 입력창이 하나의 시각 언어를 공유합니다."],
        ["논리적인 내비게이션", "사용자가 앱을 쓰는 방식에 맞게 화면이 연결됩니다."],
        ["모바일 우선 레이아웃", "작은 화면에서도 한 손으로 편하게 쓸 수 있습니다."],
      ],
      focus: ["모바일 UI", "UX 구조", "시각적 일관성"],
    },
  },

  "color-palette": {
    title: "Color Palette & Illustrations",
    discipline: "Graphic Design",
    tools: [["Adobe Illustrator", "Vector shapes, illustrations and color swatches"]],
    overview:
      "An exploration of color, graphic shapes and illustration. The project studies how combinations of hues and visual elements shape the overall perception of a design, and how a carefully built palette can give a set of illustrations a recognizable identity.",
    role: [
      "Selected and combined color palettes.",
      "Worked with vector graphics and shapes.",
      "Created and combined illustrative elements.",
      "Developed the overall visual composition.",
    ],
    process: [
      ["Color research", "Explored different hue combinations, contrasts and moods."],
      ["Palette building", "Organized the chosen colors into balanced, reusable palettes."],
      ["Illustration", "Drew vector elements that put each palette into context."],
      ["Composition", "Arranged the elements into cohesive, well-balanced layouts."],
    ],
    features: [
      ["Curated palettes", "Harmonious color sets built around a clear mood."],
      ["Vector illustrations", "Clean, scalable artwork created in Illustrator."],
      ["Color in context", "Illustrations show how each palette works in practice."],
      ["Unified identity", "Shapes and colors read as one consistent visual system."],
    ],
    focus: ["Color Theory", "Illustration", "Visual Identity"],
    ru: {
      title: "Палитры и иллюстрации",
      discipline: "Графический дизайн",
      tools: [
        ["Adobe Illustrator", "Векторные формы, иллюстрации и цветовые образцы"],
      ],
      overview: "Работа с цветом, графическими формами и иллюстрациями. Исследование того, как сочетания оттенков и визуальных элементов формируют общее восприятие дизайна и как продуманная палитра придаёт серии иллюстраций узнаваемый характер.",
      role: ["Подбор и сочетание цветовых палитр.", "Работа с векторной графикой.", "Создание и комбинирование иллюстративных элементов.", "Разработка визуальной композиции."],
      process: [
        ["Исследование цвета", "Поиск сочетаний оттенков, контрастов и настроений."],
        ["Сборка палитр", "Объединение выбранных цветов в сбалансированные палитры."],
        ["Иллюстрация", "Векторные элементы, показывающие палитру в контексте."],
        ["Композиция", "Сборка элементов в цельные, уравновешенные композиции."],
      ],
      features: [
        ["Продуманные палитры", "Гармоничные наборы цветов с ясным настроением."],
        ["Векторные иллюстрации", "Чистая масштабируемая графика в Illustrator."],
        ["Цвет в контексте", "Иллюстрации показывают, как палитра работает на практике."],
        ["Единый образ", "Формы и цвета складываются в одну визуальную систему."],
      ],
      focus: ["Теория цвета", "Иллюстрация", "Визуальная айдентика"],
    },
    ko: {
      title: "컬러 팔레트 & 일러스트",
      discipline: "그래픽 디자인",
      tools: [
        ["Adobe Illustrator", "벡터 형태, 일러스트, 컬러 견본"],
      ],
      overview: "컬러, 그래픽 형태, 일러스트를 다룬 작업입니다. 색과 시각 요소의 조합이 디자인 전체의 인상을 어떻게 만드는지, 그리고 잘 구성된 팔레트가 일러스트 시리즈에 어떻게 개성을 더하는지 탐구했습니다.",
      role: ["컬러 팔레트 선정과 조합", "벡터 그래픽 작업", "일러스트 요소 제작과 조합", "시각적 구성 개발"],
      process: [
        ["컬러 리서치", "다양한 색 조합, 대비, 분위기를 탐색했습니다."],
        ["팔레트 구성", "고른 색을 균형 잡힌 팔레트로 정리했습니다."],
        ["일러스트", "각 팔레트를 실제로 보여 주는 벡터 요소를 그렸습니다."],
        ["구성", "요소들을 조화롭고 균형 있는 레이아웃으로 배치했습니다."],
      ],
      features: [
        ["엄선한 팔레트", "분명한 분위기를 가진 조화로운 색 조합입니다."],
        ["벡터 일러스트", "Illustrator로 만든 깔끔하고 확장 가능한 그래픽입니다."],
        ["맥락 속의 컬러", "일러스트로 팔레트가 실제로 어떻게 쓰이는지 보여 줍니다."],
        ["통일된 아이덴티티", "형태와 색이 하나의 시각 체계로 읽힙니다."],
      ],
      focus: ["색채 이론", "일러스트레이션", "비주얼 아이덴티티"],
    },
  },

  "portfolio-site": {
    title: "Portfolio Website Coding",
    discipline: "Web Development",
    tools: [
      ["HTML5", "Site structure, sections and navigation"],
      ["CSS3", "Layout, responsive design, visual styles and animations"],
    ],
    overview:
      "A personal web portfolio created to present my skills, projects and creative direction. The site is designed as a clean, editorial space where the work stays in focus, while the structure makes it easy to learn who I am and what I do.",
    role: [
      "Designed the overall structure of the site.",
      "Created the content sections and navigation.",
      "Implemented the interface with HTML and CSS.",
      "Built a responsive layout for different screen sizes.",
      "Fine-tuned visual elements and interactions.",
    ],
    process: [
      ["Planning", "Defined which sections the portfolio needs and in what order."],
      ["Visual style", "Established a light, minimal look with blue accents and expressive typography."],
      ["Development", "Coded the sections and navigation with HTML and CSS."],
      ["Responsive polish", "Adapted the layout for desktop, laptop, tablet and mobile."],
    ],
    features: [
      ["Editorial layout", "A spacious composition that keeps the work in focus."],
      ["Clear navigation", "Visitors can jump straight to any section."],
      ["Responsive design", "The layout adapts gracefully to every screen size."],
      ["Subtle interactions", "Gentle animations and hover states add polish."],
    ],
    focus: ["Frontend Development", "Responsive Design", "UI Implementation"],
    ru: {
      title: "Вёрстка сайта-портфолио",
      discipline: "Веб-разработка",
      tools: [
        ["HTML5", "Структура сайта, секции и навигация"],
        ["CSS3", "Вёрстка, адаптивность, визуальные стили и анимации"],
      ],
      overview: "Создание персонального веб-портфолио для презентации своих навыков, проектов и профессионального направления. Сайт задуман как чистое, «журнальное» пространство, где в центре внимания работы, а структура помогает быстро узнать, кто я и чем занимаюсь.",
      role: ["Разработка структуры сайта.", "Создание секций и навигации.", "Реализация интерфейса с помощью HTML и CSS.", "Работа с адаптивной вёрсткой.", "Настройка визуальных элементов и взаимодействий."],
      process: [
        ["Планирование", "Определение нужных разделов и их порядка."],
        ["Визуальный стиль", "Светлый минималистичный образ с синими акцентами и выразительной типографикой."],
        ["Разработка", "Вёрстка секций и навигации на HTML и CSS."],
        ["Адаптивная доработка", "Адаптация под компьютер, ноутбук, планшет и телефон."],
      ],
      features: [
        ["Журнальная композиция", "Просторная раскладка, в центре — работы."],
        ["Понятная навигация", "Можно сразу перейти к любому разделу."],
        ["Адаптивный дизайн", "Макет аккуратно подстраивается под любой экран."],
        ["Тонкие взаимодействия", "Мягкие анимации и эффекты при наведении."],
      ],
      focus: ["Фронтенд-разработка", "Адаптивный дизайн", "Реализация UI"],
    },
    ko: {
      title: "포트폴리오 웹사이트 코딩",
      discipline: "웹 개발",
      tools: [
        ["HTML5", "사이트 구조, 섹션, 내비게이션"],
        ["CSS3", "레이아웃, 반응형 디자인, 비주얼 스타일, 애니메이션"],
      ],
      overview: "제 스킬과 프로젝트, 그리고 창작 방향을 소개하기 위해 만든 개인 웹 포트폴리오입니다. 작품이 돋보이는 깔끔한 에디토리얼 공간으로 디자인했고, 제가 어떤 사람이고 무엇을 하는지 쉽게 알 수 있도록 구조를 짰습니다.",
      role: ["사이트 구조 설계", "섹션과 내비게이션 제작", "HTML과 CSS로 인터페이스 구현", "반응형 레이아웃 작업", "시각 요소와 인터랙션 다듬기"],
      process: [
        ["기획", "포트폴리오에 필요한 섹션과 순서를 정했습니다."],
        ["비주얼 스타일", "블루 포인트와 개성 있는 타이포그래피의 밝고 미니멀한 스타일을 정했습니다."],
        ["개발", "HTML과 CSS로 섹션과 내비게이션을 코딩했습니다."],
        ["반응형 다듬기", "데스크톱, 노트북, 태블릿, 모바일에 맞게 조정했습니다."],
      ],
      features: [
        ["에디토리얼 레이아웃", "작품에 집중할 수 있는 여유로운 구성입니다."],
        ["명확한 내비게이션", "원하는 섹션으로 바로 이동할 수 있습니다."],
        ["반응형 디자인", "어떤 화면 크기에도 자연스럽게 맞춰집니다."],
        ["섬세한 인터랙션", "부드러운 애니메이션과 호버 효과로 완성도를 더했습니다."],
      ],
      focus: ["프론트엔드 개발", "반응형 디자인", "UI 구현"],
    },
  },

  "ui-library": {
    title: "UI Component Library",
    discipline: "UI/UX Design",
    tools: [["Figma", "Components, variants, shared styles and organization"]],
    overview:
      "A set of universal UI components for building consistent, user-friendly interfaces. The project focuses on creating reusable building blocks that share one visual language, making it faster and easier to design new screens.",
    role: [
      "Designed buttons, cards and form controls.",
      "Created a unified system of visual styles.",
      "Defined interactive states for each component.",
      "Organized the elements for easy reuse.",
    ],
    process: [
      ["Inventory", "Listed the core elements an interface needs most often."],
      ["Foundations", "Set up shared colors, typography and spacing rules."],
      ["Components & states", "Designed each component with its default, hover, active and disabled states."],
      ["Organization", "Structured the library so that components are easy to find and reuse."],
    ],
    features: [
      ["Reusable components", "Buttons, cards and controls ready to drop into any screen."],
      ["Interactive states", "Every component has clearly defined states."],
      ["Shared style system", "One set of colors, type and spacing across all elements."],
      ["Organized structure", "A logical layout that makes the library easy to navigate."],
    ],
    focus: ["Design Systems", "UI Components", "Consistency"],
    ru: {
      title: "UI-кит компонентов",
      discipline: "UI/UX-дизайн",
      tools: [
        ["Figma", "Компоненты, варианты, общие стили и организация библиотеки"],
      ],
      overview: "Разработка набора универсальных UI-компонентов для создания последовательных и удобных пользовательских интерфейсов. В центре проекта — переиспользуемые элементы с единым визуальным языком, которые ускоряют и упрощают дизайн новых экранов.",
      role: ["Проектирование кнопок, карточек и элементов управления.", "Создание единой системы визуальных стилей.", "Работа с состояниями компонентов.", "Организация повторно используемых элементов."],
      process: [
        ["Инвентаризация", "Список базовых элементов, которые чаще всего нужны интерфейсу."],
        ["Основа", "Общие правила цвета, типографики и отступов."],
        ["Компоненты и состояния", "Каждый компонент в обычном состоянии, при наведении, нажатии и в неактивном виде."],
        ["Организация", "Структура библиотеки, в которой компоненты легко найти и переиспользовать."],
      ],
      features: [
        ["Переиспользуемые компоненты", "Кнопки, карточки и элементы управления для любого экрана."],
        ["Интерактивные состояния", "У каждого компонента чётко описаны состояния."],
        ["Единая система стилей", "Общие цвета, шрифты и отступы для всех элементов."],
        ["Продуманная структура", "Логичная организация, по библиотеке легко ориентироваться."],
      ],
      focus: ["Дизайн-системы", "UI-компоненты", "Последовательность"],
    },
    ko: {
      title: "UI 컴포넌트 라이브러리",
      discipline: "UI/UX 디자인",
      tools: [
        ["Figma", "컴포넌트, 배리언트, 공유 스타일, 정리"],
      ],
      overview: "일관되고 사용하기 쉬운 인터페이스를 만들기 위한 범용 UI 컴포넌트 세트입니다. 하나의 시각 언어를 공유하는 재사용 가능한 요소를 만들어, 새로운 화면을 더 빠르고 쉽게 디자인할 수 있도록 하는 데 집중했습니다.",
      role: ["버튼, 카드, 컨트롤 요소 설계", "통일된 비주얼 스타일 시스템 제작", "컴포넌트 상태 작업", "재사용 요소 정리"],
      process: [
        ["요소 정리", "인터페이스에 가장 자주 필요한 기본 요소를 목록으로 만들었습니다."],
        ["기초 설정", "공통 컬러, 타이포그래피, 여백 규칙을 정했습니다."],
        ["컴포넌트 & 상태", "각 컴포넌트의 기본, 호버, 활성, 비활성 상태를 디자인했습니다."],
        ["정리", "컴포넌트를 쉽게 찾고 재사용할 수 있도록 라이브러리를 구성했습니다."],
      ],
      features: [
        ["재사용 가능한 컴포넌트", "어떤 화면에도 바로 쓸 수 있는 버튼, 카드, 컨트롤입니다."],
        ["인터랙티브 상태", "모든 컴포넌트의 상태가 명확하게 정의되어 있습니다."],
        ["공유 스타일 시스템", "모든 요소가 같은 컬러, 서체, 여백을 사용합니다."],
        ["체계적인 구조", "라이브러리를 쉽게 탐색할 수 있는 논리적인 구성입니다."],
      ],
      focus: ["디자인 시스템", "UI 컴포넌트", "일관성"],
    },
  },

  "digital-illustration": {
    title: "Digital Illustration",
    discipline: "Digital Art",
    tools: [["Adobe Illustrator", "Vector drawing, contours, color and detail"]],
    overview:
      "An exploration of digital illustration and the creation of expressive graphic compositions through color, form and detail. The project is a study of how simple shapes and carefully chosen colors can tell a visual story.",
    role: [
      "Developed the visual idea for the illustration.",
      "Worked with shapes and contours.",
      "Selected the color combinations.",
      "Built the composition and graphic details.",
    ],
    process: [
      ["Idea", "Defined the subject and the mood of the illustration."],
      ["Sketch & shapes", "Blocked in the main forms and refined their contours."],
      ["Color", "Tested color combinations to support the mood."],
      ["Detailing", "Added graphic details and balanced the final composition."],
    ],
    features: [
      ["Expressive composition", "Forms and color work together to create a clear focal point."],
      ["Clean vector contours", "Precise shapes that stay sharp at any size."],
      ["Considered color", "A palette chosen to set the atmosphere."],
      ["Graphic details", "Small touches that add depth and character."],
    ],
    focus: ["Digital Illustration", "Composition", "Visual Creativity"],
    ru: {
      title: "Цифровая иллюстрация",
      discipline: "Цифровое искусство",
      tools: [
        ["Adobe Illustrator", "Векторный рисунок, контуры, цвет и детали"],
      ],
      overview: "Исследование возможностей цифровой иллюстрации и создание выразительных графических композиций с помощью цвета, формы и деталей. Проект показывает, как простые формы и точно подобранные цвета рассказывают визуальную историю.",
      role: ["Разработка визуальной идеи.", "Работа с формами и контурами.", "Подбор цветовых сочетаний.", "Создание композиции и графических деталей."],
      process: [
        ["Идея", "Определение сюжета и настроения иллюстрации."],
        ["Эскиз и формы", "Основные формы и уточнение их контуров."],
        ["Цвет", "Подбор цветовых сочетаний под настроение."],
        ["Детализация", "Графические детали и балансировка итоговой композиции."],
      ],
      features: [
        ["Выразительная композиция", "Форма и цвет вместе создают ясный центр внимания."],
        ["Чистые векторные контуры", "Точные формы, чёткие в любом размере."],
        ["Продуманный цвет", "Палитра, задающая атмосферу."],
        ["Графические детали", "Мелкие акценты добавляют глубину и характер."],
      ],
      focus: ["Цифровая иллюстрация", "Композиция", "Визуальное творчество"],
    },
    ko: {
      title: "디지털 일러스트레이션",
      discipline: "디지털 아트",
      tools: [
        ["Adobe Illustrator", "벡터 드로잉, 윤곽선, 컬러, 디테일"],
      ],
      overview: "디지털 일러스트의 가능성을 탐구하며 색, 형태, 디테일로 표현력 있는 그래픽 구성을 만든 작업입니다. 단순한 형태와 세심하게 고른 색이 어떻게 시각적인 이야기를 전할 수 있는지 연구했습니다.",
      role: ["시각적 아이디어 개발", "형태와 윤곽선 작업", "색 조합 선정", "구성과 그래픽 디테일 제작"],
      process: [
        ["아이디어", "일러스트의 주제와 분위기를 정했습니다."],
        ["스케치 & 형태", "주요 형태를 잡고 윤곽선을 다듬었습니다."],
        ["컬러", "분위기에 맞는 색 조합을 시험했습니다."],
        ["디테일", "그래픽 디테일을 더하고 최종 구성의 균형을 맞췄습니다."],
      ],
      features: [
        ["표현력 있는 구성", "형태와 색이 함께 분명한 초점을 만듭니다."],
        ["깔끔한 벡터 윤곽선", "어떤 크기에서도 선명한 정확한 형태입니다."],
        ["세심한 컬러", "분위기를 만드는 팔레트를 골랐습니다."],
        ["그래픽 디테일", "작은 요소들이 깊이와 개성을 더합니다."],
      ],
      focus: ["디지털 일러스트", "구성", "시각적 창의성"],
    },
  },

  "travel-app": {
    title: "Travel App Prototype",
    discipline: "UI/UX Design",
    tools: [["Figma", "App structure, screen design, components and prototyping"]],
    overview:
      "An interface design for a travel mobile app. The core idea is to bring all the essential trip information together in one clear, easy-to-use interface, so travelers can plan and follow their journey without switching between different services.",
    role: [
      "Designed the overall structure of the app.",
      "Designed the main screens.",
      "Organized the travel information into clear sections.",
      "Created the visual components.",
      "Mapped out the key user scenarios.",
    ],
    process: [
      ["User scenarios", "Outlined how a traveler plans, checks and follows a trip."],
      ["Information architecture", "Grouped trip details into clear, logical sections."],
      ["Screen design", "Designed the main screens with reusable components."],
      ["Prototyping", "Linked the screens into a clickable flow to test the experience."],
    ],
    features: [
      ["Trip at a glance", "Key travel information gathered in one place."],
      ["Structured content", "Details are grouped so they are quick to scan."],
      ["Interactive prototype", "Linked screens demonstrate the user flow."],
      ["Friendly visual style", "A light, inviting look that suits the travel theme."],
    ],
    focus: ["App Design", "Prototyping", "User Experience"],
    ru: {
      title: "Прототип приложения для путешествий",
      discipline: "UI/UX-дизайн",
      tools: [
        ["Figma", "Структура приложения, дизайн экранов, компоненты и прототипирование"],
      ],
      overview: "Проектирование интерфейса мобильного приложения для путешествий. Основная идея — объединить необходимую информацию о поездке в понятном и удобном интерфейсе, чтобы планировать путешествие и следить за ним без переключения между разными сервисами.",
      role: ["Разработка структуры приложения.", "Проектирование основных экранов.", "Организация информации о путешествиях.", "Создание визуальных компонентов.", "Продумывание пользовательских сценариев."],
      process: [
        ["Пользовательские сценарии", "Как путешественник планирует поездку, проверяет детали и следует маршруту."],
        ["Информационная архитектура", "Группировка данных о поездке в понятные разделы."],
        ["Дизайн экранов", "Основные экраны на базе переиспользуемых компонентов."],
        ["Прототипирование", "Связывание экранов в кликабельный сценарий для проверки опыта."],
      ],
      features: [
        ["Поездка с первого взгляда", "Ключевая информация собрана в одном месте."],
        ["Структурированный контент", "Детали сгруппированы, их легко просматривать."],
        ["Интерактивный прототип", "Связанные экраны показывают пользовательский путь."],
        ["Дружелюбный стиль", "Светлый, приветливый образ под тему путешествий."],
      ],
      focus: ["Дизайн приложений", "Прототипирование", "Пользовательский опыт"],
    },
    ko: {
      title: "여행 앱 프로토타입",
      discipline: "UI/UX 디자인",
      tools: [
        ["Figma", "앱 구조, 화면 디자인, 컴포넌트, 프로토타이핑"],
      ],
      overview: "여행용 모바일 앱의 인터페이스 디자인입니다. 여행에 필요한 정보를 하나의 명확하고 편리한 인터페이스에 모아, 여러 서비스를 오가지 않고도 여행을 계획하고 따라갈 수 있도록 하는 것이 핵심 아이디어입니다.",
      role: ["앱 구조 설계", "주요 화면 디자인", "여행 정보 정리", "시각 컴포넌트 제작", "사용자 시나리오 설계"],
      process: [
        ["사용자 시나리오", "여행자가 여행을 계획하고, 확인하고, 따라가는 과정을 정리했습니다."],
        ["정보 구조", "여행 정보를 명확하고 논리적인 섹션으로 묶었습니다."],
        ["화면 디자인", "재사용 가능한 컴포넌트로 주요 화면을 디자인했습니다."],
        ["프로토타이핑", "화면을 클릭 가능한 흐름으로 연결해 경험을 확인했습니다."],
      ],
      features: [
        ["한눈에 보는 여행", "핵심 여행 정보가 한곳에 모여 있습니다."],
        ["구조화된 콘텐츠", "정보가 묶여 있어 빠르게 훑어볼 수 있습니다."],
        ["인터랙티브 프로토타입", "연결된 화면으로 사용자 흐름을 보여 줍니다."],
        ["친근한 비주얼", "여행 테마에 어울리는 밝고 따뜻한 스타일입니다."],
      ],
      focus: ["앱 디자인", "프로토타이핑", "사용자 경험"],
    },
  },

  "branding": {
    title: "Branding & Graphics",
    discipline: "Graphic Design",
    tools: [
      ["Adobe Photoshop", "Image editing, graphics and composition"],
      ["Canva", "Layout of graphic materials and quick variations"],
    ],
    overview:
      "A collection of branding and graphic design work exploring how a consistent visual style can be carried across different formats. The project focuses on color, typography and composition as the core tools of a recognizable visual identity.",
    role: [
      "Developed the visual direction of the graphics.",
      "Selected colors and typography.",
      "Designed graphic materials in different formats.",
      "Kept the style consistent across all pieces.",
    ],
    process: [
      ["Direction", "Defined the mood and key visual elements of the style."],
      ["Foundations", "Chose the colors and typefaces that form the identity."],
      ["Design", "Created graphic materials based on the defined style."],
      ["Consistency check", "Reviewed all pieces side by side to keep them unified."],
    ],
    features: [
      ["Cohesive style", "All pieces share one recognizable visual language."],
      ["Considered typography", "Type choices support the overall character."],
      ["Multiple formats", "The style adapts to different layouts and sizes."],
      ["Balanced compositions", "Clear structure and well-placed visual accents."],
    ],
    focus: ["Branding", "Visual Identity", "Graphic Design"],
    ru: {
      title: "Брендинг и графика",
      discipline: "Графический дизайн",
      tools: [
        ["Adobe Photoshop", "Обработка изображений, графика и композиция"],
        ["Canva", "Вёрстка графических материалов и быстрые варианты"],
      ],
      overview: "Подборка работ по брендингу и графическому дизайну: исследование того, как единый визуальный стиль переносится на разные форматы. В центре внимания — цвет, типографика и композиция как основа узнаваемого визуального образа.",
      role: ["Разработка визуального направления графики.", "Подбор цветов и шрифтов.", "Создание графических материалов в разных форматах.", "Сохранение единого стиля во всех работах."],
      process: [
        ["Направление", "Определение настроения и ключевых визуальных элементов стиля."],
        ["Основа", "Выбор цветов и шрифтов, формирующих образ."],
        ["Дизайн", "Графические материалы на основе выбранного стиля."],
        ["Проверка целостности", "Сравнение всех работ рядом, чтобы они оставались единым целым."],
      ],
      features: [
        ["Цельный стиль", "Все работы говорят на одном узнаваемом визуальном языке."],
        ["Продуманная типографика", "Шрифты поддерживают общий характер."],
        ["Разные форматы", "Стиль адаптируется к разным макетам и размерам."],
        ["Сбалансированные композиции", "Чёткая структура и точно расставленные акценты."],
      ],
      focus: ["Брендинг", "Визуальная айдентика", "Графический дизайн"],
    },
    ko: {
      title: "브랜딩 & 그래픽 디자인",
      discipline: "그래픽 디자인",
      tools: [
        ["Adobe Photoshop", "이미지 편집, 그래픽, 구성"],
        ["Canva", "그래픽 자료 레이아웃과 빠른 변형"],
      ],
      overview: "일관된 비주얼 스타일을 다양한 형식에 어떻게 적용할 수 있는지 탐구한 브랜딩과 그래픽 디자인 작업 모음입니다. 알아볼 수 있는 비주얼 아이덴티티의 핵심 도구인 컬러, 타이포그래피, 구성에 집중했습니다.",
      role: ["그래픽의 비주얼 방향 개발", "컬러와 서체 선정", "다양한 형식의 그래픽 자료 디자인", "모든 작업의 스타일 일관성 유지"],
      process: [
        ["방향", "스타일의 분위기와 핵심 시각 요소를 정했습니다."],
        ["기초", "아이덴티티를 이루는 컬러와 서체를 골랐습니다."],
        ["디자인", "정한 스타일을 바탕으로 그래픽 자료를 만들었습니다."],
        ["일관성 점검", "모든 작업을 나란히 놓고 통일감을 확인했습니다."],
      ],
      features: [
        ["통일된 스타일", "모든 작업이 하나의 알아볼 수 있는 시각 언어를 공유합니다."],
        ["세심한 타이포그래피", "서체 선택이 전체적인 개성을 살려 줍니다."],
        ["다양한 형식", "스타일이 여러 레이아웃과 크기에 맞춰집니다."],
        ["균형 잡힌 구성", "명확한 구조와 적절한 시각적 포인트가 있습니다."],
      ],
      focus: ["브랜딩", "비주얼 아이덴티티", "그래픽 디자인"],
    },
  },
};
