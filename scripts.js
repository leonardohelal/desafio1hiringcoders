function saveOnLocalStorage() { 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = { name, email };	
  
    console.log(data);
    
    if (data.name !== "" && data.email !== "") {    
      let convertData = JSON.stringify(data);
  
      if (localStorage.cont) {
        localStorage.cont = Number(localStorage.cont) + 1;
      } else {
        localStorage.cont = 1;
      }
  
      localStorage.setItem("client: " + localStorage.cont, convertData);
  
      alert("Email cadastrado com sucesso!");
    }
  }