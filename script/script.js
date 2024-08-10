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
    
    nameError.textContent = "Введіть ім'я";
    return false;
  } 

  // Валидация email
  if (email === "") {
    emailError.style.color= "#ef233c";
    emailError.textContent = "Введіть email";
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.style.color= "#ef233c";
    emailError.textContent = "Введіть коректний email";
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
      setTimeout(() => {
        document.getElementById("done-loading").style.display = "none";
      }, 3000);

      setTimeout(() => {
        document.getElementById("popup__button_span").style.display = "block";
      }, 3100);
      
    })
    .catch(function(error) {
      document.getElementById("loading-spinner").style.display = "none";
      document.getElementById("error-loading").style.display = "block";
      setTimeout(() => {
        document.getElementById("error-loading").style.display = "none";
      }, 2500);

      setTimeout(() => {
        document.getElementById("popup__button_span").style.display = "block";
      }, 2600);

})
}
// Обработчик события "отправить"
document.getElementById("popup__button").addEventListener("click", function() {
  sendMail();
  
});



var langArr = {
  "header": {
      "ua": {
          "features": "Особливості",
          "audience": "Аудиторія",
          "services": "Послуги",
          "reviews": "Відгуки",
          "faq": "FAQ",
          "leave-request": "Залишити заявку"
      },
      "de": {
          "features": "Funktionen",
          "audience": "Zielgruppe",
          "services": "Dienstleistungen",
          "reviews": "Bewertungen",
          "faq": "FAQ",
          "leave-request": "Anfrage stellen"
      },
      "en": {
          "features": "Features",
          "audience": "Audience",
          "services": "Services",
          "reviews": "Reviews",
          "faq": "FAQ",
          "leave-request": "Leave a Request"
      }
  },
  "hero": {
      "ua": {
          "title": "ILKI - ваш провідник в всесвіт електронної комерції",
          "text": "Допоможемо вам відкрити власний інтернет-бізнес на платформі Shopfiy всьго за 3 дні! <br> Або покращемо ваш вже існуючий магазин!✨",
          "button": "Почати →"
      },
      "de": {
          "title": "ILKI - Ihr Führer in die Welt des E-Commerce",
          "text": "Wir helfen Ihnen, Ihr eigenes Online-Geschäft auf der Shopify-Plattform in nur 3 Tagen zu eröffnen! <br> Oder wir verbessern Ihren bestehenden Shop!✨",
          "button": "Starten →"
      },
      "en": {
          "title": "ILKI - your guide to the world of e-commerce",
          "text": "We will help you open your own online business on the Shopify platform in just 3 days! <br> Or we will improve your existing store!✨",
          "button": "Get Started →"
      }
  },
  "features": {
      "ua": {
          "label": "Особливості",
          "title": "Чому саме ми?",
          "speed": {
              "title": "Швидкість",
              "text": "Виконаємо завдання будь-якої складності в найбільш короткі терміни!"
          },
          "solutions": {
              "title": "Рішення",
              "text": "Вашу найкреативнішу задумку ніхто не може реалізувати? ILKI на допомогу! Ми знайдемо не менш креативне рішення для ваших ідей."
          },
          "price": {
              "title": "Ціник",
              "text": "Якщо ви знайдете компанію, яка запропонує вам розробити якісний та швидкий інтернет-магазин за кращою ціною, ми зробимо ваш магазин абсолютно безкоштовно!"
          }
      },
      "de": {
          "label": "Funktionen",
          "title": "Warum wir?",
          "speed": {
              "title": "Geschwindigkeit",
              "text": "Wir erledigen Aufgaben jeder Komplexität in kürzester Zeit!"
          },
          "solutions": {
              "title": "Lösungen",
              "text": "Kann niemand Ihre kreativste Idee umsetzen? ILKI hilft! Wir finden eine ebenso kreative Lösung für Ihre Ideen."
          },
          "price": {
              "title": "Preis",
              "text": "Wenn Sie ein Unternehmen finden, das Ihnen anbietet, einen hochwertigen und schnellen Online-Shop zu einem besseren Preis zu entwickeln, machen wir Ihren Shop absolut kostenlos!"
          }
      },
      "en": {
          "label": "Features",
          "title": "Why choose us?",
          "speed": {
              "title": "Speed",
              "text": "We will complete tasks of any complexity in the shortest possible time!"
          },
          "solutions": {
              "title": "Solutions",
              "text": "Can't anyone implement your most creative idea? ILKI to the rescue! We will find an equally creative solution for your ideas."
          },
          "price": {
              "title": "Price",
              "text": "If you find a company that offers you to develop a high-quality and fast online store at a better price, we will make your store absolutely free!"
          }
      }
  }
}

