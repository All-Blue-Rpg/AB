// Atributos barco e suas funções
const barco = {
    Autossuficiencia: 150,
    Celeridade: 10,
    Estrutura: 50,
    vida: 400*this.Estrutura,
    velocidade: 0,
    comida: 6,
    adam: false,
    set: function(a,c,e) {
        this.Autossuficiencia = a
        this.Celeridade = c
        this.Estrutura = e
        this.setVel()
        this.setVida(e)
        this.setComida()
    },
    setVel: function() {
        this.velocidade = Math.floor(this.Celeridade/50) + nav
    },
    setVida: function(e){
        if(this.adam){
            this.vida = 800*e
        }
        else{
            this.vida = 400*e
        }
    },
    setComida: function(){
        this.comida = Math.floor(this.Autossuficiencia/25) + coz + adm + her - gul + estPeq + fam
    }
  }
  
// Auxiliares de Localização
const localizacao = {
    MarEstou: 0,
    RotaEstou: 0,
    IlhaEstou: 0,
    MarVou: 0,
    RotaVou: 0,
    IlhaVou: 0,
    setLoc: function(iden, M,R,I){
        if (iden == 0){
            this.setEstou(M,R,I)
        }
        else{
            this.setVou(M,R,I)
        }
    },
    setEstou: function(M,R,I){
        this.MarEstou = M
        this.RotaEstou = R
        this.IlhaEstou = I
    },
    setVou: function(M,R,I){
        this.MarVou = M
        this.RotaVou = R
        this.IlhaVou = I
    }
}

// Auxiliares Profissão/Proficiência/Qualidade/Defeito/Loucura
var nav = 0
var coz = 0
var adm = 0
var her = 0
var gul = 0
var estPeq = 0
var fam = 0
var pes = 0
var faccao = 0
var carona = false

// Auxiliares cálculo
const BlueDistance = [[0,6,8,10,16,18,24],[6,0,10,8,18,16,26],[8,10,0,6,8,10,16],[10,8,6,0,10,8,18],[16,18,8,10,0,6,8],[18,16,10,8,6,0,10],[24,26,16,18,8,10,0]]
var dis = 0 // Distância em dias totais
var disC = 0 // Distância em ilhas, para Carona
var posts = 0
var duracao = 0

// Desgaste
const desgasteTabela = [[250,150,0,0,0,0],[500, 300, 180, 0, 0, 0],[1000,600,300,220,0,0],[3000,1800,1000,600,360,200],[4500,2700,1500,900,600,300]]
var auxDesgaste = [0, 0, 0, 0]
var auxDesgaste2 = [0, 0, 0, 0]
var desgaste = 0

function attTempoCarona(){
    switch(faccao){
        case 0:
            qualBarco(13)
            document.getElementById('Barco').value = "13"
            break
        case 1:
            //Caçador de Recompensas
            break
        case 2:
            //Civil
            break
        case 3:
            //Marinha
            break
        case 4:
            //Pirata
            break
        case 5:
            //Revolucionário
            break
        case 6:
            //Submundo
            break
    }
    parent.iframeLoaded();
}

