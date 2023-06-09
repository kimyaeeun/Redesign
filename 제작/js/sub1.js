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

    //sub1Mainbanner
    $("floationgTextSub1").each(function(){
        let result = Math.round(Math.random())
            $(this).addClass("scrollDown")
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()/2
        
        $(".scrollDown").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })

        $(".tabTit>li").click(function(e){
            e.preventDefault()
            $(".tabTit>li").removeClass("on")
            $(this).addClass("on")
            let idx = $(this).index()
            //index()함수는 앞에 선택된 태그의 부모태그기준 순번을 리턴함
            $(".tabDes").html(tabDescription[idx])
        })

        $(".tabTit>li").click(function(e){
            e.preventDefault()
            let idx = $(this).index()
            $(".bestBottommenu>ul").removeClass("on")
            $(".bestBottommenu>ul").eq(idx).addClass("on")
        });
    })