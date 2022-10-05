$(function(){


    //header 스크롤 이벤트
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
        if (curr > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    })
    $(window).trigger('scroll');//스크롤 이벤트 강제 실행


    //aside 영역
    $('.header .btn-open').click(function(e){
        e.preventDefault();

        $('.header .side-wrap').addClass('active');
        $('.dimmed').show();
        // $('body').css('overflow','hidden')
    })

    $('.header .btn-close, .dimmed').click(function(e){
        e.preventDefault();
        $('.header .side-wrap').removeClass('active');
        $('.dimmed').hide();
        // $('body').css('overflow','visible')
    })



})