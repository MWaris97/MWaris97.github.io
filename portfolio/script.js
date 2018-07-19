let isScrolling = true;
    $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 50 && isScrolling) {
        //console.log($(window).scrollTop());
        $(".logo1").slideUp(400, function(){
          $(".logo1").fadeIn(400).attr("src","logosm.svg");  
        });
        isScrolling = false;
        $(".navbar").addClass("compressed");
      } else if ($(window).scrollTop() < 50 && !isScrolling) {
        $(".logo1").fadeOut(400, function(){
          $(".logo1").slideDown(400).attr("src","logoWSsm.svg");
        });
        isScrolling = true;
        $(".navbar").removeClass("compressed");
      }
    });
  });