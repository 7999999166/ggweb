<script>
      function changeur() {
       location.pathname = 'login';
    }
</script>
<style>
    .aa{
        margin-top: 40px;
    }
    .bb{
        margin-top: 20px;
    }
    .xx{
        font-size: 1.5rem;
        color: cornflowerblue;
        cursor:pointer;

    }
    .vv{
        text-align: center;
    }
    .zz{
        font-size: 1.5rem;
    }
   
</style>
<div>
     <form class="w3-container aa">

<label class="w3-text-blue"><b>User Name</b></label>
<input class="w3-input w3-border" type="text">

<label class="w3-text-blue"><b>Email</b></label>
<input class="w3-input w3-border" type="text">
 
<label class="w3-text-blue"><b>Password</b></label>
<input class="w3-input w3-border" type="text">

<button class="w3-btn w3-blue bb">Register</button>
<div class="vv">
<h1 class="zz">All Ready a Member ?  <span class="xx" on:click="{changeur}">Click Here</span></h1>
</div> 
</form> 
</div>