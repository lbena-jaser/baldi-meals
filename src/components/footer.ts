// src/components/footer.ts

export function createFooter(): string {
  return /*html*/`
      <footer>
        <div class="footer">
            <div class="tab">
                <div class="socials">
                <img src="/images/Black_and_White_Modern_Streetwear_Sport_Logo-removebg-preview - Modifié.png" alt="">
                <p>follow us</p>
                <div class="icons">
                    <img src="/images/facebook.png" alt="">
                    <img src="/images/instagram.png" alt="">
                    <img src="/images/tiktok-circle.png" alt="">
                </div>
                </div>
            </div>
            <div class="tab">
                <div class="links">
                <h1>Quick links</h1>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Referral Program</li>
                    <li>Become an Affiliate</li>
                    <li>Log in</li>
                    <li>baldi in the workplace</li>
                    <li>j'aime le sex</li>
                    <li>j'aime le sex</li>
                </ul>
                </div>
            </div>
            <div class="tab">
                <div class="links">
                <h1>about us</h1>
                <ul>
                    <li>How it Works</li>
                    <li>About Us</li>
                    <li>Our Plans</li>
                    <li>Meal Prep Delivery</li>
                    <li>Low Carb Meal Plans</li>
                    <li>Balanced Plans</li>
                    <li>Vegan Plans</li>
                    <li>za3ket azer</li>
                </ul>
                </div>
            </div>
            <div class="tab">
                <div class="apps">
                    <h1>download our apps</h1>
                    <div>
                        <button><img id="images" src="/images/GetItOnGooglePlay_Badge_Web_color_English.png" alt=""></button>
                        <button><img id="images" src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt=""></button>
                    </div>
                   
               </div>
            </div>
        </div>
    </footer>
  `;
}

export function renderFooter(targetSelector: string = '#footer'): void {
  const footerElement = document.querySelector(targetSelector);
  if (footerElement) {
    footerElement.innerHTML = createFooter();
  }
}