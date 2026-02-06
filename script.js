// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.style.display === "block";
    mobileNav.style.display = open ? "none" : "block";
    menuBtn.setAttribute("aria-expanded", String(!open));
    mobileNav.setAttribute("aria-hidden", String(open));
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.style.display = "none";
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mailto helper
function openMailto(subject, body) {
  const to = "universalexteriorcleaning@gmail.com";
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value?.trim() || "";
    const phone = document.getElementById("phone")?.value?.trim() || "";
    const location = document.getElementById("location")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const subject = `Free Quote Request - ${name || "Website"}`;
    const body =
`Name: ${name}
Phone: ${phone}
Location: ${location}

Job details:
${message}

Sent from the Universal Exterior Cleaning website.`;

    openMailto(subject, body);
  });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cname")?.value?.trim() || "";
    const email = document.getElementById("cemail")?.value?.trim() || "";
    const msg = document.getElementById("cmsg")?.value?.trim() || "";

    const subject = `Website Message - ${name || "Customer"}`;
    const body =
`Name: ${name}
Email: ${email}

Message:
${msg}

Sent from the Universal Exterior Cleaning website.`;

    if (formStatus) formStatus.textContent = "Opening your email app…";
    openMailto(subject, body);
  });
}

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("#galleryGrid img").forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
