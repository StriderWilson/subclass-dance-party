var makePopDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = popDancer;

makePopDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  $(document).bind('mousemove', function (e) {
    $('.dancer').css({
      left: e.pageX + 20,
      top: e.pageY
    });
  });
};

