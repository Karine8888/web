// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Close nav when clicking a link (mobile)
nav?.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

// Smooth scroll for in-page links
document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target instanceof HTMLAnchorElement &&
    target.getAttribute("href")?.startsWith("#")
  ) {
    const id = target.getAttribute("href")?.slice(1);
    const section = id ? document.getElementById(id) : null;
    if (section) {
      event.preventDefault();
      const offset = 70;
      const top =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
});

// Basic contact form validation (client-side only)
const form = document.getElementById("contact-form");

if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let isValid = true;

    const setError = (input, message) => {
      const field = input.closest(".form-field");
      const errorEl = field?.querySelector(".error-message");
      if (errorEl) {
        errorEl.textContent = message;
      }
      if (message) {
        isValid = false;
      }
    };

    if (nameInput instanceof HTMLInputElement) {
      setError(
        nameInput,
        nameInput.value.trim() ? "" : "Please tell me your name."
      );
    }

    if (emailInput instanceof HTMLInputElement) {
      const value = emailInput.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setError(
        emailInput,
        value && validEmail ? "" : "Please enter a valid email address."
      );
    }

    if (messageInput instanceof HTMLTextAreaElement) {
      setError(
        messageInput,
        messageInput.value.trim()
          ? ""
          : "A short message helps me understand your project."
      );
    }

    if (isValid) {
      alert(
        "Thank you for your message. This demo form is not yet connected to an email service."
      );
      form.reset();
      form
        .querySelectorAll(".error-message")
        .forEach((el) => (el.textContent = ""));
    }
  });
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

