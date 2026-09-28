const projects={
oil:{kicker:"COMPLETED · MARKET INTELLIGENCE",title:"Oil Market Intelligence System",body:"An interactive analytics platform combining financial data, statistical modelling, simulation and market intelligence into a single dashboard. It tracks Brent crude oil prices from 2015–2026, studies returns and volatility, examines OPEC production relationships, classifies market regimes with Markov Chains, generates Monte Carlo price scenarios and produces a 15-day probabilistic forecast. The system also integrates oil-market news and sentiment analysis, Lasso regularization and hypothesis testing.",tags:["Python","Pandas","Statsmodels","Markov Chains","Monte Carlo","Streamlit"],images:["assets/oil-dashboard.png","assets/oil-news.png"]},
research:{kicker:"IN PROGRESS · RESEARCH PAPER",title:"AI-Driven Modelling of Commodity Markets [Crude Oil]",body:"Assessing the impact of supply-chain dynamics on price movements and volatility forecasting. The research tests whether adding physical crude-oil supply variables improves AI/ML forecasts of returns and realized volatility, and whether improvements vary across market regimes.",tags:["AI/ML","Crude Oil","Volatility","Supply Dynamics","Regime Detection"]},
stock:{kicker:"BACKTESTING · TRADING SYSTEM",title:"NIFTY Stock Bot",body:"An ML-oriented intraday market scanner for NIFTY 50 equities. The current pipeline downloads intraday market data, engineers indicators such as EMA, RSI, MACD, ATR, VWAP, volume ratio and price levels, detects trade setups and evaluates them through historical backtesting. Current work is focused on validating signals, entries, targets, stop-loss logic and overall performance before moving toward a live workflow.",tags:["Python","yfinance","Technical Indicators","ML","Backtesting"]},
t20:{kicker:"IN PROGRESS · FOML PROJECT",title:"Global T20 Engine",body:"An ongoing FOML project exploring player performance and selection using PCA, covariance analysis, SQL-based data work and neural networks. The project is still under development, so final outcomes are not yet available.",tags:["PCA","Covariance","SQL","Neural Networks","Cricket Analytics"]},
robot:{kicker:"ROBOTICS · WORKING MODEL",title:"Gesture-Controlled Robotic Arm",body:"A working robotic arm built using Arduino/C++, Python, DC motors and gesture-based control. The claw is designed to perform precise gripping actions, giving the team hands-on experience across robotics, programming, control systems, embedded systems and automation.",tags:["Arduino","C++","Python","DC Motors","Gesture Control"],images:["assets/robotic-arm.png"]},
dct:{kicker:"RESEARCH · IESES 2025",title:"Matrix Compression using DCT",body:"Research work on matrix compression using the Discrete Cosine Transform (DCT), accepted for the 4th IEEE International Conference on Industrial Electronics for Sustainable Energy Systems (IESES 2025), held 22–24 September 2025.",tags:["DCT","Matrix Compression","Research","IEEE IESES 2025"]}};

const modal=document.getElementById("projectModal");
const title=document.getElementById("modalTitle");
const kicker=document.getElementById("modalKicker");
const body=document.getElementById("modalBody");
const tagBox=document.getElementById("modalTags");
const gallery=document.getElementById("modalGallery");
document.querySelectorAll(".project-more").forEach(btn=>btn.addEventListener("click",()=>{
  const p=projects[btn.dataset.project];
  kicker.textContent=p.kicker; title.textContent=p.title; body.innerHTML=`<p>${p.body}</p>`;
  tagBox.innerHTML=p.tags.map(t=>`<span>${t}</span>`).join("");
  gallery.innerHTML=(p.images||[]).map(src=>`<img src="${src}" alt="${p.title} project visual">`).join("");
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
document.querySelector(".modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{
 const h=document.documentElement.scrollHeight-window.innerHeight;
 document.querySelector(".progress").style.width=(window.scrollY/h*100)+"%";
});
document.getElementById("year").textContent=new Date().getFullYear();

// Mobile navigation
const menuBtn=document.querySelector(".menu-btn");
const mobileNav=document.querySelector(".mobile-nav");
if(menuBtn && mobileNav){
  menuBtn.addEventListener("click",()=>{
    const open=mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded",open?"true":"false");
    mobileNav.setAttribute("aria-hidden",open?"false":"true");
    menuBtn.textContent=open?"×":"☰";
  });
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    mobileNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
    mobileNav.setAttribute("aria-hidden","true");
    menuBtn.textContent="☰";
  }));
}
