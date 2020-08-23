// brand page- collapse boxs

$(function () {
  const collapseBrands = [
    $("#collapseOne"),
    $("#collapseTwo"),
    $("#collapseThree"),
  ];

  const collapseBrandNodes = $(".brand .collapse-box .btn-card");

  collapseBrands.forEach(function (c) {
    c.on("shown.bs.collapse", function () {
      collapseBrandNodes.addClass("blur-background");
    });
    c.on("hidden.bs.collapse", function () {
      collapseBrandNodes.removeClass("blur-background");
    });
  });
});
