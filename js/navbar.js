document.addEventListener("DOMContentLoaded", function () {
  setupNavbarScroll();
  setupActiveNavLinks();
  chevronDropDown();
});

function setupNavbarScroll() {
  const header = document.querySelector(".navbar");
  if (!header) return;

  // Check if the current page is 'news-internal.html'
  const currentPath = window.location.pathname;
  if (currentPath === "/news-internal.html") {
    // Ensure the scrolled class is never added on this page
    header.classList.add("scrolled");
    return; // Disable scroll effect on this page
  }

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
}



function setupActiveNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
  const aboutGreenEconomyLinks = document.querySelectorAll(".about-green-economy-link");
  const learningCenterLinks = document.querySelectorAll(".learning-center-link");
  const collaborationsLinks = document.querySelectorAll(".collaborations-link")
  if (!navLinks.length) return;

  const currentPath = window.location.pathname; // Get only the path (without domain)

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href'); // ? href attribute of the link
    const linkPath = new URL(linkHref, window.location.origin).pathname; // ? relative URL

    // Check if link matches the current path
    if (
      linkPath === currentPath ||
      (currentPath === "/" && linkPath.endsWith("/index.html"))
    ) {
      link.classList.add("active");
    }

    // link.addEventListener("click", function () {
    //   navLinks.forEach((el) => el.classList.remove("active"));
    //   this.classList.add("active");
    // });
  });

  // ?   green-economy.html or about-gepp.html
  if (currentPath === "/green-economy.html" || currentPath === "/about-gepp.html") {
    aboutGreenEconomyLinks.forEach((link) => {
      const dropdownToggle = link.querySelector('.nav-link');
      if (dropdownToggle) dropdownToggle.classList.add("active");
    });
  }
    // ? knowledege hub

    if (currentPath === "/knowledge-hub.html") {
      learningCenterLinks.forEach((link) => {
        const dropdownToggle = link.querySelector(".nav-link");
        if (dropdownToggle) dropdownToggle.classList.add("active");
      })
  
    }

            // ? collaborations
            if (currentPath === "/collaborations.html") {
              collaborationsLinks.forEach((link) => {
                const dropdownToggle = link.querySelector(".nav-link");
                if (dropdownToggle) dropdownToggle.classList.add("active");
              })
             
            }
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
