// Filter courses
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // Remove active class from all buttons
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter courses
    document.querySelectorAll(".course-card").forEach((card) => {
      if (filter === "all" || card.dataset.level === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
