<script>
    import {Route} from 'tinro'; 
    import axios from 'axios';
    import {xyz,order,product,hello,counter} from '../data.js';
    import { onMount } from 'svelte';

    $: main = [] ;
   
    hello();
     
     
    function step1(){ $product.remove({}, { multi: true }); console.log('i just happened'); }
    function step2(){ $product.insert(xyz);}
    function step3(){ $product.find({}, function (err, docs) {main = docs ;});}
    async function final(){step1(); await step2();  await step3();}

    onMount( final) ;

    var jj ;
    var bb ;
    var cc ;
    var dd = {} ;
    function addOrder(e){ bb = e.target.getAttribute("data-id");  bb =  parseInt(bb); ; dd = {id: bb} ; addOrder1();  }
    function addOrder1(){ $product.findOne( dd, function (err, doc) { cc = doc ;  $order.insert(cc); });
                          $order.find({}, function (err, docs) { $counter = docs.length ; console.log($counter); });
                        }
    
  
</script>

<style>
    .aa{
        margin-right: 20px;
        background-color: #ade8f4;
        margin-bottom: 20px;
    }
  
    .bb{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 70px;
    }

    .cc{
        text-align: center;
        font-weight: bolder;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .dd{
        display: flex;
        justify-content: center;
    }
    .ee{
       text-align: end;
    }
    .ff{
        font-weight: bolder;
    }
    .gg{
        margin-bottom: 10px;
    }
    .zz{
        width: 300px;
        height: 300px;
    }
    .jam{
        font-size: 1.5rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    a{
      text-decoration: none;
      color: white;
    }

    a:hover{
      color: black;
    }
</style>



<div class="bb">

  	{#each main as item}
     <div class="aa w3-card-4" data-aos="zoom-out">
       <img src={item.Images} alt="Alps" class="zz">
       <div class="w3-container w3-center">
        <h2 class="cc">{item.Title}</h2>
        <div class="dd">
  <table class="w3-table w3-border gg">
   <tr><td style="width:30%" class="ff jam">Price</td><td class="ee ff jam"> ₹ {item.Price} </td></tr>
  <tr><td class="ff"><button class="w3-button w3-black w3-round"><a href="/product/{item.id}">Details</a></button></td>    <td class="ee ff"> <button class="w3-button w3-black w3-hover-blue w3-round" data-id="{item.id}" on:click="{addOrder}"> Buy Now</button></td></tr>
  </table>
  </div>
      </div>
   </div> 
	{/each}
    </div>



