const welcomeText = document.querySelector(".Welcome");
if (welcomeText) {
  const fullText = "Welcome to RisTIE";
  let index = 0;
  let isDeleting = false;

  setInterval(() => {
    if (!isDeleting) {
      welcomeText.textContent = fullText.slice(0, index++) + "|";
      if (index > fullText.length) isDeleting = true;
    } else {
      welcomeText.textContent = fullText.slice(0, index--) + "|";
      if (index < 0) isDeleting = false;
    }
  }, 150);
}

const revealElements = document.querySelectorAll("section, .fokus-item, .item-divisi");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

const glowItems = document.querySelectorAll(".fokus-item, .item-divisi");
glowItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.boxShadow = "0 0 20px rgba(219, 164, 11, 0.7)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.boxShadow = "none";
  });
});

const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "30px";
scrollToTopBtn.style.right = "120px";
scrollToTopBtn.style.padding = "10px 15px";
scrollToTopBtn.style.fontSize = "20px";
scrollToTopBtn.style.borderRadius = "50%";
scrollToTopBtn.style.backgroundColor = "#1c1b82";
scrollToTopBtn.style.color = "white";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.zIndex = "999";
scrollToTopBtn.style.display = "none";
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

const cursorGrowTargets = document.querySelectorAll(".nav-button");
cursorGrowTargets.forEach(btn => {
  btn.style.transition = "transform 0.2s ease";
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
