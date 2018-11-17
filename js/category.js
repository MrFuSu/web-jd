 window.addEventListener('load', function() {
 	  //初始化左侧分类swiper内容滚动
     var swiper = new Swiper('.category-left .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
     });
 	  //初始化右侧分类swiper内容滚动
     var swiper = new Swiper('.category-right .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
             el: '.swiper-scrollbar',
         },
         mousewheel: true,
     });
 })
