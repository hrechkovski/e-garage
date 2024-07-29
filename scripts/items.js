"use strict";

// Fetch the items from the JSON file
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
// Function to create an item element
// const createItemElement = (item) => {
//   // Create a div element to hold the item
//   const itemElement = document.createElement("div");
//   itemElement.className.add("item");
//   itemElement.innerHTML = `<img
//   class="prod-box-img"
//   src="${item.photo}"
//   alt="item-photo"
//   />
//   <div>
//   <p class="prod-box-price">${item.price}</p>
//   <p class="prod-box-txt">
//   ${item.title}
//   </p>`;
//   const goToItem = document.querySelector(".item");
//   goToItem.addEventListener("click", () => {
//     window.location.href = "item.html";
//   });
//   return itemElement;
// Append the img, title, and price elements to the item element
// itemElement.appendChild(img);
// itemElement.appendChild(price);
// itemElement.appendChild(title);

// return itemElement;
// };

// Function to populate the item list
// function populateItemList(items) {

// }
