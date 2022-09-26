function myFunction() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

$(document).ready(function()
{
    $("#back_to_top").click(function()
    {
        $("html,body").animate({scrollTop: 0}, 500, function(){});
    });
});
