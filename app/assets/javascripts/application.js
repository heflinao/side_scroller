//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

  $(document).keydown(function(e) {
    console.log(e.keyCode);
    margin_left = $('.character').css('margin-left')
    margin_left = parseInt(margin_left)
    left = $('.character').css('left')
    left = parseInt(left)
    //left arrow
    if (e.keyCode == 37) {
      if (margin_left > 0) {
        $('.character').animate({'margin-left': '-=50px' }, 500);
      } else if(margin_left == 0 && left == 10) {
        $('.background').animate({'margin-left': '0px' }, 500);
        $('.character').animate({'left': '10px', 'margin-left': '400px' }, 500);
      }
    }
    //right arrow
    if (e.keyCode == 39) {
      if (margin_left < 400) {
        $('.character').animate({'margin-left': '+=50px' }, 500);
      } else if(margin_left == 400) {
        $('.background').animate({'margin-left': '-440px' }, 500);
        $('.character').animate({'left': '10px', 'margin-left': '0px' }, 500);
      }
    }
  });

});