function attTempoNormal(){
    duracao = dis - barco.velocidade
    if (barco.comida <= 0){
        txtResultado = "Você tem uma estrutura tão ruim que o seu barco não aguenta nem mesmo um único dia para forrar os estômagos dos famintos que convivem com você. Faça algo em relação a isso antes de tentar viajar"
        document.getElementById('resultado').innerHTML = txtResultado
        document.getElementById('desgaste').innerHTML = txtDesgaste
        document.getElementById('extras').innerHTML = txtExtra
        return
    }

    posts = Math.ceil(duracao/barco.comida)

    if (posts < 1){
        posts = 1
    }

    calcDesg()

    // Texto da Duração
    txtResultado = "<h3>Duração:</h3><br>A distância da sua viagem é de " + dis + " dias<br>"
    txtResultado = txtResultado + "A redução da viagem é de " + barco.velocidade + " dias<br>"
    txtResultado = txtResultado + "A sua comida dura " + barco.comida + " dias<br>"
    if (dis == 0 && desgaste == 0){
        txtResultado = "Você já está no seu objetivo, tá nas dorgas mermão?"
        document.getElementById('Resultados').innerHTML = txtResultado 
        return
    }
    else if (dis == 0 && desgaste > 0){
        txtResultado = "A sua viagem não toma nenhum dia<br>"
        txtResultado = txtResultado + "<span class='destaque'>Portanto você precisa fazer um único post de viagem</span><br><br>" 
    }
    else if (pes == 0){
        txtResultado = txtResultado + "Portanto você <span class='destaque'>precisa fazer " + posts + " posts de viagem</span><br><br>"   
    }
    else{
        txtResultado = txtResultado + "Ou a sua comida dura " + (barco.comida+1) + " dias se a pesca rolar 1 dia extra<br>"
        txtResultado = txtResultado + "Ou a sua comida dura " + (barco.comida+2) + " dias se a pesca rolar 2 dias extras<br>"
        txtResultado = txtResultado + "Ou a sua comida dura " + (barco.comida+3) + " dias se a pesca rolar 3 dias extras<br>"
        auxPost1 = Math.ceil(duracao/(barco.comida+1))
        auxPost2 = Math.ceil(duracao/(barco.comida+2))
        auxPost3 = Math.ceil(duracao/(barco.comida+3))
        if (auxPost1 < 1){
            auxPost1 = 1
        }
        if (auxPost2 < 1){
            auxPost2 = 1
        }
        if (auxPost3 < 1){
            auxPost3 = 1
        }
        txtResultado = txtResultado + "Portanto você <span class='destaque'>precisa fazer " + posts + "/" + auxPost1 + "/" + auxPost2 + "/" + auxPost3 + " posts de viagem</span><br><br>"
    }

    // Texto do Desgaste
    if (desgaste == 0 && dis == 0){
        txtDesgaste = ""
    }
    else if (desgaste == 0 && dis > 0){
        txtDesgaste = "Parabéns, o seu navio não se desgastou na viagem"
    }
    else{
        txtDesgaste = "<h3>Desgaste:</h3><br>O seu navio se desgastou... vamos aos números<br>"
        txtDesgaste = txtDesgaste + "O seu navio viajou por: <br>"
        if (auxDesgaste[0] - auxDesgaste2[0] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[0] - auxDesgaste2[0]) + " dias no Calm Belt.<br>"
        }
        if (auxDesgaste[1] - auxDesgaste2[1] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[1] - auxDesgaste2[1]) + " dias nos Blues.<br>"
        }
        if (auxDesgaste[2] - auxDesgaste2[2] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[2] - auxDesgaste2[2]) + " dias na Paradise.<br>"
        }
        if (auxDesgaste[3] - auxDesgaste2[3] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[3] - auxDesgaste2[3]) + " dias no Novo Mundo.<br>"
        }
        if(nav == 0){
            txtDesgaste = txtDesgaste + "Isso tudo sem ter alguém que saiba navegar...<br>"
        }
        else{
            txtDesgaste = txtDesgaste + "Isso tudo tendo um Jogador ou NPC Companheiro de Nível " + document.getElementById('nivelNavegacao').value + "<br>"
        }
        txtDesgaste = txtDesgaste + "Assim, o seu <span class='destaque'>Desgaste total é de: " + desgaste + " pontos de vida do barco</span><br>"
        if (desgaste > barco.vida){
            txtDesgaste = txtDesgaste + "O seu <span class='destaque'>barco vai afundar</span> se você não fizer manutenção nele em alguma de suas paradas<br>"
        }
    }

    txtDesgaste = txtDesgaste + "<br><br>"

    // Textos Extras
    txtExtra  = ""

    // Trocando de Blues
    if(localizacao.MarEstou == 0 && localizacao.MarVou == 0 && localizacao.RotaEstou != localizacao.RotaVou){
        txtExtra = txtExtra + "Lembre-se de pagar a travessia pela Rota da Serpente Carmesim se você não for Agente ou Marinheiro<br>"
    }
    // Atravessando a Reverse
    if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
        txtExtra = txtExtra + "Lembre-se de narrar direitinho a travessia na Reverse Mountain ^^<br>"
    }
    // Adversidade no primeiro Mar da Paradise
    if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao == 0 || faccao == 3)){
        txtExtra = txtExtra + "Lembre-se de rolar a adversidade do primeiro mar da Paradise<br>"
    }
    // Adversidade no primeiro Mar da Paradise
    if(localizacao.MarEstou == 1 && localizacao.RotaEstou == 0){
        txtExtra = txtExtra + "Lembre-se de rolar a adversidade do primeiro mar da Paradise<br>"
    }
    // Adversidade Infinitos Corais
    if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && ((localizacao.MarVou == 1 && localizacao.RotaVou == 8) || localizacao.MarVou >= 1) && localizacao.IlhaVou > 0){
        txtExtra = txtExtra + "Divirta-se narrando o navio passando no mar de corais após a ilha Hasagt Altai<br>"
    }
    // Adversidade Frozen Oceans
    if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && ((localizacao.MarVou == 1 && localizacao.RotaVou == 8) || localizacao.MarVou >= 1) && localizacao.IlhaVou > 1){
        txtExtra = txtExtra + "Divirta-se narrando o navio passando pelo oceano congelado após Pyatidrov<br>"
    }
    // Adversidade Florian Triangle
    if (((localizacao.MarVou == 1 && localizacao.RotaVou == 8) || localizacao.MarVou == 2) && localizacao.RotaEstou > 5 && localizacao.MarEstou == 1){
        txtExtra = txtExtra + "Divirta-se narrando a névoa densa do Florian Triangle<br>"
    }
    // Voltar para os Blues
    if (localizacao.MarVou == 0 && localizacao.MarEstou > 0){
        txtExtra = txtExtra + "Só é possível voltar para os Blues com um Vivre Card e é necessário passar no Calm Belt... boa sorte<br>"
    }
    // Mudar de rota na Paradise
    if (localizacao.MarEstou == 1 && localizacao.MarVou == 1 && localizacao.RotaEstou != localizacao.RotaVou){
        txtExtra = txtExtra + "Só é possível mudar de rota na Paradise por Eternal Pose, Vivre Card ou Mapa Mundi<br>"
    }
    // Retroceder na Paradise
    if (localizacao.MarEstou == 1 && localizacao.MarVou == 1 && (localizacao.IlhaEstou > localizacao.IlhaVou || localizacao.RotaEstou == 8)){
        txtExtra = txtExtra + "Só é possível retroceder, seja na mesma rota ou não, na Paradise por Eternal Pose, Vivre Card ou Mapa Mundi<br>"
    }
    // Retroceder no Novo Mundo
    if (localizacao.MarEstou == 2 && localizacao.MarVou == 2 && localizacao.IlhaEstou > localizacao.IlhaVou){
        txtExtra = txtExtra + "Só é possível retroceder, seja na mesma rota ou não, no Novo Mundo por Eternal Pose, Vivre Card ou Mapa Mundi<br>"
    }
    switch(fam){
        case 1:
            txtExtra = txtExtra + "O seu personagem vai ficar bem perto de faminto... tem certeza que é uma boa escolha?<br>"
            break
        case 2:
            txtExtra = txtExtra + "O seu personagem vai ficar com Faminto I... tem certeza que é uma boa escolha?<br>"    
            break
        case 3:
            txtExtra = txtExtra + "O seu personagem vai ficar com Faminto II... tem certeza que é uma boa escolha?<br>"    
            break
        case 4:
            txtExtra = txtExtra + "O seu personagem vai ficar com Faminto III... tem certeza que é uma boa escolha?<br>"    
            break
        case 5:
            txtExtra = txtExtra + "O seu personagem vai ficar com Faminto IV... tem certeza que é uma boa escolha?<br>"    
            break
        case 6:
            txtExtra = txtExtra + "O seu personagem vai ficar com Faminto V... tem certeza que é uma boa escolha?<br>"    
            break
    }
    if (fam > 0 && gul > 0){
        txtExtra = txtExtra + "Vai mesmo brincar com faminto tendo guloso na sua tripulação? Tente não matá-lo de fome.<br>"    
    }
    if (txtExtra != ""){
        txtExtra = "<h3>Extras da viagem:</h3><br>" + txtExtra
    }

    document.getElementById('Resultados').innerHTML = txtResultado + txtDesgaste + txtExtra
    parent.iframeLoaded();
}

