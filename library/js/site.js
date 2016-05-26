$(document).ready(function(){
    $('.foreground img').css({

        //'width': '120%',
        'opacity': 0,
        'margin-top': '-120px'

    });
    setInterval(function(){
        $('.location-rsvp a').addClass('blink');
        setTimeout(function(){
           $('.location-rsvp a').removeClass('blink');
        }, 1000);
    }, 2000);
    setTimeout(function () {

        setTimeout(function () {
            $('.foreground img').animate({
                'opacity': 1,


                'margin-top': '20px'
            }, 700);

        }, 300);
        setTimeout(function () {
            $('.foreground img').animate({
                'opacity': 1,


                'margin-top': '0px'
            }, 1000);

        }, 600);

    }, 100);
    setTimeout(function () {
        $('.layer').animate({
            height: '72px'
        }, 2000);
    }, 1000);
    setTimeout(function () {
        $('.layer').animate({
            height: '70px'
        }, 2000);
    }, 2000);
    setTimeout(function () {
        $('.layer').animate({
            height: '68px'
        }, 2000);
    }, 3000);
    setInterval(function () {
        setTimeout(function () {
            $('.layer').animate({
                height: '72px'
            }, 2000);
        }, 1000);
        setTimeout(function () {
            $('.layer').animate({
                height: '70px'
            }, 2000);
        }, 2000);
        setTimeout(function () {
            $('.layer').animate({
                height: '68px'
            }, 2000);
        }, 3000);
    }, 6000);
    setInterval(function(){
        $('.location-block.set-1 .location-content').animate({
            'margin-top': '10px',
            'margin-bottom' : '20px'
        }, 1000);
        setTimeout(function(){
            $('.location-block.set-1 .location-content').animate({
                'margin-top': '20px',
                'margin-bottom' : '10px'
            }, 1000);
        }, 3000);
        $('.location-block.set-1 > h1').addClass('white');
        setTimeout(function(){
            $('.location-block.set-1 > h1').removeClass('white');
        }, 3000);
    }, 5000);
    setInterval(function(){
        $('.location-block.set-2 .location-content').animate({
            'margin-top': '10px',
            'margin-bottom' : '20px'
        }, 1000);
        setTimeout(function(){
            $('.location-block.set-2 .location-content').animate({
                'margin-top': '20px',
                'margin-bottom' : '10px'
            }, 1000);
        }, 3000);
        $('.location-block.set-2 > h1').addClass('white');
        setTimeout(function(){
            $('.location-block.set-2 > h1').removeClass('white');
        }, 3000);
    }, 3000);
    setInterval(function(){
        $('.location-block.set-3 .location-content').animate({
            'margin-top': '10px',
            'margin-bottom' : '20px'
        }, 1000);
        setTimeout(function(){
            $('.location-block.set-3 .location-content').animate({
                'margin-top': '20px',
                'margin-bottom' : '10px'
            }, 1000);
        }, 3000);
        $('.location-block.set-3 > h1').addClass('white');
        setTimeout(function(){
            $('.location-block.set-3 > h1').removeClass('white');
        }, 3000);
    }, 7000);
    $('.photo-sections a').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        var that = $(this);

        if (isInView) {
            // element is now visible in the viewport
            if (visiblePartY == 'top') {
                // top part of element is visible
            } else if (visiblePartY == 'bottom') {
                // bottom part of element is visible
                that.removeClass('active');
            } else {
                // whole part of element is visible
                that.addClass('active');
            }
        } else {
            // element has gone out of viewport
            that.removeClass('active');
        }
    });
});