function submitData(name, email) {
  const userData = { name: name, email: email };

  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(data => {
      // Assuming the response object contains a property called 'id'
      const newId = data.id;
      const idElement = document.createElement('p');
      idElement.textContent = newId;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorMessageElement = document.createElement('p');
      errorMessageElement.textContent = error.message;
      document.body.appendChild(errorMessageElement);
    });
}


submitData('Steve', 'steve@steve.com');
