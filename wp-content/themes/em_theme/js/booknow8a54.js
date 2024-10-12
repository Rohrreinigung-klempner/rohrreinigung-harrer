/*----------------------------------------------------
/* Schedule Engine - Book Now - Safer way to add to menu
/*---------------------------------------------------*/
jQuery(document).ready(function($) {
    $('.book-now-mobile').on('mousedown touchstart', function(e) {
        e.preventDefault();
        ScheduleEngine.show();
    });
});

