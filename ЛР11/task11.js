// Задание 11
// При нажатии кнопки «ОК» появляется окно заданного размера, в которое
// считываются данные введенные и выбранные из полей формы.
// Данное окно закрывается по нажатию ссылки «Закрыть окно».
// Форма имеет объект переключатель, состоящий из:
//   1. типа radio, при выборе одной из них в новом окне считывается выбранное значение.
//   2. из двух не связанных типа checkbox Soft и Hard.
//   3. из двух связанных типа checkbox Soft и Hard.

function showData() {
    var f = document.fullForm;

    var period = "";
    for (var i = 0; i < f.period.length; i++) {
        if (f.period[i].checked) {
            period = f.period[i].value; // выбранное значение radio
        }
    }

    var w = window.open('', 'NEW', 'width=400, height=300');
    w.document.write("имя " + f.userName.value + "<br>");
    w.document.write("E-Mail " + f.userEmail.value + "<br>");
    w.document.write("Отправлять извещения " + period + "<br>");

    // два не связанных checkbox
    if (f.soft1.checked) w.document.write("Soft<br>");
    if (f.hard1.checked) w.document.write("Hard<br>");

    // два связанных checkbox
    if (f.soft2.checked) w.document.write("soft<br>");
    if (f.hard2.checked) w.document.write("hard<br>");

    w.document.write('<br><a href="#" onclick="window.close(); return false;">Закрыть окно</a>');
}
