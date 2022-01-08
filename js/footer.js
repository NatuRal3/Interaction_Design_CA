const footerContent = document.querySelector("footer");

footerContent.innerHTML += `

<div class="footer-container flex space-around">
        <!-- First row -->
        <div>
          <a href="contact.html"><h2 class="link">Contact us</h2></a>
          <br />
          <h2>Our adress</h2>
          <ul>
            <li>The Duke Street 856, London</li>
            <li>Contact@rainydays.com</li>
            <li>+56 850 (93) 1488</li>
          </ul>
        </div>

        <div>
          <h2>About</h2>
          <ul>
            <li class="link"><a href="history.html">History</a></li>
            <li class="link"><a href="ourmission.html">Our Mission</a></li>
          </ul>

          <h2>Follow</h2>
          <ul>
            <li class="link"><a href="">Intsagram</a></li>
            <li class="link"><a href="">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h2>Subscribe</h2>
          <ul>
            <li>• Get weekly deals</li>
            <li>• Join fun competitions</li>
            <li>• Monthly news letters</li>
          </ul>

          <form class="flex column" method="POST">
            <label class="li_foot" for="email">Email</label>
            <input type="email" id="email" name="Email" />
            <input type="submit" value="Subscribe" class="cta cta-large" />
          </form>
        </div>
      </div>
      `;
