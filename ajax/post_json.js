let xhr = new XMLHttpRequest();

xhr.open('POST', 'https://reqres.in/api/users/');

let json = JSON.stringify({
    name: "morpheus",
    job: "leader"
});

xhr.responseType = 'json';

xhr.send(json);

xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.response);
};