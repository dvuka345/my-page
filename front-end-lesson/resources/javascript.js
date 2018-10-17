$(document).ready(function() {

  $("selector").click(function(){ /* do something */ });
  $("#copyright").click(function(){
    $(this).css('color','purple');
  });
});
/* Add code from the next steps here */
// $ ("# copyright"). click (function () {
// $ (this) .css ('color', 'purple');
//}); "
document.getElementById('copyright').addEventListener("click", function() {
  this.style.color = 'purple';
});
