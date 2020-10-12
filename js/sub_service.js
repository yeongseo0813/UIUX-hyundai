$(document).ready(function () {

    $('#scene06 .bluelink .bl01')
        .mouseenter(function (){
            $('#scene06 .bluelink .bl01_on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene06 .bluelink .bl01_on').fadeOut();
        })

    $('#scene06 .bluelink .bl03')
        .mouseenter(function (){
            $('#scene06 .bluelink .bl03_on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene06 .bluelink .bl03_on').fadeOut();
        })

    $('#scene06 .bluelink .bl04')
        .mouseenter(function (){
            $('#scene06 .bluelink .bl04_on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene06 .bluelink .bl04_on').fadeOut();
        })

    $('#scene06 .bluelink .bl05')
        .mouseenter(function (){
            $('#scene06 .bluelink .bl05_on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene06 .bluelink .bl05_on').fadeOut();
        })

    $('#scene06 .bluelink .bl06')
        .mouseenter(function (){
            $('#scene06 .bluelink .bl06_on').fadeIn();
        })
        .mouseleave(function (){
            $('#scene06 .bluelink .bl06_on').fadeOut();
        })


    $("#digital").slick({
        slide: 'div',
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#digital .slick-prev'), //이전 화살표
        nextArrow: $('#digital .slick-next'), //다음 화살표
        autoplay: false, //자동넘김
        autoplaySpeed: 4500, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable: true,
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