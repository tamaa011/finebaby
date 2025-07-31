//$(".animate").click(function(){
//    var show = $(".shows");
//    var hidden = $(".hiddens");
//    startAnimation();
//    function startAnimation(){
//        $(".hiddens").fadeIn(100);
//        hidden.animate({right: '+=480'}, 500);
//        hidden.css("display", "inline-block");    
//        show.animate({right: '+=550'}, 600, function(){
//        });
//    };
//  });
//  $(".click").click(function(){
//    var show = $(".shows");
//    var hidden = $(".hiddens");
//    startAnimations();
//    function startAnimations(){
//        
//        hidden.animate({left: '+=150'}, 500); 
//        show.animate({left: '0'}, 400, function(){
//        hidden.css("display", "none");
//        });
//        
//    }
//        });


$(".animate").click(function(){
    $(".icon-img .but").addClass("style");
  });
$(".click").click(function(){
    $(".animate").removeClass("style");
  });
    var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dott");
    var hidden = document.getElementsByClassName("hiddens");
    var show = document.getElementsByClassName("shows");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  

  }

  slides[slideIndex-1].style.display = "block";  

}

$(".animate").click(function(){
    $(".icon-img-two div").removeClass("i-s");
    $(".icon-img-two .add").addClass("i-s");
  });
$(".click").click(function(){
    $(".icon-img-two .add").addClass("i-s");
  });

    var slideIndex = 1;
showSlidesTwo(slideIndex);

function plusSlides(n) {
  showSlidesTwo(slideIndex += n);
}

function currentSlideTwo(n) {
  showSlidesTwo(slideIndex = n);
}

function showSlidesTwo(n) {
  var i;
  var slidesTwo = document.getElementsByClassName("mySlides-two");
  var dotsTwo = document.getElementsByClassName("dott-two");
    var hidden = document.getElementsByClassName("hiddens");
    var show = document.getElementsByClassName("shows");
  if (n > slidesTwo.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slidesTwo.length}
  for (i = 0; i < slidesTwo.length; i++) {
      slidesTwo[i].style.display = "none";  

  }

  slidesTwo[slideIndex-1].style.display = "block";  

}