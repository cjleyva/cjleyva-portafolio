/* ============================================
   Filtro interactivo de proyectos
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(
    "#project-filters .filter-btn"
  );
  const projectCards = document.querySelectorAll(
    "#projects-grid .project-card"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove(
          "active",
          "bg-primary-container",
          "text-on-primary-container",
          "font-semibold"
        );
        btn.classList.add("text-on-surface-variant", "font-medium");
      });

      button.classList.add(
        "active",
        "bg-primary-container",
        "text-on-primary-container",
        "font-semibold"
      );
      button.classList.remove("text-on-surface-variant", "font-medium");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ============================================
     Menú hamburguesa (responsive)
     ============================================ */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenuLinks = mobileMenu?.querySelectorAll("a") || [];

  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");

      if (isOpen) {
        mobileMenu.classList.add("hidden");
        menuIcon.textContent = "menu";
        menuToggle.setAttribute("aria-expanded", "false");
      } else {
        mobileMenu.classList.remove("hidden");
        menuIcon.textContent = "close";
        menuToggle.setAttribute("aria-expanded", "true");
      }
    });

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.textContent = "menu";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mobileMenu.classList.add("hidden");
        menuIcon.textContent = "menu";
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ============================================
     Formulario de contacto → WhatsApp
     ============================================ */
  const whatsappForm = document.getElementById("whatsapp-form");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const texto = `Hola Carlos, soy ${name}.\n\n📧 Correo: ${email}\n📋 Asunto: ${subject}\n\n💬 Mensaje:\n${message}`;
      const textoCodificado = encodeURIComponent(texto);
      const tuNumero = "573204901827";

      const urlWhatsApp = `https://wa.me/${tuNumero}?text=${textoCodificado}`;
      window.open(urlWhatsApp, "_blank");

      whatsappForm.reset();
    });
  }
});