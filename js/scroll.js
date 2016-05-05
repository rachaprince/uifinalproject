$(document).ready(function(){
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });
});
});

// $(document).ready(function (e) {

//     $('a[href*="#"]:not([href="#"])').click(function (e) { //Relative ( to its parent) mouse position 
//         var posX = $(this).position().left,
//             posY = $(this).position().top;
//       alert(posX +' ' + posY);
//     });
// });