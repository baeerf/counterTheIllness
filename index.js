var clicks = 0;
var clickElement = document.querySelector(".clicks");
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    addclick();
  }
};

var addclick = function () {
  clicks++;
  renderClicks();
};

var renderClicks = function () {
  clickElement.innerHTML = clicks;
};

var resetClick = function () {
  clicks = 0;
  renderClicks();
};
