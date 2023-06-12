
// type => skincare(0) / makeup(1)
// subtype => 스킨로션(0)/앰플세럼(1)/크림(2)/세트(3)
// subtype => 페이스(0)/아이(1)/립(2)/세트(3)

let bestProduct = [
    {   
        type:0,
        subType:0,
        title:"마이크로 에센스 트리트먼트 로션(건성용)",
        folderSrc:"sub1/bestseller/",
        imgFileName:"트리트먼트 로션(건성용).png",
        subTitle:"Micro Essence",
        proTxt:"건조한 피부에 깊은 속보습과 광채를 선사하는 발효 에너지",
        price:"₩82,000 - ₩276,000"
    },
    {   
        type:0,
        subType:0,
        title:"마이크로 에센스 트리트먼트 로션 프레시(지성용)",
        folderSrc:"sub1/bestseller/",
        imgFileName:"트리트먼트 로션 프레시(지성용).png",
        subTitle:"Micro Essence",
        proTxt:"피부 장벽 이중 잠금 케어로 피부 속부터 차오르는 투명 광채",
        price:"₩82,000 - ₩276,000"
    },
    {
        type:0,
        subType:1,
        title:"어드밴스드 나이트 리페어 아이 컨센트레이트 매트릭스",
        folderSrc:"sub1/bestseller/",
        imgFileName:"어드밴스드 나이트 리페어 아이 컨센트레이트 매트릭스.png",
        subTitle:"<span>[LAST CHANCE 40% 할인]</span>Advanced Night Repair",
        proTxt:"눈가 피부를 위한 집중 멀티 리페어",
        price:"₩128,000"
    },
    {   
        type:0,
        subType:1,
        title:"갈색병 세럼",
        folderSrc:"sub1/bestseller/",
        imgFileName:"Advanced Night Repair Ample.png",
        subTitle:"Advanced Night Repair",
        proTxt:"독자적인 크로노룩스™ 파워 시그널 테크놀로지 피부의 힘을 키우는 멀티 리페어 세럼",
        price:"₩82,000 - ₩299,000"
    },
    {
        type:0,
        subType:2,
        title:"어드밴스드 나이트 리페어 아이 수퍼차지드 젤-크림",
        folderSrc:"sub1/bestseller/",
        imgFileName:"어드밴스드 나이트 리페어 아이 수퍼차지드 젤-크림.png",
        subTitle:"Advanced Night Repair",
        proTxt:"2주 만에 다크서클 개선으로 더욱 환해지는 눈가피부를 충전시킬<br>에스티 로더의 단 하나의 슈퍼히어로",
        price:"₩112,000"
    },
    {
        type:0,
        subType:1,
        title:"어드밴스드 나이트 리페어 인텐스 리셋 컨센트레이트",
        folderSrc:"sub1/bestseller/",
        imgFileName:"어드밴스드 나이트 리페어 인텐스 리셋 컨센트레이트.png",
        subTitle:"Advanced Night Repair",
        proTxt:"나이트 케어의 획기적인 크로노룩스 S.O.S 테크놀로지를 담은 리셋<br>컨센트레이트",
        price:"₩143,000"
    },
    {
        type:0,
        subType:2,
        title:"리바이탈라이징 수프림 플러스 유스 파워 크림",
        folderSrc:"sub1/bestseller/",
        imgFileName:"리바이탈라이징 수프림 플러스 유스 파워 크림.png",
        subTitle:"Revitalizing Supreme +",
        proTxt:"단 3주 안에 경험하는 빠른 탄력 케어 3가지 동안 포인트",
        price:"₩106,000 - ₩199,000"
    },
    {
        type:0,
        subType:3,
        title:"갈색병 세럼 50ml 세트",
        folderSrc:"sub1/bestseller/",
        imgFileName:"갈색병 세럼 50ml세트.png",
        subTitle:"Advanced Night Repair",
        proTxt:"단단크림 총 30ml 증정",
        price:"₩182,000"
    },
    {
        type:0,
        subType:3,
        title:"마이크로 에센스 트리트먼트 로션 400ml 세트",
        folderSrc:"sub1/bestseller/",
        imgFileName:"마이크로 에센스 트리트먼트 로션 400ml 세트.png",
        subTitle:"Micro Essence",
        proTxt:"미니어처 세트 증정",
        price:"₩276,000"
    },
    {
        type:0,
        subType:3,
        title:"갈색병 세럼 75ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"갈색병세럼75ml세트.png",
        subTitle:"Advanced Night Repair",
        proTxt:"미니어처 세트 증정",
        price:"₩215,000"
    },
    {
        type:0,
        subType:3,
        title:"리바이탈라이징 수프림 플러스 유스 파워 크림 50ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"리바이탈라이징 수프림 플러스 유스 파워 크림 50ml 세트.png",
        subTitle:"Revitalizing Supreme+",
        proTxt:"미니어처 세트 증정",
        price:"₩159,000"
    },
    {
        type:0,
        subType:3,
        title:"리바이탈라이징 수프림 플러스 유스 파워 크림 75ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"리바이탈라이징 수프림 플러스 유스 파워 크림 75ml 세트.png",
        subTitle:"Revitalizing Supreme+",
        proTxt:"미니어처 세트 증정",
        price:"₩199,000"
    },
    {
        type:0,
        subType:3,
        title:"마이크로 에센스 트리트먼트 로션 100ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"마이크로 에센스 트리트먼트 로션 100ml 세트.png",
        subTitle:"Micro Essence",
        proTxt:"갈색병 세럼 미니어처 증정",
        price:"₩82,000"
    },
    {
        type:0,
        subType:3,
        title:"마이크로 에센스 트리트먼트 로션 200ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"마이크로 에센스 트리트먼트 로션 200ml 세트.png",
        subTitle:"Micro Essence",
        proTxt:"동일 제품 100ml추가 증정",
        price:"₩162,000"
    },
    {
        type:0,
        subType:3,
        title:"마이크로 에센스 트리트먼트 로션 프레시 100ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"마이크로 에센스 트리트먼트 로션 프레시 150ml 세트.png",
        subTitle:"Micro Essence",
        proTxt:"갈색병 세럼 미니어처 증정",
        price:"₩82,000"
    },
    {
        type:0,
        subType:3,
        title:"마이크로 에센스 트리트먼트 로션 프레시 200ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"마이크로에센스 트리트먼트 로션 프레시 200ml 세트.png",
        subTitle:"Micro Essence",
        proTxt:"마이크로 에센스 100ml 추가 증정",
        price:"₩162,000"
    },
    {
        type:0,
        subType:3,
        title:"마이크로 에센스 트리트먼트 로션 프레시 400ml 세트",
        folderSrc:"sub1/bestseller2/",
        imgFileName:"마이크로 에센스 트리트먼트 로션 프레시 400ml 세트.png",
        subTitle:"Micro Essence",
        proTxt:"미니어처 세트 증정",
        price:"₩276,000"
    },
    {   
        type:1,
        subType:0,
        title:"더블 웨어 스테이-인-플레이스 메이크업 SPF10<br>PA++",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"더블웨어 스테이-인 플레이스 메이크업.png",
        subTitle:"Double Ware",
        proTxt:"19쉐이드<br> sub1/bestseller3/face/스테이-인 플러스 쉐이드.png",
        price:"₩84,000"
    },
    {   
        type:1,
        subType:0,
        title:"퓨처리스트 아쿠아 브릴리언스 리퀴드 메이크업 SPF 20<br>PA++",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"퓨처리스트 아쿠아 브릴리언스 리퀴드 메이크업.png",
        subTitle:"Futurist Aqua Brilliance",
        proTxt:"11쉐이드<br> sub1/bestseller3/face/퓨처리스트 아쿠아 쉐이드.png",
        price:"₩84,000"
    },
    {
        type:1,
        subType:0,
        title:"더블웨어 쉬어 매트 롱 웨어 메이크업",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"더블웨어 쉬어 매트 롱 웨어 메이크업.png",
        subTitle:"Double Ware",
        proTxt:"8쉐이드<br> sub1/bestseller3/face/더블웨어 쉬어매트 롱 쉐이드.png",
        price:"₩84,000"
    },
    {   
        type:1,
        subType:1,
        title:"더블 웨어 제로-스머지 렝쓰닝 마스카라",
        folderSrc:"sub1/bestseller3/eye",
        imgFileName:"더블웨어 쉬어 매트 롱 웨어 메이크업.png",
        subTitle:"Double Ware",
        proTxt:"하루종일 번짐 없이 깔끔하게!<br>에스티 로더의 베스트 마스카라",
        price:"₩49,000"
    },
    {
        type:1,
        subType:0,
        title:"더블웨어 플로리스 하이드레이팅 프라이머<br>SPF45++++",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"더블웨어 플로리스 하이드레이팅 프라이머.png",
        subTitle:"Double Ware",
        proTxt:"피치톤업이 선사하는 화사하고 매끈한 복숭아빛 피부",
        price:"₩71,000"
    },
    {
        type:1,
        subType:2,
        title:"퓨어 컬러 리바이탈라이징 크리스탈 밤",
        folderSrc:"sub1/bestseller3/lip",
        imgFileName:"퓨어 컬러 리바이탈라이징 크리스탈 밤.png",
        subTitle:"Double Ware",
        proTxt:"6쉐이드<br>sub1/bestseller3/lip/립스틱 쉐이드.png",
        price:"₩48,000"
    },
    {
        type:1,
        subType:0,
        title:"더블웨어 매트 파우더 파운데이션 ",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"더블웨어 매트 파우더 파운데이션.png",
        subTitle:"Double Wear",
        proTxt:"7쉐이드<br>sub1/bestseller3/face/더블웨어 매트 파우더 파운데이션 쉐이드.png",
        price:"₩84,000"
    },
    {
        type:1,
        subType:0,
        title:"더블웨어 매트 파우더 파운데이션 리필",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"더블웨어 매트 파우더 파운데이션 리필.png",
        subTitle:"Double Wear",
        proTxt:"7쉐이드<br>sub1/bestseller3/face/더블웨어 매트 파우더 파운데이션 쉐이드.png",
        price:"₩62,000"
    },
    {
        type:1,
        subType:0,
        title:"리-뉴트리브 울트라 래디언스 세럼 쿠션",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"리뉴트리브 4쉐이드.png",
        subTitle:"RE-NUTRIV",
        proTxt:"4쉐이드<br>sub1/bestseller3/face/리뉴트리브 4쉐이드.png",
        price:"₩62,000"
    },
    {
        type:1,
        subType:0,
        title:"리-뉴트리브 울트라 래디언스 세럼 쿠션 리필",
        folderSrc:"sub1/bestseller3/face",
        imgFileName:"리뉴트리브 4쉐이드.png",
        subTitle:"RE-NUTRIV",
        proTxt:"4쉐이드<br>sub1/bestseller3/face/리뉴트리브 4쉐이드.png",
        price:"₩62,000"
    }
]


