//API Fetch product

// Queries
const categoryMen = `${apiParams}&category=18`;
const categoryWomen = `${apiParams}&category=16`;
const categoryChildren = `${apiParams}&category=17`;

//Elements
const pageCategory = document.querySelectorAll(".categories");
const productContainer = document.querySelector(".productContainer");

//Listners
window.addEventListener("hashchange", fetchProducts);

//Functions
function getApiUrl(category) {
  switch (category) {
    case "men":
      return apiParams + categoryMen;

    case "women":
      return apiParams + categoryWomen;

    case "children":
      return apiParams + categoryChildren;

    default:
      return apiParams;
  }
}

function fetchProducts() {
  const category = window.location.hash.slice(1);
  getProducts(getApiUrl(category));
}

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  productContainer.innerHTML = "";

  products.forEach(function (product) {
    productContainer.innerHTML += `

    <a href="productDetails.html#${product.id}">
            <div class="products flex column center">
               <img src="${product.images[0].src}" alt="No ALT" />
               <h2 class="black">${product.name}</h2>
               <p class="black"><b>Price:</b> ${product.price} KR</p>
               <p class="button button-small">View</p>
             </div>
           </a>
    `;
  });
}

fetchProducts();
