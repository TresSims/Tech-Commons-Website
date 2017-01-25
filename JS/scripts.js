var hiring = false;



$(document).ready(function() {

  //hiring code
    if (!hiring) {
        document.getElementById("hiring").style.display = "none";
    }

    //nav dropdown code
    $('.dropdown-submenu a.test').mouseenter( function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });


    //return to top code
    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });


    //enable tooltips
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });



});

//scroll to top code
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});


function urlExists(url, callback){
  $.ajax({
    type: 'HEAD',
    url: url,
    success: function(){
      callback(true);
    },
    error: function() {
      callback(false);
    }
  });
}
