const inputText = document.querySelectorAll(".input-text")
const inputSubmit = document.querySelector('#enviar')
const campoObrigatorio = document.querySelector('.campos')
console.log(campoObrigatorio);

inputText.forEach(function (input) {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
        } else {
            input.classList.remove("campo-preenchido")
        }
    });
})

inputSubmit.addEventListener('click', () => {
    inputText.forEach(function (input) {
       if(input.value === ""){
        input.classList.add('erro')
        input.nextElementSibling.classList.add('erro')
        campoObrigatorio.classList.add('obrigatorios')
       } else {
        input.classList.remove('erro')
        input.nextElementSibling.classList.remove('erro')
        campoObrigatorio.classList.remove('obrigatorios')
       }
    })
});

1