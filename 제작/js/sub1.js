$(document).ready(function(){

    let resultArray = getArrayPro2(getArrayPro1(bestProduct,0))
    let proResult = getElFromArray(resultArray)
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
        let proResult = getElFromArray(resultArray)
        console.log(proResult)
        $(".bestMainList").html(proResult)
    })

    $(".bestBottommenu ul>li").click(function(e){
        e.preventDefault()
        let type2 = $(this).attr("data-pro-subtype")
        let resultArray = getArrayPro2(getArrayPro1(bestProduct,type1),type2)
        let proResult = getElFromArray(resultArray)
        console.log(proResult)
        $(".bestMainList").html(proResult)
    })


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

    })