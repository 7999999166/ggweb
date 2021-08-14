<script>
    var matta = true ;
    function mazza(){ location.pathname = 'login' ; }
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
        margin-left: 140px;
    }
    .zz{
        text-decoration: none;
    }
</style>
{#if matta != true}
	<h1 class="bb w3-bottom">In Order To CheckOut Please <a class="zz" href="/login" on:click="{mazza}"> <span class="aa">Login</span> </a> </h1>
{:else}
	<button class="w3-button w3-black w3-bottom cc w3-round w3-hover-blue">Checkout</button>
{/if}

