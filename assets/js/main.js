$(window).ready(function(){
  setTimeout(function(){
    //$('.pre-load').hide();
    $('.after-load').fadeIn(1000);
  },2000);

  $(window).scroll(function(){
       var wScroll=$(this).scrollTop();
       //console.log(wScroll);
       if(wScroll <= $('.bird-box').height()){
         $('.logo').css({
              'transform' : 'translate(0px,'+ wScroll/2 +'%)',
              'position' : 'absolute',
              'top' : '50%'
         });

         $('.back-bird').css({
              'transform' : 'translate(0px,'+ wScroll/4 +'%)'
         });

         $('.fore-bird').css({
              'transform' : 'translate(0px,-'+ wScroll/40 +'%)'
         });
       }else{
         $('.logo').css({
              'transform' : 'translate(0px,0px)',
              'position' : 'fixed',
              'z-index' : '1',
              'top' : '0'
         });
       }

      if (wScroll > $('.clothes-pics').offset().top-$(window).height()/1.2) {
       //console.log('hi');
       $('.clothes-pics figure').each(function(i){
         setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        },150 * (i+1));

       });
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

      if(wScroll > $('.content article h1').offset().top-$(window).height()){
        var offset=Math.min(0,(parseInt(wScroll-$('.content article h1').offset().top+$(window).height()-400)));
        console.log(offset);
        $('.content article h1').css({"transform" : "translate("+ offset + "px,0px)"})
      }

  });
});
