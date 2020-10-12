/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */





$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();


    $('#section02 .service .point')
        .mouseenter(function (){
            $('#section02 .service .point .typo_box').addClass('on');
        })
        .mouseleave(function (){
            $('#section02 .service .point .typo_box').removeClass('on');
        })

    $('#section02 .service .guide')
        .mouseenter(function (){
            $('#section02 .service .guide .typo_box').addClass('on');
        })
        .mouseleave(function (){
            $('#section02 .service .guide .typo_box').removeClass('on');
        })

    $('#section02 .service .car_service')
        .mouseenter(function (){
            $('#section02 .service .car_service .typo_box').addClass('on');
        })
        .mouseleave(function (){
            $('#section02 .service .car_service .typo_box').removeClass('on');
        })

    $('#section02 .service .bluelink')
        .mouseenter(function (){
            $('#section02 .service .bluelink .typo_box').addClass('on');
        })
        .mouseleave(function (){
            $('#section02 .service .bluelink .typo_box').removeClass('on');
        })

    $('#section02 .viewmore_btn > div')
        .mouseenter(function (){
            $('#section02 .viewmore_btn > div > span:nth-child(1),' +
                '#section02 .viewmore_btn > div > span:nth-child(2),' +
                '#section02 .viewmore_btn > div > span:nth-child(4)').fadeIn();
            $('#section02 .viewmore_btn > div').addClass('on');
        })
        .mouseleave(function (){
            $('#section02 .viewmore_btn > div > span:nth-child(1),' +
                '#section02 .viewmore_btn > div > span:nth-child(2),' +
                '#section02 .viewmore_btn > div > span:nth-child(4)').fadeOut(1);
            $('#section02 .viewmore_btn > div').removeClass('on');
        })

    $('.form_box01 .inquiry').click(function (){
        $('.form_box01').fadeOut(1);
        $('.form_box02').fadeIn();
    })
    $('.form_box02 .request').click(function (){
        $('.form_box02').fadeOut(1);
        $('.form_box01').fadeIn();
    })

    $('#section06 .brand_box .campaigns')
        .mouseenter(function (){
            $('#section06 .brand_box .campaigns_on').fadeIn();
        })
        .mouseleave(function (){
            $('#section06 .brand_box .campaigns_on').fadeOut();
        })

    $('#section06 .brand_box .tech')
        .mouseenter(function (){
            $('#section06 .brand_box .tech_on').fadeIn();
        })
        .mouseleave(function (){
            $('#section06 .brand_box .tech_on').fadeOut();
        })

    $('#section06 .brand_box .eco')
        .mouseenter(function (){
            $('#section06 .brand_box .eco_on').fadeIn();
        })
        .mouseleave(function (){
            $('#section06 .brand_box .eco_on').fadeOut();
        })

    $('#section06 .brand_box .design')
        .mouseenter(function (){
            $('#section06 .brand_box .design_on').fadeIn();
        })
        .mouseleave(function (){
            $('#section06 .brand_box .design_on').fadeOut();
        })

    $('#section06 .brand_box .collection')
        .mouseenter(function (){
            $('#section06 .brand_box .collection_on').fadeIn();
        })
        .mouseleave(function (){
            $('#section06 .brand_box .collection_on').fadeOut();
        })

    $('#section06 .viewmore_btn > div')
        .mouseenter(function (){
            $('#section06 .viewmore_btn > div > span:nth-child(1),' +
                '#section06 .viewmore_btn > div > span:nth-child(2),' +
                '#section06 .viewmore_btn > div > span:nth-child(4)').fadeIn();
            $('#section06 .viewmore_btn > div').addClass('on');
        })
        .mouseleave(function (){
            $('#section06 .viewmore_btn > div > span:nth-child(1),' +
                '#section06 .viewmore_btn > div > span:nth-child(2),' +
                '#section06 .viewmore_btn > div > span:nth-child(4)').fadeOut(1);
            $('#section06 .viewmore_btn > div').removeClass('on');
        })


    $(".container").niceScroll({
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


    $("#center_slider").slick({
        slide: 'div',
        dots: false, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#center_slider .slick-prevArrow'), //이전 화살표
        nextArrow: $('#center_slider .slick-nextArrow'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });

    $("#event_slides").slick({
        dots: true, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover: true, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
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

    $('#event_slides')
        .on('init', function (event, slick) {
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('#section03 .event_slide_wrap').removeClass('on');
            // starList()
        })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            starList_4()
        });

    function list01_4() {
        $('#section03 .s1').addClass('on');
    }

    function list02_4() {
        $('#section03 .s2').addClass('on');
    }

    function list03_4() {
        $('#section03 .s3').addClass('on');
    }

    function list04_4() {
        $('#section03 .s4').addClass('on');
    }

    function starList_4() {
        if ($('#slick-slide10').hasClass('slick-active')) {
            list01_4();
        }
        if ($('#slick-slide11').hasClass('slick-active')) {
            list02_4();
        }
        if ($('#slick-slide12').hasClass('slick-active')) {
            list03_4();
        }
        if ($('#slick-slide13').hasClass('slick-active')) {
            list04_4();
        }

    }



    $(function () {

        var menu = [];
        jQuery('.swiper-slide').each( function(index){
            menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
        });
        var interleaveOffset = 0.5;
        var swiperOptions = {
            loop: true,
            speed: 1000,
            parallax: true,
            autoplay: {
                delay: 24000,
                disableOnInteraction: false,
            },
            watchSlidesProgress: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            on: {
                progress: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-inner").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                    }
                },

                touchStart: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },

                setTransition: function(speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-inner").style.transition =
                            speed + "ms";
                    }
                }
            }
        };

        var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
        var sliderBgSetting = $(".slide-bg-image");
        sliderBgSetting.each(function(indx){
            if ($(this).attr("data-background")){
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });


    });
// HERO SLIDER

    // =========================
    // on event section      ===
    //==========================

    $("#group").on("mousewheel", function (event, delta) {
        if (delta > 0) {

        } else if (delta < 0) {
            $('#intro').addClass('on');
            $('#container').addClass('on');
            // $('#intro,#container').addClass('on');
        }
    });


    $("#container .main").on("mousewheel", function (event, delta) {
        if (delta > 0) {

            if ( $('#key').hasClass('in')) {
                $('#intro').removeClass('on');
                // $('#intro,#container').removeClass('on');
            }

        } else if (delta < 0) {

        }
    });










//==============================================================
});


