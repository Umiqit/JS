// Задание 4
// Первый список предназначен для выбора цвета, второй — размера некоторого предмета.
// Кнопка Reset возвращает списки в исходное состояние.
// Если сделать щелчок по кнопке Complete, должно отобразиться
// выбранный цвет и размер на экране в виде диалоговой панели с сообщением.

function completeChoice() {
    var f = document.listForm;

    // выбранный цвет из первого списка
    var color = f.colorList.options[f.colorList.selectedIndex].text;

    // выбранные размеры из второго списка (список с множественным выбором)
    var sizes = "";
    for (var i = 0; i < f.sizeList.options.length; i++) {
        if (f.sizeList.options[i].selected) {
            sizes += f.sizeList.options[i].text + " ";
        }
    }

    // диалоговая панель с сообщением
    alert("Цвет: " + color + "\nРазмер: " + sizes);
}
