var makeLeftDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('left');
  // this.$node.animate({left: '400px'});
  
};

makeLeftDancer.prototype = Object.create(makeDancer.prototype);
makeLeftDancer.prototype.constructor = makeLeftDancer;