function calcDesg(){
    sum = 0
    if(dis > 0){
        for(let i = 0; i < 4; i++){
            auxDesgaste2[i] = Math.ceil(barco.velocidade*auxDesgaste[i]/dis)
            sum = sum + auxDesgaste2[i]
        }
    }
    else{
        auxDesgaste2 = [0,0,0,0]
    }

    while (sum > barco.velocidade){
        for(let i = 0; i < 4; i++){
            if(auxDesgaste2[3-i] > 0){
                auxDesgaste2[3-i] = auxDesgaste2[3-i] - 1
                sum = sum - 1
            }
            if(sum == barco.velocidade){
                i = 4
            }
        }
    }

    desgaste = 0
    if (nav == 0){
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][0] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][0] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][0] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][0]
        if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
            desgaste = desgaste +  desgasteTabela[4][0]
        }
        // Adversidade Infinitos Corais
        if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][0]
        }
        // Adversidade Frozen Oceans
        if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][0]
        }
    }
    else if(nav >= 1 && nav <= 4){
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][1] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][1] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][1] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][1]
        if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
            desgaste = desgaste +  desgasteTabela[4][1]
        }
        // Adversidade Infinitos Corais
        if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][1]
        }
        // Adversidade Frozen Oceans
        if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][1]
        }
    }
    else if(nav >= 5 && nav <= 9){
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][2] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][2] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][2] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][2]
        if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
            desgaste = desgaste +  desgasteTabela[4][2]
        }
        // Adversidade Infinitos Corais
        if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][2]
        }
        // Adversidade Frozen Oceans
        if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][2]
        }
    }
    else if(nav >= 10 && nav <= 15){        
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][3] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][3] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][3] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][3]
        if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
            desgaste = desgaste +  desgasteTabela[4][3]
        }
        // Adversidade Infinitos Corais
        if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][3]
        }
        // Adversidade Frozen Oceans
        if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][3]
        }
    }
    else if(nav >= 16 && nav <= 19){        
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][4] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][4] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][4] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][4]
        if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
            desgaste = desgaste +  desgasteTabela[4][4]
        }
        // Adversidade Infinitos Corais
        if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][4]
        }
        // Adversidade Frozen Oceans
        if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][4]
        }
    }
    else{
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][5] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][5] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][5] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][5]
        if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
            desgaste = desgaste +  desgasteTabela[4][5]
        }
        // Adversidade Infinitos Corais
        if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][5]
        }
        // Adversidade Frozen Oceans
        if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][5]
        }
    }
}

