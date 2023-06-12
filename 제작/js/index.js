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
        slidesPerView : 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btnnext1",
            prevEl: ".btnprev1",
        },
        loop:true
    })

    let slider3promote = new Swiper(".sliderPromote",{
        slidesPerView : 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".btnnext1",
            prevEl: ".btnprev1",
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






