'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
console.log(book);

books.prepend(book[1]);
books.append(book[2]);
book[4].after(book[3]);

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

const headers = document.querySelectorAll('.book a');
headers[2].textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const lists = document.querySelectorAll('.book ul');

const list2 = lists[1].querySelectorAll('li');
list2[1].after(list2[3]);
list2[3].after(list2[6]);
list2[6].after(list2[8]);
list2[9].after(list2[2]);
const list5 = lists[4].querySelectorAll('li');
list5[1].after(list5[9]);
list5[9].after(list5[3]);
list5[3].after(list5[4]);
list5[7].after(list5[5]);

const list6 = lists[5].querySelectorAll('li');
console.log(list6);

let newChapter = document.createElement('li');
newChapter.append(document.createTextNode('Глава 8: За пределами ES6'));
list6[8].after(newChapter);

