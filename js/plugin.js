// swiper
let swiper;
const swiperInit=()=>{
  swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  },
  });
};
const destroySwiper=()=>{
  if(swiper){
    swiper.destroy(false, true);
    swiper=null;
  };
};
const indexSwiper=()=>{
  if(window.innerWidth<768){
    destroySwiper();
  }else{
    if(!swiper){
      swiperInit();
    };
  };
};
window.addEventListener('load', indexSwiper);
window.addEventListener('resize', indexSwiper);

// bootstrap-modal
var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});