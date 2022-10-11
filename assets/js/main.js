$(function(){

    //메인 비주얼 배너 슬라이드 영역
    var swiper = new Swiper('.sc-main .banner', {
        effect: 'fade',
        loop: true,
        fadeEffect: {
          crossFade: true
        },
        pagination: {
            el: ".fraction",
            type: "custom",
            renderCustom: function(swiper, current, total){
                return `<span>${current}</span>/<span>${total}</span>`
            }
          },
          navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
      });


    /**
     * 'ai 기술' 영역 tab 기능 구현
     *
     * @i = 인덱스 
     * @w = move의 가로 값
     * 
     * @version 1.0.0
     * @since 2022-08-31
     * @author 정우진
     */

    //탭영역 nav focus 구현
    $('.skill-item').click(function(e){
        e.preventDefault();

        i = $(this).index();
        // console.log(i);
        w = $('.move').width();
        // console.log(w);
        $('.move').css('left',w*i)
        

        if ($('.move').width() >= 0) {
            $(this).addClass('active').siblings().removeClass('active');
        }
        
    })

    const tabList = document.querySelectorAll('.tab-nav .skill-item');
    const contents = document.querySelectorAll('.tab-contents .cont')
    let activeCont = ''; //현재 활성화 된 컨텐츠

    for(var l = 0; l < tabList.length; l++){
        tabList[l].querySelector('.skill-item a').addEventListener('click',function(e){
            e.preventDefault();
            for(var j = 0; j < tabList.length; j++){
                //나머지 버튼 클래스 제거
                tabList[j].classList.remove('active');

                //나머지 컨텐츠 display:none 처리
                contents[j].style.display = 'none';
            }

            //버튼 관련 이벤트
            // this.parentNode.classList.add('active');

            //버튼 클릭시 컨텐츠 전환
            activeCont = this.getAttribute('href');
            document.querySelector(activeCont).style.display = 'block';
        });
    }
    

    //gsap 슬라이드 영역
    ScrollTrigger.matchMedia({

        //large
        "(min-width:751px)": function() {
            gsap.to('.sc-experience .group-list',{
                scrollTrigger:{
                    trigger: ".group-list", //기준
                    start: "top 100px", //기준 시작점, 윈도우 시작점
                    end: "+=500%", //기준 끝점, 윈도우 끝점 => 트리거의 5배의 스크롤 값
                    // markers: true,
                    scrub: 1,
                    pin: true
                },
                xPercent: -75
            })
        }
    });

    //페이드업 영역

    //단순 페이드업
    $('[data-fade').each(function(i,l){
        gsap.from(l,{
            scrollTrigger:{
                trigger:l,
                start:"top 100%",
                end:"bottom 100%",
                // markers:true,
                // scrub:1
            },
            opacity:0,
            yPercent:20,
        })
    })

    //순차적 페이드업
    $('[data-child]').each(function(i,l){
        child = $(this).find('> *')
        gsap.from(child,{
            scrollTrigger:{
                trigger:l, //[기준]
                start:"top 90%",  //[기준시작점][윈도우시작점]   0% -> top or 100% -> bottom
                end:"bottom 90%", //[기준끝점][윈도우끝점]
                // markers:true,
                // scrub:1
            },
            opacity:0,
            yPercent:20,
            stagger:0.1
        })
      })

    $('.function-list').each(function(i,l){
        gsap.from(l,{
            scrollTrigger:{
                trigger:l,
                start:"top 100%",
                end:"bottom 100%",
                // markers:true,
                // scrub:1
            },
            opacity:0,
            yPercent:20,
        })
    })

    //배너 패널 영역

    gsap.to('.panel',{
        scrollTrigger:{
            trigger:".panel-banner",
            start: "top 100%",
            end: "bottom 50%",
            scrub:1
        },
        width:0
    })


});
