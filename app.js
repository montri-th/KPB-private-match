(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const properties = [
    {
      id: 'P01', rank: 1, fit: 'core', fitLabel: 'Core fit', score: 94,
      name: 'Ekkamai–Ramintra Garden Estate', area: 'Bueng Kum · generalized area',
      type: 'Land with garden compound', size: '7-2-18 rai', economics: 'Lease THB 3.1–3.5M / year',
      image: 'assets/property-resort.jpg', readiness: 'Owner open to qualified approach', permission: 'D2 client display',
      reason: 'Strong affluent residential catchment with a private green setting and realistic guest access.',
      signals: ['Catchment 92', 'Access 88', 'Green setting 95'],
      why: ['Strong premium-family catchment', 'Existing landscape shortens opening path', 'Two access points for guest circulation'],
      tradeoff: 'Existing structures require adaptive-reuse review.',
      next: 'Confirm long-lease term and structural condition.',
      freshness: 'Owner-confirmed 11 Jul 2026', confidence: 'High', x: 65, y: 40
    },
    {
      id: 'P02', rank: 2, fit: 'core', fitLabel: 'Core fit', score: 91,
      name: 'Bang Na Private Wellness Plot', area: 'Bang Na–Trat corridor · generalized',
      type: 'Vacant land', size: '9-0-42 rai', economics: 'Lease THB 3.4–3.9M / year',
      image: 'assets/property-yacht.jpg', readiness: 'Permission reconfirmed', permission: 'D2 client display',
      reason: 'Best road access in the shortlist and a large corporate/residential catchment within the target travel band.',
      signals: ['Access 97', 'Size 93', 'Catchment 86'],
      why: ['Direct access from a major corridor', 'Enough area for parking and phased build', 'Near affluent eastern residential nodes'],
      tradeoff: 'Less naturally private; landscape buffer is needed.',
      next: 'Check access permit and utility capacity.',
      freshness: 'Managed portfolio 15 Jul 2026', confidence: 'High', x: 79, y: 63
    },
    {
      id: 'P03', rank: 3, fit: 'core', fitLabel: 'Core fit', score: 88,
      name: 'Prawet Lakeside Opportunity', area: 'Prawet · generalized area',
      type: 'Land beside water body', size: '6-3-05 rai', economics: 'Lease THB 2.8–3.2M / year',
      image: 'assets/property-mountain.jpg', readiness: 'Approach permitted with NDA', permission: 'D1–D2 conditional',
      reason: 'High privacy and wellness character, while remaining inside the required eastern Bangkok catchment.',
      signals: ['Privacy 96', 'Setting 93', 'Budget 84'],
      why: ['Distinct wellness destination character', 'Within annual lease range', 'Acceptable drive time to target clients'],
      tradeoff: 'Single access route needs traffic validation.',
      next: 'Validate road width and seasonal water condition.',
      freshness: 'Owner-confirmed 08 Jul 2026', confidence: 'Medium-high', x: 58, y: 69
    },
    {
      id: 'P04', rank: 4, fit: 'core', fitLabel: 'Core fit', score: 86,
      name: 'Suan Luang Urban Retreat Site', area: 'Suan Luang · generalized area',
      type: 'Land with low-rise residence', size: '5-1-80 rai', economics: 'Lease THB 3.8–4.2M / year',
      image: 'assets/property-tower.jpg', readiness: 'Owner receptive; economics indicative', permission: 'D2 client display',
      reason: 'Closest to the preferred client base, with a credible adaptive-reuse path and strong everyday accessibility.',
      signals: ['Catchment 96', 'Travel 94', 'Readiness 82'],
      why: ['Shortest travel time from Thonglor', 'Existing building can support soft launch', 'Good visibility without public-market exposure'],
      tradeoff: 'Upper end of budget and smaller expansion reserve.',
      next: 'Confirm building suitability and final lease band.',
      freshness: 'Owner-confirmed 04 Jul 2026', confidence: 'Medium-high', x: 43, y: 52
    },
    {
      id: 'P05', rank: 5, fit: 'core', fitLabel: 'Core fit', score: 83,
      name: 'Pattanakarn Private Compound', area: 'Pattanakarn · generalized area',
      type: 'Garden compound', size: '5-0-64 rai', economics: 'Lease THB 3.0–3.4M / year',
      image: 'assets/property-city.jpg', readiness: 'Qualified inquiry accepted', permission: 'D1 client display',
      reason: 'Balanced option with strong access, privacy and budget fit; the generalized location protects owner identity.',
      signals: ['Access 89', 'Budget 90', 'Privacy 80'],
      why: ['Balanced economics and access', 'Existing mature landscape', 'Owner accepts a controlled inquiry'],
      tradeoff: 'Exact location remains withheld before client interest.',
      next: 'Client interest required for D2 disclosure.',
      freshness: 'Portfolio update 13 Jul 2026', confidence: 'Medium', x: 34, y: 61
    },
    {
      id: 'P06', rank: 6, fit: 'core', fitLabel: 'Core fit', score: 81,
      name: 'Ramkhamhaeng East Campus', area: 'Saphan Sung · generalized area',
      type: 'Vacant land', size: '11-2-22 rai', economics: 'Lease THB 3.7–4.0M / year',
      image: 'assets/property-tablet.jpg', readiness: 'Owner open to long lease', permission: 'D2 client display',
      reason: 'Largest core-fit parcel, allowing parking, phased facilities and future family-program expansion.',
      signals: ['Size 98', 'Lease term 90', 'Access 78'],
      why: ['Best future expansion capacity', 'Long-lease discussion welcomed', 'Multiple development zones possible'],
      tradeoff: 'Catchment is less concentrated than top-ranked options.',
      next: 'Model catchment and phased capex scenarios.',
      freshness: 'Owner-confirmed 17 Jul 2026', confidence: 'High', x: 70, y: 28
    },
    {
      id: 'P07', rank: 7, fit: 'alternative', fitLabel: 'Alternative fit', score: 78,
      name: 'Rama 9 Adaptive Reuse Building', area: 'Rama 9 · generalized area',
      type: 'Low-rise commercial building', size: '6,400 sq.m. usable', economics: 'Lease THB 3.6–4.1M / year',
      image: 'assets/property-dashboard.jpg', readiness: 'Building viewable after NDA', permission: 'D2 conditional',
      reason: 'Faster opening path than ground-up development and strong urban access, despite not being a land-led solution.',
      signals: ['Opening speed 96', 'Access 93', 'Size 76'],
      why: ['Could open within the 12-month target', 'Existing parking and building services', 'Strong central-east client access'],
      tradeoff: 'Lower green-space quality than the preferred concept.',
      next: 'Test program fit and renovation scope.',
      freshness: 'Partner-confirmed 10 Jul 2026', confidence: 'Medium-high', x: 30, y: 34
    },
    {
      id: 'P08', rank: 8, fit: 'alternative', fitLabel: 'Alternative fit', score: 75,
      name: 'Lat Krabang Destination Plot', area: 'Lat Krabang · generalized area',
      type: 'Vacant land', size: '14-1-12 rai', economics: 'Lease THB 2.5–2.9M / year',
      image: 'assets/property-park.jpg', readiness: 'Permission available for concept review', permission: 'D1 client display',
      reason: 'Excellent economics and destination scale, but farther from the core residential catchment.',
      signals: ['Budget 97', 'Size 99', 'Travel 61'],
      why: ['Best lease economics', 'Destination-scale capacity', 'Airport and regional access'],
      tradeoff: 'Longer drive time for recurring Bangkok members.',
      next: 'Validate destination demand and shuttle model.',
      freshness: 'Managed portfolio 06 Jul 2026', confidence: 'Medium', x: 86, y: 41
    },
    {
      id: 'P09', rank: 9, fit: 'strategic', fitLabel: 'Strategic option', score: 73,
      name: 'Ratchapruek Garden Estate', area: 'West Bangkok · generalized area',
      type: 'Garden estate', size: '8-0-30 rai', economics: 'Lease THB 3.2–3.6M / year',
      image: 'assets/property-resort.jpg', readiness: 'Owner open to discreet approach', permission: 'D1 client display',
      reason: 'Outside the requested geography, but its affluent catchment and established destination character outperform several eastern options.',
      signals: ['Catchment 94', 'Setting 98', 'Travel 52'],
      why: ['Exceptional destination character', 'Affluent west-Bangkok catchment', 'Existing hospitality-ready landscape'],
      tradeoff: 'Fails the preferred eastern geography; shown only because geography was confirmed flexible.',
      next: 'Banker to confirm willingness to consider west Bangkok.',
      freshness: 'Owner-confirmed 12 Jul 2026', confidence: 'High', x: 13, y: 49
    },
    {
      id: 'P10', rank: 10, fit: 'strategic', fitLabel: 'Strategic option', score: 70,
      name: 'Samut Prakan Riverside Reserve', area: 'Samut Prakan · generalized area',
      type: 'Riverside land', size: '12-3-40 rai', economics: 'Lease THB 2.9–3.3M / year',
      image: 'assets/property-yacht.jpg', readiness: 'Owner permission pending reconfirmation', permission: 'D1 internal-safe preview',
      reason: 'A long-horizon strategic destination with a strong wellness setting and favorable economics.',
      signals: ['Setting 97', 'Budget 92', 'Readiness 55'],
      why: ['Distinct waterfront proposition', 'Large expansion reserve', 'Within economic range'],
      tradeoff: 'Permission and flood/environmental evidence require more work.',
      next: 'Reconfirm owner readiness before any client action.',
      freshness: 'Portfolio update 02 Jul 2026', confidence: 'Medium-low', x: 72, y: 84
    }
  ];

  const translations = {
    th: {
      navVision: 'VISION', navExperience: 'EXPERIENCE', navTrust: 'TRUST & CONTROL', navPilot: 'PILOT',
      startDemo: 'เริ่ม Guided Demo',
      heroTitle1: 'จากบทสนทนาส่วนตัว',
      heroTitle2: 'สู่โอกาสอสังหาริมทรัพย์ที่คัดสรรเฉพาะครอบครัว',
      heroCopy: 'บริการ Banker-led ที่เปลี่ยนความต้องการของ client ให้เป็น Top 10 private property opportunities พร้อมเหตุผล ข้อแลกเปลี่ยน สิทธิ์การเปิดเผย และเส้นทางสู่การนัดหมายที่ทั้งสองฝ่ายยินยอม',
      seeExperience: 'ทดลองประสบการณ์', seeApproval: 'ดูสิ่งที่ต้องอนุมัติ',
      portfolioTitle: 'ต่อยอดจาก Land Portfolio ที่ให้บริการต่อเนื่องมาหลายปี',
      portfolioCopy: 'ไม่ได้เริ่มจาก marketplace ใหม่ แต่เริ่มจากความสัมพันธ์ ข้อมูลทรัพย์ และ operating knowledge ที่มีอยู่ แล้วเพิ่ม permission, matching, human review และ private client experience เข้าไปอย่างเป็นระบบ',
      families: 'ครอบครัวใน Land Portfolio', landPlots: 'แปลงที่ดิน', condoUnits: 'ห้องชุด', futureScale: 'ที่ดิน + ห้องชุด จาก approved sources',
      inventoryRule: '<strong>Inventory ≠ Available Opportunity.</strong> ทรัพย์จะถูกนำเสนอเมื่อผ่านสิทธิ์ ความพร้อม คุณภาพข้อมูล และเงื่อนไขของ client เท่านั้น',
      valueTitle: 'สร้างบริการใหม่โดยไม่ลดทอนความเป็น Private Banking',
      valueCopy: 'ประสบการณ์ถูกออกแบบให้ “เป็นที่ปรึกษา” มากกว่า “เป็นเว็บประกาศ” และให้ Private Banker ควบคุมทุกจุดที่มีผลต่อความสัมพันธ์',
      value1Title: 'Discover private supply', value1Copy: 'เปลี่ยน property records จากหลายแหล่งให้เป็น opportunity pool ที่รู้ว่า “ใช้ได้กับใคร เปิดเผยได้แค่ไหน และพร้อมถูกทาบทามหรือยัง”',
      value2Title: 'Make banker judgment scalable', value2Copy: 'AI ช่วยตีความ context และจัดอันดับ แต่ hard constraints, permission และการอนุมัติ shortlist ยังคงอยู่ภายใต้ human review',
      value3Title: 'Convert interest, not browsing', value3Copy: 'client เห็นเพียงตัวเลือกที่จำเป็น พร้อมเหตุผลและ trade-off ก่อนยืนยันความสนใจ แล้วจึงเข้าสู่ double opt-in และนัดหมาย',
      loopTitle: 'ห้าช่วงเวลาที่เปลี่ยน inquiry ให้เป็น qualified introduction',
      loop1: 'Probe', loop1Small: '5 questions', loop2: 'Structure', loop2Small: 'Decision brief', loop3: 'Match', loop3Small: 'Eligible & explainable', loop4: 'Review', loop4Small: 'Banker + Match Desk', loop5: 'Introduce', loop5Small: 'Double opt-in',
      experienceTitle: 'ทดลองเดินเรื่องเดียวกันในมุม Private Banker และ Client',
      experienceCopy: 'ใช้ sample brief ที่เตรียมไว้ เดินผ่าน matching, human review, secure link และการยืนยัน interest ได้ครบในหนึ่งหน้า',
      trustTitle: 'Private by policy ไม่ใช่เพียง private เพราะ URL หายาก',
      trustCopy: 'ทรัพย์ เจ้าของ client และสิทธิ์การเปิดเผยเป็นคนละ object กัน ระบบจึงตรวจสอบ permission ก่อน ranking ก่อน publication และก่อน introduction ซ้ำอีกครั้ง'
    },
    en: {
      navVision: 'VISION', navExperience: 'EXPERIENCE', navTrust: 'TRUST & CONTROL', navPilot: 'PILOT',
      startDemo: 'Start guided demo',
      heroTitle1: 'From a private conversation',
      heroTitle2: 'to property opportunities curated for one family',
      heroCopy: 'A banker-led service that turns client context into ten explainable, permission-safe private property opportunities and a controlled path to a mutually approved introduction.',
      seeExperience: 'Experience the concept', seeApproval: 'See the approval ask',
      portfolioTitle: 'Built on a Land Portfolio relationship that has operated for years',
      portfolioCopy: 'The service does not begin as a new marketplace. It begins with trusted relationships, property records and operating knowledge, then adds permission, matching, human review and a private client experience.',
      families: 'families in the Land Portfolio', landPlots: 'land plots', condoUnits: 'condominium units', futureScale: 'land + condominium records from approved sources',
      inventoryRule: '<strong>Inventory ≠ Available Opportunity.</strong> A property is shown only after permission, readiness, data quality and client constraints are satisfied.',
      valueTitle: 'Create a new service without diluting Private Banking',
      valueCopy: 'The experience behaves like an advisory brief, not a listing portal, with the Private Banker controlling every relationship-sensitive moment.',
      value1Title: 'Discover private supply', value1Copy: 'Turn records from multiple sources into an opportunity pool that knows who may use the data, what may be disclosed and whether an owner is ready for an approach.',
      value2Title: 'Make banker judgment scalable', value2Copy: 'AI interprets context and ranks candidates, while hard constraints, permission and shortlist approval remain human reviewed.',
      value3Title: 'Convert interest, not browsing', value3Copy: 'Clients see a limited, reasoned set of choices, confirm explicit interest and only then enter double opt-in and appointment workflows.',
      loopTitle: 'Five controlled moments turn an inquiry into a qualified introduction',
      loop1: 'Probe', loop1Small: '5 questions', loop2: 'Structure', loop2Small: 'Decision brief', loop3: 'Match', loop3Small: 'Eligible & explainable', loop4: 'Review', loop4Small: 'Banker + Match Desk', loop5: 'Introduce', loop5Small: 'Double opt-in',
      experienceTitle: 'Walk through the same case as a Private Banker and as the client',
      experienceCopy: 'Use the sample brief to experience matching, human review, secure access and explicit interest in a single guided prototype.',
      trustTitle: 'Private by policy—not merely private because a URL is hard to guess',
      trustCopy: 'Property, owner, client and disclosure rights are separate objects, so permission is checked before ranking, before publication and again before introduction.'
    }
  };

  let currentLang = 'th';
  let currentQuestion = 0;
  let currentStage = 'welcome';
  let toastTimer;
  const stageOrder = ['welcome', 'questions', 'brief', 'review', 'client'];
  const stageTitles = {
    welcome: 'Create a private opportunity brief',
    questions: 'Capture client context in five questions',
    brief: 'Confirm hard constraints and assumptions',
    review: 'Review permission-safe Top 10',
    client: 'Preview the authenticated client page'
  };
  const answers = { transaction: 'เช่า', locations: [], readiness: 'ภายใน 3 เดือน' };
  const approvals = new Map(properties.map(p => [p.id, true]));
  const responses = new Map();
  const comparisons = new Set();

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(node => {
      const key = node.dataset.i18n;
      if (!translations[lang][key]) return;
      if (key === 'inventoryRule') node.innerHTML = translations[lang][key];
      else node.textContent = translations[lang][key];
    });
    const toggle = $('#languageToggle');
    const spans = $$('span', toggle);
    spans[0].classList.toggle('language-toggle__active', lang === 'th');
    spans[2].classList.toggle('language-toggle__active', lang === 'en');
  }

  function initGlobalNavigation() {
    $$('[data-scroll-to]').forEach(button => button.addEventListener('click', () => {
      const target = $(button.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    $('#languageToggle').addEventListener('click', () => applyLanguage(currentLang === 'th' ? 'en' : 'th'));

    const menuToggle = $('#menuToggle');
    const nav = $('.primary-nav');
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    $$('.primary-nav a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));

    $$('[data-toast]').forEach(button => button.addEventListener('click', () => showToast(button.dataset.toast)));
  }

  function initReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    items.forEach(item => observer.observe(item));
  }

  function initCounters() {
    const counters = $$('[data-count]');
    const animate = element => {
      const end = Number(element.dataset.count);
      const duration = 1100;
      const startAt = performance.now();
      const tick = now => {
        const t = Math.min(1, (now - startAt) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        element.textContent = Math.round(end * eased).toLocaleString('en-US');
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .6 });
    counters.forEach(counter => observer.observe(counter));
  }

  function initLoop() {
    const details = [
      ['01 / PROBE', 'Private Banker เก็บ context จากบทสนทนา ไม่ใช่ส่งแบบฟอร์มยาวให้ client', 'ระบบช่วยถามต่อเท่าที่จำเป็น และแยกสิ่งที่ “ต้องมี” ออกจากสิ่งที่ “ยืดหยุ่นได้” ก่อนค้นหาทรัพย์'],
      ['02 / STRUCTURE', 'ระบบแปลงถ้อยคำให้เป็น Structured Decision Brief ที่ Banker ตรวจแก้ได้', 'Hard constraints, preferences, assumptions, missing inputs และ priority rule ถูกแสดงให้เห็นอย่างโปร่งใส'],
      ['03 / MATCH', 'ค้นเฉพาะทรัพย์ที่ผ่าน eligibility และสิทธิ์ ก่อนให้คะแนนความเหมาะสม', 'ทุกอันดับมี supporting signals, strongest trade-off, confidence, freshness และสิ่งที่ต้องตรวจสอบต่อ'],
      ['04 / REVIEW', 'Banker และ Match Desk ตรวจ Top 10 ก่อนเผยแพร่ทุกครั้ง', 'ตรวจ owner/source concentration, disclosure level, stale data และ permission โดยไม่ปล่อย AI ส่ง shortlist อัตโนมัติ'],
      ['05 / INTRODUCE', 'client ยืนยันความสนใจ แล้วจึงขอ owner reconfirmation และ mutual opt-in', 'เปิดเผยตัวตนและนัดหมายตาม disclosure ladder เท่านั้น การดูหน้าเว็บไม่ถูกตีความเป็นความสนใจ']
    ];
    const container = $('#loopDetail');
    $$('.loop-step').forEach((button, index) => button.addEventListener('click', () => {
      $$('.loop-step').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      const [tag, title, copy] = details[index];
      container.innerHTML = `<span class="loop-detail__tag">${tag}</span><h3>${title}</h3><p>${copy}</p>`;
    }));
  }

  function updateStage(stage) {
    currentStage = stage;
    $$('.demo-stage').forEach(panel => panel.classList.toggle('is-active', panel.dataset.stage === stage));
    $$('.stage-nav__item').forEach((button, index) => {
      const active = button.dataset.stageTarget === stage;
      button.classList.toggle('is-active', active);
      button.classList.toggle('is-complete', index < stageOrder.indexOf(stage));
    });
    $('#stageTitle').textContent = stageTitles[stage];
    const canvas = $('#productCanvas');
    canvas.scrollTop = 0;
    if (window.innerWidth < 981) $('.product-sidebar').classList.remove('is-open');
  }

  function initStages() {
    $$('.stage-nav__item').forEach(button => button.addEventListener('click', () => updateStage(button.dataset.stageTarget)));
    $$('[data-next-stage]').forEach(button => button.addEventListener('click', () => updateStage(button.dataset.nextStage)));
    $('#sidebarToggle').addEventListener('click', () => $('.product-sidebar').classList.toggle('is-open'));
    $('#loadSampleFromWelcome').addEventListener('click', () => {
      loadSampleAnswers();
      updateStage('questions');
      showToast('Sample scenario loaded. You can edit any answer.');
    });
  }

  function renderQuestionProgress() {
    const progress = $('#questionProgress');
    progress.innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.index = String(i + 1);
      button.textContent = `0${i + 1}`;
      button.classList.toggle('is-active', i === currentQuestion);
      button.classList.toggle('is-complete', i < currentQuestion);
      button.addEventListener('click', () => setQuestion(i));
      progress.appendChild(button);
    }
  }

  function setQuestion(index) {
    currentQuestion = Math.max(0, Math.min(4, index));
    $$('.question-panel').forEach(panel => panel.classList.toggle('is-active', Number(panel.dataset.question) === currentQuestion));
    renderQuestionProgress();
    $('#questionBack').disabled = currentQuestion === 0;
    $('#questionNext').innerHTML = currentQuestion === 4 ? 'สร้าง Decision Brief <span>→</span>' : 'ถัดไป <span>→</span>';
  }

  function selectChoice(button) {
    const single = button.closest('[data-single-choice]');
    const multi = button.closest('[data-multi-choice]');
    if (single) {
      $$('.choice-chip', single).forEach(item => item.classList.remove('is-selected'));
      button.classList.add('is-selected');
      answers[single.dataset.singleChoice] = button.dataset.value;
    } else if (multi) {
      button.classList.toggle('is-selected');
      answers.locations = $$('.choice-chip.is-selected', multi).map(item => item.dataset.value);
    }
  }

  function loadSampleAnswers() {
    answers.transaction = 'เช่า';
    answers.readiness = 'ภายใน 3 เดือน';
    answers.locations = ['Bang Na', 'Prawet', 'Suan Luang', 'Flexible if stronger catchment'];
    $('#q1Use').value = 'เปิด premium wellness destination สำหรับสมาชิกครอบครัวและ day visit โดยต้องการพื้นที่สงบ มี landscape และรองรับรถส่วนตัว';
    $('#q2Area').value = 'กรุงเทพฯ ฝั่งตะวันออก';
    $('#q2Travel').value = 'ไม่เกิน 35 นาทีจากทองหล่อในช่วงนอก peak';
    $('#q2Logic').value = 'ต้องมี affluent residential catchment, เข้าถึงด้วยรถสะดวก, มี privacy และไม่อยู่ในย่านที่วุ่นวายเกินไป';
    $('#q3Min').value = '5 ไร่';
    $('#q3Preferred').value = '7–10 ไร่ (รับได้ถึง 12 ไร่)';
    $('#q3Access').value = 'รถสวนกันได้ และรองรับ guest drop-off';
    $('#reqParking').checked = true;
    $('#reqGreen').checked = true;
    $('#reqBuilding').checked = true;
    $('#reqRoad').checked = true;
    $('#q4Budget').value = 'ไม่เกิน 4 ล้านบาท/ปี';
    $('#q4Timing').value = 'เปิดบริการภายใน 12 เดือน';
    $('#q4Flex').value = 'รับสัญญา 10+10 ปี ลงทุนปรับพื้นที่ได้ และยืดหยุ่นทำเลเมื่อ catchment และ access ดีกว่าอย่างมีนัยสำคัญ';
    $('#q5Risk').value = 'ทางเข้าแคบมาก, zoning หรือ flood risk ไม่ชัดเจน, owner ไม่พร้อมยืนยันสิทธิ์การเข้าตรวจสอบ';

    $$('[data-single-choice="transaction"] .choice-chip').forEach(item => item.classList.toggle('is-selected', item.dataset.value === 'เช่า'));
    $$('[data-single-choice="readiness"] .choice-chip').forEach(item => item.classList.toggle('is-selected', item.dataset.value === 'ภายใน 3 เดือน'));
    $$('[data-multi-choice="location"] .choice-chip').forEach(item => item.classList.toggle('is-selected', answers.locations.includes(item.dataset.value)));
  }

  function updateBriefFromForm() {
    const use = $('#q1Use').value.trim() || 'พัฒนา premium wellness destination';
    const area = $('#q2Area').value.trim() || 'กรุงเทพฯ ฝั่งตะวันออก';
    const min = $('#q3Min').value.trim() || '5 ไร่';
    const timing = $('#q4Timing').value.trim() || 'ภายใน 12 เดือน';
    $('#briefSummaryText').textContent = `ครอบครัวต้องการ${answers.transaction || 'เช่า'}ทรัพย์ขนาดอย่างน้อย ${min} ใน${area} เพื่อ${use} โดยมีเป้าหมาย${timing} และให้ความสำคัญกับ customer catchment, การเข้าถึงด้วยรถ และพื้นที่จอดรถ`;
    $('#hardConstraints').innerHTML = [
      `Transaction: ${answers.transaction || 'เช่า'}`,
      `Minimum size: ${min}`,
      $('#reqRoad').checked ? 'Guest vehicle access is required' : 'Access requirement to be confirmed',
      `Opening path: ${timing}`,
      'Owner approach must be permitted'
    ].map(item => `<li>${item}</li>`).join('');
    $('#preferences').innerHTML = [
      area,
      $('#reqGreen').checked ? 'Green or private setting' : 'Setting flexible',
      $('#q3Preferred').value.trim() || '7–10 rai preferred',
      $('#reqBuilding').checked ? 'Vacant land accepted' : 'Existing building preferred',
      $('#q4Budget').value.trim() || 'Economics to be confirmed'
    ].map(item => `<li>${item}</li>`).join('');
  }

  function initQuestionWizard() {
    renderQuestionProgress();
    $$('.choice-chip').forEach(button => button.addEventListener('click', () => selectChoice(button)));
    $('#loadSample').addEventListener('click', () => {
      loadSampleAnswers();
      showToast('Sample answers loaded. Continue or edit any field.');
    });
    $('#questionBack').addEventListener('click', () => setQuestion(currentQuestion - 1));
    $('#questionNext').addEventListener('click', () => {
      if (currentQuestion < 4) setQuestion(currentQuestion + 1);
      else {
        updateBriefFromForm();
        updateStage('brief');
      }
    });
    setQuestion(0);

    let dragged;
    $$('.priority-item').forEach(item => {
      item.addEventListener('dragstart', () => { dragged = item; item.style.opacity = '.45'; });
      item.addEventListener('dragend', () => {
        item.style.opacity = '';
        dragged = null;
        $$('.priority-item').forEach((row, index) => row.querySelector('small').textContent = `Priority ${index + 1}`);
      });
      item.addEventListener('dragover', event => {
        event.preventDefault();
        if (!dragged || dragged === item) return;
        const rect = item.getBoundingClientRect();
        item.parentElement.insertBefore(dragged, event.clientY < rect.top + rect.height / 2 ? item : item.nextSibling);
      });
    });
  }

  function runMatchingAnimation() {
    const overlay = $('#matchingOverlay');
    const bar = $('#matchingProgressBar');
    const headline = $('#matchingHeadline');
    const steps = $$('.matching-steps > div');
    const states = [
      ['Applying hard constraints', 24],
      ['Checking field-level rights and owner permission', 51],
      ['Ranking fit, evidence and trade-offs', 78],
      ['Balancing source, owner and option diversity', 100]
    ];
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    bar.style.width = '0%';
    steps.forEach((step, index) => step.classList.toggle('is-active', index === 0));
    states.forEach(([text, width], index) => {
      setTimeout(() => {
        headline.textContent = text;
        bar.style.width = `${width}%`;
        steps.forEach((step, i) => step.classList.toggle('is-active', i <= index));
      }, index * 720 + 150);
    });
    setTimeout(() => {
      overlay.classList.remove('is-visible');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
      updateStage('review');
      showToast('10 candidates are ready for human review.');
    }, 3250);
  }

  function fitClass(property) {
    if (property.fit === 'alternative') return 'candidate-fit candidate-fit--alternative';
    if (property.fit === 'strategic') return 'candidate-fit candidate-fit--strategic';
    return 'candidate-fit';
  }

  function renderCandidates(filter = 'all') {
    const list = $('#candidateList');
    const visible = filter === 'all' ? properties : properties.filter(item => item.fit === filter);
    list.innerHTML = visible.map(property => `
      <article class="candidate-row ${approvals.get(property.id) ? '' : 'is-excluded'}" data-fit="${property.fit}" data-id="${property.id}">
        <div class="candidate-rank"><strong>${String(property.rank).padStart(2, '0')}</strong><span>${property.score}% FIT</span></div>
        <div class="candidate-thumb"><img src="${property.image}" alt="Illustrative view for ${property.name}" loading="lazy"></div>
        <div class="candidate-identity">
          <span class="${fitClass(property)}">${property.fitLabel}</span>
          <h4>${property.name}</h4>
          <p>${property.area}<br>${property.type} · ${property.size}</p>
        </div>
        <div class="candidate-rationale">
          <span>WHY INCLUDED</span>
          <p>${property.reason}</p>
          <div class="candidate-signal">${property.signals.map(signal => `<span>${signal}</span>`).join('')}</div>
          <p class="candidate-tradeoff">Trade-off: ${property.tradeoff}</p>
        </div>
        <div class="candidate-readiness">
          <span>PERMISSION / READINESS</span>
          <strong>${property.readiness}</strong>
          <small>${property.permission}<br>${property.freshness} · ${property.confidence}</small>
        </div>
        <div class="candidate-action">
          <button type="button" class="${approvals.get(property.id) ? 'is-approved' : ''}" data-approve="${property.id}">${approvals.get(property.id) ? '✓ Approved' : 'Approve'}</button>
          <button type="button" data-detail="${property.id}">Why ranked</button>
        </div>
      </article>
    `).join('');
    $$('[data-approve]', list).forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.approve;
      approvals.set(id, !approvals.get(id));
      renderCandidates(filter);
      updateApprovedCount();
    }));
    $$('[data-detail]', list).forEach(button => button.addEventListener('click', () => {
      const property = properties.find(item => item.id === button.dataset.detail);
      showToast(`${property.name}: ${property.next}`);
    }));
  }

  function updateApprovedCount() {
    const count = [...approvals.values()].filter(Boolean).length;
    $('#approvedCount').textContent = String(count);
    $('#createClientPage').disabled = count < 3;
  }

  function initReview() {
    renderCandidates();
    updateApprovedCount();
    $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
      $$('.filter-chip').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      renderCandidates(button.dataset.filter);
    }));
    $('#runMatch').addEventListener('click', runMatchingAnimation);
    $('#previewClientPage').addEventListener('click', () => updateStage('client'));
    $('#createClientPage').addEventListener('click', () => {
      updateStage('client');
      showToast('Client Decision Page v1.0 created with a 7-day expiry.');
    });
  }

  function responseLabel(value) {
    return value === 'interested' ? 'สนใจให้ตรวจสอบต่อ' : value === 'hold' ? 'เก็บไว้พิจารณา' : 'ไม่ตรงโจทย์';
  }

  function propertyCard(property) {
    const selected = responses.get(property.id);
    return `
      <article class="client-property-card" data-property-card="${property.id}">
        <div class="client-property-card__image">
          <img src="${property.image}" alt="Illustrative view for ${property.name}" loading="lazy">
          <span class="client-property-card__rank">${property.rank}</span>
        </div>
        <div class="client-property-card__body">
          <div class="client-property-card__top"><span class="client-property-card__fit">${property.fitLabel.toUpperCase()}</span><span class="client-property-card__code">${property.id} · ${property.permission}</span></div>
          <h5>${property.name}</h5>
          <div class="client-property-card__meta">${property.area}<br>${property.type} · ${property.size}<br>${property.economics}</div>
          <div class="client-property-card__why"><span>Why it fits</span><ul>${property.why.slice(0,2).map(item => `<li>${item}</li>`).join('')}</ul><p class="client-property-card__tradeoff">Trade-off: ${property.tradeoff}</p></div>
          <div class="client-property-card__status"><span class="readiness-badge">● ${property.readiness}</span><span>${property.confidence} confidence</span></div>
          <div class="client-property-card__actions">
            <button class="response-button ${selected === 'interested' ? 'is-selected' : ''}" type="button" data-response="interested" data-property="${property.id}">สนใจ</button>
            <button class="response-button ${selected === 'hold' ? 'is-selected' : ''}" type="button" data-response="hold" data-property="${property.id}">เก็บไว้</button>
            <button class="response-button ${selected === 'pass' ? 'is-selected' : ''}" type="button" data-response="pass" data-property="${property.id}">ไม่ตรง</button>
            <button class="compare-toggle ${comparisons.has(property.id) ? 'is-selected' : ''}" type="button" data-compare="${property.id}" aria-label="Compare ${property.name}">⇄</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderClientCards() {
    const grid = $('#clientPropertyGrid');
    const approvedProperties = properties.filter(property => approvals.get(property.id));
    grid.innerHTML = approvedProperties.map(propertyCard).join('') + `
      <div class="client-confirm-bar">
        <p><strong id="interestCount">0</strong> สนใจ · <strong id="holdCount">0</strong> เก็บไว้ · การตอบกลับจะถูกส่งเมื่อคุณกดยืนยันเท่านั้น</p>
        <button type="button" id="openInterest" disabled>ยืนยันทรัพย์ที่สนใจ →</button>
      </div>
    `;
    $$('[data-response]', grid).forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.property;
      const value = button.dataset.response;
      if (responses.get(id) === value) responses.delete(id);
      else responses.set(id, value);
      renderClientCards();
      updateClientResponseCounts();
    }));
    $$('[data-compare]', grid).forEach(button => button.addEventListener('click', () => toggleCompare(button.dataset.compare)));
    $('#openInterest').addEventListener('click', openInterestDialog);
    updateClientResponseCounts();
  }

  function updateClientResponseCounts() {
    const interested = [...responses.values()].filter(value => value === 'interested').length;
    const hold = [...responses.values()].filter(value => value === 'hold').length;
    const interestEl = $('#interestCount');
    const holdEl = $('#holdCount');
    const button = $('#openInterest');
    if (interestEl) interestEl.textContent = String(interested);
    if (holdEl) holdEl.textContent = String(hold);
    if (button) button.disabled = interested === 0;
  }

  function toggleCompare(id) {
    if (comparisons.has(id)) comparisons.delete(id);
    else if (comparisons.size < 4) comparisons.add(id);
    else {
      showToast('เลือกเปรียบเทียบได้สูงสุด 4 รายการ');
      return;
    }
    renderClientCards();
    updateComparisonDock();
  }

  function updateComparisonDock() {
    const dock = $('#comparisonDock');
    $('#compareCount').textContent = String(comparisons.size);
    dock.hidden = comparisons.size === 0;
  }

  function openComparisonDialog() {
    const selected = properties.filter(property => comparisons.has(property.id));
    const rows = [
      ['Fit', property => `${property.fitLabel} · ${property.score}%`],
      ['Location', property => property.area],
      ['Asset / size', property => `${property.type}<br>${property.size}`],
      ['Economics', property => property.economics],
      ['Readiness', property => property.readiness],
      ['Key trade-off', property => property.tradeoff],
      ['Next check', property => property.next]
    ];
    $('#comparisonTable').innerHTML = `<table class="comparison-table"><thead><tr><th>Decision lens</th>${selected.map(property => `<th><img src="${property.image}" alt=""><strong>${property.rank}. ${property.name}</strong></th>`).join('')}</tr></thead><tbody>${rows.map(([label, get]) => `<tr><th>${label}</th>${selected.map(property => `<td>${get(property)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    $('#comparisonDialog').showModal();
  }

  function openInterestDialog() {
    const interested = properties.filter(property => responses.get(property.id) === 'interested');
    $('#interestSummary').innerHTML = interested.map(property => `<div class="interest-summary-item"><span>${property.rank}</span><div><strong>${property.name}</strong><small>${property.area} · ${property.size}</small></div><em>${responseLabel('interested')}</em></div>`).join('');
    $('#interestDialog').showModal();
  }

  function renderMap() {
    const panel = $('#mapPanel');
    $$('.map-marker', panel).forEach(marker => marker.remove());
    properties.filter(property => approvals.get(property.id)).forEach(property => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'map-marker';
      button.style.left = `${property.x}%`;
      button.style.top = `${property.y}%`;
      button.textContent = String(property.rank);
      button.setAttribute('aria-label', property.name);
      button.addEventListener('click', () => showMapProperty(property, button));
      panel.appendChild(button);
    });
  }

  function showMapProperty(property, button) {
    $$('.map-marker').forEach(marker => marker.classList.remove('is-active'));
    button.classList.add('is-active');
    $('#mapDetail').innerHTML = `<span>${property.id} · ${property.fitLabel.toUpperCase()}</span><h4>${property.name}</h4><img src="${property.image}" alt="Illustrative view"><p>${property.area}<br>${property.type} · ${property.size}</p><ul>${property.why.map(item => `<li>${item}</li>`).join('')}</ul><p><strong>Trade-off:</strong> ${property.tradeoff}</p>`;
  }

  function initClientExperience() {
    renderClientCards();
    renderMap();
    const inputs = $$('.otp-inputs input');
    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '').slice(0, 1);
        if (input.value && inputs[index + 1]) inputs[index + 1].focus();
      });
      input.addEventListener('keydown', event => {
        if (event.key === 'Backspace' && !input.value && inputs[index - 1]) inputs[index - 1].focus();
      });
    });
    $('#useDemoOtp').addEventListener('click', () => {
      '246810'.split('').forEach((digit, index) => { inputs[index].value = digit; });
      inputs[5].focus();
    });
    $('#otpForm').addEventListener('submit', event => {
      event.preventDefault();
      const code = inputs.map(input => input.value).join('');
      if (code !== '246810') {
        showToast('Demo code is 246810. No real authentication occurs in this prototype.');
        return;
      }
      $('#clientGate').hidden = true;
      $('#clientPage').hidden = false;
      $('#productCanvas').scrollTop = 0;
      showToast('Identity verified for the simulated client session.');
    });

    $$('.client-view-toggle button').forEach(button => button.addEventListener('click', () => {
      $$('.client-view-toggle button').forEach(item => item.classList.toggle('is-active', item === button));
      $$('[data-client-view-panel]').forEach(panel => panel.classList.toggle('is-active', panel.dataset.clientViewPanel === button.dataset.clientView));
    }));

    $('#openComparison').addEventListener('click', openComparisonDialog);
    $('#confirmInterest').addEventListener('click', () => {
      $('#interestDialog').close();
      $('#receiptDialog').showModal();
    });
  }

  function initDialogs() {
    $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
    $$('dialog').forEach(dialog => dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    }));
    $('#generateWorkshop').addEventListener('click', () => $('#workshopDialog').showModal());
  }

  function init() {
    initGlobalNavigation();
    initReveal();
    initCounters();
    initLoop();
    initStages();
    initQuestionWizard();
    initReview();
    initClientExperience();
    initDialogs();
    loadSampleAnswers();
    applyLanguage('th');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
