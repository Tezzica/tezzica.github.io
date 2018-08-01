
$(document).ready(function() {
    count = 0;
    var wordsArray = ["a pug lover.", "a creative thinker.", "user-focused.", "ambitious."];
    setInterval(function () {
    count++;
    $('#word').fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});
