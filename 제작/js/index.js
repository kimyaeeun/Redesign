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
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        if(winst>=$(".notice").offset().top){
            $(".notice").addClass("on")
        }else{
            $(".notice").removeClass("on")
        }
    })

    $(".notice>section").on("wheel DOMMouseScroll", function (event) {
      let E = event.originalEvent
      let delta = 0;
      if (E.detail) {
        delta = E.detail * -40
      } else {
        delta = E.wheelDelta
      }
  
      if (delta < 0) {
        if ($(this).next().length != 0) {
          let posTop = $(this).next().offset().top
          $("html,body").stop().animate({scrollTop: posTop}, 1000)
        }
      } else {

        if ($(this).prev().length != 0) {
          let posTop = $(this).prev().offset().top
          $("html,body").stop().animate({scrollTop: posTop}, 1000)
        }
      }
      return false
    })


    //only
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        if(winst>=$(".present").offset().top){
            $(".present").addClass("on")
        }else{
            $(".present").removeClass("on")
        }
    })

    $(".present").on("wheel DOMMouseScroll", function (event) {
      let E = event.originalEvent
      let delta = 0;
      if (E.detail) {
        delta = E.detail * -40
      } else {
        delta = E.wheelDelta
      }
  
      if (delta < 0) {
        if ($(this).next().length != 0) {
          let posTop = $(this).next().offset().top
          $("html,body").stop().animate({scrollTop: posTop}, 1000)
        }
      } else {

        if ($(this).prev().length != 0) {
          let posTop = $(this).prev().offset().top
          $("html,body").stop().animate({scrollTop: posTop}, 1000)
        }
      }
      return false
    })
  })





