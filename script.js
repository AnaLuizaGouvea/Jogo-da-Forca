const palavras = ["animal", "dicas", "moeda"] //array de palavras
const letrasErradas = [] //vai armazenar as letras erradas
const letrasCertas = [] //vai armazenas as letras certas
const images = ["images/6.png", "images/5.png", "images/4.png", "images/3.png", "images/2.png", "images/1.png"]

//pega a letra que foi digitada verifica se tá entre a-z
document.addEventListener("keydown", (evento) =>{ //identifica a tecla apertada
    if(/^[a-zA-Z]$/.test(evento.key)){
        const letra = evento.key.toLowerCase() //coloca tudo em minusculo
    
        if(letrasErradas.includes(letra) || letrasCertas.includes(letra)){ 
            avisoLetraRepetida()
        }else{
            if(palavraSorteada.includes(letra)){
                letrasCertas.push(letra)//add no array
            }else{
                letrasErradas.push(letra)//add no arry
            }
        }
        atualizarJogo()
    }
})

//após o jogo ser iniciado troca a escrita do botão
document.getElementById("btn-iniciar").addEventListener("click", function(){
    this.textContent = "Jogar Novamente"
})

//restaura tudo para os valores iniciar
function iniciarJogo(){
    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)] //floor arredonda pra inteiro, random decimal
    letrasErradas.length = 0
    letrasCertas.length = 0
    document.getElementById("forca").src = "images/7.png"
    mostrarLetrasErradas()
    desenharForca()
}

function atualizarJogo(){
    mostrarLetrasErradas()
    mostrarLetrasCertas()
    desenharForca()
    setTimeout(function(){
        checarJogo()
    }, 500)
}

//pega a qtd de letras da palavra e coloca as linhas
function desenharLinhas(){
    const certa = document.querySelector(".palavra-certa")
    certa.innerHTML = ""
    var qtd = palavraSorteada.length 
    for(let i=0; i<qtd; i++){
        certa.innerHTML += `<span> _ </span>`
    }
}

function mostrarLetrasCertas(){
    const certa = document.querySelector(".palavra-certa")
    certa.innerHTML = ""
    palavraSorteada.split("").forEach(letra =>{ //valida se as letras fazem parte
        if(letrasCertas.includes(letra)){
            certa.innerHTML += `<span>${letra}</span>`
        }else{
            certa.innerHTML += `<span> _ </span>`
        }
    })
}

function mostrarLetrasErradas(){
    const errada = document.getElementById("letras-erradas")
    errada.innerHTML = letrasErradas.join(" - ")
}

function desenharForca(){
    const partesCorpo = document.getElementById("forca")
    for(let i=0; i<letrasErradas.length; i++){
        partesCorpo.setAttribute("src", images[i])
    }
}

function checarJogo(){
    const certa = document.querySelector(".palavra-certa")

    if(letrasErradas.length ==images.length){
        avisoVocePerdeu()
    }
    if(palavraSorteada === certa.innerText){
        avisoVoceGanhou()
    }
}

function avisoLetraRepetida(){
    alert("Você já usou essa letra")
}

function avisoVocePerdeu(){
    alert("VOCÊ PERDEU")
}

function avisoVoceGanhou(){
    alert("VOCÊ GANHOU!!!")
}