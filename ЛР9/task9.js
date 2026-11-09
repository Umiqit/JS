// Задание 9
// Используя объект location документа, сгенерировать код, позволяющий
// осуществлять извлечение различных частей URL-адреса,
// название протокола для текущего URL-адреса, имя пути текущего URL-адреса,
// перезагрузить текущую страницу, заменить текущую страницу новой
// страницей с заданным именем.

function showUrlParts() {
    document.getElementById("info").innerHTML =
        "Полный URL-адрес (href): " + location.href + "<br>" +
        "Название протокола (protocol): " + location.protocol + "<br>" +
        "Имя хоста (host): " + location.host + "<br>" +
        "Имя пути текущего URL-адреса (pathname): " + location.pathname;
}

function reloadPage() {
    location.reload(); // перезагрузить текущую страницу
}

function replacePage() {
    location.replace("Ex2.html"); // заменить текущую страницу новой страницей с заданным именем
}
