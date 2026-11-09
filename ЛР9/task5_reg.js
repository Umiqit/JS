// Задание 5, Пример 1 — создание страницы регистрации пользователя

function init_form() {
    document.title = 'Регистрация';                // определяет заголовок документа
    document.forms["fmlogin"].txtUsername.focus(); // делает активным элемент управления «текстовое поле» формы
}

function display_status() {
    // проверяет, не остались ли пустыми элементы управления txtUsername и txtPassword
    if (document.getElementById('txtUsername').value != '' &&
        document.getElementById('txtPassword').value != '') {
        document.writeln('Вход в систему успешно выполнен');
    } else {
        alert('Введите имя пользователя и пароль');
    }
}