function attDis(){
    //Situações envolvendo o Farol
    if(localizacao.MarVou == 1 && localizacao.RotaVou == 0){
        //Partindo de Sabaody/Tritão
        if(localizacao.MarEstou == 1 && localizacao.RotaEstou == 8){
            dis = 12*8
            auxDesgaste = [0,0,dis,0]
        }
        // Partindo dos Blues
        else if(localizacao.MarEstou == 0){
            if ((faccao != 0 && faccao != 3)){
                dis = BlueDistance[localizacao.IlhaEstou][6]
                auxDesgaste = [0,dis,0,0]
            }
            else{
                dis = dis = BlueDistance[localizacao.IlhaEstou][6] + 6 + 12 + 12
                auxDesgaste = [6,dis = BlueDistance[localizacao.IlhaEstou][6],24,0]
            }
        }
        //Partindo da Paradise
        else if(localizacao.MarEstou == 1){
            dis = 12*Math.abs(localizacao.IlhaEstou - 0) + 12
            auxDesgaste = [0,0,dis,0]
        }
        //Partindo do novo mundo
        else if(localizacao.MarEstou == 2){
            dis = 12*8 + 18 + 18*localizacao.IlhaEstou
            auxDesgaste = [0,0,12*8,18 + 18*localizacao.IlhaEstou]
        }
    }
    else if(localizacao.MarEstou == 1 && localizacao.RotaEstou == 0){
        //Partindo do próprio Farol
        if(localizacao.MarVou == 1 && localizacao.RotaVou == 0){
            dis = 0
        }
        //Partindo para Sabaody/Tritão
        else if(localizacao.MarVou == 1 && localizacao.RotaVou == 8){
            dis = 12*8
            auxDesgaste = [0,0,dis,0]
        }
        //Partindo para os Blues
        else if(localizacao.MarVou == 0){
            dis = 12 + 18 + BlueDistance[localizacao.IlhaEstou][6]
            auxDesgaste = [6,BlueDistance[localizacao.IlhaEstou][6],12+12,0]
        }
        //Partindo para a Paradise
        else if(localizacao.MarVou == 1){
            dis = 12 + 12*localizacao.IlhaVou
            auxDesgaste = [0,0,dis,0]
        }
        //Partindo para o Novo Mundo
        else if(localizacao.MarVou == 2){
            dis = 12*8 + 18 + 18*localizacao.IlhaVou
            auxDesgaste = [0,0,12*8,18+18*localizacao.IlhaVou]
        }
    }
    //Situações envolvendo Sabaody
    else if(localizacao.MarVou == 1 && localizacao.RotaVou == 8){
        //Partindo do Farol
        if(localizacao.MarEstou == 1 && localizacao.RotaEstou == 0){
            dis = 12*8
            auxDesgaste = [0,0,dis,0]
        }
        // Partindo dos Blues
        else if(localizacao.MarEstou == 0){
            if((faccao != 0 && faccao != 3)){
                dis = BlueDistance[localizacao.IlhaEstou][6]+ 12*8
                auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],12*8,0]

            }
            else{
                dis = BlueDistance[localizacao.IlhaEstou][6] + 18 + 12*7
                auxDesgaste = [6,BlueDistance[localizacao.IlhaEstou][6],12*8,0]
            }
        }
        //Partindo da Paradise
        else if(localizacao.MarEstou == 1){
            dis = 12*(7 - localizacao.IlhaEstou)
            auxDesgaste = [0,0,dis,0]
        }
        //Partindo do novo mundo
        else if(localizacao.MarEstou == 2){
            dis = 18 + 18*Math.abs(localizacao.IlhaEstou)
            auxDesgaste = [0,0,0,dis]
        }
    }
    else if(localizacao.MarEstou == 1 && localizacao.RotaEstou == 8){
        //Partindo para o Farol
        if(localizacao.MarVou == 1 && localizacao.RotaVou == 0){
            dis = 12*8
            auxDesgaste = [0,0,dis,0]
        }
        //Partindo para Sabaody/Tritão
        else if(localizacao.MarVou == 1 && localizacao.RotaVou == 8){
            dis = 0
        }
        //Partindo para os Blues
        else if(localizacao.MarVou == 0){
            dis = 12*7 + 18 + BlueDistance[6][localizacao.IlhaVou]
            auxDesgaste = [0,0,12*7,0]
        }
        //Partindo para a Paradise
        else if(localizacao.MarVou == 1){
            dis = 12*Math.abs(localizacao.IlhaVou-7)
            auxDesgaste = [0,0,dis,0]
        }
        //Partindo para o Novo Mundo
        else if(localizacao.MarVou == 2){
            dis = 18 + 18*localizacao.IlhaVou
            auxDesgaste = [0,0,0,dis]
        }
    }
    //Situações envolvendo o mesmo mar
    else if (localizacao.MarEstou == localizacao.MarVou){
        //Primeiro caso, viagem dos Blues para os Blues
        if(localizacao.MarEstou == 0){
            // No mesmo Blue
            if(localizacao.RotaEstou == localizacao.RotaVou){
                dis = BlueDistance[localizacao.IlhaEstou][localizacao.IlhaVou]
                auxDesgaste = [0,dis,0,0]
            }
            // Em Blues diferentes
            else{
                dis = BlueDistance[localizacao.IlhaEstou][6] + 10 + BlueDistance[6][localizacao.IlhaVou]
                auxDesgaste = [0,dis,0,0]
            }
        }
        //Segundo caso, viagem da Paradise para a Paradise
        else if(localizacao.MarEstou == 1){ 
            dis = 12*Math.abs(localizacao.RotaEstou - localizacao.RotaVou) + 12*Math.abs(localizacao.IlhaEstou - localizacao.IlhaVou)
            if (localizacao.RotaEstou != localizacao.RotaVou){
                if (localizacao.IlhaEstou >= 4 || localizacao.IlhaVou >=4){
                    if(localizacao.RotaEstou > 5 || localizacao.RotaVou > 5){
                        dis = dis - 12
                    }
                    if((localizacao.RotaEstou <= 1 && localizacao.RotaVou >= 2) || (localizacao.RotaVou <= 1 && localizacao.RotaEstou >= 2)){
                        dis = dis - 12
                    }
                }
            }
            auxDesgaste = [0,0,dis,0]
        }
        //Terceiro caso, viagem do Novo Mundo para o Novo Mundo
        else if(localizacao.MarEstou == 2){
            dis = 12*Math.abs(localizacao.RotaEstou - localizacao.RotaVou) + 18*Math.abs(localizacao.IlhaEstou-localizacao.IlhaVou)
            auxDesgaste = [0,0,0,dis]
        }
    }
    //Situações envolvendo troca de mares
    else{
        //Primeiro caso, viagem dos Blues para a Paradise
        if (localizacao.MarEstou == 0 && localizacao.MarVou == 1){
            if((faccao != 0 && faccao != 3)){
                dis = BlueDistance[localizacao.IlhaEstou][6] + 12 + 12*localizacao.IlhaVou
                auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],12+12*localizacao.IlhaVou,0]
            }
            else{
                dis = BlueDistance[localizacao.IlhaEstou][6] + 18 + 12*localizacao.IlhaVou
                auxDesgaste = [6,BlueDistance[localizacao.IlhaEstou][6],12+12*localizacao.IlhaVou,0]
            }
        }
        //Segundo caso, viagem dos Blues para o Novo Mundo
        else if (localizacao.MarEstou == 0 && localizacao.MarVou == 2){
            if((faccao != 0 && faccao != 3)){
                dis = BlueDistance[localizacao.IlhaEstou][6] + 12*8 + 18 + 18*localizacao.IlhaVou
                auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],12*8,18+18*localizacao.IlhaVou]
            }
            else{
                dis = BlueDistance[localizacao.IlhaEstou][6] + 18 + 12*7 + 18 + 18*localizacao.IlhaVou
                auxDesgaste = [6,BlueDistance[localizacao.IlhaEstou][6],12*8,18+18*localizacao.IlhaVou]
            }
        }
        //Terceiro caso, viagem da Paradise para os Blues
        else if(localizacao.MarEstou == 1 && localizacao.MarVou == 0){
            dis = BlueDistance[6][localizacao.IlhaVou] + 18 + 12*localizacao.IlhaEstou
            auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],12*(localizacao.IlhaEstou + 1),0]
        }
        //Quarto caso, viagem da Paradise para o Novo Mundo
        else if(localizacao.MarEstou == 1 && localizacao.MarVou == 2){
            dis = 12*Math.abs(localizacao.IlhaEstou - 7) + 18 + 18*localizacao.IlhaVou
            auxDesgaste = [0,0,12*Math.abs(localizacao.IlhaEstou - 7),18*(1+localizacao.IlhaVou)]
        }
        //Quinto caso, viagem do Novo Mundo para os Blues
        else if(localizacao.MarEstou == 2 && localizacao.MarVou == 0){
            dis = 18*localizacao.IlhaEstou + 18 + 12*7 + 18 + BlueDistance[6][localizacao.IlhaVou]
            auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],12*8,18*(1+localizacao.IlhaEstou)]
        }
        //Sexto caso, viagem do Novo Mundo para a Paradise
        else if(localizacao.MarEstou == 2 && localizacao.MarVou == 1){
            dis = 18*localizacao.IlhaEstou + 18 + 12*Math.abs(7 - localizacao.IlhaVou)
            auxDesgaste = [0,0,12*Math.abs(7 - localizacao.IlhaVou),18*(1+localizacao.IlhaEstou)]
        } 
    }
    // Adversidade Florian Triangle
    if (((localizacao.MarVou == 1 && localizacao.RotaVou == 8) || localizacao.MarVou == 2) && localizacao.RotaEstou > 5 && localizacao.MarEstou == 1){
        dis = dis + 2
        auxDesgaste[2] = auxDesgaste[2] + 2
    }
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }
}

