
// Character counter for contact form (only if it exists on this page)
const messageInput = document.getElementById('message');
const charCount = document.getElementById('char-count');

if (messageInput && charCount) {
  messageInput.addEventListener('input', () => {
    const currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength} / 1000`;
  });
}



// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({behavior: "smooth"});
    }
  });
});

//contact form response
const contactForm = document.querySelector('#contact form');
const responseMsg = document.getElementById('form-response');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop real submission
  responseMsg.classList.remove('hidden');
  contactForm.reset();
});



//dark mode

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");
  const themeLabel = document.getElementById("theme-label");

  // Load previous preference from localStorage
  const darkModePreference = localStorage.getItem("dark-mode");
  if (darkModePreference === "enabled") {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
    if (themeLabel) themeLabel.textContent = "Light Mode";
  }

  if (toggle) {
    toggle.addEventListener("change", () => {
      const isDark = toggle.checked;
      document.body.classList.toggle("dark-mode", isDark);
      if (themeLabel) themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
      localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    });
  }
});


