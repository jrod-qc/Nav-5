// These are the Responsive functions

$(".burger-nav").on("click", function() {
    $(".responsive-nav").css("right", "0");
});

$(".responsive-nav-exit-btn").on("click", function() {
    $(".responsive-nav").css("right", "-230px");
});