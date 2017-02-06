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

    // Add smooth scrolling to all links
  //  var a = document.getElementById("anchor1");
    $("#scroll, #scroll2, #scroll3").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });
        } // End if
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
