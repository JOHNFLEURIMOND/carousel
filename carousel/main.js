alert("Would you like to see Amsterdam?");

var gallery = 0;
var pics = ["img/couples.jpg", "img/canal.jpg", "img/cranes.jpg", "img/black.jpg", "img/fleamarket.jpg", "img/cross.jpg", "img/walkway.jpg", "img/shop.jpg"];

$(document).ready(function() {
  $("#next").on("click", function() {
    gallery += 1;
    if (gallery == pics.length) {
      gallery = 0;
    }
    $("#pics").attr("src", pics[gallery])

  });

  $("#back").on("click", function() {
    gallery -= 1;
    if (gallery == pics.length <= 0) {
      gallery = 8;
    }
    $("#pics").attr("src", pics[gallery])

  });

});