function qualBarco(valor){
    valor = Number(valor)
    document.getElementById('auxBarco').style.display = "none"
    switch(valor){
        case 0: //Barco Simples
            barco.set(150,10,50)
            break
        case 1: //Barco Simples Resistente
            barco.set(150,10,70)
            break
        case 2: //Escuna
            barco.set(200,200,100)
            break
        case 3: //Brigue
            barco.set(200,100,200)
            break
        case 4: //Chalupas
            barco.set(200,100,100)
            break
        case 5: //Calhoeiras
            barco.set(300,100,100)
            break
        case 6: //Caravela
            barco.set(250,300,250)
            break
        case 7: //Galés
            barco.set(250,100,450)
            break
        case 8: //Fragata
            barco.set(250,100,250)
            break
        case 9: //Galeão
            barco.set(350,200,250)
            break
        case 10: //Mercantel
            barco.set(450,100,250)
            break
        case 11: //Carracas
            barco.set(250,200,350)
            break
        case 12: //Nau de Linha
            barco.set(250,200,250)
            break
        case 13: //Cruzador
            barco.set(450,50,500)
            break
        case 14: //Gaivota
            barco.set(300,200,150)
            break
        case 15: //Inquisidor
            barco.set(250,250,150)
            break
        case 16: //Libertação
            barco.set(200,250,150)
            break
        case 17: //Personalizado
            document.getElementById('auxBarco').style.display = "block"
            break
    }
    if (carona == false){
        attTempoNormal()
    }
}

