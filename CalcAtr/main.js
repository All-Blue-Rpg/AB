// Variáveis globais para os atributos do personagem

// Bruto
exp = 400 // No mínimo 400, no máximo 20000
nivel = 1
atrBruto = [0,0,0,0,0] // A soma é no máximo a quantidade de xp

// Raciais
auxRaca = [0,0,2] // Auxiliar da Raça para determinar qual a Raça, qual a variação, qual a escolha feita (0 - força, 1 - destreza, 2 - ambos)
atrRaciais = [0,0,0,0,0] // Atributos em si

// EDC
auxEDC = 0
auxAtrEDC = [0,0,0,0]
atrEDC = [40,40,40,40]

// Arma
atrArma = [0,0,0,0,0]

// Total
atrTotal = [0,0,0,0,0]

// Onload
function carregando(){
    changeVariacao(0)
    somaBruto()
}

// Funções para atualizar o que mostra ao jogador

function soAtributos(){
    document.getElementById('DownAtrFic').style.display = "block"
    document.getElementById('DownAtrFut').style.display = "block"
    document.getElementById('labelUpload').style.display = "block"
    document.getElementById('DownFic').style.display = "none"
}

function fichaToda(){
    document.getElementById('DownAtrFic').style.display = "none"
    document.getElementById('DownAtrFut').style.display = "none"
    document.getElementById('labelUpload').style.display = "none"
    document.getElementById('DownFic').style.display = "block"
}

function attAtrRacialHTML(){
    if (auxRaca[2] == 2){
        document.getElementById("forcaRaca").innerHTML = atrRaciais[0]
        document.getElementById("destrezaRaca").innerHTML = atrRaciais[1]
    }
    else{
        document.getElementById("forcaRaca").innerHTML = atrRaciais[0]*(1 - auxRaca[2])
        document.getElementById("destrezaRaca").innerHTML = atrRaciais[1]*auxRaca[2]
    }
    document.getElementById("acertoRaca").innerHTML = atrRaciais[2]
    document.getElementById("reflexoRaca").innerHTML = atrRaciais[3]
    document.getElementById("constRaca").innerHTML = atrRaciais[4]
    attAtrTotal()
}

function attAtrEDCHTML(){
    document.getElementById("forcaEDC").innerHTML = nivel*atrEDC[0]*auxAtrEDC[0]
    document.getElementById("destrezaEDC").innerHTML = nivel*atrEDC[1]*auxAtrEDC[1]
    document.getElementById("acertoEDC").innerHTML = nivel*atrEDC[2]*auxAtrEDC[2]
    document.getElementById("reflexoEDC").innerHTML = nivel*atrEDC[3]*auxAtrEDC[3]
    attAtrTotal()
}

function attAtrTotal(){
    if (auxRaca[2] == 2){
        atrTotal[0] = atrBruto[0] + atrRaciais[0] + nivel*atrEDC[0]*auxAtrEDC[0]
        atrTotal[1] = atrBruto[1] + atrRaciais[1] + nivel*atrEDC[1]*auxAtrEDC[1]
    }
    else{
        atrTotal[0] = atrBruto[0] + atrRaciais[0]*(1 - auxRaca[2]) + nivel*atrEDC[0]*auxAtrEDC[0]
        atrTotal[1] = atrBruto[1] + atrRaciais[1]*auxRaca[2] + nivel*atrEDC[1]*auxAtrEDC[1]
    }
    atrTotal[2] = atrBruto[2] + atrRaciais[2] + nivel*atrEDC[2]*auxAtrEDC[2]
    atrTotal[3] = atrBruto[3] + atrRaciais[3] + nivel*atrEDC[3]*auxAtrEDC[3]
    atrTotal[4] = atrBruto[4] + atrRaciais[4]
    attAtrTotalHTML()
}

function attAtrTotalHTML(){
    document.getElementById("forcaTotal").innerHTML = atrTotal[0] + " " + escala(atrTotal[0])
    document.getElementById("destrezaTotal").innerHTML = atrTotal[1] + " " + escala(atrTotal[1])
    document.getElementById("acertoTotal").innerHTML = atrTotal[2] + " " + escala(atrTotal[2])
    document.getElementById("reflexoTotal").innerHTML = atrTotal[3] + " " + escala(atrTotal[3])
    document.getElementById("constTotal").innerHTML = atrTotal[4] + " " + escala(atrTotal[4])
}

