import Login from "./pages/Login";

const teste = document.querySelector(".butt-entrar");

teste.addEventListener("click", function(e){
    e.preventDefault();
    
    const cpf = document.querySelector("#login-cpf");

    const value = cpf.value;

    
});

const pasedToJson = JSON.stringify({cpf:cpf.value});