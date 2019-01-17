
class Grid {
  constructor() {
    this.col = 3;
    this.row = 3;
    this.x = 2;
    this.y = 2;

  }
}



$(document).ready(function() {


})


$(document).keydown(function(e) {
  switch (e.keyCode) {
    case 37:
      console.log(`left`);
      $("testTable")
      break;
    case 38:
      console.log(`up`);
      break;
    case 39:
      console.log(`right`);
      break;
    case 40:
      console.log(`down`);
      break;
    }
});