function attBarcoPersonalizado(){
    barco.set(document.getElementById('autossuficiencia').value, document.getElementById('celeridade').value,document. getElementById('estrutura').value)
    attTempoNormal()
}

function qualMar(identificador, valor){ 
    valor = parseInt(valor)
    localizacao.setLoc(identificador,valor,0,0)
    if(identificador == 0){
        auxMar = ['BluesEstou','ParadiseEstou','NovoMundoEstou','IlhasEstou']
        if (valor==0){
            auxRes = ["block", "none", "none", "block"]
            auxIlha = ['BluesEstou', 'IlhasEstouOpcoes']
            auxResIlha = ["0", "0"]
        }
        else if (valor==1){
            auxRes = ["none", "block", "none", "block"]
            auxIlha = ['ParadiseEstouOpcoes','IlhasEstouOpcoes']
            auxResIlha =["1", "0"]
        }
        else if (valor==2){
            auxRes = ["none", "none", "block", "block"]
            auxIlha = ['NovoMundoEstou', 'IlhasEstouOpcoes']
            auxResIlha = ["0", "0"]
        }
    }
    else{
        auxMar = ['BluesVou','ParadiseVou','NovoMundoVou','IlhasVou']
        if (valor==0){
            auxRes = ["block", "none", "none", "block"]
            auxIlha = ['BluesVou', 'IlhasVouOpcoes']
            auxResIlha = ["0", "0"]
        }
        else if (valor==1){
            auxRes = ["none", "block", "none", "block"]
            auxIlha = ['ParadiseVouOpcoes','IlhasVouOpcoes']
            auxResIlha =["1", "0"]
        }
        else if (valor==2){
            auxRes = ["none", "none", "block", "block"]
            auxIlha = ['NovoMundoVou', 'IlhasVouOpcoes']
            auxResIlha = ["0", "0"]
        }
    }
    for(let i=0; i<4; i++){
        document.getElementById(auxMar[i]).style.display = auxRes[i]
    }
    document.getElementById([auxIlha[0]]).value = auxResIlha[0]
    document.getElementById([auxIlha[1]]).value = auxResIlha[1]
    attNomesIlhas(identificador,0)
    attDis()
}

