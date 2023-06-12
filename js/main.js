$(document).ready(function () {
  $(".input-container input").focus(function () {
    $(this).closest(".input-container").addClass("active");
  });
  $(".input-container input").blur(function () {
    let valLength = $(this).val().length;
    if (valLength == 0){
        $(this).closest(".input-container").removeClass("active");
    }
  });
});
