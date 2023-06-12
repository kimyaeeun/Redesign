$(document).ready(function(){

    //header
    $(window).scroll(function(){
        let winTop = $(window).scrollTop() 
        if(winTop>=1){
            $("header").addClass("down")
        }else{
            $("header").removeClass("down")
        }
    })
    
    //sub2Mainbanner
    
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.9 
            
    
        $(".mltr,.mrtl,.mbtt,.secondmbtt").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })
})