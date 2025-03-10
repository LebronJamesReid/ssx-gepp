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
  const aboutGreenEconomyLink = document.querySelector("#about-green-economy-link");
  const learningCenterLink = document.querySelector("#learning-center-link");
  const collaborationsLink = document.querySelector("#collaborations-link")
  if (!navLinks.length) return;

  const currentPath = window.location.pathname; // Get only the path (without domain)

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href'); // Get the href attribute of the link
    const linkPath = new URL(linkHref, window.location.origin).pathname; // Resolve the relative URL

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

  // Check if the current page  green-economy.html or about-gepp.html
  if (currentPath === "/green-economy.html" || currentPath === "/about-gepp.html") {
    // Add active class to the "About Green Economy" link
    if (aboutGreenEconomyLink) {
      const dropdownToggle = aboutGreenEconomyLink.querySelector('.nav-link');
      dropdownToggle.classList.add("active");
    }
  }

    // Check if the current page  knowledege hub
    if (currentPath === "/knowledge-hub.html") {
      // Add active class to the "About Green Economy" link
      if (learningCenterLink) {
        const dropdownToggle = learningCenterLink.querySelector('.nav-link');
        dropdownToggle.classList.add("active");
      }
    }

            // Check if the current page  knowledege hub
            if (currentPath === "/collaborations.html") {
              // Add active class to the "About Green Economy" link
              if (collaborationsLink) {
                const dropdownToggle = collaborationsLink.querySelector('.nav-link');
                dropdownToggle.classList.add("active");
              }
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
