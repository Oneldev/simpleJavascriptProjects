// carousel Button!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const carousel = document.querySelector('.carousel-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;

    function moveToSlide(index) {
        carousel.style.transform = `translateX(-${index * 300}px)`; // Adjust 300 to your item width
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 4; // Change '4' to the number of items
        moveToSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 4) % 4; // Change '4' to the number of items
        moveToSlide(currentIndex);
    });



// SideBar Open Up when Clicked and Close UpFeature!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// sideBar
let OpenShopping = document.querySelector('.nothing');
let cLoseShopping = document.querySelector('.closeShopping');
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body');
let total = document.querySelector('.total');
// let clearFromList = document.querySelector("remove-button");
// let sideBar = document.querySelector(".sideBar");
// var itemName = itemContainer.querySelector(".lipstick");
// var itemPrice = itemContainer.querySelector(".money");
// var itemImage = itemContainer.querySelector("img");
// var items = listCard.querySelectorAll("li");
// var allItems = [itemName, itemPrice, itemImage];
// var removeButton = RemoveItem.querySelector(".remove-button");

OpenShopping.addEventListener('click', () => {
  body.classList.add('active');
});

cLoseShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

 


// Add to cart feauture!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to all "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var itemContainer = button.parentElement.parentElement;
      var itemName = itemContainer.querySelector(".lipstick").textContent;
      var itemPrice = itemContainer.querySelector(".money").textContent;
      var itemImage = itemContainer.querySelector("img").getAttribute("src");

      addToCart(itemName, itemPrice, itemImage);
      // Create a "Remove" button for the item
  createRemoveButton(itemName, itemPrice, itemImage);

    });
  });
});




function addToCart(itemName, itemPrice, itemImage) {
  // Create a new list item with the item details
  var listItem = document.createElement("li");
  listItem.innerHTML = `
    <img src="${itemImage}" alt="${itemName}"> ${itemName} - ${itemPrice}
  `;

  // Append the new list item to the shopping cart
  var listCard = document.querySelector(".listCard");
  listCard.appendChild(listItem);

  
};

document.addEventListener("DOMContentLoaded", function () {
        // Add event listeners to all "Add to Cart" buttons
        var addToCartButtons = document.querySelectorAll(".cart");
        addToCartButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                var itemContainer = button.parentElement.parentElement;
                var itemName = itemContainer.querySelector(".stick").textContent;
                var itemPrice = itemContainer.querySelector(".moni").textContent;
                var itemImage = itemContainer.querySelector(".image").getAttribute("src");

                addToCart(itemName, itemPrice, itemImage);
            });
        });
    });

    function addToCart(itemName, itemPrice, itemImage) {
        // Create a new list item with the item details
        var listItem = document.createElement("li");
        listItem.innerHTML = `<img src="${itemImage}" alt="${itemName}"> ${itemName} - ${itemPrice}`;

        // Append the new list item to the shopping cart
        var listCard = document.querySelector(".listCard");
        listCard.appendChild(listItem); };






// Update quantity on the shop icon!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        



      // Get references to the quantity element and all "cart" elements
const quantityElement = document.querySelector(".quantity");
const cartElements = document.querySelectorAll(".cart");

// Initialize the quantity
let quantity = 0;

// Add click event listeners to all "cart" elements
cartElements.forEach((cartElement) => {
  cartElement.addEventListener("click", () => {
    // Increment the quantity
    quantity++;
    // Update the quantity element's text
    quantityElement.textContent = quantity;
  });
});
 

// Get references to the quantity element and all "cart" elements
const quantitElement = document.querySelector(".quantity");
const carElements = document.querySelectorAll(".add-to-cart");


// Add click event listeners to all "cart" elements
carElements.forEach((carElement) => {
  carElement.addEventListener("click", () => {
    // Increment the quantity
    quantity++;
    // Update the quantity element's text
    quantityElement.textContent = quantity;
  });
});






// Read More Dialog!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Function to display the modal when "read-more" or "read" is clicked
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the modal when the close button is clicked
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Add click event listeners to all "read-more" and "read" elements
const readMoreElements = document.querySelectorAll(".read-more");
const readElements = document.querySelectorAll(".read");

readMoreElements.forEach((element) => {
  element.addEventListener("click", openModal);
});

readElements.forEach((element) => {
  element.addEventListener("click", openModal);
});

// Close the modal when the close button is clicked
const closeButton = document.querySelector(".closed");
closeButton.addEventListener("click", closeModal);





// Keep the close Button at the Bottom whenever the Cart sideBar is open!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

const container = document.querySelector('.sidebar');
const bottomItem = document.querySelector('.closeshopping');

function moveItem() {
  const containerHeight = container.clientHeight;
  const bottomItemHeight = bottomItem.clientHeight;
  const currentY = parseFloat(getComputedStyle(bottomItem).transform.split(',')[5]) || 0; // Extract the current Y transform value

  const spaceAvailable = containerHeight - currentY - bottomItemHeight;

  if (spaceAvailable > 0) {
    const moveDistance = Math.min(spaceAvailable, 5); // Adjust the movement speed as needed
    const newY = currentY + moveDistance;
    bottomItem.style.transform = `translateY(${newY}px)`;
  }

  if (spaceAvailable > 0) {
    requestAnimationFrame(moveItem);
  }
}

moveItem();



// End!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