$(function () {

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


        if ( scrollTop === 0 ) {
            $('#key').delay(700).queueAddClass('in');
        } else {
            $('#key').removeClass('in');
            $('#menu01').fadeOut(1);
            $('#menu02').fadeIn(1);
        }

        if ( scrollTop >= 370 ) {
            $('#section02 .title').addClass('on');
        } else {

        }

        if ( scrollTop >= 510 ) {
            $('#section02 .service').addClass('on');
        } else {

        }


        if ( scrollTop >= 1006 ) {
            $('#section03 .left, #section03 .left .typo, #event').addClass('on');
        } else {

        }

        if ( scrollTop >= 1026 ) {

        } else {
            $('#slick-slide10').trigger('click');
        }

        if ( scrollTop >= 2200 ) {
            $('#section04 .bg01, #section04 .bg02').addClass('on');
        } else {

        }

        
        if ( scrollTop >= 3297 ) {
            $('#section05 .dark').addClass('off');
        } else {
            $('#section05 .dark').removeClass('off');
        }

        if ( scrollTop >= 3390 ) {
            $('#section06 .title').addClass('on');
        } else {

        }

        if ( scrollTop >= 3700 ) {
            $('#section06 .brand_box').addClass('on');
        } else {

        }

        if ( scrollTop >= 4900 ) {
            $('#section07 .news_box').addClass('on');
        } else {

        }



        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












