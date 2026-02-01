
//  Initialize Swiper 
var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        // التحكم بالنقاط
        dynamicBullests:true,
        clickable:true,
      },
    //   التمرير التلقاءي
      autoplay:{
        delay:2000,
      },
    //   الحلقة
    loop:true,
    });

