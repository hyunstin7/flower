$(document).ready(function(){
let windowInnerHeight = $(window).innerHeight();
let windowInnerWidth = $(window).innerWidth();

  // ----------------c1-middle Height ----------//
  if($(window).innerWidth() <= 768){
    $(".c1-middle").css("height",`${$(".p-c1").innerHeight()*1.8}px`)
  }else{
    $(".c1-middle").css("height",`${$(".p-c1").innerHeight()}px`)
  }

  let cost=0;

 window.onload = function() {
      // ----------------product-Height ----------//
      $('.p1-sliders').css("width",`${($('.p-sliders img').eq(0).width() +40 ) *8}px`)
      $('#products').css("height",`${$('.p-sliders').width() + windowInnerHeight}px`);
  const brand = $('.brand')
  const competition = $('.competition')
  const menual = $('.menual')
  const products = $('.products')
  const process = $('.process')
  const brandTop = Math.floor($('#brand').offset().top)
  const competitionTop = Math.floor($('#competition-1').offset().top)
  const menualTop = Math.floor($('#menual-1').offset().top)
  const productsTop = Math.floor($('#products').offset().top) + 232
  const processTop = Math.floor($('#products').offset().top) + Math.floor($('#products').innerHeight() + 150)
  console.log($('.p-sliders').width())
  console.log(Math.floor($('#process-1').offset().top))
  console.log(processTop)
    brand.on('click',function(e){
     
      window.scrollTo({
        top : brandTop,
        behavior : "smooth"
      })
    })
    competition.on('click',function(e){
     
      window.scrollTo({
        top : competitionTop,
        behavior : "smooth"
      })
    })
    menual.on('click',function(e){
     
      window.scrollTo({
        top : menualTop,
        behavior : "smooth"
      })
    })
    products.on('click',function(e){
    
      window.scrollTo({
        top : productsTop,
        behavior : "smooth"
      })
    })

    process.on('click',function(e){
    
      window.scrollTo({
        top : processTop,
        behavior : "smooth"
      })
    })


    

    //----- m1 초기 변수값---- //
    let [currentIdx,translate,x1,X,k] =[0,0,0,0,0]  
    const delay = 500;
    let isSliding = false

    // --------m1 초기css값지정----------//
    const m1Slider = $('.m1-sliders');
    const m1Sliderimg = $('.m1-sliders img')
    const ImgWidth = m1Sliderimg[0].clientWidth;
    const ImgHeight = m1Sliderimg[0].clientHeight;
    const m1SliderWidth = ImgWidth * m1Sliderimg.length;
    
    $('.m1-slide').css("height",`${ImgHeight}px`)
    m1Slider.css("width",`${m1SliderWidth}px`); 

   
 

    //---------- m1 자동슬라이드 함수 -----------//
    
   
    let showSliding = 
    setInterval(sliding, 4000);


    const resetInterval = () => {
      clearInterval(showSliding)
      showSliding = 
      setInterval(sliding, 4000);
    }

    function move(D) {
      isSliding = true;
      currentIdx += ( -1 * D);
      translate = -ImgWidth * currentIdx;
      k = -ImgWidth * currentIdx;
      m1Slider.css("transition", `all ${delay}ms ease`);
      m1Slider.css("transform",`translateX(${translate}px)`); 

      if (currentIdx >= 5){
        setTimeout(() => {
          m1Slider.css("transition","none");
          translate = (5-currentIdx)*ImgWidth;
          currentIdx =-(5-currentIdx)
          m1Slider.css("transform",`translateX(${translate}px)`); 
          k = translate
        }, delay);
      }if(currentIdx <= -5){
        setTimeout(() => {
          m1Slider.css("transition","none");
          translate = -(5+currentIdx)*ImgWidth;
          currentIdx = (5+currentIdx)
          m1Slider.css("transform",`translateX(${translate}px)`); 
          k = translate
        }, delay);
      }
      setTimeout(()=>{
        isSliding = false
      },500)
      resetInterval()
    }
    function sliding() {
      move(-1);
    }

    

  

    if(windowInnerWidth <= 768) {
      $('.m1-sliders').on('touchstart',function(e){
        e.stopPropagation()
        clearInterval(showSliding)
      x1 =e.touches[0].clientX
  
    })
    $('.m1-sliders').on('touchmove',function(e){
      e.stopPropagation();
      
      $(this).css("transition", "none")
      X = e.touches[0].clientX - x1
      console.log(X)
    m1Slider.css("transform",`translateX(${X+k}px)`)
    
  })
  $('.m1-sliders').on('touchend',function(e){
    e.stopPropagation()
    if(!isSliding){

      $(this).css("transition", ".5s")
      if( X > 0) {
           move(1)
         } else {
           move(-1)
         }
    }
   
    

})
    } else {
// ----------m1 드래그시작-----------//
$('.m1-sliders').on('dragstart',function(e){
  e.stopPropagation();
  if(!isSliding){
  clearInterval(showSliding)
x1 =e.clientX
  }
    
  
 
})
// ----------m1 드래그중-----------//
$('.m1-sliders').on('drag',function(e){
e.stopPropagation();
if(!isSliding){
  $(this).css("transition", "none")
  X = e.clientX - x1
  m1Slider.css("transform",`translateX(${X+k}px)`)
}
})

$('.m1-sliders').on('dragover',function(e){
e.preventDefault();    
})

$('.m1-sliders').on('drop',function(e){
e.preventDefault();    
})


// -------------m1 드래그완료----------//
$('.m1-sliders').on('dragend',function(e){
  e.stopPropagation();
  if(!isSliding){
    $(this).css("transition", ".5s")
  if (X < ImgWidth && X > 0) {
    move(1)
  }else if (X > -ImgWidth && X < 0) {
    move(-1)
  }else if(X > ImgWidth && X < 2*ImgWidth && X > 0) { 
    move(2)
  }else if(X > 2*ImgWidth && X < 3*ImgWidth && X > 0) { 
    move(3)
  }else if(X > 3*ImgWidth && X < 4*ImgWidth && X > 0) { 
    move(4)
  }else if(X > 4*ImgWidth && X < 5*ImgWidth && X > 0) { 
    move(5)
  }else if (X > -2*ImgWidth && X < -1*ImgWidth && X < 0) {
    move(-2)
  }else if (X > -3*ImgWidth && X < -2*ImgWidth && X < 0) {
    move(-3)
  }else if (X > -4*ImgWidth && X < -3*ImgWidth && X < 0) {
    move(-4)
  }else if (X > -5*ImgWidth && X < -4*ImgWidth && X < 0) {
    move(-5)
  }


  
  }
})
    }

    

      //----- m3 초기 변수값---- //
    let [m3Idx,m3Translate,m3X,m3x1] =[0,0,0,0]  
    

       // --------m3 초기css값지정----------//
    const m3Slider = $('.m3-sliders');
    const m3Sliderimg = $('.m3-sliders img')
    const m3ImgWidth = m3Sliderimg[0].clientWidth;
   
    $('.m3-slide').css("height",`calc(${m3Sliderimg[0].clientHeight}px + 8vh)`)
    $('.m3-slide').css("width",`${m3ImgWidth}px`)
     // ------------m3 자동슬라이드 --------------//
     function m3move(D) {
      isSliding = true
      m3Idx += (-1 * D);
      m3Translate = -m3ImgWidth * m3Idx;
      m3Slider.css("transition", `all ${delay}ms ease`);
      m3Slider.css("transform",`translate(${m3Translate}px,-50%)`); 

      if (m3Idx >= 5){
        setTimeout(() => {
          m3Slider.css("transition","none");
          m3Slider.css("transform",`translate(0px,-50%)`);
          m3Idx = 0;
          m3Translate = 0;
        }, delay);
      }else if(m3Idx <= -1){
        setTimeout(() => {
          m3Slider.css("transition","none");
          m3Translate = -(5+m3Idx)*m3ImgWidth;
          m3Slider.css("transform",`translate(${m3Translate}px,-50%)`);
          m3Idx = 4;
        }, delay);
      } 
      setTimeout(()=>{
        isSliding = false
      },delay)
      resetM3AutoPlay()
    }
    function m3sliding() {
      m3move(-1);
    }
    let m3AutoPlay = setInterval(m3sliding,4000)
    let resetM3AutoPlay = () => {
      clearInterval(m3AutoPlay)
      m3AutoPlay = setInterval(m3sliding,4000)
    }

    // ---------m3 버튼 클릭이벤트 ----------//

    $('.button-l').click(()=>{
      if(!isSliding){
        m3move(1)
      }
    })
    $('.button-r').click(()=>{
      if(!isSliding){
        m3move(-1)
      }
    })

    // ---------m3 드래그 이벤트 ----------//

    if(windowInnerWidth <= 768){
      m3Slider.on("touchstart",(e)=>{
        e.stopPropagation();
        clearInterval(m3Autoanimate);
        m3x1 = e.touches[0].clientX;
      })
      m3Slider.on("touchmove",(e)=>{
        e.stopPropagation();
        m3X = e.touches[0].clientX - m3x1;
      })
  
      m3Slider.on("touchend",(e)=>{
        e.stopPropagation();
        if(!isSliding){
          if(m3X < 0){
            m3move(-1)
          } else {
             m3move(1)
          }
        }
      })
    }else{
      m3Slider.on("dragstart",(e)=>{
        e.stopPropagation()
        clearInterval(m3AutoPlay);
        m3x1 = e.clientX;
      })
      m3Slider.on("drag",(e)=>{
        m3X = e.clientX - m3x1;
      })
  
      m3Slider.on("dragover",(e)=>{
        e.preventDefault();
      })
      m3Slider.on("drop",(e)=>{
        e.preventDefault();
      })
      m3Slider.on("dragend",(e)=>{
        e.stopPropagation();
        if(!isSliding){
          console.log(m3X)
          if(m3X < 0){
            m3move(-1)
          } else {
            m3move(1)
          }
        }
       
      })
    }

    window.addEventListener('scroll',function(){
      let scrollY = window.scrollY;
    if(scrollY>0){
        $('header').css("background-color","#fff")
        $('header').css("border-bottom","solid 1px #00000000")

    } else {
        $('header').css("background-color","transparent")
        $('header').css("border-bottom","solid 1px #000")

    }

    //  ---------cost 이벤트 ------------//
    if($('.m2-bottom').offset().top  <= scrollY + windowInnerHeight){
      $('.cost-bar').each((i,a)=>{
          cost = $(a).attr("data-cost");
          $(a).css("transition",`all ${cost * 5 / 5.2 /2}ms linear`)
          $(a).css("width",`calc(${cost} / 5200 * 80%)`)
          $(a).children('p').css("left",`calc(100% + 15px)`)
          let m2bottomWidth =$('.m2-bottom').innerWidth()*0.8
        let counter = setInterval(()=>{
          $(a).children('p').children('span').html(parseInt(($(a).innerWidth() / m2bottomWidth) * 5200)+1);

        },1) 
        setTimeout(()=>{
          clearInterval(counter)
        },5000)         

          
      })
      
    } 
    else {
    $('.cost-bar').each((i,a)=>{
      cost = $(a).attr("data-cost");
      $(a).css("transition",`none`)
      $(a).css("width",0)
    })
    }
//-----------------Product 이벤트-----------------------//
let productsRatio =  (scrollY - $('#products').offset().top) / ($('#products').innerHeight()-$(window).innerHeight())
productsRatio > 1 ? productsRatio = 1 : productsRatio < 0 ? productsRatio = 0 : productsRatio = productsRatio
console.log(scrollY,$('#products').offset().top)
 
if(windowInnerWidth <=768){
  $('.p-sliders').css("transform",`translate(-${($('.p-sliders').width()- $(window).innerWidth() + 300)*productsRatio}px,-50%)`)
 }else{
   $('.p-sliders').css("transform",`translate(-${($('.p-sliders').width()- $(window).innerWidth() + 150)*productsRatio}px,-50%)`)
 }

      if(scrollY >= brandTop && scrollY < competitionTop){
        $('.nav li').removeClass('on');
        brand.addClass('on')
      }else if(scrollY >= competitionTop && scrollY < menualTop){
        $('.nav li').removeClass('on');
        competition.addClass('on')
      }else if(scrollY >= menualTop && scrollY < productsTop){
        $('.nav li').removeClass('on');
        menual.addClass('on')
      }else if(scrollY >= productsTop && scrollY < processTop){
        $('.nav li').removeClass('on');
        products.addClass('on')
        console.log(22)
      }else if(scrollY >= processTop){
        $('.nav li').removeClass('on');
        process.addClass('on')
      } else {
        $('.nav li').removeClass('on');
      }
    
    //////////////////// 요소 ///////////////////
    
    let el = [
      //scale//
      ".b-sub-title",
      ".b-top h2",
      ".c1-middle",
      ".m1-top img",   
      ".m1-top h2",
      ".m2-top",   
      ".p-top",   
      ".f-f-button",  
      ".b1-m-img1",    
      ".b1-m-img2",    
      ".b1-m-img3",    
      ".b1-m-img4",    
      ".b1-m-img5",
      ".p1-bottom",  
      ".p2-bottom",  
  
      // TB //
      ".c2-b-img1",
      ".c2-b-img2",
      ".c2-b-img3",
      ".c2-b-img4",
  
      // BT //
      ".b-bottom h2:first-child",
      ".b-bottom h2:nth-child(2)",
      ".b-bottom p",
      ".c2-top h2",  
      ".c2-top p",
      ".m2-middle",
      ".m2-bottom h2",  
      ".m3-top h2",  
      ".m3-top p",  
      ".m3-middle",  
      ".m3-bottom",  
      ".p1-top img",  
      ".p1-top h2",  
      ".p1-top span",
      ".p1-top p",
      ".p2-top img",  
      ".p2-top h2",  
      ".p2-top span",   
      ".p2-top p",   
      ".f-innerbox h2:first-child",   
      ".f-innerbox p",   
      ".m-f-h2",  
     
     // LR //
      ".c1-top", 
  
      // RL
      ".c1-bottom",
      '.m1-slide' 
       
    ]
  
  
      
    
    /////////////////옵저버작동하기//////////////////
    
      el.forEach((a)=>{
          if($(a).offset().top < scrollY + windowInnerHeight){
            $(a).addClass('on')
          }else {
            $(a).removeClass('on')
          }
        })
      
    
    //-------------observer end-----------------//
    })
  
    
  }












})