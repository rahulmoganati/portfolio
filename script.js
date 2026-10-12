/* ==========================================================================
   RAHUL MOGANATI PORTFOLIO JAVASCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      const isExpanded = navLinks.classList.contains("show");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", false);
      });
    });
  }

  // Active Navigation Link on Scroll (Scrollspy)
  const sections = document.querySelectorAll("section[id]");
  const navAnchorLinks = document.querySelectorAll(".nav-links a[href^='#']");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navAnchorLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation, { passive: true });

  // Escape key listener to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeResumeModal();
    }
  });

  // Image load error fallback
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      console.warn("Image load failed:", this.src);
    });
  });

  console.log("Rahul Moganati Portfolio Initialized Successfully!");
});

/* ==========================================================================
   RESUME MODAL HANDLERS
   ========================================================================== */
function openResumeModal() {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore background scroll
  }
}

function closeResumeModalOnOutside(event) {
  if (event.target.id === "resumeModal") {
    closeResumeModal();
  }
}

/* ==========================================================================
   CLIPBOARD HELPER & TOAST NOTIFICATION
   ========================================================================== */
function copyToClipboard(text, customMessage = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMessage);
  }).catch((err) => {
    console.error("Clipboard copy failed:", err);
    // Fallback for older browsers
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(customMessage);
  });
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  if (toast) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
}
