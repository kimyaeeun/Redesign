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

    //bottomMain
    $(".sublists>li").each(function(){
        let result = $("txtArea")
        if(result){
            $(this).addClass("mltr")
        }else{
            $(this).addClass("mrtl")
        }
        
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.9        
        $(".mltr,mrtl").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
})