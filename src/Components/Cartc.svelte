<script>
  import {order}  from '../data.js';
  import {beforeUpdate} from 'svelte';
   $: tain = [] ;
  function wri(){ $order.find({}, function (err, docs) {tain = docs ;});}
  beforeUpdate(wri);
 
</script>

<style>
.aa{
    width: 85px;
}
.bb{
    margin-bottom: 150px;
    background-color: white;
}
.zz{
    color: cornflowerblue;
}

</style>


<ul class="w3-ul w3-card-4 bb">
{#each tain as item}
<li class="w3-bar">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-bar-item w3-button w3-xlarge w3-right">&times;</span>
  <img src="{item.Images}" class="w3-bar-item w3-circle aa" alt="products">
  <div class="w3-bar-item">
    <span class="w3-large">{item.Title}</span><br>
    <span class="zz">₹{item.Price}</span>
  </div>
</li>
{/each}
</ul>

