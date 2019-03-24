let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://swapi.co/api/people/1/');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.response);
};