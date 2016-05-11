


$(document).ready(function(){
//   $("span").click(function(){
//     // console.log("clicked");
//   $("#screen").append("<span>2</span>");
})
// });


// // $(this)
// $("span").click(function(){
//   // console.log("clicked");
// $("#screen").append("span").eq(3).text("2"); //7
// })
// });
$("#bt1").on("click", function() {
  $("#screen").append("<span>1</span>");
});

$("#bt2").on("click", function() {
  $("#screen").append("<span>2</span>");
});

$("#bt3").on("click", function() {
  $("#screen").append("<span>3</span>");
});

$("#bt4").on("click", function() {
  $("#screen").append("<span>4</span>");
});

$("#bt5").on("click", function() {
  $("#screen").append("<span>5</span>");
});

$("#bt6").on("click", function() {
  $("#screen").append("<span>6</span>");
});

$("#bt7").on("click", function() {
  $("#screen").append("<span>7</span>");
});

$("#bt8").on("click", function() {
  $("#screen").append("<span>8</span>");
});

$("#bt9").on("click", function() {
  $("#screen").append("<span>9</span>");
});

$("#cancel").on("click", function() {
  $("#screen").empty();
});
