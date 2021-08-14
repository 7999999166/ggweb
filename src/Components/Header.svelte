<script>
import Cartf from './Cartf.svelte';
import {counter} from '../data.js';



</script>
<style>
    .aa{
background: hsla(186, 33%, 94%, 1);

background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

height: 100px;

width: 100%;

display: flex;

justify-content: space-around;

align-items: center;

z-index: 20;


 }

a{
    text-decoration: none;
    
    }
.bb{
    font-size: 2rem;
    font-family: 'Times New Roman', Times, serif;
    margin-right: 170px;
    color: black;
}  
button{
    border: none;
    background-color: transparent;
    color: rgba(28, 136, 224, 0.74);
}
.xx{
  margin-left: -5px;
}
.cc{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bolder;
  font-size: 1.7rem;
}
</style>
<div class="aa w3-card w3-top">
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <a href="/about">About</a>
    <a href="/books" class="bb">G & G Steel</a>
    <a href="/login">Log in</a>
   <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
{#if $counter == undefined}
<span class="w3-badge xx">0</span>
{:else}
<span class="w3-badge xx">{$counter}</span>
{/if}

</button>
</div>




<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel" class="cc">Your Cart</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <Cartf></Cartf>
  </div>
</div>