function escala(valor){
    if (valor < 60){return "[Incompetente]"}
    else if(valor < 100){return "[Regular 1]"}
    else if(valor < 200){return "[Regular 2]"}
    else if(valor < 300){return "[Regular 3]"}
    else if(valor < 400){return "[Regular 4]"}
    else if(valor < 550){return "[Hábil 5]"}
    else if(valor < 700){return "[Hábil 6]"}
    else if(valor < 850){return "[Hábil 7]"}
    else if(valor < 1000){return "[Hábil 8]"}
    else if(valor < 1250){return "[Talentoso 9]"}
    else if(valor < 1500){return "[Talentoso 10]"}
    else if(valor < 1750){return "[Talentoso 11]"}
    else if(valor < 2000){return "[Talentoso 12]"}
    else if(valor < 2500){return "[Perito 13]"}
    else if(valor < 3000){return "[Perito 14]"}
    else if(valor < 3500){return "[Perito 15]"}
    else if(valor < 4000){return "[Perito 16]"}
    else if(valor < 4500){return "[Extravagante 17]"}
    else if(valor < 5000){return "[Extravagante 18]"}
    else if(valor < 5500){return "[Extravagante 19]"}
    else if(valor < 6000){return "[Extravagante 20]"}
    else if(valor < 6500){return "[Magnífico 21]"}
    else if(valor < 7000){return "[Magnífico 22]"}
    else if(valor < 7500){return "[Magnífico 23]"}
    else if(valor < 8000){return "[Magnífico 24]"}
    else if(valor < 8500){return "[Anormal 25]"}
    else if(valor < 9000){return "[Anormal 26]"}
    else if(valor < 9500){return "[Anormal 27]"}
    else if(valor < 10000){return "[Anormal 28]"}
    else if(valor < 10500){return "[Singular 29]"}
    else if(valor < 11000){return "[Singular 30]"}
    else if(valor < 11500){return "[Singular 31]"}
    else if(valor < 12000){return "[Singular 32]"}
    else if(valor < 12750){return "[Supremo 33]"}
    else if(valor < 13500){return "[Supremo 34]"}
    else if(valor < 14250){return "[Supremo 35]"}
    else if(valor < 15000){return "[Supremo 36]"}
    else if(valor < 15750){return "[Supremo 37]"}
    else if(valor < 16500){return "[Regular 38]"}
    else{return "[Lendário 39]"}
}

// Funções de Download e Upload

function DownloadAtributosFicha(){
    const a = document.createElement('a')
    a.style = 'display:none'
    document.body.appendChild(a)
    conteudo = fazerAtributosFicha()
    const blob = new Blob([conteudo], { type: 'octet/stream' })
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = "Atributos para a Ficha.txt"
    a.click()
    window.URL.revokeObjectURL(url)
}

function DownloadAtributosFuturo(){
    document.getElementById('preencher').innerHTML = "Baixando os atributos para o Futuro"
}

function UploadAtributos(){
    const arquivo = document.getElementById("upload").files[0] // Leio o arquivo que veio do Upload
    const leitor = new FileReader()

    leitor.addEventListener('load', function(){
        console.log(leitor.result.split("\n"))
        document.getElementById('preencher').innerHTML = leitor.result.replace(/\n/g,"<br>")
    })

    if(arquivo){
        leitor.readAsText(arquivo)
    }
}

function DownloadFicha(){
    document.getElementById('preencher').innerHTML = "Baixando a ficha"
}

function fazerAtributosFicha(){ // Função para retornar o texto dos atributos atuais do jogador em formato de ficha
    texto = "teste\nteste2\nteste3"
    return texto
}

// Funções da Raça

