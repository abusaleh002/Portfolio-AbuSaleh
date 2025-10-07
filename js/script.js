// This script dynamically loads all components and applies animations/background

// Function: fetch and load each HTML component file
async function loadComponent(id, file) {
  // Fetch() gets the HTML text content of each section (header, hero, etc.)
  const res = await fetch(`components/${file}`);
  // Converts the response to plain HTML text
  const html = await res.text();
  // Adds the section content to the #app div
  document.getElementById("app").innerHTML += html;
}

// Array containing all section filenames to load in order
const sections = [
  "header.html",
  "hero.html",
  "projects.html",
  "skills.html",
  "about.html",
  "contact.html",
  "footer.html"
];

// Loop through each section and load it
sections.forEach(file => loadComponent("app", file));

// Once everything is loaded into the page...
window.onload = function () {
  // Wait half a second for all HTML sections to load
  setTimeout(() => {
    // Replace icon placeholders with actual Feather icons
    feather.replace();

    // Initialize Vanta.NET animated background
    VANTA.NET({
      el: "#vanta-background",   // The target div
      mouseControls: true,       // Allows background to react to mouse
      touchControls: true,       // Allows on mobile
      color: 0x6366f1,           // Line color (indigo)
      backgroundColor: 0xf8fafc, // Page background color
      points: 12.00,             // Number of points
      maxDistance: 22.00,        // Connection distance between points
      spacing: 18.00             // Distance between points
    });
  }, 500);
};
