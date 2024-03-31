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

"use strict"

document.addEventListener("DOMContentLoaded", function() { 
  const form =  document.getElementById('popup');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < array.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      
      if (input.classList.contains('_email')){
          if (emailTest(input)){
            formAddError(input);
            error++;

          }
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
        formAddError(input);
        error++
      } else{
        if (input.value === ''){
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');

  }

  function emailTest(input) {
    return  !/^\w+([\.-]?\w+)*@\w+([\.-]P\w+)*(\.\w{2,8})+$/.test(input.value);
    
  }
});