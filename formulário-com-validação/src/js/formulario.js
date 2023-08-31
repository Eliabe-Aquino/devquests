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
        input.classList.add('ativo')
        input.nextElementSibling.classList.add('ativo')
        campoObrigatorio.classList.add('ativo')
       } else {
        input.classList.remove('ativo')
        input.nextElementSibling.classList.remove('ativo')
        campoObrigatorio.classList.remove('ativo')
       }
    })
});

1