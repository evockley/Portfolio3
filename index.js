$(".toggle").on("click", function(){
    $(".nav-item").css("display", "flex");
    $(".close").css("display", "flex");
    $(this).css("display", "none");
});

$(".close").on("click", function(){
    $(".nav-item").css("display", "none");
    $(".toggle").css("display", "flex");
    $(this).css("display", "none");
});

