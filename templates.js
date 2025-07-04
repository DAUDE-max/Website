class MainHeader extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <nav class="navbar">
                <div class="navbar__container">
                    <a href="index.html" id="navbar__logo">
                        <img src="img/logos/StageOnLogoSimple.png" alt="StageOn Logo" id="logo__img">
                        StageOn
                    </a>
                    <div class="navbar__toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="navbar__menu">
                        <li><a href="index.html" class="navbar__item" id="Home">Home</a></li>
                        <li><a href="leistungen.html" class="navbar__item" id="Leistungen">Leistungen</a></li>
                        <li><a href="kontakt.html" class="navbar__item" id="Kontakt">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
        `;

        this.initMobileMenu();
        this.highlightCurrentPage();
        this.addScrollShadow();
    }

    initMobileMenu() {
        const mobileMenu = this.querySelector('#mobile-menu');
        const menuLinks = this.querySelector('.navbar__menu');

        if (mobileMenu && menuLinks) {
            mobileMenu.addEventListener('click', () => {
                mobileMenu.classList.toggle('is-active');
                menuLinks.classList.toggle('active');
            });
        }
    }

    highlightCurrentPage() {
        const currentPage = window.location.pathname.split("/").pop();
        const menuItems = this.querySelectorAll('.navbar__item');

        menuItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage || (currentPage === "" && href === "index.html")) {
                item.classList.add('active');
            }
        });
    }

    addScrollShadow() {
        const navbar = this.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer__container">

          <div class="footer__section footer__left">
            <div class="footer__link--items">
              <a href="impressum.html">Impressum / Datenschutz</a>
              <p class="footer__email">
                Fragen an:
                    <span class="email--copy" onclick="CopyToClipboard('stageon.eventtechnik@gmail.com', this)">
                        stageon.eventtechnik@gmail.com
                    </span>
              </p>
            </div>
          </div>

          <div class="footer__section footer__center">
            <div class="footer__logo">
              <a href="index.html">
                <img src="img/logos/StageOnLogoSimple.png" alt="StageOn Footer Logo" id="footer__logo">
                StageOn
              </a>
            </div>
          </div>

          <div class="footer__section footer__right">
            <p class="footer__text">2025 StageOn.<br>All Rights reserved.</p>
          </div>

        </div>
      </footer>
    `;


  }
}

customElements.define('main-header', MainHeader);
customElements.define('main-footer', MainFooter);




