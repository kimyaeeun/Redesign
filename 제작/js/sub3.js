$(document).ready(function(){

    //header
    $(window).scroll(function(){
        let winTop = $(window).scrollTop() 
        if(winTop>=1){
            $("header").addClass("hdDown")
        }else{
            $("header").removeClass("hdDown")
        }
    })

    $(".btnTop").click(function(){
        $("html,body").stop().animate({scrollTop:0},1000)
        moveScroll(0,2000)
    })

    ////////////////// 1
    //Top
    $(".circle1").mouseover(function(){
        $(".mainTxt1").addClass("show")
    })

    $(".circle1").mouseout(function(){
        $(".mainTxt1").removeClass("show")
    })  
    
    //img
    $(".circle2").mouseover(function(){
        $(".dreamDuskNoteTxt").addClass("show")
    })

    $(".circle2").mouseout(function(){
        $(".dreamDuskNoteTxt").removeClass("show")
    })  

    //color
    $(".circle3").mouseover(function(){
        $(".dreamDuskMoodboosting").addClass("show")
    })
    
    $(".circle3").mouseout(function(){
        $(".dreamDuskMoodboosting").removeClass("show")
    })  



     ////////////////// 2 
    
     //top
     $(".circle4").mouseover(function(){
        $(".mainTxt2").addClass("show")
    }) 

    $(".circle4").mouseout(function(){
        $(".mainTxt2").removeClass("show")
    })  

    //img
    $(".circle6").mouseover(function(){
        $(".blushingSandsNoteTxt").addClass("show")
    })

    $(".circle6").mouseout(function(){
        $(".blushingSandsNoteTxt").removeClass("show")
    })  

    //color
    $(".circle5").mouseover(function(){
        $(".blushingSandsMoodboosting").addClass("show")
    })
    
    $(".circle5").mouseout(function(){
        $(".blushingSandsMoodboosting").removeClass("show")
    })  
    

     ////////////////// 3
     //top
     $(".circle7").mouseover(function(){
        $(".mainTxt3").addClass("show")
    })

    $(".circle7").mouseout(function(){
        $(".mainTxt3").removeClass("show")
    })
    
    //img
    $(".circle8").mouseover(function(){
        $(".sensuousStarsNoteTxt").addClass("show")
    })

    $(".circle8").mouseout(function(){
        $(".sensuousStarsNoteTxt").removeClass("show")
    })  

    //color
    $(".circle9").mouseover(function(){
        $(".SensuousStarsMoodboosting").addClass("show")
    })
    
    $(".circle9").mouseout(function(){
        $(".SensuousStarsMoodboosting").removeClass("show")
    })  


    //other
    $(".down>li").each(function(){
        let result = Math.round(Math.random())
            $(this).addClass("down")
    })
    
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.75
        
        $(".down").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
})