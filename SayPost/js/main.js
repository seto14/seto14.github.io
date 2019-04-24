/*PageUP*/
$(function() {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});


  /*OwlCarusel*/
$('.bc1').owlCarousel({
        merge:true,
        loop:true,
        margin:15,
        lazyLoad:true,
        callbacks: true,
        center:true,
        autoplay: true,
        autoWidth:true,
        onInitialize: compressIt,
        onResize: compressIt,
        onInitialized: fixIt,
        onResized: fixIt,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2
            },
            600:{
                dots : true,
            }
        }
    })

function compressIt(event){
    if(event.page.size<2){
        $("#bc_overlay").css("display","none");
    }else{
        $("#bc_overlay").css("display","block");
    }
        $("#bc_fix").css("width","80%");
}
function fixIt(event){
    $("#bc_fix").css("width","100%");
}


/*OwlCarusel_Buttons*/
var owl=$(".bc1");
  owl.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".next").click(function(){
    owl.trigger("next.owl.carousel");
  });
  $(".prev").click(function(){
    owl.trigger("prev.owl.carousel");
  });

$('.bc2').owlCarousel({
    items: 2,

        merge:true,
        loop:true,
        margin:15,
        lazyLoad:true,
        center:true,
        autoplay: true,
        autoWidth:true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2
            },
            600:{
                dots : true,
            }
        }

    })

	
/*OwlCarusel_Buttons*/
var owl2=$(".bc2");
  owl2.owlCarousel();
  //$(".next") - находим нашу кнопку
  $(".next2").click(function(){
    owl2.trigger("next.owl.carousel");
  });
  $(".prev2").click(function(){
    owl2.trigger("prev.owl.carousel");
  });
  

  /* Menu*/
  (function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);
  
  
  /*MenuPopUp*/
$(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);           
    });
});


/*Modal*/
// Open the full screen search box 
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box 
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

$("#myOverlay").click(function(){$(this).css("display","none");$(this).children().click(function(e){e.stopPropagation();});});
