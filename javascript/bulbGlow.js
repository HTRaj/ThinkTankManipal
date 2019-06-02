$(document).ready(function() {

    function myRepeat() {
        $('#layer6').delay(1000).fadeOut(2000).delay(1000).fadeIn(3000);
        $('#layer7').delay(1000).fadeOut(2000).delay(1000).fadeIn(3000);
    }
    setInterval(myRepeat, 500);
});