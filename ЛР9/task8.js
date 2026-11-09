// Задание 8 — объект Navigator
// Метод javaEnabled() выполняет проверку того, включены ли возможности
// языка Java в клиентском браузере.
// Код набран и проанализирован по методичке.

function display_browserinfo() {
    var version = navigator.appVersion.split(';');
    version = version[1].replace(/\s+/,' ').split(' ');
    version = version[2];
    document.write("Browser name: " + navigator.appName + '<BR>');
    document.write("Browser version: " + version + '<BR>');
    document.write("Language: " + navigator.browserLanguage + '<BR>');
    document.write("operating system platform: " + navigator.platform + '<BR>');
    // Результат, который получается при отображении веб-страницы
    if (navigator.javaEnabled())
        document.write("Java is enabled." + '<BR>');
    else
        document.write("Java is not enabled." + '<BR>');
}
