$(document).ready(function() {
    $(".questions__block").hide();

    $(".questions__btn").click(function() {
        $(this).toggleClass('open');
        $(this).next(".questions__block").slideToggle(300);
    });
});