function changeVariacao(valor){
    valor = parseInt(valor)
    let texto = ""
    auxRaca[0] = valor
    switch(valor){
        case 0:
            document.getElementById("variacao").classList.remove("visually-hidden");
            document.getElementById("labelVariacao").classList.remove("visually-hidden");
            texto += "<option value=0>Humano</option>"        
            texto += "<option value=1>Celestial</option>"
            texto += "<option value=2>Braços Longos</option>"
            texto += "<option value=3>Pernas Longas</option>"
            texto += "<option value=4>Pescoço de Cobra</option>"
            texto += "<option value=5>Meio-Gigante</option>"
            texto += "<option value=6>Três Olhos</option>"
            texto += "<option value=7>Kuja</option>"
            document.getElementById("variacao").innerHTML = texto
            break
        case 1:
            document.getElementById("variacao").classList.remove("visually-hidden");
            document.getElementById("labelVariacao").classList.remove("visually-hidden");
            texto += "<option value=0>Roedor</option>"        
            texto += "<option value=1>Felino</option>"
            texto += "<option value=2>Bovino</option>"
            texto += "<option value=3>Suíno</option>"
            texto += "<option value=4>Símio</option>"
            texto += "<option value=5>Canino</option>"
            texto += "<option value=6>Ursídeo</option>"
            texto += "<option value=7>Equídeo</option>"
            texto += "<option value=8>Caprino</option>"
            texto += "<option value=9>Marsupial</option>"
            texto += "<option value=10>Cervídeo</option>"
            texto += "<option value=11>Paquiderme</option>"
            texto += "<option value=12>Monotremado</option>"
            texto += "<option value=13>Xenartro</option>"
            document.getElementById("variacao").innerHTML = texto
            break
        case 2:
            document.getElementById("variacao").classList.add("visually-hidden");
            document.getElementById("labelVariacao").classList.add("visually-hidden");
            break
        case 3:
            document.getElementById("variacao").classList.remove("visually-hidden");
            document.getElementById("labelVariacao").classList.remove("visually-hidden");
            texto += "<option value=0>Tubarão-Serra</option>"        
            texto += "<option value=1>Peixe Kisu</option>"
            texto += "<option value=2>Polvo</option>"
            texto += "<option value=3>Arraia</option>"
            texto += "<option value=4>Carpa</option>"
            texto += "<option value=5>Salmão</option>"
            texto += "<option value=6>Enguia-Pelicano</option>"
            texto += "<option value=7>Peixe-Dourado Telescópio</option>"
            texto += "<option value=8>Aruanã</option>"
            texto += "<option value=9>Peixe-Espada</option>"
            texto += "<option value=10>Peixe-Boi</option>"
            texto += "<option value=11>Tubarão-Baleia</option>"
            texto += "<option value=12>Congro Bicudo</option>"
            texto += "<option value=13>Tubarão-Branco</option>"
            texto += "<option value=14>Tubarão-Martelo</option>"
            texto += "<option value=15>Tubarão-Tapete</option>"
            texto += "<option value=16>Tubarão-Charuto</option>"
            texto += "<option value=17>Lula</option>"
            texto += "<option value=18>Peixe Baiacu Tigre</option>"
            document.getElementById("variacao").innerHTML = texto
            break
        case 4:
            document.getElementById("variacao").classList.remove("visually-hidden");
            document.getElementById("labelVariacao").classList.remove("visually-hidden");
            texto += "<option value=0>Tubarões</option>"        
            texto += "<option value=1>Polvo</option>"
            texto += "<option value=2>Lula</option>"
            texto += "<option value=3>Cavalo-Marinho</option>"
            texto += "<option value=4>Peixe Beta</option>"
            document.getElementById("variacao").innerHTML = texto
            break
        case 5:
            document.getElementById("variacao").classList.add("visually-hidden");
            document.getElementById("labelVariacao").classList.add("visually-hidden");
            break
    }
    changeOptionRaca(0)
}

