const palavras = ["animal", "dicas", "moeda"] //array de palavras
const palavraJogada = palavras[Math.floor(Math.random() * palavras.length)] //floor arredonda pra inteiro, random decimal
const letrasErradas = [] //vai armazenar as letras erradas
const letrasCertas = [] //vai armazenas as letras certas


document.addEventListener("keydown", (evento) =>{ //identifica a tecla apertada
    const codigo = evento.keyCode //cade letra tem seu cod, entre 65-90 A-Z
    if(codigo >= 65 && codigo <=90){
        const letra = evento.key //pega o cod da letra digitada
        
        if(letrasErradas.includes(letra) || letrasCertas.includes(letra)){ 
            avisoLetraRepetida()
        }else{
            if(palavraJogada.includes(letra)){
                letrasCertas.push(letra)//add no array
            }else{
                letrasErradas.push(letra)//add no arry
            }
        }
        atualizarJogo()
    }
})

function atualizarJogo(){
    mostrarLetrasErradas()
    mostrarLetrasCertas()
    desenharForca()
    checarJogo()
}

function mostrarLetrasErradas(){
    const errada = document.querySelector(".letras-erradas")
    errada.innerHTML = "<h3>Letras Erradas</h3>"
    letrasErradas.forEach(letra =>{
        errada.innerHTML += `<span>${letra}</span>` //${} é uma variavel
    })
}

function mostrarLetrasCertas(){
    const certa = document.querySelector(".palavra-certa")
    certa.innerHTML = " "
    palavraJogada.split("").forEach(letra =>{ //valida se as letras fazem parte
        if(letrasCertas.includes(letra)){
            certa.innerHTML += `<span>${letra}</span>`
        }else{
            certa.innerHTML += `<span> _ </span>`
        }
    })
    
}

function desenharForca(){
    const partesCorpo = document.querySelectorAll(".forca-parte")
    for(let i=0; i<letrasErradas.length; i++){
        partesCorpo[i].style.display = "block" //ESSA PARTE QUE TENHO QUE MEXER PRA PODER REALIZAR A SUBSTITUIÇÃO DAS IMAGENS
    }
}

function checarJogo(){
    let mensagem =""
    const certa = document.querySelector(".palavra-certa")
    const partesCorpo = document.querySelectorAll(".forca-parte")

    if(letrasErradas.length === partesCorpo.length){
       // alert("Você perdeu")
        mensagem = "Fim de Jogo"
    }
    if(palavraJogada === certa.innerText){
        mensagem = "Você ganhou"
    }
    if(mensagem){
        document.querySelector("#mensagem").innerHTML = mensagem
        document.querySelector(".popup").style.display = "flex"
    }
}

function avisoLetraRepetida(){
    alert("Você já usou essa letra")
}

function reiniciar(){
    window.location.reload()
}