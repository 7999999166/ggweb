<script>
function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
</script>
<style>

</style>
<div>
<div class="w3-sidebar w3-bar-block w3-card w3-animate-right" style="display:none;right:0;" id="rightMenu">
  <button on:click="{closeRightMenu()}" class="w3-bar-item w3-button w3-large">Close &times;</button>
  <h1 class="w3-bar-item w3-button">Link 1</h1>
  <h1 class="w3-bar-item w3-button">Link 2</h1>
  <h1 class="w3-bar-item w3-button">Link 3</h1>
</div>
</div>