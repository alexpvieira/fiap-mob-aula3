let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://swapi.co/api/people/1/');

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send();

xhr.onload = function() {
    console.log(xhr.getResponseHeader('Content-Type'));
    console.log(xhr.getAllResponseHeaders());
};