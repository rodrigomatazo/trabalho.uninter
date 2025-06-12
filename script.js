let botao = document.querySelector("#botao");
botao.style.background="pink";

botao.addEventListener("click",e =>{
    botao.style.background="green";
    botao.innerHTML="Seja bem-vindo à nossa página!";
}) 
