// Mobile menu
const menu = document.querySelector(".menu");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", open);
  menu.textContent = open ? "Close" : "Menu";
}

menu.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// Keep one project open at a time
const rows = document.querySelectorAll(".rows details");
rows.forEach(d => d.addEventListener("toggle", () => {
  if (d.open) rows.forEach(o => { if (o !== d) o.open = false; });
}));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
