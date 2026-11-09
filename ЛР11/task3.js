// Задание 3
// Если нажать на кнопку Create Page, будет вызвана функция JavaScript,
// которая определит текущее состояние переключателей и сформирует
// новый документ HTML. Этот документ появится в окне браузера
// вместо исходного. С помощью кнопки Reset можно установить
// начальное состояние переключателей.

function createPage() {
    var f = document.pageForm;

    document.open(); // формируем новый документ HTML

    // Если включен переключатель Show title, создаваемый сценарием
    // документ HTML будет снабжен заголовком
    if (f.title.checked) {
        document.write("<h1>Созданный документ</h1>");
    }

    // Переключатель Table view влияет на способ отображения информации:
    // если он включен, информация показана в табличном виде
    if (f.tableview.checked) {
        document.write("<table border='1' cellpadding='5'>");
    }

    // Переключатели с зависимой фиксацией задают цвет строк
    // при отображении информации в виде списка или цвет названий
    // переключателей при табличном отображении
    var color = "Blue";
    for (var i = 0; i < f.color.length; i++) {
        if (f.color[i].checked) {
            color = f.color[i].value;
        }
    }

    document.write(f.tableview.checked
        ? "<tr><td><font color='" + color + "'>Название: Model 1</font></td></tr>"
        : "<font color='" + color + "'>Название: Model 1</font><br>");

    document.write(f.tableview.checked
        ? "<tr><td><font color='" + color + "'>Название: Model 2</font></td></tr>"
        : "<font color='" + color + "'>Название: Model 2</font><br>");

    document.write(f.tableview.checked
        ? "<tr><td><font color='" + color + "'>Название: Model 3</font></td></tr>"
        : "<font color='" + color + "'>Название: Model 3</font><br>");

    if (f.tableview.checked) {
        document.write("</table>");
    }

    // При включении переключателя Show horizontal lines информация
    // выделяется сверху и снизу горизонтальными разделительными линиями
    if (f.horlines.checked) {
        document.write("<hr>");
    }

    document.close();
}
