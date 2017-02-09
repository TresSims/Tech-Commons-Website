$(document).ready(function() {

  $("#filter-by").html("<h4>All Technology</h4><hr />");



    var colapse1Size = $("#colapse-1-body").height();
    $("#colapse-1-head").click(function() {
        if ($("#colapse-1-body").css("height") != "0px") {
            $("#colapse-1-body").animate({
                height: "0px"
            }, 100);
            $("#colapse-1-icon").html("<span class='glyphicon glyphicon-minus-sign'></span>");
        } else {
            $("#colapse-1-body").animate({
                height: colapse1Size + "px"
            }, 100);
            $("#colapse-1-icon").html("<span class='glyphicon glyphicon-plus-sign'></span>");
        }

    });

    var colapse2Size = $("#colapse-2-body").height();
    $("#colapse-2-head").click(function() {
        if ($("#colapse-2-body").css("height") != "0px") {
            $("#colapse-2-body").animate({
                height: "0px"
            }, 100);
            $("#colapse-2-icon").html("<span class='glyphicon glyphicon-minus-sign'></span>");
        } else {
            $("#colapse-2-body").animate({
                height: colapse2Size + "px"
            }, 100);
            $("#colapse-2-icon").html("<span class='glyphicon glyphicon-plus-sign'></span>");
        }

    });

    var colapse3Size = $("#colapse-3-body").height();
    $("#colapse-3-head").click(function() {
        if ($("#colapse-3-body").css("height") != "0px") {
            $("#colapse-3-body").animate({
                height: "0px"
            }, 100);
            $("#colapse-3-icon").html("<span class='glyphicon glyphicon-minus-sign'></span>");
        } else {
            $("#colapse-3-body").animate({
                height: colapse3Size + "px"
            }, 100);
            $("#colapse-3-icon").html("<span class='glyphicon glyphicon-plus-sign'></span>");
        }

    });


    var active = "grid";
    $("#grid").click(function() {
        console.log("grid");
        if (active != "grid") {
            active = "grid";
            $("#grid").removeClass("btn-default");
            $("#grid").addClass("btn-primary");
            $("#list").removeClass("btn-primary");
            $("#list").addClass("btn-default");

            $("#grid-content").css("display", "block");
            $("#list-content").css("display", "none");
        }
    });
    $("#list").click(function() {
        console.log("list");
        if (active != "list") {
            active = "list";
            $("#list").removeClass("btn-default");
            $("#list").addClass("btn-primary");
            $("#grid").removeClass("btn-primary");
            $("#grid").addClass("btn-default");

            $("#list-content").css("display", "block");
            $("#grid-content").css("display", "none");
        }
    });
    $("#list-content").css("display", "none");


    function filterBy(type) {
        $(".filter").each(function() {
            $(this).addClass("invisible");
        });
        if (type == "") {
            $(".filter").each(function() {
                $(this).removeClass("invisible");
            });
        } else {
            $(type).each(function() {
                $(this).removeClass("invisible");
            });
        }
        anyResults();
    }

    function removeFilter() {
        $(".choice").each(function() {
            $(this).removeClass("filtering-by");
        });
    }

    function anyResults() {
        $("#no-results").addClass("invisible");
        var results = false;
        $(".filter").each(function() {
            var invis = $(this).hasClass("invisible");
            if (!invis) {
                results = true;
            }
        });
        if (!results) {
            console.log("nothing here");
            $("#no-results").removeClass("invisible");
        }
    }

    $("#tc2").click(function() {
        $("#filter-by").html("<h4>Tech Commons II</h4><hr />");
        filterBy('.tc2');
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#cb1").click(function() {
        $("#filter-by").html("<h4>Classroom Lab</h4><hr />");
        filterBy('.cb1');
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#1d").click(function() {
        $("#filter-by").html("<h4>One Day Rental</h4><hr />");
        filterBy(".1d");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#3d").click(function() {
        $("#filter-by").html("<h4>Three Day Rentals</h4><hr />");
        filterBy(".3d");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#7d").click(function() {
        $("#filter-by").html("<h4>One Week Rentals</h4><hr />");
        filterBy(".7d");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#cam").click(function() {
        $("#filter-by").html("<h4>Cameras</h4><hr />");
        filterBy(".cam");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#tab").click(function() {
        $("#filter-by").html("<h4>Tablets</h4><hr />");
        filterBy(".tab");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#chg").click(function() {
        $("#filter-by").html("<h4>Chargers</h4><hr />");
        filterBy(".chg");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#clo").click(function() {
        $("#filter-by").html("<h4>Until Close Rentals</h4><hr />");
        filterBy(".clo");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#lap").click(function() {
        $("#filter-by").html("<h4>Laptops</h4><hr />");
        filterBy(".lap");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#all").click(function() {
        $("#filter-by").html("<h4>All Technology</h4><hr />");
        filterBy("");
        removeFilter();
    });

    $("#acc").click(function() {
        $("#filter-by").html("<h4>Computer Acessories</h4><hr />");
        filterBy(".acc");
        removeFilter();
        $(this).addClass("filtering-by");
    });
    $("#cab").click(function() {
        $("#filter-by").html("<h4>Computer Cables</h4><hr />");
        filterBy(".cab");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    //go to product page
    $(".dellOld").click(function() {
        window.location.href = "productPages\\dellOld.html";
    });

    $(".hdmi").click(function() {
        window.location.href = "productPages\\hdmi.html";
    });

    $(".keyboard").click(function() {
        window.location.href = "productPages\\keyboard.html";
    });

    $(".markers").click(function() {
        window.location.href = "productPages\\markers.html";
    });



    $(".vga").click(function() {
      window.location.href = "productPages\\vga.html";
    });


    $(".mac").click(function() {
        window.location.href = "productPages\\mac.html";
    });

    $(".dellNew").click(function() {
        window.location.href = "productPages\\dellNew.html";
    });

    $(".hero").click(function() {
        window.location.href = "productPages\\hero.html";
    });

    $(".surface").click(function() {
        window.location.href = "productPages\\surface.html";
    });

    $(".appleNew").click(function() {
        window.location.href = "productPages\\appleNew.html";
    });

    $(".appleOld").click(function() {
        window.location.href = "productPages\\appleOld.html";
    });

    $(".andchg").click(function() {
        window.location.href = "productPages\\andchg.html";
    });

    $(".aplchg").click(function() {
        window.location.href = "productPages\\aplchg.html";
    });

    $(".mcbchg").click(function() {
        window.location.href = "productPages\\mcbchg.html";
    });
    $(".pcchg").click(function() {
        window.location.href = "productPages\\pcchg.html";
    });
    $(".cintiq").click(function() {
      window.location.href = "productPages\\cintiq.html";
    });


    $(".dvi").click(function() {
        window.location.href = "productPages\\dvi.html";
    });

    $(".keyboard").click(function() {
        window.location.href = "productPages\\keyboard.html";
    });
});
