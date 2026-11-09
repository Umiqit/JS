// Установка таймера
// Для установки таймера используется объект Date() и метод setTimeout() объекта Window
// setTimeout("doClock()", 1000) — 1 сек = 1000 миллисекунд,
// doClock() — функция, в которой объявляем объект Date() и указываем
// имя текстового поля Date(), в которое выводится таймер

function doClock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    // 1. Вывести таймер в поле формы
    document.clockForm.clock.value = hours + ":" + minutes + ":" + seconds;

    // 2. Вывести таймер в определённое заданное место страницы
    document.getElementById("clockPlace").innerHTML = "Время на странице: " +
        hours + ":" + minutes + ":" + seconds;

    // 3. Установить бегущую строку в поле формы
    var runString = "Текущее время: " + hours + ":" + minutes + ":" + seconds + "   ";
    document.runForm.runline.value = runString.substring(3) + runString.substring(0, 3);

    setTimeout("doClock()", 1000);
}
