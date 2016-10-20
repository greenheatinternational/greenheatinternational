$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['Video', 'About', 'Explainer', 'Web', 'Info'],
        navigation: true,
        navigationPosition: 'right',
        autoScrolling: true,
        scrollingSpeed: 1000,
        paddingTop: '8vh',
        paddingBottom: '0px',
        responsiveWidth: 600,
        verticalCentered: false,
        fitToSection: false
    });

});

$(document).ready(function() {
    $(".cont-hide").click(function(){
        $(".cont-show").slideToggle(500);
    });

});