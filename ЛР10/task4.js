// Задание 4
// По щелчку на ссылки в области заданных координат будет появляться изображение.
// Изображениям задана одинаковая высота и ширина.

function showImage(id) {
    document.getElementById("imgA").style.visibility = "hidden";
    document.getElementById("imgB").style.visibility = "hidden";
    document.getElementById(id).style.visibility = "visible";
}
