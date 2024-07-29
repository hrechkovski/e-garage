const hamburger = document.querySelector(".hamburger-menu");
const navMobile = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
  hamburger.querySelector("span").classList.toggle("is-closed");
  navMobile.classList.toggle("hidden");
});
