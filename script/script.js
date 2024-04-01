var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});




function sendMail(){
  let parms = {
      name : document.getElementById("formName").value,
      email: document.getElementById("formEmail").value,
      telegramname : document.getElementById("telegramname").value,
      formMessage : document.getElementById("formMessage").value,
  }



  emailjs.send("service_01k0olt","template_myr3kyq",parms).then(alert("Email Send"))
}