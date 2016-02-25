/*FULL PAGE JS*/
$(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'museum', 'application' ,'contact'],
    });

    $('.carousel').slick({
        infinite: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        draggable: false,
        arrows: false
    });
});