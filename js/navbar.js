document.addEventListener("DOMContentLoaded", function () {
  setupNavbarScroll();
  setupActiveNavLinks();
  chevronDropDown();
});

function setupNavbarScroll() {
  const header = document.querySelector(".navbar");
  if (!header) return;

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

function setupActiveNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
  if (!navLinks.length) return;

  const currentPath = window.location.pathname; // Get only the path (without domain)

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname; // Extract path from href

    // Check if link matches the current path
    if (
      linkPath === currentPath ||
      (currentPath === "/" && linkPath.endsWith("/index.html"))
    ) {
      link.classList.add("active");
    }

    link.addEventListener("click", function () {
      navLinks.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function chevronDropDown() {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    const chevronIcon = toggle.querySelector(
      ".bi-chevron-down, .bi-chevron-up"
    );

    if (!chevronIcon) return;

    toggle.addEventListener("show.bs.dropdown", function () {
      chevronIcon.classList.replace("bi-chevron-down", "bi-chevron-up");
    });

    toggle.addEventListener("hide.bs.dropdown", function () {
      chevronIcon.classList.replace("bi-chevron-up", "bi-chevron-down");
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  chevronDropDown();
});