function qualRota(identificador, valor){
    valor = parseInt(valor)
    if(identificador == 0){
        localizacao.setLoc(identificador,localizacao.MarEstou,valor,0,0)
        if(localizacao.MarEstou == 1 && (valor == 0 || valor == 8)){
            document.getElementById('IlhasEstou').style.display = "none"
        }
        else{
            document.getElementById('IlhasEstou').style.display = "block"
        }
    }
    else{
        localizacao.setLoc(identificador,localizacao.MarVou,valor,0,0)
        if(localizacao.MarVou == 1 && (valor == 0 || valor == 8)){
            document.getElementById('IlhasVou').style.display = "none"
        }
        else{
            document.getElementById('IlhasVou').style.display = "block"
        }
    }
    attNomesIlhas(identificador,valor)
    attDis()
}

function qualIlha(identificador, valor){
    if (identificador == 0){
        localizacao.IlhaEstou = parseInt(valor)
    }
    else{
        localizacao.IlhaVou = parseInt(valor)
    }
    attDis()
}

function attNomesIlhas(identificador,valor){
    if (identificador == 0){
        aux = localizacao.MarEstou
        document.getElementById("IlhasEstouOpcoes").value = "0"

    }
    else{
        aux = localizacao.MarVou
        document.getElementById("IlhasVouOpcoes").value = "0"
    }
    switch(aux){
        case 0: // Blues
            switch(valor){
                case 0: // North Blue
                    vetor = ["Flevance", "Rubeck", "Swallow", "Kites", "Minion", "Stevelty", "Lvneel"]
                    break
                case 1: // West Blue
                    vetor = ["Toroa", "Reino de Illusia", "Derlund", "Las Camp", "80ª Filial da Marinha", "Sirarossa", "País de Kano"]
                    break
                case 2: // South Blue
                    vetor = ["Reino de Briss", "Centaurea", "Karate Island", "Petra Yuni", "Reino de Torino", "Reino Sorbet", "Baterilla"]
                    break
                case 3: // East Blue
                    vetor = ["Gecko","Dawn","Shellstown","Ilhas Conomi","Tequila Wolf","Ilhas Organ","Polestar"]
                    break
            }
            break
        case 1: // Grand Line
            switch(valor){
                case 0: // 1ª rota
                    vetor = ["Hasagt Altai","República de Hoxter","Wagon Island","Dust Howl","Ilha Wojna","Ilha 6","Ilha 7"]
                    break
                case 1: // 2ª rota
                    vetor = ["Caffeine","Dragora","Reino de Lódta","Ilha Krishi","Arquipélago de Milville","Ilha 6","Ilha 7"]
                    break
                case 2: // 3ª rota
                    vetor = ["Reino Iceblood","Ilha Kinamasi","Tenebra","Fhuilbaid","Arquipélago de Milville","Ilha 6","Ilha 7"]
                    break
                case 3: // 4ª rota
                    vetor = ["Masquerade","Holzlig","Dodstein","Reino de Qa'ahmar","Ilha 5","Ilha 6","Ilha 7"]
                    break
                case 4: // 5ª rota
                    vetor = ["Clamoris","Uttara Mimamsa","Ilha Satsujin","Okeanos","Coronet","Ilha 6","Ilha 7"]
                    break
                case 5: // 6ª rota
                    vetor = ["Kephar Nicos","Pyatidrov","Vera Cruz","Ilha Verde","Império Yuezhao","Ilha 6","Ilha 7"]
                    break
                case 6: // 7ª rota
                    vetor = ["Ilha Cactus","Little Garden","Ilha Drum","Alabasta","Império Yuezhao","Ilha 6","Ilha 7"]
                    break
            }
            break
        case 2: // Novo Mundo
            switch(valor){
                case 0: // Primeira Rota
                    vetor = ["Ilha 1","Ilha 2","Ilha 3","Ilha 4","Ilha 5","Ilha 6","Ilha 7"]
                    break
                case 1: // Segunda Rota
                    vetor = ["Ilha 1","Ilha 2","Ilha 3","Ilha 4","Ilha 5","Ilha 6","Ilha 7"]
                    break
                case 2: // Terceira Rota
                    vetor = ["Ilha 1","Ilha 2","Ilha 3","Ilha 4","Ilha 5","Ilha 6","Ilha 7"]
                    break            
            }
            break
    }
    attNomesIlhasHTML(identificador,vetor)
}

