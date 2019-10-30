var pairDance = function() {
  for (var i = 0; i < window.dancers.length; i += 2) {
    window.dancers[i].setPosition(50 + i * 50, 50 + i * 70);
    window.dancers[i + 1].setPosition(50 + i * 50, 50 + i * 90);
  }
};