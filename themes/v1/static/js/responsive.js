let widthWindow = $(window).width();
let removeStatus = false;
const takademyCreatorGroupBtn = $("#xxx");

$(function () {
  if (widthWindow < 1105) {
    !removeStatus &&
      takademyCreatorGroupBtn.removeClass("list-group-horizontal");
    removeStatus = true;
  }

  $(window).resize(function () {
    debounce(checkWidthWindow, 10)();
  });
});
function checkWidthWindow() {
  widthWindow = $(window).width();
  if (widthWindow < 1105) {
    !removeStatus &&
      takademyCreatorGroupBtn.removeClass("list-group-horizontal");
    removeStatus = true;
  } else {
    removeStatus && takademyCreatorGroupBtn.addClass("list-group-horizontal");
    removeStatus = false;
  }
}
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}
