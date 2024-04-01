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


// Add a click event listener to the submit button
function validateForm() {
  // Получение значений из полей формы
  const name = document.getElementById("formName").value;
  const email = document.getElementById("formEmail").value;

  // Очистка ошибок
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  nameError.textContent = "";
  emailError.textContent = "";

  // Валидация имени
  if (name === "") {
    nameError.style.color= "#ef233c";
    
    nameError.textContent = "Введите имя";
    return false;
  }
  }

  // Валидация email
  if (email === "") {
    emailError.style.color= "#ef233c";
    emailError.textContent = "Введите email";
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.style.color= "#ef233c";
    emailError.textContent = "Введите корректный email";
    return false;
  }

  // Если все поля заполнены верно, возвращаем true
  return true;
}

// Функция отправки email
function sendMail() {
  // Если валидация не прошла, не отправляем email
  if (!validateForm()) {
    return;
  }

  // Отобразить индикатор загрузки
  document.getElementById("loading-spinner").style.display = "block";
  document.getElementById("popup__button_span").style.display = "none";

  // Получение значений из полей формы
  const name = document.getElementById("formName").value;
  const email = document.getElementById("formEmail").value;
  const telegramname = document.getElementById("telegramname").value;
  const formMessage = document.getElementById("formMessage").value;
  const selectedValue = document.getElementById("popup__select").value;

  // Подготовка данных для emailjs
  let parms = {
    name: name,
    email: email,
    telegramname: telegramname,
    formMessage: formMessage,
    select: selectedValue,
  };

  // Отправка email
  emailjs.send("service_01k0olt", "template_myr3kyq", parms)
    .then(function(response) {
      // Скрыть индикатор загрузки
      document.getElementById("loading-spinner").style.display = "none";
      document.getElementById("done-loading").style.display = "block";
    })
    .catch(function(error) {
      // Скрыть индикатор загрузки в случае ошибки
      document.getElementById("loading-spinner").style.display = "none";
      alert("Error sending email: " + error);
    });
}

// Обработчик события "отправить"
document.getElementById("popup__button").addEventListener("click", function() {
  sendMail();
});
