// Задание 5.2
// Функция последовательного вывода картинок с заданным числом итераций.
// Задать в миллисекундах частоту мелькания кадров (каждую секунду).
// Для загрузки документа браузером использовать событие onLoad.

i = 0;
count = 0;      // счётчик итераций
iterations = 10; // заданное число итераций

img_a = new Array();
img_a[0] = new Image();
img_a[1] = new Image();
img_a[2] = new Image();
img_a[3] = new Image();
img_a[4] = new Image();

img_a[0].src = "pic2/image1.jpg";
img_a[1].src = "pic2/image2.jpg";
img_a[2].src = "pic2/image3.jpg";
img_a[3].src = "pic2/image4.jpg";
img_a[4].src = "pic2/image5.jpg";

function img_b() {
    document.images[0].src = img_a[i].src;
    i++;
    if (i > 4) i = 0;
    count++;
    if (count < iterations) { // пока не достигнуто заданное число итераций
        setTimeout("img_b()", 1000); // частота мелькания кадров — каждую секунду
    }
}
