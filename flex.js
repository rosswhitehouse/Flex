$.fn.flex = function(options) {
  var settings = $.extend({
    background: '',
    direction: 'row',
    wrap: 'wrap',
    justify: 'space-around',
    align: 'space-around',
    height: '',
    width: '',
    center: ''
  }, options );
  
  $(this).addClass('flex-grid-ross-css');
  
  $('.flex-grid-ross-css').css({
    'display':'flex',
    'list-style-type':'none',
    'flex-direction':settings.direction,
    'flex-wrap':settings.wrap,
    'justify-content':settings.justify,
    'align-content':settings.align,
    'background-color':settings.background,
    'height':settings.height,
    'max-width':settings.width
   
  });  
  
  
  if(settings.center === 'true'){
    $('.flex-grid-ross-css').css({
      'margin':'auto'
    });
  }
  
  if($(window).width() < 720){
    $('.flex-grid-ross-css').css({
      'flex-direction':'column'
    });
  }
  
  
  $(window).resize(function(){

  if($(window).width() < 720){
  $('.flex-grid-ross-css').css({
      'flex-direction':'column'
    });
  }
    
   else {
    $('.flex-grid-ross-css').css({
      'flex-direction':'row'
    });
  }
    
});
  
  
var one = '.flex-grid-ross-css li:nth-child(1)'
  var two = '.flex-grid-ross-css li:nth-child(2)'
  var three = '.flex-grid-ross-css li:nth-child(3)'
  var four = '.flex-grid-ross-css li:nth-child(4)'
  var five = '.flex-grid-ross-css li:nth-child(5)'
  var six = '.flex-grid-ross-css li:nth-child(6)'
  var seven = '.flex-grid-ross-css li:nth-child(7)'
  var eight = '.flex-grid-ross-css li:nth-child(8)'
  var nine = '.flex-grid-ross-css li:nth-child(9)'
  var ten = '.flex-grid-ross-css li:nth-child(10)'
  
   $(one).css({
     'order':'1'
   });
  
  $(two).css({
     'order':'2'
   });
  
  $(three).css({
     'order':'3'
   });
  
  $(four).css({
     'order':'4'
   });
  
  $(five).css({
     'order':'5'
   });
  
  $(six).css({
     'order':'6'
   });
  
  $(seven).css({
     'order':'7'
   });
  
  $(eight).css({
     'order':'8'
   });
  
  $(nine).css({
     'order':'9'
   });
  
  $(ten).css({
     'order':'10'
   });

  
};

$('.menu').flex({
  
});
