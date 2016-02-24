$(function () {
    $(".box").bvs({
        onStart: function () {
            console.log("box animation started");
        },
        onComplete: function () {
            console.log("box animation completed");
        },
        onHoverOut: function () {
            console.log("box animation hover out");
        }
    });
});

/*FULL PAGE JS*/
$(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'museum', 'application', 'contact']
    });
});