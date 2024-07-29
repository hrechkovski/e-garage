"use strict";

fetch("http://localhost:3000/items")
  .then((response) => response.json())
  .then((data) => {
    const itemsListBox = document.querySelector(".product-list");
    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("prod-box");
      itemDiv.innerHTML = `<img
  class="prod-box-img"
  src="${item.photo[0]}"
  alt="${item.title}"
  />

  <div>
  <p class="prod-box-price">${item.price}</p>

  <p class="prod-box-txt">
  ${item.title}
  </p>
  </div>
  `;
      itemDiv.addEventListener("click", () => {
        window.location.href = `item.html?id=${item.id}`;
      });
      itemsListBox.appendChild(itemDiv);
    });
  })
  .catch((error) => console.log(error));

const hamburger = document.querySelector(".hamburger-menu");
const navMobile = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
  hamburger.querySelector("span").classList.toggle("is-closed");
  navMobile.classList.toggle("hidden");
});