function changeOptionRaca(valor){
    auxRaca[1] = parseInt(valor)
    switch(auxRaca[0]){
        case 0: // Humano
            switch(auxRaca[1]){
                case 0: // Humano
                    pontoHumanoRaca()
                    auxRaca[2] = 2
                    break
                case 1: // Celestial
                    atrRaciais = [40,40,40,80,0]
                    seletorAtrRacial()
                    break
                case 2: // Braços Longos
                    atrRaciais = [80,80,40,0,40]
                    seletorAtrRacial()
                    break
                case 3: // Pernas Longas
                    atrRaciais = [80,80,40,0,40]
                    seletorAtrRacial()
                    break
                case 4: // Pescoço de Cobra
                    atrRaciais = [80,80,80,0,0]
                    seletorAtrRacial()
                    break
                case 5: // Meio-Gigante
                    atrRaciais = [120,0,120,0,120]
                    auxRaca[2] = 0
                    pontoMGRaca()
                    break
                case 6: // Três Olhos
                    atrRaciais = [40,40,80,40,0]
                    seletorAtrRacial()
                    break
                case 7: // Kuja
                    atrRaciais = [40,40,40,0,80]
                    seletorAtrRacial()
                    break
            }
            break
        case 1: // Mink
            switch(auxRaca[1]){
                case 0: // Roedor
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 1: // Felino
                    atrRaciais = [40,40,80,120,0]
                    seletorAtrRacial()
                    break
                case 2: // Bovino
                    atrRaciais = [60,60,0,60,120]
                    seletorAtrRacial()
                    break
                case 3: // Suíno
                    atrRaciais = [80,80,0,80,80]
                    seletorAtrRacial()
                    break
                case 4: // Símios
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 5: // Canino
                    atrRaciais = [80,80,120,40,0]
                    seletorAtrRacial()
                    break
                case 6: // Ursídeo
                    atrRaciais = [120,120,0,0,120]
                    seletorAtrRacial()
                    break
                case 7: // Equídeo
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 8: // Caprino
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 9: // Marsupial
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 10: // Cervídeo
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 11: // Paquiderme
                    atrRaciais = [120,120,0,0,120]
                    seletorAtrRacial()
                    break
                case 12: // Monotremados
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 13: // Xenartros
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                }
            break
        case 2: // Anão
            atrRaciais = [40,40,40,80,0]
            seletorAtrRacial()
            break
        case 3: // Homem-Peixe
            switch(auxRaca[1]){
                case 0: // Tubarão-Serra
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 1: // Peixe-Kisu
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 2: // Polvo
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 3: // Arraia
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 4: // Carpa
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 5: // Salmão
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 6: // Enguia-Pelicano
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 7: // Peixe-Dourado Telescópio
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 8: // Aruanã
                    atrRaciais = [80,80,0,80,80]
                    seletorAtrRacial()
                    break
                case 9: // Peixe-Espada
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 10: // Peixe-Boi
                    atrRaciais = [0,0,0,80,160]
                    pontoMGRaca()
                    break
                case 11: // Tubarão-Baleia
                    atrRaciais = [120,120,0,0,120]
                    seletorAtrRacial()
                    break
                case 12: // Congro Bicudo
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 13: // Tubarão-Branco
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 14: // Tubarão-Martelo
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 15: // Tubarão-Tapete
                    atrRaciais = [80,80,80,0,80]
                    seletorAtrRacial()
                    break
                case 16: // Tubarão-Charuto
                    atrRaciais = [80,80,80,80,0]
                    seletorAtrRacial()
                    break
                case 17: // Lula
                    atrRaciais = [0,0,80,80,80]
                    pontoMGRaca()
                    break
                case 18: // Peixe Baiacu Tigre
                    atrRaciais = [120,120,0,0,120]
                    seletorAtrRacial()
                    break
                }
            break
        case 4: // Tritão
            atrRaciais = [80,80,80,80,0]
            seletorAtrRacial()
            break
        case 5: // Híbrido
            atrRaciais = [80,80,40,40,0]
            seletorAtrRacial()
            break
    }
}

function pontoMGRaca(){
    document.getElementById("seletorPontoRaca").classList.add("visually-hidden");
    document.getElementById("humanoPontoRaca").classList.add("visually-hidden");
    attAtrRacialHTML()
}

function pontoHumanoRaca(){
    document.getElementById("seletorPontoRaca").classList.add("visually-hidden");
    document.getElementById("humanoPontoRaca").classList.remove("visually-hidden");
    attAtrRacialHTML()
}

function seletorAtrRacial(){
    document.getElementById("seletorPontoRaca").classList.remove("visually-hidden");
    document.getElementById("humanoPontoRaca").classList.add("visually-hidden");
    attSeletorRacial() 
}

