import './styles/footer.css';
import { renderFooter } from './components/footer';
import './main.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="heroWrapper">
        <div class="hero">
          <div class="right">
            <img src="/public/401de2bf-3bba-4785-8f76-a6a9a1ed2dab.png" alt="">
          </div>
          <div class="midde">
            <h1 id="name">Baldi Meals</h1>
            <h2 id="hook">SAVE MONEY. SAVE TIME</h2>
            <h2 id="hook">.MAKE EATING WELL EASY.</h2>
            <h2 id="content">MEAL PREP RECIPES | FREEZER FRIENDLY SNACKS | DESSERTS</h2>
            <button>regester now</button>
            <img src="/public/Black_and_White_Modern_Streetwear_Sport_Logo-removebg-preview - Modifié.png" alt="">
          </div>
          <div class="left">
            <img src="/public/5bf5aa17-c65b-415e-87cd-36bfdbc99d9b.png" alt="">
          </div>
        </div>
    </div>

    <div class="howItWorkwrapper">
      <div class="howItWork">
        <h1>  HOW IT WORK ?</h1>
        <div class="tabs">
          <div id="tab1">

            <img src="/public/274e151c-4110-4f30-99a9-c59d61141fa3.png" alt="">
            <span>01</span>
            <h3>Choose Your Meals</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo</p>

          </div>
          <div id="tab2">

            <span>02</span>
            <h3>We Get Cooking</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo.</p>
            <img src="/public/274e151c-4110-4f30-99a9-c59d61141fa3.png" alt="">

          </div>
          <div id="tab3">

            <img src="/public/274e151c-4110-4f30-99a9-c59d61141fa3.png" alt="">
            <span>03</span>
            <h3>Heat, Eat & Enjoy</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo</p>

          </div>
          <div id="tab4">
            
            <span>04</span>
            <h3>Feel the Benefits</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo</p>
            <img src="/public/274e151c-4110-4f30-99a9-c59d61141fa3.png" alt="">

          </div>
        </div>
      </div>
    </div>
    <div class="menuWrapper">    
      <div class="menu">
        <h1>explore our recepies</h1>
        <div class="menuCards">
          <div class="card">
            <img src="/public/Savor the flavors of this Garlic Veggie Chicken….jpg" alt="">
            <h1>zaaket azer bilham</h1>
          </div>
          <div class="card">
            <img src="/public/Savor the flavors of this Garlic Veggie Chicken….jpg" alt="">
            <h1>magarouna netna</h1>
          </div>
          <div class="card">
            <img src="/public/Savor the flavors of this Garlic Veggie Chicken….jpg" alt="">
            <h1>azer siks</h1>
          </div>
        </div>
        <button>view menu</button>
      </div>
    </div>
    
    <div class="joinNowwrapper">
      <div class="joinNow">
        <h1>try baldi meal <span id="now">now</span></h1>
        <p>baldi meal operates on a subscription basis and plans renew weekly, unless paused or cancelled.</p>
        <button>
          <span>get offer</span>
          <br>
          <span>Get 40% off week1 + get 20% off week 2</span>
        </button>
      </div>
      </div>

    <div id="footer"></div>
  
    <script type="module" src="/src/main.ts"></script>
    
`
// Render the footer
renderFooter('#footer');

