$(document).ready(function() {
  const quizData = [
    {
      question: "Вопрос 1",
      options: ["XBOX", "SONY"],
      image: "image1.jpg"
    },
    // Другие объекты с данными для каждого блока
  ];

  let currentSlide = 0;

  function showSlide(index) {
    // Скрыть все блоки квиза
    $(".quiz-slide").hide();
    // Показать текущий блок
    $(".quiz-slide").eq(index).show();
  }

  showSlide(currentSlide);

  $("#next-btn").click(function() {
    currentSlide++;
    showSlide(currentSlide);
  });

  $("#prev-btn").click(function() {
    currentSlide--;
    showSlide(currentSlide);
  });

  $("#quiz-container").on("change", "input[type='radio']", function() {
    // Обработка выбранного ответа, сохранение в JSON и т.д.
  });

  // Добавьте код для обработки JSON ответов и отправки данных через Ajax
});