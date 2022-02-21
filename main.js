import "./style.css";

("use strict");

const button = document.querySelector(".navbar__links--bars");
const links = document.querySelector(".navbar__links");
const callToAction = document.querySelector(".navbar__cta");
const popup = document.querySelector(".form__popup");

button.addEventListener("click", () => {
  links.classList.toggle("showing");

  const out = document.querySelector(".out");
  out.addEventListener("click", () => {
    links.classList.remove("showing");
  });
});

callToAction.addEventListener("click", () => {
  popup.classList.toggle("active");
});
