$(document).ready(function(){

  $(document).keypress(function(e) {
    if (e.key === "a") {
      $("#turtle").animate({
        left: '+=25px'
      });
    } else if (e.key === "l") {
      $("#rabbit").animate({
        left: '+=25px'
      });
    }

    // check window width
    // compare width turtle/rabbit position
    // check for winner
  });
});
