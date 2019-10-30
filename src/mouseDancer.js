var makeMouseDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mouse');
  $(document).on('mousemove', function (e) {
    $('.mouse').css({
      left: e.pageX,
      top: e.pageY
    });
  });
};

makeMouseDancer.prototype = Object.create(makeDancer.prototype);
makeMouseDancer.prototype.constructor = makeMouseDancer;
