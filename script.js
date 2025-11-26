// Toggle "More details" in project cards
document.querySelectorAll(".project-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    const expanded = card.classList.toggle("expanded");
    btn.textContent = expanded ? "Less details" : "More details";
  });
});

// Simple dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
