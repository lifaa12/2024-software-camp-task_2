// swiper
const swiper = new Swiper('.swiper', {

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

// bootstrap-modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})