
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  let isOpen = false;

  menuToggle.addEventListener("click", () => {
    isOpen = !isOpen;

    nav.classList.toggle("active");

    // ☰ ↔ X
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // marka link la taabto mobile-ka menu ha xirmo
  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.textContent = "☰";
      isOpen = false;
    });
  });

  // haddii screen-ku ka baxo mobile (resize)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      nav.classList.remove("active");
      menuToggle.textContent = "☰";
      isOpen = false;
    }
  });

