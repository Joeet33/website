$("#small_a").click(function(){
    $("main").removeid().addid("mainsmall")
});

$("#medium_a").click(function(){
    $("main").removeClass().addClass("mainmedium")
});

$("#large_a").click(function(){
    $("main").removeClass().addClass("mainlarge")
});