function getArrayPro1(arrayList,type){
    let resultArray = [];
    for(let i=0 ; i<arrayList.length ; i++){
        if(arrayList[i].type == type){
            resultArray.push(arrayList[i]) 
        }
    }
    return resultArray
}

function getArrayPro2(arrayList,type="all"){
    let resultArray = [];
    if(type!="all"){
        for(let i=0 ; i<arrayList.length ; i++){
            if(arrayList[i].subType == type){
                resultArray.push(arrayList[i]) 
            }
        }
        return resultArray
    }else{
        return arrayList
    }
}

function getElFromArray(proArray){
    let result="";
    for(let i=0 ; i<proArray.length ; i++){
        result += `<li>
            <figure>
            <a href="#"><img src="./img/${proArray[i].folderSrc}${proArray[i].imgFileName}" alt="${proArray[i].title}"></a>
            </figure>
            <a href="#"><h3>${proArray[i].subTitle}</h3></a>
            <a href="#"><h4>${proArray[i].title}</h4></a>
            <a href="#"><h5>${proArray[i].proTxt}</h5></a>
            <p>${proArray[i].price}</p>
            <p class="menuTxt"><a href="#">자세히 보기</a></p>
        </li>`
    }
    if(!result){
        return "<div class='haha'>상품이 없습니다.</div>"
    }
    return result
}

// console.log(result)