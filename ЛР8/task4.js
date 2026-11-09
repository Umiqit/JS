// Задание 4
// При нажатии на одну гиперссылку открывается новое окно,
// при нажатии на другую гиперссылку закрывается текущее окно.
// Этот приём позволяет избежать перегрузки страницы при щелчке по ссылке.

var w;

function openNewWindow() {
    w = window.open('', 'NEW', 'width=250, height=250');
    w.document.write('<body style="background-color:yellow">это новое окно</body>');
}

function closeWindow() {
    window.close();
}
