// main.js — внешний файл с кодом JavaScript (кодировка UTF-8)

alert("Это информационное окно alert() из внешнего файла main.js");

let answer = confirm("Это окно confirm() из внешнего файла. Нажмите ОК или Отмена");
document.write("Вы нажали в confirm(): " + answer + "<br>");

let name = prompt("Это окно prompt() из внешнего файла. Введите что-нибудь:", "значение по умолчанию");
document.write("Вы ввели в prompt(): " + name + "<br>");

document.write("<b>Текст, выведенный в окно браузера из внешнего файла main.js</b>");
