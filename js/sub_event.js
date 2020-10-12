$(document).ready(function () {


    $('#scene01 .category .ca01')
        .mouseenter(function (){
            $('#scene01 .category .ca01').addClass('on');
        })
    // .mouseleave(function (){
    //     $('#scene01 .category .ca01').removeClass('on');
    // })

    $('#scene01 .category .ca02')
        .mouseenter(function (){
            $('#scene01 .category .ca02').addClass('on');
        })
        .mouseleave(function (){
            $('#scene01 .category .ca02').removeClass('on');
        })


    /*--------------------------------------------------------------
        #scene01 category end
    --------------------------------------------------------------*/

    $('#scene03 .event01 .e1')
        .mouseenter(function (){
            $('#scene03 .event01 .e1 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event01 .e1 .imgbox > img').removeClass('on');
        })

    $('#scene03 .event01 .e2')
        .mouseenter(function (){
            $('#scene03 .event01 .e2 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event01 .e2 .imgbox > img').removeClass('on');
        })

    $('#scene03 .event01 .e3')
        .mouseenter(function (){
            $('#scene03 .event01 .e3 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event01 .e3 .imgbox > img').removeClass('on');
        })

    $('#scene03 .event02 .e4')
        .mouseenter(function (){
            $('#scene03 .event02 .e4 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event02 .e4 .imgbox > img').removeClass('on');
        })

    $('#scene03 .event02 .e5')
        .mouseenter(function (){
            $('#scene03 .event02 .e5 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event02 .e5 .imgbox > img').removeClass('on');
        })

    $('#scene03 .event02 .e5')
        .mouseenter(function (){
            $('#scene03 .event02 .e5 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event02 .e5 .imgbox > img').removeClass('on');
        })

    $('#scene03 .event02 .e6')
        .mouseenter(function (){
            $('#scene03 .event02 .e6 .imgbox > img').addClass('on');
        })
        .mouseleave(function (){
            $('#scene03 .event02 .e6 .imgbox > img').removeClass('on');
        })

    /*--------------------------------------------------------------
        #scene03 event end
    --------------------------------------------------------------*/


    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });


});





$(function () {
    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();

        $(".posNum").text(a);

        if (a >= 0) {
            $('#scene01 .category .ca01').addClass('on');
        } else {

        }

        if (a >= 744) {
            $('#menu01').fadeOut(1);
            $('#menu02').fadeIn(1);
        } else {
            $('#menu01').fadeIn(1);
            $('#menu02').fadeOut(1);
        }




        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});