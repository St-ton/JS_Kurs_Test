'use strict';
// const storeName = 'My awesome store';

// const storeDescription = {
//   budget: 10000,
//   employees: ['Alex', 'John', 'Sam'],
//   products: {
//     soap: 20,
//     water: 5,
//   },
//   open: true,
// };

// alert('Hello');

// const result = confirm('If you 18 year?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '');
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = +prompt('Ваш возвраст?', '');

// // document.write(answers);

// console.log(typeof answers);
// console.log(typeof answers[0]);
// console.log(typeof answers[1]);
// console.log(typeof answers[2]);

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const nameUser = prompt('Как Вас зовут', ' ');
// alert(`Привет ${nameUser}`);

// console.log('arr' + '-object');
// console.log(4 + '5');

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
