$("#top-content").mousemove(function(e) {
    parallaxIt(e, ".a", 50);
    parallaxIt(e, ".b", 70);
    parallaxIt(e, ".c", 90);
    parallaxIt(e, ".d", 110);
    parallaxIt(e, ".e", 130);
    parallaxIt(e, ".f", 150);
    parallaxIt(e, ".g", 170);

});
  
  function parallaxIt(e, target, movement) {
    var $this = $("#top-content");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top-240;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

$("#top-content").mouseleave(function(e){
    parallaxIt(e, ".a", 0);
    parallaxIt(e, ".b", 0);
    parallaxIt(e, ".c", 0);
    parallaxIt(e, ".d", 0);
    parallaxIt(e, ".e", 0);
    parallaxIt(e, ".f", 0);
    parallaxIt(e, ".g", 0);
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      var $tops = $(".top-content");
      var $about = $(".about-us-container");
      //console.log($(this).scrollTop());
      $nav.toggleClass('scrolled', $tops.height()+$about.height()- $(this).scrollTop()-210 <$nav.height());
    });
});

$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
        }
    });
});

$(function(){
    
    $('.comp-item').each(function(){
        if ($(this).hasClass('active')){
            
            //$(this).css("background-color","red");
        }else{
            //$(this).css("background-color","green");
        }
        
    });
});

$('.semicarro').carousel({
    interval: 4000
});

$('.compcarro').carousel({
    interval: 5000
});

$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.comp-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        //$('.comp-item').eq(it+1).addClass('hubla');
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.comp-item').eq(i).appendTo('.compcarro-inner');
            }
            else {
                $('.comp-item').eq(0).appendTo('.compcarro-inner');
            }
        }
    }
});

$loadports = 2;
$('.loadport').click(function(){
    //console.log("hubla"+$loadports);
    $('.galery'+$loadports).css("display","block");
    $loadports+=1;
});


$('.detail-comp').click(function(){
    $('#myNav').css("width","100%");
    $('body').css('overflow', 'hidden');
    $('.comp-item').each(function(){
        if ($(this).hasClass('active')){
            //console.log("in");
            if ($(this).hasClass('compSoftDev')){
                
                $('.detail-comp1').css("display","block");
            }else if ($(this).hasClass('compProgRush')){
                
                $('.detail-comp2').css("display","block");
            }else if ($(this).hasClass('compERP')){
                
                $('.detail-comp3').css("display","block");
            }else if ($(this).hasClass('compDigDes')){
                
                $('.detail-comp4').css("display","block");
            }else if ($(this).hasClass('compRank')){
                
                $('.detail-comp5').css("display","block");
            }
        }
    });
});

$('.closebtn').click(function(){
    $('#myNav').css("width","0%");
    $('body').css('overflow', '');
    $('.detail-competition').css("display","none");
});

$('.FAQ-buton').click(function(){
    $('#myNav').css("width","0%");
    $('body').css('overflow', '');
    $('.detail-competition').css("display","none");
    $('html, body').animate({
        scrollTop: $(".testimonials").offset().top
    }, 2000);
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function regis(numb,code){
    document.getElementById('id01').style.display='block';
    $('.input-fill, textarea').val('');
    if (numb==1){
        $('.members').css("display","none");
        $('.title').text("Register");
    }else if (numb==3){
        $('.members').css("display","block");
        $('.members2').css("display","none");
        $('.title').text("Team Leader");
    }else if (numb==5){
        $('.members').css("display","block");
        $('.members2').css("display","block");
        $('.title').text("Team Leader");
    }
    
    if(code==1){
        $('.compIDs').val("softdev");
    }else if(code==2){
        $('.compIDs').val("progrush");
    }else if(code==3){
        $('.compIDs').val("erp");
    }else if(code==4){
        $('.compIDs').val("digdes");
    }else if(code==5){
        $('.compIDs').val("rank1");
    }
}

function showFaq(numb){
    $('.faq-body').css("display","none");
    $('.faq-cont'+numb).css("display","block");
}