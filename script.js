function entrar(){

  let senha = document.getElementById("senha").value;

  if(senha == "11122025"){

    document.getElementById("login").style.display = "none";

    document.getElementById("site").style.display = "block";

  }else{

    alert("Senha incorreta ❤️");

  }

}