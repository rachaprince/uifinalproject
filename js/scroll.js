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

 $(document).ready(function (e) {


  //click event on a particular arrow
   $('.menu-toggle').click(function (e) { //Relative ( to its parent) mouse position 
      e.preventDefault();
      posX=0; 
      posY=0;
      rightX=0;

    // find the top left corner of the box
         posX = $(this).parent().offset().left;
            posY = $(this).parent().offset().top;
     

      rightX=posX+$(this).parent().width();
       //alert(posX +' ' + posY + ' ' +rightX);
  //find the right div

  //create div, toggle to visible, set position and height
  $("#rose-nav").offset({top:posY, left:posX}).css({
        'display': 'block'});

  //stop scrolling (freeze index), hide other buttons, 
   $("#wrapper").toggleClass("toggled");

   
  });

   $('.menu-reverse').click(function(e){

    $("#wrapper").toggleClass("toggled");
  //reset offset
     $('#rose-nav').offset({left:0, top: 0}).css({
        'display': 'none'});
 


      });
 
});
   

   // helper function to get an element's exact position
