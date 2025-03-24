document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
        navList.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  }

  // Smooth scroll and active state
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (!section) {
      window.location.href = "/404"; // Redirect if section missing
      return;
    }
    section.scrollIntoView({ behavior: "smooth" });
  };

  // Add event listener to nav links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all links
      document.querySelectorAll("nav a").forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Scroll to section
      const sectionId = this.getAttribute("href");
      scrollToSection(sectionId);
    });
  });
});
