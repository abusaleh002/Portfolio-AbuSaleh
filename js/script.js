// ===============================
// Abu Saleh Portfolio - script.js
// ===============================

// Function to dynamically load each HTML component into index.html
async function loadComponent(id, file) {
  try {
    const res = await fetch(`components/${file}`); // Fetch the HTML file
    const html = await res.text(); // Convert response to text
    document.getElementById("app").innerHTML += html; // Append to #app container
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
  }
}

// List of component files to load in order
const sections = [
  "header.html",
  "hero.html",
  "projects.html",
  "skills.html",
  "about.html",
  "contact.html",
  "footer.html",
];

// Load all components when page starts
sections.forEach((file) => loadComponent("app", file));

// Run scripts after everything loads
window.onload = function () {
  // Give components time to render
  setTimeout(() => {
    // Initialize Feather Icons
    feather.replace();

    // Initialize Vanta.js background animation
    if (typeof VANTA !== "undefined") {
      VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x6366f1, // Indigo color for lines
        backgroundColor: 0xf8fafc, // Light gray background
        points: 12.0,
        maxDistance: 22.0,
        spacing: 18.0,
      });
    }

    // ===============================
    // 🔍 PROJECT FILTER FUNCTIONALITY
    // ===============================
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.category;

        // Reset all buttons
        buttons.forEach((btn) =>
          btn.classList.remove("bg-indigo-600", "text-white")
        );

        // Highlight clicked button
        button.classList.add("bg-indigo-600", "text-white");

        // Show/Hide project cards
        cards.forEach((card) => {
          const cardCategory = card.dataset.category;
          if (category === "all" || cardCategory === category) {
            card.style.display = "block"; // show
          } else {
            card.style.display = "none"; // hide
          }
        });
      });
    });
  }, 500);
};
