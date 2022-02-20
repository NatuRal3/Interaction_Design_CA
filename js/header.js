const headerContent = document.querySelector("header");

headerContent.innerHTML += `

 <div class="container flex row">
        <div class="main_logo">
          <a href="index.html">
            <img src="images/RainyDays_Logo.png" alt="Site logo" />
          </a>
        </div>
        <label for="hamburger_menu"><i class="fas fa-bars"></i></label>
        <input type="checkbox" id="hamburger_menu" />
        <nav>
          <ul class="categories">
            <li><a href="products.html#men">MEN</a></li>
            <li><a href="products.html#women">WOMEN</a></li>
            <li><a href="products.html#children">CHILDREN</a></li>
            <li>
              <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </nav>
      </div>
      
      `;
