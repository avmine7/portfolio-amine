const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (burger && nav) {
  burger.addEventListener("click", () => {
    const opened = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", opened ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/* =============================
   Intro Portfolio
============================= */

window.addEventListener("load", () => {
  const intro = document.querySelector("#introLuxe");

  if (intro) {
    setTimeout(() => {
      intro.classList.add("intro-hidden");
    }, 1800);

    setTimeout(() => {
      intro.remove();
    }, 2600);
  }
});

/* =============================
   Scroll Reveal
============================= */

(() => {
  const elements = document.querySelectorAll(
    ".section-head, .stat-card, .about-card, .about-item, .skill-card, .project-card, .timeline-item, .contact-box"
  );

  elements.forEach((el) => {
    el.classList.add("reveal");
  });

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 40}ms`;
    observer.observe(el);
  });
})();