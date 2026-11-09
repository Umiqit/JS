// Задание 7
// Код позволяет пользователю листать изображения
// по нажатию кнопок как вперед, так и назад.

var images = new Array("apple.jpg", "leaf.jpg", "drop.jpg");
var i = 0;

// листать изображения вперед
function nextImage() {
    i++;
    if (i > images.length - 1) i = 0;
    document.slide.src = images[i];
}

// листать изображения назад
function prevImage() {
    i--;
    if (i < 0) i = images.length - 1;
    document.slide.src = images[i];
}
