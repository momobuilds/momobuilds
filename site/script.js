// ---------- Icons (24×24 line icons, stroke = currentColor) ----------
const ICONS = {
  glasses: '<circle cx="6.5" cy="14" r="3.5"/><circle cx="17.5" cy="14" r="3.5"/><path d="M10 14h4M3 14l1-6h3M21 14l-1-6h-3"/>',
  watch: '<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 6V2h6v4M9 18v4h6v-4M8.5 12h2l1-2 1.5 4 1-2h1.5"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  heart: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z"/><path d="M3.5 12h4l1.5-2.5 2.5 5 2-3.5h7"/>',
  wave: '<path d="M2 12h3l2-6 3 12 3-9 2 5 2-2h5"/>',
  antenna: '<path d="M12 12v10M8 22h8"/><circle cx="12" cy="10" r="2"/><path d="M7.8 5.8a6 6 0 0 0 0 8.4M16.2 5.8a6 6 0 0 1 0 8.4M4.9 2.9a10 10 0 0 0 0 14.2M19.1 2.9a10 10 0 0 1 0 14.2"/>',
  body: '<circle cx="12" cy="4" r="2"/><path d="M12 6v7M7 9.5l5-1.5 5 1.5M12 13l-3.5 8.5M12 13l3.5 8.5"/><circle cx="7" cy="9.5" r=".6"/><circle cx="17" cy="9.5" r=".6"/>',
  steps: '<path d="M8 3c2 0 3 2 3 5s-1 5-3 5-3-2-3-5 1-5 3-5zM6 15h4v2a2 2 0 0 1-4 0zM16 7c2 0 3 2 3 5s-1 5-3 5-3-2-3-5 1-5 3-5zM14 19h4v.5a2 2 0 0 1-4 0z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"/>',
  network: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.5 6h9M6.3 8.2l4.4 7.6M17.7 8.2l-4.4 7.6"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/><path d="M8 11h8M8 14h5"/>',
  cross: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>',
  neural: '<circle cx="5" cy="7" r="2"/><circle cx="5" cy="17" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="19" cy="17" r="2"/><path d="M7 7.8l3.2 3.2M7 16.2l3.2-3.2M13.8 11l3.4-3.2M13.8 13l3.4 3.2"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  book: '<path d="M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3"/><path d="M20 4v15h-7"/>',
  leaf: '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',
  code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  car: '<path d="M3 16v-4l2-5h14l2 5v4z"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/>',
};
const svg = (name, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONS[name]}</svg>`;
const art = (icon, grad) => `<div class="media-art ${grad}">${svg(icon)}</div>`;
const GH = "https://github.com/momobuilds/";

// ---------- Content ----------
const CASES = [
  { icon: "glasses", grad: "g-violet", tag: "Wearable · 04/2026 – now", title: "InVox", sub: "Embedded Engineer · Biomedical and Data Science Association",
    desc: "A silent-speech wearable hidden in ordinary eyeglass frames, designed for zero stigma and zero effort.",
    points: ["Built the first data-acquisition prototype: 2 EMG sensors, 2 IMUs and an STM32 NUCLEO-U575ZI-Q."], link: GH + "InVox" },
  { icon: "watch", grad: "g-teal", tag: "Wearable · 04/2026 – now", title: "BEA Band", sub: "Embedded Engineer · InVox Biomedical Association",
    desc: "A screenless wearable watch that senses the body quietly in the background.",
    points: ["Miniaturizing the prototype in Altium: heart-rate, temperature, IMU and sweat sensors on one small board."] },
];

const EXPERIENCE = [
  { icon: "wave", grad: "g-orange", meta: "07/2026 – present · Milan", title: "Embedded Engineer Intern", org: "LWT3",
    teaser: "Firmware validation and a real-time edge sEMG pipeline for the Wings system.",
    points: ["Test and validate Wings firmware using the BTS FREEEMG 1000 as a reference.",
      "Develop a real-time edge sEMG pipeline: band-pass and notch filtering, motion-artifact suppression, muscle-activation estimation and spectral analysis.",
      "Develop a multimodal sensor-fusion pipeline (sEMG, heart rate, EDA, PPG) for fatigue prediction and physiological-state estimation."] },
  { icon: "body", grad: "g-blue", meta: "02/2021 – 03/2024", title: "Research Assistant", org: "FUMCARE",
    teaser: "Wireless IMU motion capture and gait analysis for rehabilitation.",
    points: ["Built a low-cost wireless 9-axis IMU motion-capture system with ICM-20948 sensors, supporting 1 to 14 wearable nodes and about 4 hours of battery life.",
      "Validated a gait-event detection pipeline from a single lower-back IMU, with mean timing errors of 16–21 ms against instrumented insoles.",
      "Trained a PyTorch CNN that classifies gait phases at about 85% mean accuracy across 14 participants.",
      "Built a Python and Streamlit pipeline for IMU feature extraction and visualization."] },
  { icon: "bolt", grad: "g-sky", meta: "06/2022 – 09/2022", title: "Electrical Engineer Intern", org: "FUMCARE",
    teaser: "Electronics for wearable medical robots: FUM-HEXA and an exoskeleton.",
    points: ["Assembled electronics for wearable medical robotics, including FUM-HEXA and the FUM-Exoskeleton.",
      "Integrated sensors and microcontrollers with crimping, soldering and cable assembly.",
      "Drew wiring and integration diagrams for power, CAN bus, motor electronics and the EMG, IMU, FSR and Raspberry Pi subsystems."] },
  { icon: "chip", grad: "g-violet", meta: "06/2020 – 09/2020", title: "Electrical Engineer Intern", org: "RAYAN",
    teaser: "PCB design and an ESP32 smart-home prototype.",
    points: ["Designed a PCB in Altium for remote device control and supported prototype testing.",
      "Prototyped an ESP32-based TouchKey for smart-home applications."] },
];

const EDUCATION = [
  { icon: "cap", grad: "g-blue", meta: "09/2024 – present · Milan", title: "M.Sc. Telecommunication Engineering", org: "Politecnico di Milano",
    teaser: "Specialization in Data and Signal Analysis.",
    points: ["Specialization: Data and Signal Analysis.",
      "Student Representative for the Telecommunications Engineering Department since 09/2025.",
      "1st Place Team Award in the Signal Processing and Learning course (12/2025)."] },
  { icon: "heart", grad: "g-orange", meta: "09/2018 – 09/2023 · Mashhad", title: "B.Sc. Electrical and Biomedical Engineering", org: "Ferdowsi University of Mashhad",
    teaser: "Where the wearable and rehabilitation work started, with the FUM CARE team.",
    points: ["Electrical and biomedical engineering, with research at FUMCARE on wearable robotics and gait analysis.",
      "1st Place, Iraj Yazdanbakhsh Technological Award, with the FUM CARE team for FUM-HEXA (03/2023)."] },
];

const RECOGNITION = [
  { icon: "award", grad: "g-orange", when: "12/2025", title: "1st Place Team Award", text: "Signal Processing and Learning course, Politecnico di Milano. The prize was a place at the 6th IEEE International Symposium on Joint Communications & Sensing (JC&S 2026)." },
  { icon: "award", grad: "g-blue", when: "03/2023", title: "1st Place, Iraj Yazdanbakhsh Technological Award", text: "Ferdowsi University of Mashhad, with the FUM CARE team for FUM-HEXA, a wearable hip exoskeleton that helps patients with walking impairments." },
  { icon: "book", grad: "g-teal", when: "ISME 2024", title: "A Gait Phase Detection System based on Peak Detection Method and Neural Network", text: "Conference paper presented at ISME 2024." },
];

const PROJECTS = [
  { f: 1, icon: "antenna", grad: "g-sky", tag: "RF / SDR", title: "Angle of arrival with PlutoSDR", sub: "Real-time direction finding",
    desc: "Estimates where a signal comes from using LTE SRS correlation on two coherent receive channels, with splitter-based phase calibration and a live GUI.", result: "Real-time GUI", repo: "rf-aoa-localization" },
  { f: 1, icon: "body", grad: "g-blue", tag: "Wearables", title: "Wireless IMU motion capture", sub: "Low-cost skeletal tracking",
    desc: "A motion-capture system built from wireless IMU nodes and a skeletal model, for rehabilitation and sport analysis.", result: "1–14 nodes · ~4 h battery", repo: "Real-time-3D-human-motion-capture-system-and-human-movement-analysis-using-IMU-sensors" },
  { f: 1, icon: "steps", grad: "g-orange", tag: "Wearables", title: "Gait phase detection", sub: "Published at ISME 2024",
    desc: "Detects heel strike and toe-off from one lower-back IMU. Ground truth came from push-button switches in custom shoes.", result: "Accuracy above 97%", repo: "A-Gait-Phase-Detection-System-based-on-Peak-Detection-Method" },
  { f: 1, img: "assets/img/swem.webp", tag: "ML · Health", title: "SWEM", sub: "Student wellbeing monitor · team of 4",
    desc: "Tracks posture, blink rate and heart rate during study sessions and labels the student as focused, stressed or sleepy.", result: "3 biometrics → 3 states", repo: "Students-Ergonomics-Monitoring" },
  { f: 1, img: "assets/img/mesa.webp", tag: "Autonomous driving", title: "MESA EC2026 AV challenge", sub: "LiDAR opponent detection",
    desc: "Reads LiDAR straight from ROS 2 bags, moves points into the ego frame and clusters them with DBSCAN to find opponent cars.", result: "Runs without ROS 2", repo: "mesa-ec2026-av-challenge" },
  { f: 1, img: "assets/img/plant.webp", tag: "Biosignals", title: "Plant electrical signals", sub: "AD8232 + Arduino",
    desc: "Records plant electrophysiology, cuts 15-second samples, extracts features and trains baseline classifiers for five stimuli.", result: "5 classes · 15 s windows", repo: "Plant-Electrical-Signal-Collection-and-Classification" },
  { icon: "glasses", grad: "g-violet", tag: "Wearables", title: "InVox sensor acquisition", sub: "Silent-speech eyeglasses",
    desc: "Acquisition scripts and notes for the MyoWare EMG and ICM-20948 IMU used in the InVox prototype.", result: "EMG + IMU", repo: "InVox" },
  { icon: "neural", grad: "g-rose", tag: "Biosignals", title: "Lower-limb movement classification", sub: "EMG + neural and fuzzy networks",
    desc: "Classifies walking, sitting and standing from EMG and scores the models on accuracy, precision, recall and F1.", result: "4-4-3 feed-forward net", repo: "Classification-of-lower-limb-movements-using-EMG-signals" },
  { icon: "eye", grad: "g-teal", tag: "Edge AI", title: "Person detection for FPGA", sub: "Tiny CNN at 64×64",
    desc: "Captures a person dataset and trains a small CNN sized for FPGA deployment.", result: "64×64 input", repo: "person_detection" },
  { icon: "lock", grad: "g-blue", tag: "Embedded", title: "nRF5340 CryptoCell lessons", sub: "Zephyr + PSA Crypto",
    desc: "Four runnable demos: secure random, SHA-256, AES-128-CTR and authenticated sensor samples.", result: "4 Zephyr apps", repo: "nrf5340-cryptocell" },
  { icon: "code", grad: "g-sky", tag: "Embedded", title: "IMU CI project", sub: "C++ with real CI",
    desc: "A small C++ IMU library built with CMake, unit-tested with Catch2 and checked by GitHub Actions.", result: "CMake · Catch2 · CI", repo: "imu-ci-project" },
  { img: "assets/img/trading.webp", tag: "Data science", title: "Trading strategy backtests", sub: "Regression-driven portfolios",
    desc: "Linear and logistic regression strategies for daily trading, compared against equal-weight buy-and-hold.", result: "+287.7% backtest · H2 2018", repo: "Trading-and-best-combination-of-stocks-in-portfolio" },
  { icon: "network", grad: "g-orange", tag: "Networks", title: "Muxponder vs Uplink", sub: "With Nokia Italy",
    desc: "Compares two multilayer transport architectures on NSFNET and an Italian network, using baseline, heuristic and ILP approaches.", result: "Muxponder wins", repo: "NOKIA-muxponder-vs-uplink" },
  { icon: "wifi", grad: "g-teal", tag: "IoT", title: "Internet of Things coursework", sub: "ESP32, MQTT, LoRa",
    desc: "An ESP-NOW parking-occupancy node with energy analysis, a CoAP/MQTT traffic study and LoRa network simulation.", result: "3 homeworks", repo: "polimi-internet-of-things" },
  { icon: "chart", grad: "g-violet", tag: "Networks", title: "Network measurement lab", sub: "Traffic analysis + ML",
    desc: "App traffic classification, website fingerprinting, mobile traffic analysis and MAC-randomization clustering.", result: "4 homeworks + project", repo: "polimi-network-measurement-lab" },
  { img: "assets/img/dormivita.webp", tag: "Health software", title: "Dormivita", sub: "Medical Informatics course",
    desc: "A role-based desktop app for patients, practitioners and administrators, with secure login and encrypted backups.", result: "3 role dashboards", repo: "Dormivita" },
  { icon: "cross", grad: "g-rose", tag: "Hackathon", title: "Offline hospital triage", sub: "Google Developer Hackathon 2026",
    desc: "Prototype of local-model triage with MedGemma, Qwen and Ollama. Research only, not for clinical use.", result: "Runs fully offline", repo: "GDG-AI-hack-2026" },
  { icon: "chat", grad: "g-orange", tag: "Apps", title: "ParlaMi", sub: "Local-first Italian coach",
    desc: "A speaking coach with spaced repetition and a mistake database, plus a Telegram study bot.", result: "Next.js + Ollama", repo: "parlaMi" },
];

const SKILLS = [
  { icon: "chip", grad: "g-blue", title: "Embedded systems", chips: ["STM32", "ESP32", "nRF5340", "Zephyr RTOS", "Arduino", "Raspberry Pi"] },
  { icon: "bolt", grad: "g-orange", title: "Hardware & PCB", chips: ["Altium", "Sensor integration", "Soldering", "Wiring diagrams"] },
  { icon: "wifi", grad: "g-teal", title: "Protocols", chips: ["I2C", "SPI", "CAN", "BLE", "Wi-Fi", "USB", "LoRa", "MQTT"] },
  { icon: "wave", grad: "g-rose", title: "Signal processing", chips: ["sEMG", "PPG", "IMU", "RF / SDR", "Sensor fusion", "Time series"] },
  { icon: "neural", grad: "g-violet", title: "Machine learning", chips: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "MediaPipe"] },
  { icon: "code", grad: "g-sky", title: "Languages & tools", chips: ["C / C++", "Python", "MATLAB", "SQL", "Git", "Linux", "GitHub Actions"] },
  { icon: "eye", grad: "g-teal", title: "Edge AI & FPGA", chips: ["FPGA", "HLS", "hls4ml", "Local LLMs"] },
  { icon: "globe", grad: "g-orange", title: "Languages spoken", chips: ["Persian · native", "English · fluent", "Italian · A2"] },
];

// ---------- Render ----------
const $ = (s) => document.querySelector(s);
const media = (x) => x.img
  ? `<img src="${x.img}" alt="" loading="lazy">`
  : art(x.icon, x.grad);

$("#case-grid").innerHTML = CASES.map((c) => `
  <article class="case-card reveal">
    <div class="media">${media(c)}</div>
    <div class="body">
      <p class="meta">${c.tag}</p>
      <h3>${c.title}</h3>
      <p class="sub">${c.sub}</p>
      <p class="desc">${c.desc}</p>
      <ul class="impact">${c.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      ${c.link ? `<div class="actions"><a class="link-btn" href="${c.link}" target="_blank" rel="noopener">Code on GitHub ↗</a></div>` : ""}
    </div>
  </article>`).join("");

const cardHTML = (x, set, i) => `
  <button class="card reveal" type="button" data-set="${set}" data-i="${i}" aria-label="Read more: ${x.title}, ${x.org}">
    <div class="media">${media(x)}</div>
    <div class="body">
      <p class="meta">${x.meta}</p>
      <h3>${x.title}</h3>
      <p class="sub">${x.org}</p>
      <p class="desc">${x.teaser}</p>
      <div class="actions"><span class="link-btn">Explore</span></div>
    </div>
  </button>`;
$("#exp-grid").innerHTML = EXPERIENCE.map((x, i) => cardHTML(x, "exp", i)).join("");
$("#edu-grid").innerHTML = EDUCATION.map((x, i) => cardHTML(x, "edu", i)).join("");

$("#rec-grid").innerHTML = RECOGNITION.map((r) => `
  <article class="rec reveal">
    <div class="ic ${r.grad}">${svg(r.icon)}</div>
    <div><span class="when">${r.when}</span><h3>${r.title}</h3><p>${r.text}</p></div>
  </article>`).join("");

$("#project-grid").innerHTML = PROJECTS.map((p) => `
  <article class="project-card reveal" ${p.f ? "" : "hidden data-extra"}>
    <div class="media">${media(p)}<span class="badge">${p.tag}</span></div>
    <div class="body">
      <h3>${p.title}</h3>
      <p class="sub">${p.sub}</p>
      <p class="desc">${p.desc}</p>
      <span class="result">${p.result}</span>
      <div class="actions"><a class="link-btn" href="${GH + p.repo}" target="_blank" rel="noopener">View code ↗</a></div>
    </div>
  </article>`).join("");

$("#skill-grid").innerHTML = SKILLS.map((s) => `
  <article class="skill reveal">
    <div class="ic ${s.grad}">${svg(s.icon)}</div>
    <h3>${s.title}</h3>
    <div class="chips">${s.chips.map((c) => `<span>${c}</span>`).join("")}</div>
  </article>`).join("");

$("#year").textContent = new Date().getFullYear();

// ---------- Show all projects ----------
const moreBtn = $("#more-btn");
moreBtn.addEventListener("click", () => {
  const open = moreBtn.getAttribute("aria-expanded") === "true";
  document.querySelectorAll("[data-extra]").forEach((el) => {
    el.hidden = open;
    if (!open) el.classList.add("in");
  });
  moreBtn.setAttribute("aria-expanded", String(!open));
  moreBtn.textContent = open ? "Show all projects" : "Show fewer projects";
  if (open) $("#projects").scrollIntoView();
  buildWallpaper();
});

// ---------- Copy email ----------
$("#copy-btn").addEventListener("click", async (e) => {
  const text = $("#mail").textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
    e.target.textContent = "Copied ✓";
  } catch {
    const r = document.createRange();
    r.selectNodeContents($("#mail"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    e.target.textContent = "Press Ctrl+C";
  }
  setTimeout(() => (e.target.textContent = "Copy email"), 2000);
});

// ---------- Modal ----------
const SETS = { exp: EXPERIENCE, edu: EDUCATION };
const modal = $("#modal");
let cur = { set: "exp", i: 0 }, lastFocus = null;
function showModal(set, i) {
  cur = { set, i };
  const list = SETS[set], x = list[i];
  $("#modal-media").innerHTML = media(x);
  $("#modal-meta").textContent = x.meta;
  $("#modal-title").textContent = x.title;
  $("#modal-org").textContent = x.org;
  $("#modal-list").innerHTML = x.points.map((p) => `<li>${p}</li>`).join("");
  $("#modal-count").textContent = `${i + 1} / ${list.length}`;
  $("#modal-prev").disabled = i === 0;
  $("#modal-next").disabled = i === list.length - 1;
  if (modal.hidden) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-box").focus();
  }
}
function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocus?.focus();
}
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card[data-set]");
  if (card) return showModal(card.dataset.set, +card.dataset.i);
  if (e.target.closest("[data-close]")) closeModal();
});
$("#modal-prev").addEventListener("click", () => cur.i > 0 && showModal(cur.set, cur.i - 1));
$("#modal-next").addEventListener("click", () => cur.i < SETS[cur.set].length - 1 && showModal(cur.set, cur.i + 1));
document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  else if (e.key === "ArrowLeft") $("#modal-prev").click();
  else if (e.key === "ArrowRight") $("#modal-next").click();
  else if (e.key === "Tab") {
    const f = [...modal.querySelectorAll("button:not([disabled])")];
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

// ---------- Reveal on scroll ----------
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduced) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

// ---------- Typewriter ----------
const ROLES = [["an", "Embedded Engineer"], ["a", "Wearable Tech Builder"], ["a", "Biosignal Engineer"], ["an", "Edge AI Developer"]];
(function typewriter() {
  if (reduced) return;
  const el = $("#typer"), art = document.querySelector(".type-a");
  let r = 0, n = ROLES[0][1].length, deleting = true;
  setTimeout(function tick() {
    const word = ROLES[r][1];
    if (deleting) {
      n--;
      if (n <= 0) { deleting = false; r = (r + 1) % ROLES.length; art.textContent = ROLES[r][0]; }
    } else {
      n++;
      if (n >= ROLES[r][1].length) { deleting = true; el.textContent = ROLES[r][1]; return setTimeout(tick, 1800); }
    }
    el.textContent = ROLES[r][1].slice(0, Math.max(n, 0)) || "​";
    setTimeout(tick, deleting ? 45 : 80);
  }, 2200);
})();

// ---------- Signal helpers ----------
const rnd = (i) => { const x = Math.sin(i * 127.1) * 43758.5453; return x - Math.floor(x); };
const noise = (t, rate) => (rnd(Math.floor(t * rate)) - 0.5) * 2;
const burst = (t) => Math.max(0, Math.sin(t * 0.95)) ** 3;
function fitCanvas(cv) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = cv.clientWidth, h = cv.clientHeight;
  if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
  const ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}
function trace(ctx, w, f, cy, amp, t0, span, step = 2) {
  ctx.beginPath();
  for (let x = 0; x <= w; x += step) {
    const t = t0 - span + (x / w) * span, y = cy - f(t) * amp;
    x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  }
}

// Hero: soft biosignal traces drifting behind the name
const heroCv = $("#hero-canvas");
function drawHero(now) {
  const { ctx, w, h } = fitCanvas(heroCv);
  ctx.clearRect(0, 0, w, h);
  const t0 = now / 1000;
  const lines = [
    [(t) => noise(t, 120) * (0.15 + burst(t) * 0.9), "rgba(255,107,44,.30)", 0.2, 0.07, 7],
    [(t) => { const p = (t * 1.1) % 1; return Math.exp(-((p - .2) ** 2) / .004) - .25 * Math.exp(-((p - .3) ** 2) / .002) + .3 * Math.exp(-((p - .55) ** 2) / .01); }, "rgba(31,111,229,.28)", 0.8, 0.09, 6],
    [(t) => Math.sin(t * 1.7) * .6 + Math.sin(t * 4.3) * .2, "rgba(18,165,148,.28)", 0.9, 0.05, 10],
  ];
  lines.forEach(([f, c, yRel, amp, span]) => {
    ctx.strokeStyle = c; ctx.lineWidth = 2.2; ctx.lineJoin = "round";
    trace(ctx, w, f, h * yRel, h * amp, t0, span, 3); ctx.stroke();
  });
}

// Showcase: raw → filtered → envelope
const emgCv = $("#emg-canvas");
function drawEMG(now) {
  const { ctx, w, h } = fitCanvas(emgCv);
  ctx.clearRect(0, 0, w, h);
  const t0 = now / 1000, span = 5, row = h / 3;
  ctx.strokeStyle = "rgba(23,35,58,.07)"; ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 36) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  const raw = (t) => noise(t, 160) * (0.12 + burst(t) * 0.85) + Math.sin(t * 2 * Math.PI * 0.6) * 0.35 + Math.sin(t * 300) * 0.12;
  const filt = (t) => noise(t, 160) * (0.06 + burst(t) * 0.85);
  const env = (t) => 0.06 + burst(t - 0.08) * 0.85;
  ctx.font = "500 11px JetBrains Mono, monospace"; ctx.fillStyle = "#5d6c83";
  [["RAW", raw, "#9fb0c6", 0], ["FILTERED", filt, "#1f6fe5", 1]].forEach(([label, f, c, k]) => {
    ctx.strokeStyle = c; ctx.lineWidth = 1.4;
    trace(ctx, w, f, row * k + row / 2, row * 0.42, t0, span, 1.5); ctx.stroke();
    ctx.fillText(label, 12, row * k + 18);
  });
  const base = row * 3 - 14;
  ctx.beginPath(); ctx.moveTo(0, base);
  for (let x = 0; x <= w; x += 2) ctx.lineTo(x, base - env(t0 - span + (x / w) * span) * row * 0.8);
  ctx.lineTo(w, base); ctx.closePath();
  ctx.fillStyle = "rgba(255,107,44,.16)"; ctx.fill();
  ctx.strokeStyle = "#ff6b2c"; ctx.lineWidth = 2.4;
  trace(ctx, w, (t) => env(t), base, row * 0.8, t0, span); ctx.stroke();
  ctx.fillStyle = "#5d6c83"; ctx.fillText("ENVELOPE", 12, row * 2 + 18);
}

let heroVisible = true, emgVisible = false;
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => (heroVisible = e.isIntersecting)).observe(heroCv);
  new IntersectionObserver(([e]) => (emgVisible = e.isIntersecting)).observe(emgCv);
}
function frame(now) {
  if (heroVisible) drawHero(now);
  if (emgVisible) drawEMG(now);
  requestAnimationFrame(frame);
}
if (reduced) { drawHero(4000); drawEMG(4000); } else requestAnimationFrame(frame);

// ---------- Wallpaper of sensor icons ----------
const WALL = ["chip", "wave", "heart", "watch", "glasses", "antenna", "wifi", "neural", "steps", "body", "bolt", "lock"];
function buildWallpaper() {
  const wall = $("#wallpaper");
  if (innerWidth <= 480) { wall.innerHTML = ""; return; }
  const top = document.querySelector(".hero").offsetHeight + 40;
  const H = document.body.scrollHeight - $(".footer").offsetHeight - top;
  const W = innerWidth, gx = W < 900 ? 240 : 320, gy = 260;
  let out = "", k = 0;
  for (let y = 0; y < H; y += gy) {
    for (let x = (y / gy) % 2 ? gx / 2 : 0; x < W; x += gx, k++) {
      const jx = (rnd(k + 1) - 0.5) * gx * 0.5, jy = (rnd(k + 7) - 0.5) * gy * 0.5;
      const icon = WALL[k % WALL.length];
      out += svg(icon, `style="left:${x + jx}px;top:${top + y + jy}px;animation-delay:-${(rnd(k + 3) * 70).toFixed(1)}s"`);
    }
  }
  wall.innerHTML = out;
}
let wallTimer;
addEventListener("resize", () => { clearTimeout(wallTimer); wallTimer = setTimeout(buildWallpaper, 200); });
addEventListener("load", buildWallpaper);
buildWallpaper();
