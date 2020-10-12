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

    $('#scene01 .category .ca03')
        .mouseenter(function (){
            $('#scene01 .category .ca03').addClass('on');
        })
        .mouseleave(function (){
            $('#scene01 .category .ca03').removeClass('on');
        })

    $('#scene01 .category .ca04')
        .mouseenter(function (){
            $('#scene01 .category .ca04').addClass('on');
        })
        .mouseleave(function (){
            $('#scene01 .category .ca04').removeClass('on');
        })





    $('#scene02 .avante_color .color01')
        .mouseenter(function (){
            $('#scene02 .avante_color .color01').addClass('on');
        })

    $('#scene02 .avante_color .color02')
        .mouseenter(function (){
            $('#scene02 .avante_color .color02').addClass('on');
        })
        .mouseleave(function (){
            $('#scene02 .avante_color .color02').removeClass('on');
        })

    $('#scene02 .avante_color .color03')
        .mouseenter(function (){
            $('#scene02 .avante_color .color03').addClass('on');
        })
        .mouseleave(function (){
            $('#scene02 .avante_color .color03').removeClass('on');
        })

    $('#scene02 .avante_color .color04')
        .mouseenter(function (){
            $('#scene02 .avante_color .color04').addClass('on');
        })
        .mouseleave(function (){
            $('#scene02 .avante_color .color04').removeClass('on');
        })




    $('#scene02 .thumbnail .side')
        .mouseenter(function (){
            $('#scene02 .thumbnail .side .on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene02 .thumbnail .side .on').fadeOut();
        })
        .click(function (){
            $('#scene02 .avante_main .red_main .front_main,' +
                '#scene02 .avante_main .red_main .back_main').fadeOut(1);
            $('#scene02 .avante_main .red_main .side_main').fadeIn();
        })

    $('#scene02 .thumbnail .front')
        .mouseenter(function (){
            $('#scene02 .thumbnail .front .on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene02 .thumbnail .front .on').fadeOut();
        })
        .click(function (){
            $('#scene02 .avante_main .red_main .side_main,' +
                '#scene02 .avante_main .red_main .back_main').fadeOut(1);
            $('#scene02 .avante_main .red_main .front_main').fadeIn();
        })

    $('#scene02 .thumbnail .back')
        .mouseenter(function (){
            $('#scene02 .thumbnail .back .on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene02 .thumbnail .back .on').fadeOut();
        })
        .click(function (){
            $('#scene02 .avante_main .red_main .front_main,' +
                '#scene02 .avante_main .red_main .side_main').fadeOut(1);
            $('#scene02 .avante_main .red_main .back_main').fadeIn();
        })



    $("#safety").slick({
        slide: 'div',
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('#safety .slick-nextArrow'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 7000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });





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
            $('#scene02 .avante_color .color01').addClass('on');
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