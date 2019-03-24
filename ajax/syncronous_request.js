let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://swapi.co/api/people/1/', false);

xhr.send();

xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.response);
};

xhr.onerror = function() {
    alert("Request failed");
};