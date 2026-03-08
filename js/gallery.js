const swiper = new Swiper('.gallery-slider', {

slidesPerView:3,

spaceBetween:30,

loop:true,

autoplay:{
delay:2500,
},

breakpoints:{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}

});