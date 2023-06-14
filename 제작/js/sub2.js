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
    
    //sub2Mainbanner
    
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.7
            
    
        $(".mltr,.mrtl,.mbtt,.secondmbtt").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })
})