function attSeletorRacial(){
    if (document.getElementById("SeletorForca").checked == true){
        auxRaca[2] = 0 
    }
    else{
        auxRaca[2] = 1
    }
    attAtrRacialHTML()
}

function somaRacial(){
    const Forca = parseInt(document.getElementById("RacaForca").value)
    const Destreza = parseInt(document.getElementById("RacaDestreza").value)
    const Acerto = parseInt(document.getElementById("RacaAcerto").value)
    const Reflexo = parseInt(document.getElementById("RacaReflexo").value)
    const Constituicao = parseInt(document.getElementById("RacaConstituicao").value)
    
    if (Forca + Destreza + Acerto + Reflexo + Constituicao > 160){
        alert("A soma passou do máximo");
    }
    else{
        atrRaciais[0] = Forca
        atrRaciais[1] = Destreza
        atrRaciais[2] = Acerto
        atrRaciais[3] = Reflexo
        atrRaciais[4] = Constituicao
        attMaxRacial()
        attAtrRacialHTML()
    }
}

function attMaxRacial(){
    document.getElementById("RacaForca").max = 160 - atrRaciais[1] - atrRaciais[2] - atrRaciais[3] - atrRaciais[4] 
    document.getElementById("RacaDestreza").max = 160 - atrRaciais[0] - atrRaciais[2] - atrRaciais[3] - atrRaciais[4] 
    document.getElementById("RacaAcerto").max = 160 - atrRaciais[0] - atrRaciais[1] - atrRaciais[3] - atrRaciais[4] 
    document.getElementById("RacaReflexo").max = 160 - atrRaciais[0] - atrRaciais[1] - atrRaciais[2] - atrRaciais[4] 
    document.getElementById("RacaConstituicao").max = 160 - atrRaciais[0] - atrRaciais[1] - atrRaciais[2] - atrRaciais[3] 
}

// Funções envolvendo XP

function attXP(){
    const experiencia = parseInt(document.getElementById("expInput").value)
    if (experiencia <= 18000 && experiencia >= 400){
        exp = experiencia
    }
    else{
        alert("A sua experiência não pode ser menor do que 400 ou acima de 18.000")
        document.getElementById("expInput").value = 400
        exp = 400
    }
    somaBruto()
    attNivel()
}

function somaBruto(){
    const Forca = parseInt(document.getElementById("BrutoForca").value)
    const Destreza = parseInt(document.getElementById("BrutoDestreza").value)
    const Acerto = parseInt(document.getElementById("BrutoAcerto").value)
    const Reflexo = parseInt(document.getElementById("BrutoReflexo").value)
    const Constituicao = parseInt(document.getElementById("BrutoConstituicao").value)
    
    const soma = Forca + Destreza + Acerto + Reflexo + Constituicao

    if ( soma > exp){
        alert("A soma do bruto não pode passar da sua experiência");
    }
    else{
        document.getElementById("faltaXP").innerHTML = "Você tem " + (exp-soma) + " de pontos para distribuir"
        atrBruto[0] = Forca
        atrBruto[1] = Destreza
        atrBruto[2] = Acerto
        atrBruto[3] = Reflexo
        atrBruto[4] = Constituicao
        attMaxBruto()
        attAtrTotal()
    }
}

function attMaxBruto(){
    document.getElementById("BrutoForca").max = exp - atrBruto[1] - atrBruto[2] - atrBruto[3] - atrBruto[4] 
    document.getElementById("BrutoDestreza").max = exp - atrBruto[0] - atrBruto[2] - atrBruto[3] - atrBruto[4] 
    document.getElementById("BrutoAcerto").max = exp - atrBruto[0] - atrBruto[1] - atrBruto[3] - atrBruto[4] 
    document.getElementById("BrutoReflexo").max = exp - atrBruto[0] - atrBruto[1] - atrBruto[2] - atrBruto[4] 
    document.getElementById("BrutoConstituicao").max = exp - atrBruto[0] - atrBruto[1] - atrBruto[2] - atrBruto[3] 
}