function attNomesIlhasHTML(identificador,vetor){
    if(identificador == 0){
        auxIlhas = ['Ilha0Estou','Ilha1Estou','Ilha2Estou','Ilha3Estou','Ilha4Estou','Ilha5Estou','Ilha6Estou']
    }
    else{
        auxIlhas = ['Ilha0Vou','Ilha1Vou','Ilha2Vou','Ilha3Vou','Ilha4Vou','Ilha5Vou','Ilha6Vou']
    }
    document.getElementById(auxIlhas[0]).innerHTML = vetor[0]
    document.getElementById(auxIlhas[1]).innerHTML = vetor[1]
    document.getElementById(auxIlhas[2]).innerHTML = vetor[2]
    document.getElementById(auxIlhas[3]).innerHTML = vetor[3]
    document.getElementById(auxIlhas[4]).innerHTML = vetor[4]
    document.getElementById(auxIlhas[5]).innerHTML = vetor[5]
    document.getElementById(auxIlhas[6]).innerHTML = vetor[6]
}

function attAdm(){
    if (document.getElementById('administracao').checked == true){
        adm = 1
    }
    else{
        adm = 0
    }
    barco.setComida()
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }}

function attHer(){
    if (document.getElementById('Herbalismo').checked == true){
        her = 1
    }
    else{
        her = 0
    }
    barco.setComida()
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }}

function attCoz(){
    if (document.getElementById('CozinheiroSim').checked == true){
        document.getElementById('cozinheiro').style.display = "block"
        attValorCoz()
    }
    else{
        document.getElementById('cozinheiro').style.display = "none"
        coz = 0
        if (carona == false){
            attTempoNormal()
        }
        else{
            attTempoCarona()
        }    }
}

function attValorCoz(){
    coz = Math.ceil(document.getElementById('nivelCozinheiro').value/2)
    barco.setComida()
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }}

function attNav(){
    if (document.getElementById('NavegacaoSim').checked == true){
        document.getElementById('navegador').style.display = "block"
        attValorNav()
    }
    else{
        document.getElementById('navegador').style.display = "none"
        nav = 0
        barco.setVel()
        if (carona == false){
            attTempoNormal()
        }
        else{
            attTempoCarona()
        }    }
}

function attValorNav(){
    nav = Math.ceil(document.getElementById('nivelNavegacao').value/2)
    barco.setVel()
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }}

function attEstPeq(){
    if (document.getElementById('EstPeq').checked == true){
        document.getElementById('auxEstPeq').style.display = "block"
        attValorEstPeq()
    }
    else{
        document.getElementById('auxEstPeq').style.display = "none"
        estPeq = 0
        if (carona == false){
            attTempoNormal()
        }
        else{
            attTempoCarona()
        }    }
}

function attValorEstPeq(){
    estPeq = parseInt(document.getElementById('ValorEstPeq').value)
    barco.setComida()
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }}

function attGul(){
    if (document.getElementById('Guloso').checked == true){
        document.getElementById('auxGul').style.display = "block"
        attValorGul()
    }
    else{
        document.getElementById('auxGul').style.display = "none"
        gul = 0
        attTempoNormal()
    }
}

function attValorGul(){
    gul = parseInt(document.getElementById('ValorGul').value)
    barco.setComida()
    attTempoNormal()
}

function attFaccao(valor){
    faccao = parseInt(valor)
    attDis()
}

function attFam(valor){
    fam = valor
    barco.setComida()
    attTempoNormal()
}

function attPes(){
    if (document.getElementById('pesca').checked == true){
        pes = 1
    }
    else{
        pes = 0
    }
    attTempoNormal()
}

function attCarona(){
    if (document.getElementById('CaronaSim').checked == true){
        carona = true
        attTempoCarona()
    }
    else{
        carona = false
        attTempoNormal()
    }
}