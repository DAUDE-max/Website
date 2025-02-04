class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="navbar__container">
                <a href="index.html" id="navbar__logo">
                    <img src="images/StageOnLogoSimple.png" alt="pic" id="logo__img">StageOn
                </a>
                <div class="navbar__toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="navbar__menu">
                    <li>
                        <a href="index.html" class="navbar__item" id="Home">Home</a>
                    </li>
                    <li>
                        <a href="leistungen.html" class="navbar__item" id="Leistungen">Leistungen</a>
                    </li>
                    <li>
                        <a href="kontakt.html" class="navbar__item" id="Kontakt">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
        `
    }
}

class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer__container">
                <div class="footer__links">
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <a href="impressum.html">Impressum</a>
                        <p>Fragen an: <a href= "#" onclick="CopyToClipboard('stageon.eventtechnik@gmail.com');return false;"> stageon.eventtechnik@gmail.com </a>
                        </p>
                    </div>


                </div>
            </div>
            <div class="website__right">
                <div class="website__right--wrap">
                    <div class="footer__logo">
                        <img src="images/StageOnLogoSimple.png" alt="pic" id="footer__logo">
                        <a href="index.html" class="footer__logo">StageOn
                        </a>
                    </div>
                    <p class="website__right--text">2025 StageOn. All Rights reserved.</p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('main-header', MainHeader);
customElements.define('main-footer', MainFooter);
