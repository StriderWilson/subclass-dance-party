var lineUp = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].setPosition(400, i * 100);
  }
};