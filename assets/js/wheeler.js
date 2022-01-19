$(document).ready(function(){
    $('.character-container').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow: $('.next'),
        prevArrow: $('.prev')
    })
})