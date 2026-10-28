const GH="https://github.com/momobuilds/";
const P=[
 {d:"Wearables",t:"InVox",p:"Biomimetic eyeglass wearable that recognizes silent speech intent from a trigger word, with zero stigma and zero effort as design rules.",r:"EMG + IMU acquisition prototype",s:["MyoWare EMG","ICM-20948","Python"],g:"InVox"},
 {d:"Wearables",t:"Wireless IMU motion capture",p:"Low-cost skeletal motion-capture system with configurable networks of wearable 9-axis nodes.",r:"1–14 nodes · ~4 h battery",s:["ICM-20948","BLE","Python"],g:"Real-time-3D-human-motion-capture-system-and-human-movement-analysis-using-IMU-sensors"},
 {d:"Wearables",t:"Gait phase detection",p:"Heel-strike and toe-off detection from one lower-back IMU, labelled with push-button switches in custom shoes.",r:"Accuracy above 97%",s:["IMU","Peak detection","Python"],g:"A-Gait-Phase-Detection-System-based-on-Peak-Detection-Method"},
 {d:"Signals & ML",t:"Lower-limb movement classification",p:"Neural and fuzzy networks that classify walking, sitting and standing from EMG, scored on accuracy, precision, recall and F1.",r:"4-4-3 feed-forward network",s:["EMG","Neural nets","MATLAB"],g:"Classification-of-lower-limb-movements-using-EMG-signals"},
 {d:"Signals & ML",t:"SWEM student wellbeing monitor",p:"Reads posture, blink rate and heart rate to label a study session as focused, stressed or sleepy. Team project of four.",r:"3 biometrics → 3 states",s:["MediaPipe","scikit-learn","Python"],g:"Students-Ergonomics-Monitoring"},
 {d:"Signals & ML",t:"Plant electrical signals",p:"Records plant signals with an AD8232 and Arduino, cuts 15 s samples and trains baseline classifiers for five stimuli.",r:"Replicates a 2025 paper workflow",s:["AD8232","Arduino","scikit-learn"],g:"Plant-Electrical-Signal-Collection-and-Classification"},
 {d:"Signals & ML",t:"Trading strategy backtests",p:"Linear and logistic regression strategies for daily stock trading, compared with a buy-and-hold baseline.",r:"+287.7% backtest · Jul–Dec 2018",s:["Regression","Portfolio","Python"],g:"Trading-and-best-combination-of-stocks-in-portfolio"},
 {d:"Edge & RF",t:"Angle of arrival with PlutoSDR",p:"Real-time direction estimation from LTE SRS correlation on two coherent receive channels, with splitter-based phase calibration and a live GUI.",r:"Real-time GUI · research prototype",s:["PlutoSDR","LTE SRS","Python"],g:"rf-aoa-localization"},
 {d:"Edge & RF",t:"Person detection for FPGA",p:"Dataset capture and a CNN for person versus non-person at 64×64, sized for FPGA deployment.",r:"64×64 input",s:["CNN","FPGA","hls4ml"],g:"person_detection"},
 {d:"Edge & RF",t:"nRF5340 crypto lessons",p:"Four runnable Zephyr demos on the nRF5340: secure random, SHA-256, AES-128-CTR and authenticated samples.",r:"PSA Crypto on CryptoCell",s:["Zephyr","nRF5340","C"],g:"nrf5340-cryptocell"},
 {d:"Edge & RF",t:"MESA AV challenge: opponent detection",p:"Reads LiDAR from ROS 2 bags without a ROS install, transforms points to the ego frame and clusters them with DBSCAN.",r:"Runs without ROS 2",s:["LiDAR","DBSCAN","Python"],g:"mesa-ec2026-av-challenge"},
 {d:"Networks & IoT",t:"Muxponder vs Uplink",p:"Course project with Nokia Italy comparing two multilayer transport architectures on NSFNET and an Italian network, with baseline, heuristic and ILP.",r:"Muxponder wins, most without grooming",s:["ILP","Simulation","Jupyter"],g:"NOKIA-muxponder-vs-uplink"},
 {d:"Networks & IoT",t:"Internet of Things coursework",p:"ESP32 parking node over ESP-NOW with energy analysis, CoAP/MQTT/MQTT-SN traffic study, and LoRa network simulation.",r:"3 homeworks",s:["ESP32","MQTT","LoRa"],g:"polimi-internet-of-things"},
 {d:"Networks & IoT",t:"Network measurement lab",p:"App traffic classification, website fingerprinting, mobile traffic analysis and MAC-randomization clustering.",r:"4 homeworks + 1 project",s:["XGBoost","Wireshark","Clustering"],g:"polimi-network-measurement-lab"},
 {d:"Health software",t:"Dormivita",p:"Role-based desktop system for patients, practitioners and administrators, with login, encrypted backups and prescriptions. Medical Informatics course.",r:"3 role dashboards",s:["Python","customtkinter","SQLite"],g:"Dormivita"},
 {d:"Health software",t:"Offline hospital triage prototype",p:"Hackathon prototype exploring local-model triage with MedGemma, Qwen and Ollama. Research only, not for clinical use.",r:"Google Developer Hackathon 2026",s:["MedGemma","Ollama","Gradio"],g:"GDG-AI-hack-2026"},
 {d:"Health software",t:"ParlaMi Italian coach",p:"Local-first speaking coach with spaced repetition and a mistake database, plus a Telegram study bot grounded in course files.",r:"2 apps: web + bot",s:["Next.js","Ollama","Telegram"],g:"parlaMi"},
];
const doms=["All",...new Set(P.map(x=>x.d))];
const chips=document.getElementById("chips"),grid=document.getElementById("grid");
grid.innerHTML=P.map(x=>`<article class="card${x.wide?" wide":""}" data-d="${x.d}"><span class="tag">${x.d}</span><h3>${x.t}</h3><p>${x.p}</p><div class="result">${x.r}</div><div class="stack">${x.s.map(s=>`<span>${s}</span>`).join("")}</div><a class="src" href="${GH+x.g}">View source ↗</a></article>`).join("");
chips.innerHTML=doms.map((d,i)=>`<button class="chip" aria-pressed="${i==0}" data-d="${d}">${d}</button>`).join("");
chips.addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;
  chips.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));
  grid.querySelectorAll(".card").forEach(c=>c.hidden=b.dataset.d!=="All"&&c.dataset.d!==b.dataset.d)});

