// Задание 2 — по нажатию на кнопку листать изображения
// (Пример 2. Меняется картинка по нажатию кнопки)

var flag = 0;

function changeImage() {
    if (flag == 0) {
        document.img.src = 'pic2/image1.jpg';
        flag = 1;
    } else {
        document.img.src = 'pic2/image2.jpg';
        flag = 0;
    }
}
