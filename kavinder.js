var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
<script>
        function slideSlider(){
  $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
  $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
  setTimeout(function(){moveSliderItem()}, 2635);
}
function moveSliderItem(){
  $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
  slideSlider();
}
slideSlider();