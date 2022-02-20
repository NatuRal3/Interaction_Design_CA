const productID = `&include=${window.location.hash.slice(1)}`;
const apiProductDetails = `${apiParams}${productID}`;

const pageCategory = document.querySelectorAll(".categories");
const detailedContainer = document.querySelector(".detailedContainer");

async function productDetails(url) {
  const response = await fetch(url);
  const detailProduct = await response.json();
  console.log(detailProduct);
  detailProduct.forEach(function (detailedProduct) {
    detailedContainer.innerHTML = `
<div class="flex picture-container items-center">

<img src="${detailedProduct.images[0].src}" class="preview-image-main" alt="No ALT"  class="border" />
        <div class="preview-small">
          <div class="border"><img src="${detailedProduct.images[0].src}" alt="No ALT" /></div>
          <div class="border"><img src="${detailedProduct.images[0].src}" alt="No ALT" /></div>
          <div class="border"><img src="${detailedProduct.images[0].src}" alt="No ALT" /></div>
          <div class="border"><img src="${detailedProduct.images[0].src}" alt="No ALT" /></div>
        </div>

</div>
        
        <div class="preview-txt flex column flex-start">
          <div>
            <h1>${detailedProduct.name}</h1>
            <ul>
              <li>- Water reppelant</li>
              <li>- Wind resistant</li>
              <li>- High quality fabric</li>
              <li>- Used by Chuck Norris</li>
            </ul>
            <p>
              ${detailProduct[0].description}
            </p>
            
            <div class="flex row flex-end">
              <div class="price flex row flex-end">
                <h2>Price:&nbsp;</h2>
                <h2 class="bold"> ${detailedProduct.price} Kr</h2>
              </div>
              <div>
                <a href="cart.html" class="button button-small">add to cart</a>
              </div>
            </div>
          </div>
        </div>
    `;
  });
}
productDetails(apiProductDetails);
