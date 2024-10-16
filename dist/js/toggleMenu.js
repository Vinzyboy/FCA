const toggleMenu = document.querySelector(".toggle__menu");
const headerContact = document.querySelector("header__contact");
const headerBottom = document.querySelector("header__bottom");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
    headerContact.classList.toggle("open");
    headerBottom.classList.toggle("open");
});