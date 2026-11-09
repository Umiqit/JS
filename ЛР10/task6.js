// Задание 6
// Используя задания 4-5 реализовать запуск и остановку динамического
// показа изображений по требованию пользователя.
// Для остановки и старта мультипликации применяются методы
// setTimeout() и clearTimeout().

i = 0;
timer = 0;

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
    timer = setTimeout("img_b()", 1000);
}

// запуск динамического показа по требованию пользователя
function startShow() {
    if (timer == 0) { // не запускать повторно, если уже идёт показ
        img_b();
    }
}

// остановка динамического показа по требованию пользователя
function stopShow() {
    clearTimeout(timer);
    timer = 0;
}
