// 1. Criando um novo objeto XMLHttpRequest
let xhr = new XMLHttpRequest();

// 2. Configurando: requisição GET para a URL da API de exemplo
xhr.open('GET', 'https://swapi.co/api/people/');

// 3. Enviando a requisição
xhr.send();

// 4. Os métodos abaixo são executados quando enviamos a requisição
xhr.onload = function() {
    if (xhr.status != 200) { // Analiza o código de status HTTP da resposta
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ex. 404: Not Found
    } 
    else { // Exibe o resultado
        alert(`Done, got ${xhr.response.length} bytes`);
    }
};

xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        alert(`Received ${event.loaded} of ${event.total} bytes`);
    } 
    else {
        alert(`Received ${event.loaded} bytes`);
    }
};

xhr.onerror = function() {
    alert("Request failed");
};