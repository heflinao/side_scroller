//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

});

// // left variable isn't getting update on keydown
// keybindings for left/right
$(document).bind('keydown', function(e) {
  console.log(e.keyCode);
  left = $('.character').position().left
  //right arrow
  if (e.keyCode == 39) {
    if (left >= 9 && left < 400) {
      $('.character').animate({'margin-left': '-=50' }, 500);
      console.log('true');
    } else {
      console.log('false');
    }
  }
  //left arrow
  if (e.keyCode == 37) {
    if (left >= 8) {
      $('.character').animate({'margin-left': '+=50' }, 500);
    }
  }
});
