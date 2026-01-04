$(document).ready(function () {

    // Card click redirection
    $(".clickable").click(function () {
        const link = $(this).data("link");
        window.location.href = link;
    });

    // Hover animation
    $(".card").hover(
        function () {
            $(this).css("transform", "scale(1.05)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );

});
