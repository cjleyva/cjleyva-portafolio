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

      // 👇 LIMPIAR EL FORMULARIO
      whatsappForm.reset();
    });
  }
});