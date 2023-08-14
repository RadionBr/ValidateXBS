$("#final-form").validate({
  rules: {
    fname: {
      required: true,
      minlength: 3,
      maxlength: 50,
      lettersonly: true
    },
    lname: {
      required: true,
      minlength: 3,
      maxlength: 50,
      lettersonly: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true
      // Добавьте правила для валидации телефона (используя mask и intlTelInput)
    }
  },
  messages: {
    fname: {
      required: "Пожалуйста, введите имя",
      minlength: "Имя должно быть не короче 3 символов",
      lettersonly: "Имя должно содержать только буквы"
    },
    lname: {
      required: "Пожалуйста, введите фамилию",
      minlength: "Фамилия должна быть не короче 3 символов",
      lettersonly: "Фамилия должна содержать только буквы"
    },
    email: {
      required: "Пожалуйста, введите email",
      email: "Пожалуйста, введите корректный email"
    },
    phone: {
      required: "Пожалуйста, введите телефон"
      // Добавьте сообщение об ошибке для телефона
    }
  },
  submitHandler: function(form) {
    // Отправка данных через Ajax
    $.ajax({
      url: "process.php",
      type: "POST",
      data: $(form).serialize(),
      success: function(response) {
        if (response === "success") {
          alert("Форма успешно отправлена!");
        } else {
          alert("Произошла ошибка при отправке формы.");
        }
      }
    });
  }
});