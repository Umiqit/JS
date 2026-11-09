// Задание 10
// Проверка на правильность заполнения полей формы.
// Если поля формы не заполнены, то выдается сообщение по каждому из полей.
// В случае если все поля заполнены, то нажимается кнопка «Отправить»
// и генерируется новое окно, в которое считываются данные введенные
// пользователем в поля формы. Если все введено правильно, то нажимаем «ОК»
// и данные отправляются на сервер.

function checkFields() {
    var f = document.dataForm;
    var message = "";

    // сообщение по каждому из незаполненных полей
    if (f.userName.value == "") {
        message += "Не заполнено поле: Ваше имя\n";
    }
    if (f.address.value == "") {
        message += "Не заполнено поле: Адрес\n";
    }
    if (f.email.value == "") {
        message += "Не заполнено поле: Email\n";
    }

    if (message != "") {
        alert(message);
        return;
    }

    // генерируется новое окно, в которое считываются данные
    var w = window.open('', 'NEW', 'width=300, height=200');
    w.document.write("Ваше имя: " + f.userName.value + "<br>");
    w.document.write("Адрес: " + f.address.value + "<br>");
    w.document.write("Email: " + f.email.value + "<br><br>");
    w.document.write("<input type='button' value='OK' onclick='window.close()'>");
}
