$(document).ready(function() {
  $("#questions").submit(function(event) {
    var globe = $("input:radio[name=globe]:checked").val();
    var health = $("input:radio[name=health]:checked").val();
    var abortion = $("input:radio[name=abortion]:checked").val();
    $("#results").show();
    if (globe === "glob-yes" && health === "health-yes" && abortion === "abortion-yes") {
      $("#democrat").show();

    }
    event.preventDefault();
  });
});
