$(document).ready(function(){

    //header
    $(window).scroll(function(){
        let winTop = $(window).scrollTop() 
        if(winTop>=1){
            $("header").addClass("scDown")
        }else{
            $("header").removeClass("scDown")
        }
    })

        // btnTop을 클릭하면 스크롤바가 가장 최상단으로 부드럽게 이동될 수 있도록
    $(".btnTop").click(function(){
        $("html,body").stop().animate({scrollTop:0},1000)
        moveScroll(0,2000)
    })

    //main
    //goods
    $(".tabMenu>li>h2").click(function(e){
        e.preventDefault()
        $(".tabMenu>li>h2").removeClass("on")
        $(this).addClass("on")
        
    })
    
    $(".tabMenu>li").click(function(e){
        e.preventDefault()
        let idx = $(this).index()
        $(".sliderBest>div").removeClass("on")
        $(".sliderBest>div").eq(idx).addClass("on")
    });

    $(".btnPrev,.btnNext").click(function(e){
        e.preventDefault()
    })

    let slider1best = new Swiper(".best",{
        slidesPerView : 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btnnext1",
            prevEl: ".btnprev1",
        },
        loop:true
    })

    let slider2new = new Swiper(".sliderNew",{
        slidesPerView : 2.5,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btnnext2",
            prevEl: ".btnprev2",
        },
        loop:true
    })

    let slider3promote = new Swiper(".sliderPromote",{
        slidesPerView : "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".btnnext3",
            prevEl: ".btnprev3",
        },
        loop:true
    })


    //notice    
    $(".scTop>li").each(function(){
        let result = Math.round(Math.random())
            $(this).addClass("scTop")
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.9
        
        $(".scTop").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
      //present  
      $(".mtDown>li").each(function(){
        let result = Math.round(Math.random())
            $(this).addClass("mtDown")
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.9
        
        $(".mtDown").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
})