function attNivel(){
    if (exp < 800){nivel = 1}
    else if(exp < 1200){nivel = 2}
    else if(exp < 1600){nivel = 3}
    else if(exp < 2000){nivel = 4}
    else if(exp < 2600){nivel = 5}
    else if(exp < 3200){nivel = 6}
    else if(exp < 3800){nivel = 7}
    else if(exp < 4400){nivel = 8}
    else if(exp < 5000){nivel = 9}
    else if(exp < 6000){nivel = 10}
    else if(exp < 7000){nivel = 11}
    else if(exp < 8000){nivel = 12}
    else if(exp < 9000){nivel = 13}
    else if(exp < 10000){nivel = 14}
    else if(exp < 11600){nivel = 15}
    else if(exp < 13200){nivel = 16}
    else if(exp < 14800){nivel = 17}
    else if(exp < 16400){nivel = 18}
    else if(exp < 18000){nivel = 19}
    else{nivel = 20}
    attAtrEDCHTML()
}

// Funções do EDC

function chooseEDC(valor){
    auxEDC = parseInt(valor)
    document.getElementById("EDCForca").checked = false
    document.getElementById("EDCDestreza").checked = false
    document.getElementById("EDCAcerto").checked = false
    document.getElementById("EDCReflexo").checked = false
    auxAtrEDC = [0,0,0,0]
    if(auxEDC == 2){
        document.getElementById("personalizadoEDC").classList.remove("visually-hidden")
        atrEDC = [0,0,0,0]
    }
    else{
        document.getElementById("personalizadoEDC").classList.add("visually-hidden")
        if (valor==0){atrEDC = [40,40,40,40]}
        else{atrEDC = [60,60,60,60]}
    }
    attAtrEDCHTML()
}

function attAtributoEDC(nome,valor){
    if (document.getElementById(nome).checked == true){
        auxAtrEDC[valor] = 1
        document.getElementById(nome + "Input").min = 20
        soma = auxAtrEDC[0] + auxAtrEDC[1] + auxAtrEDC[2] + auxAtrEDC[3]
        if (auxEDC == 0 && soma > 3){
            alert("Só pode três atributos")
            document.getElementById(nome).checked = false
            auxAtrEDC[valor] = 0
            document.getElementById(nome + "Input").min = 0
        }
        else if(auxEDC == 1 && soma > 2){
            alert("Só pode dois atributos")
            document.getElementById(nome).checked = false
            auxAtrEDC[valor] = 0
            document.getElementById(nome + "Input").min = 0
        }
        else if(auxEDC == 2 && soma > 3){
            alert("Só pode três atributos")
            document.getElementById(nome).checked = false
            auxAtrEDC[valor] = 0
            document.getElementById(nome + "Input").min = 0
        }
    }
    else{
        auxAtrEDC[valor] = 0
        document.getElementById(nome + "Input").min = 0
        document.getElementById(nome + "Input").value = 0
    }
    attAtrEDCHTML()
}

function somaEDC(){
    const Forca = parseInt(document.getElementById("EDCForcaInput").value)
    const Destreza = parseInt(document.getElementById("EDCDestrezaInput").value)
    const Acerto = parseInt(document.getElementById("EDCAcertoInput").value)
    const Reflexo = parseInt(document.getElementById("EDCReflexoInput").value)

    const soma = Forca + Destreza + Acerto + Reflexo
    if ( soma > 120){
        alert("A soma do EDC não pode passar de 120");
    }
    else{
        atrEDC[0] = Forca
        atrEDC[1] = Destreza
        atrEDC[2] = Acerto
        atrEDC[3] = Reflexo
        attMaxEDC()
        attAtrEDCHTML()
    }
}

function attMaxEDC(){
    document.getElementById("EDCForcaInput").max = 120 - atrEDC[1] - atrEDC[2] - atrEDC[3]
    document.getElementById("EDCDestrezaInput").max = 120 - atrEDC[0] - atrEDC[2] - atrEDC[3]
    document.getElementById("EDCAcertoInput").max = 120 - atrEDC[0] - atrEDC[1] - atrEDC[3]
    document.getElementById("EDCReflexoInput").max = 120 - atrEDC[0] - atrEDC[1] - atrEDC[2]
}