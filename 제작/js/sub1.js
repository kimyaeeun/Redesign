$(document).ready(function(){

    // setTimeout(function(){
    //     $(".floationgTextSub1 > h1").addClass("on")
    // },1000)
    

    let itemPerPage = 9;
    let resultArray = getArrayPro2(getArrayPro1(bestProduct,0))
    makePaginationList(".pageBtn",getPageLength(resultArray,itemPerPage))
    let proResult = getElFromArray(resultArray,itemPerPage)

    $(".bestMainList").html(proResult)

    // $(".btnMakeUp").click(function(){
    //     $(".bestMainList").html(skinCareResult)
    // })
        let type1 = 0;
    $(".tabTit>li").click(function(e){
        e.preventDefault()
        type1 = $(this).attr("data-pro-type")
        // alert(typeof(type1))
        let resultArray = getArrayPro2(getArrayPro1(bestProduct,type1))
        makePaginationList(".pageBtn",getPageLength(resultArray,itemPerPage))
        let proResult = getElFromArray(resultArray,itemPerPage)
        console.log(proResult)
        $(".bestMainList").html(proResult)
    })

    $(".bestBottommenu ul>li").click(function(e){
        e.preventDefault()
        let type2 = $(this).attr("data-pro-subtype")
        let resultArray = getArrayPro2(getArrayPro1(bestProduct,type1),type2)
        makePaginationList(".pageBtn",getPageLength(resultArray,itemPerPage))
        let proResult = getElFromArray(resultArray,itemPerPage)
        console.log(proResult)
        $(".bestMainList").html(proResult)
    })

    $(".tabTit>li").click(function(e){
            $(".tabTit>li").removeClass("on")
            $(this).addClass("on") 
            let idx = $(this).index()
            $(".bestBottommenu>ul").removeClass("on")
            $(".bestBottommenu>ul").eq(idx).addClass("on")
    })


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

    //sub1Mainbanner
    // $("floationgTextSub1").each(function(){
    //     let result = Math.round(Math.random())
    //         $(this).addClass("scrollDown")
    // })

    // $(window).scroll(function(){
    //     let winst = $(window).scrollTop()
    //     let winHeight = $(window).height()/2
        
    //     $(".scrollDown").each(function(){
    //         if(winst+winHeight>$(this).offset().top){
    //             $(this).addClass("on")
    //         }else{
    //             $(this).removeClass("on")
    //         }
    //     })
    // })

    })