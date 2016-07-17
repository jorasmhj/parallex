$(window).scroll(function(){
     var wScroll=$(this).scrollTop();
     //console.log(wScroll);
     $('.logo').css({
          'transform' : 'translate(0px,'+ wScroll/2 +'%)'
     });

     $('.back-bird').css({
          'transform' : 'translate(0px,'+ wScroll/4 +'%)'
     });

     $('.fore-bird').css({
          'transform' : 'translate(0px,-'+ wScroll/40 +'%)'
     });

    if (wScroll > $('.clothes-pics').offset().top-$(window).height()/1.2) {
     //console.log('hi');
     $('.clothes-pics figure').each(function(i){
       setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      },150 * (i+1));

     });
    }
    
    if(wScroll > $('.content article h1').offset().top-$(window).height()){
         $('.content article h1').css({'left' : '0'});
    }

    if(wScroll > $('.large-window').offset().top-$(window).height()){
      //$('.large-window').css({'background-position' : 'center '+ wScroll +'px'});
      var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll/5);
      $('.window-tint').css({'opacity' : opacity});
    }

    if(wScroll > $('.blog-posts').offset().top-$(window).height()){
      var offset=Math.min(0,(parseInt(wScroll-$('.blog-posts').offset().top+$(window).height()-400)));
      console.log(offset);
      $('.post-1').css({"transform" : "translate("+ offset + "px,"+ Math.abs(offset*0.2) + "px)"});
      $('.post-3').css({"transform" : "translate("+ Math.abs(offset) + "px,"+ Math.abs(offset*0.2) + "px)"});
    }

});
