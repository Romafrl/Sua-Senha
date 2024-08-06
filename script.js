let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let senha = document.querySelector("#senha")

let containerPassword = document.querySelector("#container-senha")

let charset = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
   
    let pass = ""

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide")
    senha.innerHTML = pass
    novaSenha = pass
}

function copyPassword(){
    alert("Cópiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}