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

    $('#scene01 .category .ca05')
        .mouseenter(function (){
            $('#scene01 .category .ca05').addClass('on');
        })
        .mouseleave(function (){
            $('#scene01 .category .ca05').removeClass('on');
        })

    $('#scene04 .viewmore_btn > div')
        .mouseenter(function (){
            $('#scene04 .viewmore_btn > div > span:nth-child(1),' +
                '#scene04 .viewmore_btn > div > span:nth-child(2),' +
                '#scene04 .viewmore_btn > div > span:nth-child(4)').fadeIn();
            $('#scene04 .viewmore_btn > div').addClass('on');
        })
        .mouseleave(function (){
            $('#scene04 .viewmore_btn > div > span:nth-child(1),' +
                '#scene04 .viewmore_btn > div > span:nth-child(2),' +
                '#scene04 .viewmore_btn > div > span:nth-child(4)').fadeOut(1);
            $('#scene04 .viewmore_btn > div').removeClass('on');
        })

    $('#scene06 .viewmore_btn > div')
        .mouseenter(function (){
            $('#scene06 .viewmore_btn > div > span:nth-child(1),' +
                '#scene06 .viewmore_btn > div > span:nth-child(2),' +
                '#scene06 .viewmore_btn > div > span:nth-child(4)').fadeIn();
            $('#scene06 .viewmore_btn > div').addClass('on');
        })
        .mouseleave(function (){
            $('#scene06 .viewmore_btn > div > span:nth-child(1),' +
                '#scene06 .viewmore_btn > div > span:nth-child(2),' +
                '#scene06 .viewmore_btn > div > span:nth-child(4)').fadeOut(1);
            $('#scene06 .viewmore_btn > div').removeClass('on');
        })


    $("#campaigns").slick({
        slide: 'div',
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('#campaigns .slick-nextArrow'), //다음 화살표
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