<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Проверка наличия имени
    if (empty($name)) {
        $errors[] = "Введите имя";
    }

    // Проверка корректности email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Введите корректный email";
    }

    // Если есть ошибки, выводим их
    if (!empty($errors)) {
        echo "<p>Возникли следующие ошибки:</p>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    } else {
        // Если ошибок нет, можно обработать данные
        // Например, сохранить их в базе данных
        // ...
        echo "<p>Данные успешно отправлены</p>";
    }
}
?>