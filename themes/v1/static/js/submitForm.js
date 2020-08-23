$(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      return;
    }
    var data = {};
    if ($("#name").length) {
      data = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        fanpage: $("#fanpage").val(),
        personalFacebook: $("#personal-facebook").val(),
        otherChannel: $("#other-channel").val(),
        otherInfo: $("#other-info").val(),
      };
    } else {
      return;
    }
    $("#submit-btn").attr("disabled", true);
    var btnText = $("#submit-btn").text();
    $("#submit-btn").text("Sending...");
    $.post(
      "https://script.google.com/macros/s/AKfycbzcc9wlXg6Xjp8NPJQSnIJDY46gvwFvf1DpabqhUVVLynh0j6Hk/exec",
      data
    )
      .done(function (res) {
        $("#submit-btn").attr("disabled", false);
        $("#submit-btn").text(btnText);
        if (res && res.result === "success") {
          $("#success").modal("show");
          console.log(res);
          $("input").val("");
        } else {
          console.log(res);
          alert("Please check your input and submit again.");
        }
      })
      .fail(function () {
        $("#submit-btn").text(btnText);
        $("#submit-btn").attr("disabled", false);
        alert("Something went wrong, please try again later.");
      });
  });
});
