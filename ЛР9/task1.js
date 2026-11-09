// Задание 1
// Используя методы объекта document open() и close(), реализовать код,
// где по нажатию кнопки «Тест» выводятся линии по центру,
// с начальным размером от 5 до 100 с шагом 5

function drawLines() {
    document.open();  // открыть поток вывода документа
    for (var width = 5; width <= 100; width += 5) {
        document.writeln("<hr align='center' width='" + width + "'>");
    }
    document.close(); // закрыть поток вывода документа
}
