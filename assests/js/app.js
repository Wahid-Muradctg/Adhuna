$(document).ready(function () {
    


    $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    });

     $(".dropdown-item").on("click", function () {
        $(".navbar-nav .nav-link, .dropdown-item").removeClass("active");        
        $(this).addClass("active");       
        $(this).closest(".dropdown").find(".nav-link").addClass("active");
    });
});