// Biosignal scope
const cv=document.getElementById("scope"),ctx=cv.getContext("2d");
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
function rnd(i){const x=Math.sin(i*127.1)*43758.5453;return x-Math.floor(x)}
function emg(t){const burst=Math.max(0,Math.sin(t*.9))**3;return (rnd(Math.floor(t*140))-.5)*2*(.12+burst*.9)}
function imu(t){return Math.sin(t*3.1)*.5+Math.sin(t*7.3)*.12}
function ppg(t){const p=(t*1.25)%1;return Math.exp(-((p-.18)**2)/.006)*.9+Math.exp(-((p-.45)**2)/.02)*.35-.2}
function draw(now){
  const dpr=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;
  if(cv.width!==w*dpr){cv.width=w*dpr;cv.height=h*dpr}
  ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
  ctx.strokeStyle=css("--line");ctx.lineWidth=1;
  for(let x=0;x<w;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}
  for(let y=0;y<h;y+=35){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  const t0=now/1000,span=6,rows=[[emg,css("--accent"),h*.2,h*.17],[imu,css("--trace2"),h*.52,h*.17],[ppg,css("--trace3"),h*.84,h*.12]];
  rows.forEach(([f,c,cy,amp])=>{ctx.strokeStyle=c;ctx.lineWidth=1.8;ctx.beginPath();
    for(let x=0;x<=w;x+=2){const t=t0-span+(x/w)*span;const y=cy-f(t)*amp;x?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke()});
}
const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
(function loop(n){draw(n);if(!still)requestAnimationFrame(loop)})(still?4000:performance.now());
