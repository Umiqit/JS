// Задание 5
// Список цветов позволяет изменять цвет фона по выбору пользователя.
// При нажатии «Отправить» подтверждаем выбор и меняем цвет фона страницы.

function applyColor() {
    var f = document.orderForm;

    // если забыли выбрать цвет фона — предупреждаем
    if (f.forget.checked) {
        alert("Забыли выбрать цвет фона!");
        return;
    }

    var color = f.bgColor.options[f.bgColor.selectedIndex].text;

    // подтверждение выбора цвета фона
    if (confirm("Изменить цвет фона на " + color + "?")) {
        document.getElementById("pageBody").style.backgroundColor = f.bgColor.value;
    }
}
