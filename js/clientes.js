const clientes = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:57519/api/Clientes", requestOptions)
    .then(response => response.text())
    .then(result => {
      result.map(value => {
        const para = document.createElement("p");
        const node = document.createTextNode(value.Nombre);
        para.appendChild(node);
        const element = document.getElementById("container");
        element.appendChild(para);
      })
    })
    .catch(error => console.log('error', error));
}