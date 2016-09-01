


$.ajax({
type: "get",
url: "view/powerMap.php"
}).done(function( result ) {
$("#map-container").html(result);
$(".powerMap").show();
mapCounterMapEffect();
});