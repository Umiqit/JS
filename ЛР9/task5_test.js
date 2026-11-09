// Задание 5, п.2
// Используя свойства объекта document location и replace сгенерировать код:
// если вводите имя и пароль «1» и нажимаете кнопку «Test» — отображается документ 1,
// если вводите имя и пароль «0» — отображается документ 2.
// Так же добавлена проверка ввода имени и пароля.

function checkUser() {
    var name = document.getElementById("userName").value;
    var password = document.getElementById("userPassword").value;

    // Проверка ввода имени и пароля: если не введено имя или пароль — выводится сообщение
    if (name == "" || password == "") {
        alert("Очень invalid User");
        return;
    }

    if (name == "1" && password == "1") {
        window.location.replace("doc1.html");   // отображается документ 1
    } else if (name == "0" && password == "0") {
        window.location.replace("doc2.html");   // отображается документ 2
    } else {
        alert("Очень invalid User");
    }
}
