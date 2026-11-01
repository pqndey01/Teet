// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Count-up animation for stats
document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 60));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current;
  }, 25);
});

// Contact form (demo: server ke bina sirf message dikhata hai)
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("formMsg").textContent =
    "Shukriya " + name + "! Aapka message mil gaya.";
  e.target.reset();
});
