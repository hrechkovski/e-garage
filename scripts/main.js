// FETCH DATA AND DISPLAY TOP 6 ITEMS DYNAMICALLY WITH EVENT LISTENER
fetch("http://localhost:3000/items")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const topItemsDisplay = data.slice(0, 6);
    const topItemsBox = document.querySelector(".products-grid");
    topItemsDisplay.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("prod-box");
      itemDiv.innerHTML = `
              <img
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
      topItemsBox.appendChild(itemDiv);
    });
  })
  .catch((error) => console.log("Error fetching data", error));

// CTA BUTTONS ON HTML PAGE
const seeMoreBtn = document.querySelector(".prod-btn");
const formBtn = document.querySelector(".form-btn");
// Add a click event listener to the button
seeMoreBtn.addEventListener("click", () => {
  window.location.href = "items.html";
});
formBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});

// hamburger menu button close
const hamburger = document.querySelector(".hamburger-menu");
const navMobile = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
  hamburger.querySelector("span").classList.toggle("is-closed");
  navMobile.classList.toggle("hidden");
});
// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const mobileNav = document.querySelector(".mobile-nav");

// hamburgerMenu.addEventListener("click", () => {
//   mobileNav.classList.toggle("hidden");
// });
