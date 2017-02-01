$(document).ready(function() {
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
        console.log("list")
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
        filterBy('.tc2');
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#cb1").click(function() {
        filterBy('.cb1');
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#1d").click(function() {
        filterBy(".1d");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#3d").click(function() {
        filterBy(".3d");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#7d").click(function() {
        filterBy(".7d");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#cam").click(function() {
        filterBy(".cam");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#tab").click(function() {
        filterBy(".tab");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#chg").click(function() {
        filterBy(".chg");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#clo").click(function() {
        filterBy(".clo");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#lap").click(function() {
        filterBy(".lap");
        removeFilter();
        $(this).addClass("filtering-by");
    });

    $("#all").click(function() {
        filterBy("");
        removeFilter();
    });

    $("#acc").click(function() {
        filterBy(".acc");
        removeFilter();
    });
    $("#cab").click(function() {
        filterBy(".cab");
        removeFilter();
    });

    //go to product page
    $(".dellOld").click(function() {
        window.location.href = "productPages\\dellOld.html";
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
    $(".markers").click(function() {
        window.location.href = "productPages\\markers.html";
    });
    $(".vga").click(function() {
        window.location.href = "productPages\\vga.html";
    });
    $(".dvi").click(function() {
        window.location.href = "productPages\\dvi.html";
    });
    $(".hdmi").click(function() {
        window.location.href = "productPages\\hdmi.html";
    });
    $(".usb").click(function() {
        window.location.href = "productPages\\usb.html";
    });
    $(".usb-a").click(function() {
        window.location.href = "productPages\\usbA.html";
    });
    $(".usb-c").click(function() {
        window.location.href = "productPages\\usbC.html";
    });
    $(".keyboard").click(function() {
        window.location.href = "productPages\\keyboard.html";
    });
});
