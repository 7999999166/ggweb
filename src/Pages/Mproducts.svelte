<script>
    import axios from 'axios';
    var yy = [] ;
    function getData(){axios.get('https://spreadsheets.google.com/feeds/list/19rdcxlVEi7uUHY7kjY916SxbFAyTohDiKNrlFkWUnbo/od6/public/values?alt=json')
                        .then(function (response) {  yy = response.data.feed.entry ; console.log(yy) ; })
                        }
    getData();
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
  
</style>




<div class="bb">

	{#each yy as item}
     <div class="aa w3-card-4" data-aos="zoom-out">
       <img src="https://res.cloudinary.com/kanik/image/upload/v1626675500/Bawana/MIR921-1_700x_dvza82.webp" alt="Alps" class="zz">
       <div class="w3-container w3-center">
        <h2 class="cc">{item.gsx$product.$t}</h2>
        <div class="dd">
  <table class="w3-table w3-border gg">
   <tr><td style="width:30%" class="ff jam">Price</td><td class="ee ff jam"> ₹ {item.gsx$diameterinch.$t} </td></tr>
  <!-- <tr><td style="width:30%" class="ff">Height</td><td class="ee ff"> {item.gsx$heightinch.$t} Inch</td></tr>
  <tr><td class="ff">Width</td>    <td class="ee ff"> {item.gsx$widthinch.$t} Inch</td></tr>
  <tr><td class="ff">Thickness</td>    <td class="ee ff"> {item.gsx$thicknessmm.$t} mm</td></tr>
  <tr><td class="ff">Circle</td>     <td class="ee ff"> {item.gsx$basecircleinch.$t} Inch</td></tr>
  <tr><td class="ff">Weight</td>    <td class="ee ff"> {item.gsx$weightkg.$t} Kg</td></tr> -->
  <tr><td class="ff"><button class="w3-button w3-black w3-round">Details</button></td>    <td class="ee ff"> <button class="w3-button w3-black w3-hover-blue w3-round"> Buy Now</button></td></tr>
  </table>
  </div>
      </div>
   </div> 
	{/each}
    </div>


