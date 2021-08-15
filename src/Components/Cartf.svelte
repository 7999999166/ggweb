<script>
import Cartc from './Cartc.svelte';
import {order} from '../data.js';


    var total ;
    var matta = true ;
    function mazza(){ location.pathname = 'login' ; }

    $order.find({}, { Price: 1, _id: 0 }, function (err, docs) {
    console.log(docs); total = Object.values(docs).reduce((acc, curr) => {return (acc += curr.Price);},0);
});

    
</script>
<style>
    .aa{
        color: cornflowerblue;
    }
    .bb{
        font-size: 1.3rem;
        margin-bottom: 20px;
        margin-left: 30px;
    }
    .cc{
        width: 100px;
        margin-bottom: 30px;
        margin-left: 130px;
    }
    .zz{
        text-decoration: none;
    }
    .jj{
        margin-left: 2%;
        margin-bottom: 20px;
        font-family:'Times New Roman', Times, serif;
        margin-top: 20px;
        width: 300px;
        text-align: center;
    }

   
    .zz{
         position: fixed;
         bottom: 0%;
         right: 2%;
         width: 23.2%;
         background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);

    }
   
</style>
<div>
<Cartc></Cartc>
<div class="zz">
<h1 class="jj">Total : {total}</h1>
{#if matta != true}
	<h1 class="bb">In Order To CheckOut Please <a class="zz" href="/login" on:click="{mazza}"> <span class="aa">Login</span> </a> </h1>
{:else}
	<button class="w3-button w3-black  cc w3-round w3-hover-blue">Checkout</button>
{/if}
</div>
</div>

