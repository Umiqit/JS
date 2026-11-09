// Задание 2 — динамическое управление окном браузера

// а) текущее окно закрывается
function openAndClose() {
    w = window.open('', 'NEW', 'width=500, height=500');
    window.close();
}

// б) текущее окно не закрывается
function openAndStay() {
    w = window.open('', 'NEW', 'width=500, height=500');
}
