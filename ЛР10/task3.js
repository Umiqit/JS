// Задание 3
// Сгенерировать код, позволяющий по щелчку на ссылки выводить
// заданный текст в указанном месте веб-страницы.

function showText(id) {
    // скрываем оба блока
    document.getElementById("test2").style.visibility = "hidden";
    document.getElementById("test3").style.visibility = "hidden";
    // показываем нужный текст в заданном месте страницы
    document.getElementById(id).style.visibility = "visible";
}
