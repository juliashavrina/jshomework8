// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
// теги будут созданы браузером.*/
// function ready() {
//     console.log('все теги прогрузились');
// }
// document.addEventListener("DOMContentLoaded", ready);
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
// ресурсы страницы будут загружены.
// function pageload() {
//     console.log('страница загрузилась');
// }
// window.addEventListener("load", pageload);
// 3. При клике на какой - либо тег на странице в консоль должно выводиться
// сообщение наподобие:
//    Класс "super_element"присутствует в элементе "div".
// сообщение должно определять присутствует или отсутствует класс "super_element"
// у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// которому был совершен клик.Необходимо использовать делегирование.

// document.addEventListener('click', function(event) {
//     let target = event.target
//     if (target.matches('.super_element')) {
//         console.log('Класс .super_element  есть в ' + target.tagName.toLowerCase());
//     } else {
//         console.log('Класс .super_element  нет  в ' + target.tagName.toLowerCase());
//     }
// })

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
//     "Вы навели на textarea."
// const textEl = document.querySelector('textarea');
// textEl.addEventListener('mouseover', function() {
//     console.log('Вы навели на textarea');
// });

// 5.Необходимо повесить событие клика на тег ul.В обработчике события в
// консоль необходимо выводить текст, который записан внутри элемента кнопки,
// по которой был произведен клик.
// Если клик был не по кнопке, то ничего выводить не нужно.
// Необходимо использовать делегирование.
// const ulEl = document.querySelector('ul');
// ulEl.addEventListener('click', e => console.log(e.target.textContent));
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только
// потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul ?
// Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Это происходит потому что сработал принцип всплытия,
// т.е.настуление события сначала срабатывает на самом вложенном элементе, а затем на его родителе
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
// const colorUl = document.querySelectorAll("li");
// console.log(colorUl)
// for (let i = 1; i < colorUl.length; i = i + 2) {
//     colorUl[i].style.backgroundColor = "blue";
// }
//Второй способ в  css файле

//