$(document).ready(function() {
    $(".button-collapse").sideNav();
        
    $(document).on('click', '.normal-links', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
