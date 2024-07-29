const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

fetch("http://localhost:3000/items")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const item = data.find((item) => item.id === parseInt(itemId));
    if (item) {
      const itemGridBox = document.querySelector(".item-grid-box");
      const photosHtml = item.photo
        .map(
          (photo, index) =>
            `<img class="item-carousel" src="${photo}" alt="${
              item.title
            }" style="display: ${index === 0 ? "block" : "none"};"  />`
        )
        .join("");
      itemGridBox.innerHTML = `
          <h2 class="item-title">${item.title}</h2>
          <div class="item-box-carousel">
          <button class="carousel-btn prev">&laquo;</button>
          ${photosHtml}
          <button class="carousel-btn next">&raquo;</button>
          </div>
          <div class="item-box-price">
          <p class="item-price">${item.price}</p>
          </div>
          <div class="item-box-descr">
          <p class="item-descr">${item.description}</p>
          </div>
          `;
      const photos = itemGridBox.querySelectorAll(".item-carousel");
      let currentIndex = 0;
      const showPhoto = (index) => {
        photos.forEach((photo, id) => {
          photo.style.display = id === index ? "block" : "none";
        });
      };
      const prevBtn = itemGridBox.querySelector(".prev");
      const nextBtn = itemGridBox.querySelector(".next");
      prevBtn.addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
        showPhoto(currentIndex);
      });
      nextBtn.addEventListener("click", () => {
        currentIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
        showPhoto(currentIndex);
      });
    } else {
      console.log("Item not found");
    }
  })
  .catch((error) => console.log(error));

const hamburger = document.querySelector(".hamburger-menu");
const navMobile = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
  hamburger.querySelector("span").classList.toggle("is-closed");
  navMobile.classList.toggle("hidden");
});

// document.addEventListener("DOMContentLoaded", () => {
//   // Get the item ID from the URL
//   const urlParams = new URLSearchParams(window.location.search);
//   const itemId = urlParams.get("id");

//   // Fetch the item data
//   fetch("http://localhost:8000/items")
//     .then((response) => response.json())
//     .then((data) => {
//       // Find the item with the matching ID
//       const item = data.items.find((item) => item.id === parseInt(itemId));

// const urlParams = new URLSearchParams(window.location.search);
// const itemId = urlParams.get("id");

// fetch("http://localhost:8000/items")
//   .then((response) => response.json())
//   .then((data) => {
//     const item = data.find((item) => item.id === parseInt(itemId));
//     if (item) {
//       const itemGridBox = document.querySelector(".item-grid-box");
//       const photosHtml = item.photo
//         .map(
//           (photo, index) => `
//             <img class="carousel-photo" src="${photo}" alt="${
//             item.title
//           }" style="display: ${index === 0 ? "block" : "none"};" />
//           `
//         )
//         .join("");
//       itemGridBox.innerHTML = `
//       <h2 class="item-title">${item.title}</h2>
//                 <div class="item-box-carousel">
//                 <button class="carousel-btn prev">&laquo; Poprzednie</button>
//                 ${photosHtml}
//                 <button class="carousel-btn next">Next &raquo;</button>
//                 </div>
//                 <div class="item-box-price">
//                 <p class="item-price">${item.price}</p>
//                 </div>
//                 <div class="item-box-descr">
//                 <p class="item-descr">${item.description}</p>
//                 </div>

//           `;

//       // Add carousel functionality
//       const photos = itemGridBox.querySelectorAll(".carousel-photo");
//       let currentIndex = 0;

//       const showPhoto = (index) => {
//         photos.forEach((photo, idx) => {
//           photo.style.display = idx === index ? "block" : "none";
//         });
//       };

//       const prevButton = itemGridBox.querySelector(".prev");
//       const nextButton = itemGridBox.querySelector(".next");

//       prevButton.addEventListener("click", () => {
//         currentIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
//         showPhoto(currentIndex);
//       });

//       nextButton.addEventListener("click", () => {
//         currentIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
//         showPhoto(currentIndex);
//       });
//     } else {
//       console.error("Item not found");
//     }
//   })
//   .catch((error) => console.log("Error fetching data", error));
