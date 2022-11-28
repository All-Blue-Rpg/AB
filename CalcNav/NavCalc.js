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
const BlueDistanceC = [[0,1,1,1,2,2,3],[1,0,1,1,2,2,3],[1,1,0,1,1,1,2],[1,1,1,0,1,1,2],[2,2,1,1,0,1,1],[2,2,1,1,1,0,1],[3,3,2,2,1,1,0]]
var dis = 0 // Distância em dias totais
var disC = 0 // Distância em ilhas, para Carona
var posts = 0
var duracao = 0

// Desgaste
const desgasteTabela = [[250,150,0,0,0,0],[500, 300, 180, 0, 0, 0],[1000,600,300,220,0,0],[3000,1800,1000,600,360,200],[4500,2700,1500,900,600,300]]
var auxDesgaste = [0, 0, 0, 0] // Desgaste em dias de distância passando por cada localização: calm belt, blues, paradise, novo mundo
var redutor = [0, 0, 0, 0] // Auxiliar para contar a redução que vai existir em cada rota
var desgaste = 0

// Função chamada unicamente ao carregar a página
function carregando(){
    qualBarco(0)
    qualMar(0,0)
    qualMar(1,0)
}

// Funções de atualização do tempo
function attTempo(){
    if (carona == false){
        attTempoNormal()
    }
    else{
        attTempoCarona()
    }
}

function attTempoCarona(){
    if (disC == 0){
        txtResultado = "Você já está no seu objetivo, tá nas dorgas mermão?"
        document.getElementById('Resultados').innerHTML = txtResultado 
        return
    }
    if (disC > 1 && (faccao == 1 || faccao == 2 || faccao == 4)){
        txtResultado = "<h3>Aviso:</h3><br>Recomendo que coloque uma única ilha de distância já que está pegando carona sendo caçador/civil/pirata.<br>"
    }
    txtResultado = txtResultado + "<h3>Duração:</h3><br>A distância da sua viagem é de " + disC + "  ilhas<br>"
    switch(faccao){
        case 0:  // Agente
            if(localizacao.MarEstou == 0 && localizacao.MarVou > 0){
                qualBarco(13)
                document.getElementById('Barco').value = "13"
                txtResultado = txtResultado + "Por ser um agente que está passando pelo Calm Belt, o barco que você está pegando carona é obrigatoriamente um Cruzador.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " +  Math.ceil(disC/2) + " viagens, já que cada carona sua só pode avançar 2 ilhas.<br>"
                txtResultado = txtResultado + "Esse número de viagens na sua facção demora " +  Math.ceil(disC/2) + " turnos, já que não existe espera entre viagens.<br>"
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            else{
                qualBarco(15)
                document.getElementById('Barco').value = "15"
                txtResultado = txtResultado + "Por ser um agente que está em uma viagem comum, o barco que você está pegando carona é obrigatoriamente um Iquisidor.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " +  Math.ceil(disC/2) + " viagens, já que cada carona sua só pode avançar 2 ilhas.<br>"
                txtResultado = txtResultado + "Esse número de viagens na sua facção demora " +  Math.ceil(disC/2) + " turnos, já que não existe espera entre viagens.<br>"
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            break
        case 1:  //Caçador de Recompensas
            if(localizacao.MarEstou == 0 && localizacao.MarVou > 0){
                qualBarco(13)
                document.getElementById('Barco').value = "13"
                txtResultado = txtResultado + "Por ser um caçador de recompensas que está passando pelo Calm Belt, o barco que você está pegando carona é obrigatoriamente um Cruzador.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha por viagem.<br>"
                if(disC > 1){
                    txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + 3*(disC-1) + " aventuras de 20 turnos cada.<br>"
                    txtResultado = txtResultado + "Sendo o esquema de Viagem/3 aventuras/Viagem, e por favor, lembre-se de fazer a viagem após as 3 aventuras, ou vai acabar fazendo ainda mais do que o necessário.<br>" 
                }
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            else{
                qualBarco(2)
                document.getElementById('Barco').value = "2"
                txtResultado = txtResultado + "Por ser um caçador de recompensas que está em uma viagem comum, o barco que você está pegando carona é obrigatoriamente uma Escuna.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"                
                if(disC > 1){
                    txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + 3*(disC-1) + " aventuras de 20 turnos cada.<br>"
                    txtResultado = txtResultado + "Sendo o esquema de Viagem/3 aventuras/Viagem, e por favor, lembre-se de fazer a viagem após as 3 aventuras, ou vai acabar fazendo ainda mais do que o necessário.<br>" 
                }
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            break
        case 2:  //Civil
            if(localizacao.MarEstou == 0 && localizacao.MarVou > 0){
                qualBarco(13)
                document.getElementById('Barco').value = "13"
                txtResultado = txtResultado + "Por ser um civil que está passando pelo Calm Belt, o barco que você está pegando carona é obrigatoriamente um Cruzador.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha por viagem.<br>"
                if(disC > 1){
                    txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + 2*(disC-1) + " aventuras de 20 turnos cada.<br>"
                    txtResultado = txtResultado + "Sendo o esquema de Viagem/2 aventuras/Viagem, e por favor, lembre-se de fazer a viagem após as 2 aventuras, ou vai acabar fazendo ainda mais do que o necessário.<br>" 
                }
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            else{
                qualBarco(2)
                document.getElementById('Barco').value = "2"
                txtResultado = txtResultado + "Por ser um civil que está em uma viagem comum, o barco que você está pegando carona é obrigatoriamente uma Escuna.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"
                if(disC > 1){
                    txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + 2*(disC-1) + " aventuras de 20 turnos cada.<br>"
                    txtResultado = txtResultado + "Sendo o esquema de Viagem/2 aventuras/Viagem, e por favor, lembre-se de fazer a viagem após as 2 aventuras, ou vai acabar fazendo ainda mais do que o necessário.<br>" 
                }
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            break
        case 3:  //Marinha
            if(localizacao.MarEstou == 0 && localizacao.MarVou > 0){
                qualBarco(13)
                document.getElementById('Barco').value = "13"
                txtResultado = txtResultado + "Por ser um marinheiro que está passando pelo Calm Belt, o barco que você está pegando carona é obrigatoriamente um Cruzador.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"
                txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + disC + " turnos, já que não existe espera entre viagens.<br>"
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            else{
                qualBarco(14)
                document.getElementById('Barco').value = "14"
                txtResultado = txtResultado + "Por ser um marinheiro que está em uma viagem comum, o barco que você está pegando carona é obrigatoriamente um Inquisidor.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"
                txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + disC + " turnos, já que não existe espera entre viagens.<br>"
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            break
        case 4:  //Pirata
            if(localizacao.RotaEstou == 0 && localizacao.RotaVou > 0){
                txtResultado = txtResultado + "Se você quer pegar uma carona desse tipo sendo pirata... recomendo que se finja de civil.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado 
                return
            }
            qualBarco(2)
            document.getElementById('Barco').value = "2"
            txtResultado = txtResultado + "Parabéns, você está no pior grupo para se pegar uma carona<br>"
            txtResultado = txtResultado + "Por isso o barco que você está pegando carona é obrigatoriamente uma Escuna.<br>"
            txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
            txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"
            txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + 4*(disC - 1) + " aventuras de 20 turnos cada.<br>"
            if (disC > 1){
                txtResultado = txtResultado + "Sendo o esquema de Viagem/4 aventuras/Viagem, e por favor, lembre-se de fazer a viagem após as 4 aventuras, ou vai acabar fazendo ainda mais do que o necessário.<br>" 
                txtResultado = txtResultado + "Divirta-se.<br>"
            }
            document.getElementById('Resultados').innerHTML = txtResultado 
            break
        case 5:  //Revolucionário
            if(localizacao.RotaEstou == 0 && localizacao.RotaVou > 0){
                txtResultado = txtResultado + "Se você quer pegar uma carona desse tipo sendo revolucionário... recomendo que se finja de civil.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado 
                return
            }
            qualBarco(16)
            document.getElementById('Barco').value = "16"
            txtResultado = txtResultado + "Por ser um revolucionário, o barco que você está pegando carona é obrigatoriamente da Libertação.<br>"
            txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
            txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"
            txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + disC + " turnos, já que não existe espera entre viagens.<br>"
            txtResultado = txtResultado + "Divirta-se.<br>"
            document.getElementById('Resultados').innerHTML = txtResultado 
            break
        case 6:  //Submundo
            if(localizacao.MarEstou == 0 && localizacao.MarVou > 0){
                qualBarco(13)
                document.getElementById('Barco').value = "13"
                txtResultado = txtResultado + "Por ser um civil que está passando pelo Calm Belt, o barco que você está pegando carona é obrigatoriamente um Cruzador.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha por viagem.<br>"
                txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + disC + " turnos, já que não existe espera entre viagens.<br>"
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            else{
                qualBarco(2)
                document.getElementById('Barco').value = "2"
                txtResultado = txtResultado + "Por ser um civil que está em uma viagem comum, o barco que você está pegando carona é obrigatoriamente uma Escuna.<br>"
                txtResultado = txtResultado + "Pelo menos você não precisa se preocupar com nada da viagem além de agradar a pessoa que está te dando carona.<br>"
                txtResultado = txtResultado + "Você vai precisar de " + disC + " viagens, já que cada carona sua só pode avançar 1 ilha.<br>"
                txtResultado = txtResultado + "Esse número de viagens na sua facção demora " + disC + " turnos, já que não existe espera entre viagens.<br>"
                txtResultado = txtResultado + "Divirta-se.<br>"
                document.getElementById('Resultados').innerHTML = txtResultado
            }
            break
    }
}

function attTempoNormal(){
    duracao = dis - barco.velocidade // Calcula a duração total da viagem

    if (barco.comida <= 0){ // Checando se o barco não tem comida negativa
        txtResultado = "Você tem uma estrutura tão ruim que o seu barco não aguenta nem mesmo um único dia para forrar os estômagos dos famintos que convivem com você. Faça algo em relação a isso antes de tentar viajar"
        document.getElementById('Resultados').innerHTML = txtResultado
        return
    }

    posts = Math.ceil(duracao/barco.comida) // Precisa completar os dias de viagem

    if (posts < 1){ // Não pode ser menos de 1 post
        posts = 1
    }

    calcDesg() // Manda calcular o Desgaste

    txtResultado = resultadoTexto(posts)

    txtDesgaste = desgasteTexto()

    txtExtra = extraTexto()

    document.getElementById('Resultados').innerHTML = txtResultado + txtDesgaste + txtExtra
}

// Funções Atualização Texto

function resultadoTexto(posts){
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
        txtResultado = txtResultado + "<span class='destaque'>Portanto você precisa fazer " + posts + " posts de viagem</span><br><br>"   
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
    return txtResultado
}

function desgasteTexto(){
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
        if (auxDesgaste[0] - redutor[0] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[0] - redutor[0]) + " dias no Calm Belt.<br>"
        }
        if (auxDesgaste[1] - redutor[1] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[1] - redutor[1]) + " dias nos Blues.<br>"
        }
        if (auxDesgaste[2] - redutor[2] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[2] - redutor[2]) + " dias na Paradise.<br>"
        }
        if (auxDesgaste[3] - redutor[3] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[3] - redutor[3]) + " dias no Novo Mundo.<br>"
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

    return txtDesgaste
}

function extraTexto(){
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

        return txtExtra
}

// Calculando Desgaste
function calcDesg(){
    sum = 0
    if(dis > 0){
        for(let i = 0; i < 4; i++){
            redutor[i] = Math.ceil(barco.velocidade*auxDesgaste[i]/dis) // O redutor de cada oceano depende do tempo que o barco vai andar em cada oceano
            sum = sum + redutor[i]
        }
    }
    else{
        redutor = [0,0,0,0]
    }

    while (sum > barco.velocidade){ // o redutor total não pode ser maior que a velocidade do barco
        for(let i = 0; i < 4; i++){
            if(redutor[3-i] > 0){
                redutor[3-i] = redutor[3-i] - 1 // falaram para começar a tirar primeiro do novo mundo 
                sum = sum - 1
            }
            if(sum == barco.velocidade){
                i = 4
            }
        }
    }

    desgaste = 0
    if (nav == 0){
        calculoDesgaste(0)
    }
    else if(nav >= 1 && nav <= 4){
        calculoDesgaste(1)
    }
    else if(nav >= 5 && nav <= 9){
        calculoDesgaste(2)
    }
    else if(nav >= 10 && nav <= 15){        
        calculoDesgaste(3)
    }
    else if(nav >= 16 && nav <= 19){        
        calculoDesgaste(4)
    }
    else{
        calculoDesgaste(5)
    }
}

function calculoDesgaste(i){
    desgaste = (auxDesgaste[0] - redutor[0])*desgasteTabela[0][i] // Parte Calm Belt
    desgaste = desgaste + (auxDesgaste[1] - redutor[1])*desgasteTabela[1][i] // Parte Blues
    desgaste = desgaste + (auxDesgaste[2] - redutor[2])*desgasteTabela[2][i] // Parte Paradise
    desgaste = desgaste + (auxDesgaste[3] - redutor[3])*desgasteTabela[3][i] // Parte Novo Mundo
    if(localizacao.MarEstou == 0 && localizacao.MarVou > 0 && (faccao != 0 && faccao != 3)){
        desgaste = desgaste +  desgasteTabela[4][i]
    }
    // Adversidade Infinitos Corais
    if (localizacao.RotaEstou == 0 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 0 && localizacao.IlhaVou > 0){
        desgaste = desgaste + 3*desgasteTabela[2][i]
    }
    // Adversidade Frozen Oceans
    if (localizacao.RotaEstou == 5 && localizacao.MarEstou == 1 && localizacao.IlhaEstou == 1 && localizacao.IlhaVou > 1){
        desgaste = desgaste + 3*2*desgasteTabela[2][i]
    }
}

// Atualizando Distância
function attDis(){
    // console.log("Mar Estou: " + localizacao.MarEstou)
    // console.log("Rota Estou: " + localizacao.RotaEstou)
    // console.log("Ilha Estou: " + localizacao.IlhaEstou)
    // console.log("Mar Vou: " + localizacao.MarVou)
    // console.log("Rota Vou: " + localizacao.RotaVou)
    // console.log("Ilha Vou: " + localizacao.IlhaVou)
    // console.log("\n")
    switch(localizacao.MarEstou){
        case 0: // Estando nos Blues
            switch(localizacao.MarVou){
                case 0: // Indo para os Blues
                    // No mesmo Blue
                    if(localizacao.RotaEstou == localizacao.RotaVou){
                        dis = BlueDistance[localizacao.IlhaEstou][localizacao.IlhaVou]
                        disC = BlueDistanceC[localizacao.IlhaEstou][localizacao.IlhaVou]
                        auxDesgaste = [0,dis,0,0]
                    }
                    // Em Blues diferentes
                    else{
                        dis = BlueDistance[localizacao.IlhaEstou][6] + 10 + BlueDistance[6][localizacao.IlhaVou]
                        disC = 1 + BlueDistanceC[localizacao.IlhaEstou][6] + BlueDistanceC[6][localizacao.IlhaVou]
                        auxDesgaste = [0,dis,0,0]
                    }
                    break
                case 1: // Indo para a Paradise
                    // Indo para o farol
                    if(localizacao.RotaVou == 0){
                        // Sem ser marinheiro/agente
                        dis = BlueDistance[localizacao.IlhaEstou][6]
                        disC = BlueDistanceC[localizacao.IlhaEstou][6]
                        auxDesgaste = [0,dis,0,0]
                        if (faccao == 0 || faccao == 3){ // caso marine/agente soma 6 do calm belt
                            dis = dis + 30 // 6 no calm belt e 24 na paradise
                            disC = disC + 1 // Ir para o Farol não conta como carona 
                            auxDesgaste[0] = 6
                            auxDesgaste[2] = 24
                        }
                    }
                    // Indo para Sabaody
                    else if(localizacao.RotaVou == 8){
                        // Sem ser marinheiro/agente
                        dis = BlueDistance[localizacao.IlhaEstou][6] + 96
                        disC = BlueDistanceC[localizacao.IlhaEstou][6] + 7 // Não conta para ir pra sabaody e nem farol
                        auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],96,0]
                        if (faccao == 0 || faccao == 3){ // caso marine/agente soma 6 do calm belt
                            dis = dis + 6 // 6 a mais por causa do calm belt
                            auxDesgaste[0] = 6
                        }
                    }
                    // Qualquer outra ilha
                    else{
                        // Sem ser marinheiro/agente
                        dis = BlueDistance[localizacao.IlhaEstou][6] + 12*(localizacao.IlhaVou + 1)
                        disC = BlueDistanceC[localizacao.IlhaEstou][6] + localizacao.IlhaVou + 1
                        auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],12*(localizacao.IlhaVou + 1),0]
                        if (faccao == 0 || faccao == 3){ // caso marine/agente soma 6 do calm belt
                            dis = dis + 6 // 6 a mais por causa do calm belt
                            auxDesgaste[0] = 6
                        }
                    }
                    break
                case 2: // Indo para o Novo Mundo
                    // Indo para a Ilha dos Tritões
                    if(localizacao.RotaVou == 0){
                        dis = BlueDistance[localizacao.IlhaEstou][6] + 96
                        disC = BlueDistanceC[localizacao.IlhaEstou][6] + 7 // Não conta para ir pra sabaody e nem farol
                        auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],96,0]
                        if (faccao == 0 || faccao == 3){ // caso marine/agente soma 6 do calm belt
                            dis = dis + 6 // 6 a mais por causa do calm belt
                            auxDesgaste[0] = 6
                        }
                    }
                    // Indo para qualquer outra rota
                    else{
                        dis = BlueDistance[localizacao.IlhaEstou][6] + 96 + 18*(localizacao.IlhaVou+1)
                        disC = BlueDistanceC[localizacao.IlhaEstou][6] + 8 + localizacao.IlhaVou // Não conta para ir pra sabaody e nem farol
                        auxDesgaste = [0,BlueDistance[localizacao.IlhaEstou][6],96,18*(localizacao.IlhaVou+1)]
                        if (faccao == 0 || faccao == 3){ // caso marine/agente soma 6 do calm belt
                            dis = dis + 6 // 6 a mais por causa do calm belt
                            auxDesgaste[0] = 6
                        }
                    }
                    break
                case 3: // Indo para o Calm Belt
                    dis = BlueDistance[localizacao.IlhaEstou][6] + 6
                    disC = BlueDistanceC[localizacao.IlhaEstou][6] + 1
                    auxDesgaste = [6,BlueDistance[localizacao.IlhaEstou][6],0,0]
                    break
            }
            break
        case 1: // Estando na Paradise
            switch(localizacao.MarVou){
                case 0: // Indo para os Blues
                    if(localizacao.RotaEstou == 0){ // Estando no farol
                        dis = 30 + BlueDistance[6][localizacao.IlhaVou] // 12 dias indo para a primeira ilha, 12 indo para o calm belt, 6 no calm, o resto depende de onde nos blues
                        disC = 2 + BlueDistanceC[6][localizacao.IlhaVou] 
                        auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],24,0] 
                    }
                    else if(localizacao.RotaEstou == 8){ // Estando em Sabaody
                        dis = 228 + BlueDistance[6][localizacao.IlhaVou] // 210 dias indo para a primeira ilha, 12 indo para o calm belt, 6 no calm, o resto depende de onde nos blues
                        disC = 8 + BlueDistanceC[6][localizacao.IlhaVou] 
                        auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],222,0] 
                    }
                    else{ // Estando em qualquer outra ilha
                        dis = 18 + 12*localizacao.IlhaEstou + BlueDistance[6][localizacao.IlhaVou] // x dias indo para a primeira ilha, 12 indo para o calm belt, 6 no calm, o resto depende de onde nos blues
                        disC = localizacao.IlhaEstou + 1 + BlueDistanceC[6][localizacao.IlhaVou] 
                        auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],12*(1+localizacao.IlhaEstou),0] 
                    }
                    break
                case 1: // Indo para a Paradise
                    if(localizacao.RotaEstou == 0){ // Estando no farol
                        if (localizacao.RotaVou != 0 && localizacao.RotaVou != 8){ // Indo para ilhas normais
                            dis = 12*(1+localizacao.IlhaVou) // 12 dias indo para a primeira ilha, 12 dias a mais para cada ilha subsequente
                            disC = 1 + localizacao.IlhaVou
                            auxDesgaste = [0,0,dis,0] 
                        }
                        else if(localizacao.RotaVou == 8){ // Indo para Sabaody
                            dis = 12*8
                            disC = 7 // Lembrando que ir para sabaody não conta na carona
                            auxDesgaste = [0,0,dis,0]                        
                        }
                        else{ // Indo para o próprio farol
                            dis = 0
                            disC = 0
                            auxDesgaste = [0,0,0,0]
                        }
                    }
                    else if(localizacao.RotaEstou == 8){ // Estando em Sabaody
                        if (localizacao.RotaVou != 0 && localizacao.RotaVou != 8){ // Indo para ilhas normais
                            dis = 12*(7-localizacao.IlhaVou) // 210 dias indo para a primeira ilha, 12 indo para o calm belt, 6 no calm, o resto depende de onde nos blues
                            disC = 7 - localizacao.IlhaVou 
                            auxDesgaste = [0,0,dis,0]
                        }
                        else if(localizacao.RotaVou == 0){ // Indo para o farol
                            dis = 12*8
                            disC = 7 // Lembrando que ir para o farol não conta na carona
                            auxDesgaste = [0,0,dis,0]                          
                        }
                        else{ // Indo para Sabaody
                            dis = 0
                            disC = 0
                            auxDesgaste = [0,0,0,0]
                        }
                    }
                    else{ // Estando em qualquer outra ilha
                        if (localizacao.RotaVou != 0 && localizacao.RotaVou != 8){ // Indo para ilhas normais
                            dis = 12*Math.abs(localizacao.RotaEstou - localizacao.RotaVou) // Somando primeiro as trocas de rotas
                            dis = dis + 12*Math.abs(localizacao.IlhaEstou - localizacao.IlhaVou) // Somando depois os avanços/retornos de ilha
                            disC = Math.abs(localizacao.RotaEstou - localizacao.RotaVou) // Somando primeiro as trocas de rotas
                            disC = disC + Math.abs(localizacao.IlhaEstou - localizacao.IlhaVou) // Somando depois os avanços/retornos de ilha
                            
                            if (localizacao.RotaEstou != localizacao.RotaVou){ // Caso tenha troca de rota 
                                if (localizacao.IlhaEstou >= 4 || localizacao.IlhaVou >=4){ // Checando se as ilhas são da 5ª para frente, pois não existe fusão de rotas antes
                                    if (localizacao.RotaEstou > 6 || localizacao.RotaVou > 6){ // Só tem que subtrair se chegou na rota, dado que a conta da 6 já é a correta
                                        dis = dis - 12
                                        disC = disC - 1
                                    }
                                    if ((localizacao.RotaEstou < 3 && localizacao.RotaVou >= 3) || (localizacao.RotaEstou >=3 && localizacao.RotaVou < 3)){ // Checando se passou da 2ª pra 3ª ou vice versa
                                        dis = dis - 12
                                        disC = disC - 1
                                    }
                                }
                            }
                            auxDesgaste = [0,0,dis,0]
                        }
                        else if(localizacao.RotaVou == 0){ // Indo para o farol
                            dis = 12*(1 + localizacao.IlhaEstou) // 12 dias indo para a primeira ilha, 12 dias a mais para cada ilha subsequente
                            disC = localizacao.IlhaEstou // Ir para o farol não conta na carona
                            auxDesgaste = [0,0,dis,0] 
                        }
                        else{
                            dis = 12*(7 - localizacao.IlhaEstou) // 12 dias indo para a primeira ilha, 12 dias a mais para cada ilha subsequente
                            disC = 6 - localizacao.IlhaEstou // Ir para sabaody não conta na carona
                            auxDesgaste = [0,0,dis,0] 
                        }
                    }
                    break
                case 2: // Indo para o Novo Mundo
                    if (localizacao.RotaEstou == 0){ // Estando no Farol
                        dis = 12*8 + 18 + 18*localizacao.IlhaVou
                        disC = 8 + localizacao.IlhaVou // Lembrando que ir para sabaody não conta na carona
                        auxDesgaste = [0,0,96,18*(1 + localizacao.IlhaVou)]
                    }
                    else if(localizacao.RotaEstou == 8){ // Estando em Sabaody
                        dis = 18*(1 + localizacao.IlhaVou)
                        disC = 1 + localizacao.IlhaVou
                        auxDesgaste = [0,0,0,dis]
                    }
                    else{ // Estando em qualquer ilha
                        dis = 12*(7 - localizacao.IlhaEstou) + 18*(1 + localizacao.IlhaVou)// 12 dias indo para a primeira ilha, 12 dias a mais para cada ilha subsequente
                        disC = 7 - localizacao.IlhaEstou + localizacao.IlhaVou // Ir para sabaody não conta na carona
                        auxDesgaste = [0,0,12*(7 - localizacao.IlhaEstou),18*(1 + localizacao.IlhaVou)] 
                    }
                    break
                case 3: // Indo para o Calm Belt
                    if (localizacao.RotaEstou == 0){ // Estando no farol
                        dis = 30
                        disC = 2
                        auxDesgaste = [6,0,24,0]
                    }
                    else if(localizacao.RotaEstou == 8){ // Estando em Sabaody
                        dis = 102
                        disC = 8
                        auxDesgaste = [6,0,96,0]
                    }
                    else{ // Qualquer outra ilha
                        dis = 12*(1 + localizacao.IlhaEstou) + 6 
                        disC = localizacao.IlhaEstou + 1
                        auxDesgaste = [6,0,12*(1 + localizacao.IlhaEstou),0] 
                    }
                    break
            }
            break
        case 2: // Estando no Novo Mundo
            switch(localizacao.MarVou){
                case 0: // Indo para os Blues
                    dis = 18*(localizacao.IlhaEstou + 2) + 12*7 + BlueDistance[6][localizacao.IlhaVou]
                    disC = 15 - localizacao.IlhaVou + localizacao.IlhaEstou
                    auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],12*8,18*(1+localizacao.IlhaEstou)]
                    break
                case 1: // Indo para a Paradise
                    if (localizacao.RotaVou == 0){ // Indo para o Farol
                        dis = 18*(1+localizacao.IlhaEstou) + 12*8
                        disC = localizacao.IlhaEstou + 7
                        auxDesgaste = [0,0,96,18*(1+localizacao.IlhaEstou)]
                    }
                    else if(localizacao.RotaVou == 8){ // Indo para Sabaody
                        dis = 18*(1+localizacao.IlhaEstou)
                        disC = localizacao.IlhaEstou
                        auxDesgaste = [0,0,0,dis]
                    }
                    else{ // Indo para qualquer outra ilha
                        dis = 18*(1+localizacao.IlhaEstou) + 12*(7 - localizacao.IlhaVou)
                        disC = 7 + localizacao.IlhaEstou - localizacao.IlhaVou
                        auxDesgaste = [0,0,12*(7 - localizacao.IlhaVou),18*(1+localizacao.IlhaEstou)]
                    }
                    break
                case 2: // Indo para o Novo Mundo
                    dis = 12*Math.abs(localizacao.RotaEstou - localizacao.RotaVou) + 18*Math.abs(localizacao.IlhaEstou-localizacao.IlhaVou)
                    disC = Math.abs(localizacao.RotaEstou - localizacao.RotaVou) + Math.abs(localizacao.IlhaEstou-localizacao.IlhaVou)
                    auxDesgaste = [0,0,0,dis]
                    break
                case 3: // Indo para o Calm Belt
                    dis = 18*(localizacao.IlhaEstou + 2) + 12*7
                    disC = 8 + localizacao.IlhaEstou
                    auxDesgaste = [6,0,12*8,18*(1+localizacao.IlhaEstou)]
                    break
            }
            break
        case 3: // Estando no Calm Belt
                switch(localizacao.MarVou){
                    case 0: // Indo para os Blues
                        dis = BlueDistance[6][localizacao.IlhaVou] + 6
                        disC = BlueDistanceC[6][localizacao.IlhaVou] + 1
                        auxDesgaste = [6,BlueDistance[6][localizacao.IlhaVou],0,0]
                        break
                    case 1: // Indo para a Paradise
                        dis = 6 + 12*(localizacao.IlhaVou + 1)
                        disC = 1 + localizacao.IlhaVou
                        auxDesgaste = [6,0,12*(localizacao.IlhaVou + 1),0]
                        if(localizacao.RotaVou == 0){
                            dis = 30
                            disC = 1
                            auxDesgaste[2] = 24
                        }
                        else if(localizacao.RotaVou == 8){
                            dis = 102
                            disC = 7
                            auxDesgaste[2] = 96
                        }
                        break
                    case 2: // Indo para o Novo Mundo
                        dis = 102 + 18*(localizacao.IlhaVou + 1)
                        disC = 8 + localizacao.IlhaVou
                        auxDesgaste = [6,0,96,18*(localizacao.IlhaVou + 1)]
                        if(localizacao.RotaVou == 0){
                            dis = 102
                            disC = 7
                            auxDesgaste[3] = 0
                        }
                        break
                    case 3: // Indo para o Calm Belt
                        dis = 0
                        disC = 0
                        auxDesgaste = [0,0,0,0]
                        break
                }
            break
    }

    // Adversidade Florian Triangle
    if (((localizacao.MarVou == 1 && localizacao.RotaVou == 8) || localizacao.MarVou == 2) && localizacao.RotaEstou > 5 && localizacao.MarEstou == 1){
        dis = dis + 2
        auxDesgaste[2] = auxDesgaste[2] + 2
    }
    attTempo()
}

// Funções do Barco
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

// Funções para atualizar a localização e o HTML
function qualMar(identificador, valor){
    valor = parseInt(valor)
    if(identificador == 0){
        local = "RotaEstou"
        local2 = "IlhasEstou"
        idLocal = "RotaEstouOpcoes"
        palavra = "Onde"
    }
    else{
        local = "RotaVou"
        local2 = "IlhasVou"
        idLocal = "RotaVouOpcoes"
        palavra = "Aonde"
    }
    txtLocal = "<h3>" + palavra + " neste lugar?</h3><br>"
    txtLocal = txtLocal + '<select name="' + idLocal + '" id="' + idLocal + '" onchange="qualRota('  + identificador + ',value)">'
    switch(valor){
        case 0: // nos blues
            valorR = 0
            txtLocal = txtLocal + '<option value="0">North Blue</option>'
            txtLocal = txtLocal + '<option value="1">West Blue</option>'
            txtLocal = txtLocal + '<option value="2">South Blue</option>'
            txtLocal = txtLocal + '<option value="3">East Blue</option>'
            txtLocal = txtLocal + '</select>'
            break
        case 1: // na paradise
            valorR = 1
            txtLocal = txtLocal + '<option value="0">Farol</option>'
            txtLocal = txtLocal + '<option value="1">1ª rota</option>'
            txtLocal = txtLocal + '<option value="2">2ª rota</option>'
            txtLocal = txtLocal + '<option value="3">3ª rota</option>'
            txtLocal = txtLocal + '<option value="4">4ª rota</option>'
            txtLocal = txtLocal + '<option value="5">5ª rota</option>'
            txtLocal = txtLocal + '<option value="6">6ª rota</option>'
            txtLocal = txtLocal + '<option value="7">7ª rota</option>'
            txtLocal = txtLocal + '<option value="8">Sabaody</option>'
            txtLocal = txtLocal + '</select>'
            break
        case 2: // no novo mundo
            valorR = 1
            txtLocal = txtLocal + '<option value="0">Ilha dos Homens-Peixe</option>'
            txtLocal = txtLocal + '<option value="1">1ª rota</option>'
            txtLocal = txtLocal + '<option value="2">2ª rota</option>'
            txtLocal = txtLocal + '<option value="3">3ª rota</option>'
            txtLocal = txtLocal + '</select>'
            break
        case 3: // no calm belt
            valorR = 0
            txtLocal = txtLocal + '<option value="0">Amazon Lily</option>'
            txtLocal = txtLocal + '</select>'
            break
    }

    document.getElementById(local).innerHTML = txtLocal
    document.getElementById(idLocal).value = valorR
    localizacao.setLoc(identificador,valor,valorR,0)

    qualRota(identificador,valorR)
    attDis()
}

function qualRota(identificador, valor){
    valor = parseInt(valor)
    if(identificador == 0){
        auxMar = localizacao.MarEstou
        local = "IlhasEstou"
        idLocal = "IlhaEstouOpcoes"
    }
    else{
        auxMar = localizacao.MarVou
        local = "IlhasVou"
        idLocal = "IlhaVouOpcoes"
    }

    localizacao.setLoc(identificador,auxMar,valor,0)
    if((auxMar == 1 && (valor == 0 || valor == 8)) || (auxMar == 2 && valor == 0) || (auxMar == 3)){ // Não aparece ilhas quando as opções são farol/sabaody/ilha dos tritões
        document.getElementById(local).innerHTML = ""
        return
    }

    txtIlhas = "<h3>Qual Ilha?</h3><br>"
    txtIlhas = txtIlhas + '<select name="' + idLocal + '" id="' + idLocal +'" onchange="qualIlha(' + identificador + ',value)">'
    vetor = attNomesIlhas(auxMar,valor)
    for (let i=0; i<7; i++){
        txtIlhas = txtIlhas + '<option value=' + i + '>' + vetor[i] +'</option>'
    }
    txtIlhas = txtIlhas + "</select>"
    document.getElementById(local).innerHTML = txtIlhas 
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

function attNomesIlhas(mar,valor){
    switch(mar){
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
                case 1: // 1ª rota
                    vetor = ["Hasagt Altai","República de Hoxter","Wagon Island","Dust Howl","Ilha Wojna","Ilha 6","Ilha 7"]
                    break
                case 2: // 2ª rota
                    vetor = ["Caffeine","Dragora","Reino de Lódta","Ilha Krishi","Arquipélago de Milville","Ilha 6","Ilha 7"]
                    break
                case 3: // 3ª rota
                    vetor = ["Reino Iceblood","Ilha Kinamasi","Tenebra","Fhuilbaid","Arquipélago de Milville","Ilha 6","Ilha 7"]
                    break
                case 4: // 4ª rota
                    vetor = ["Masquerade","Holzlig","Dodstein","Reino de Qa'ahmar","Ilha 5","Ilha 6","Ilha 7"]
                    break
                case 5: // 5ª rota
                    vetor = ["Clamoris","Uttara Mimamsa","Ilha Satsujin","Okeanos","Coronet","Ilha 6","Ilha 7"]
                    break
                case 6: // 6ª rota
                    vetor = ["Kephar Nicos","Pyatidrov","Vera Cruz","Ilha Verde","Império Yuezhao","Ilha 6","Ilha 7"]
                    break
                case 7: // 7ª rota
                    vetor = ["Ilha Cactus","Little Garden","Ilha Drum","Alabasta","Império Yuezhao","Ilha 6","Ilha 7"]
                    break
            }
            break
        case 2: // Novo Mundo
            switch(valor){
                case 1: // Primeira Rota
                    vetor = ["Ilha 1","Ilha 2","Ilha 3","Ilha 4","Ilha 5","Ilha 6","Ilha 7"]
                    break
                case 2: // Segunda Rota
                    vetor = ["Ilha 1","Ilha 2","Ilha 3","Ilha 4","Ilha 5","Ilha 6","Ilha 7"]
                    break
                case 3: // Terceira Rota
                    vetor = ["Ilha 1","Ilha 2","Ilha 3","Ilha 4","Ilha 5","Ilha 6","Ilha 7"]
                    break            
            }
            break
    }
    return vetor
}

// Funções importantes para Carona
function attCarona(){
    if (document.getElementById('CaronaSim').checked == true){
        document.getElementById("Extras").style.display = "none"
        document.getElementById("barcoSelecao").style.display = "none"
        carona = true
        attTempoCarona()
    }
    else{
        document.getElementById("Extras").style.display = "grid"
        document.getElementById("barcoSelecao").style.display = "grid"
        carona = false
        attTempoNormal()
    }
}

function attFaccao(valor){
    faccao = parseInt(valor)
    attDis()
}

// Daqui para baixo são funções dos Extras
function attAdm(){
    if (document.getElementById('administracao').checked == true){
        adm = 1
    }
    else{
        adm = 0
    }
    barco.setComida()
    attTempo()
}

function attHer(){
    if (document.getElementById('Herbalismo').checked == true){
        her = 1
    }
    else{
        her = 0
    }
    barco.setComida()
    attTempo()
}

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
    attTempo()
}

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
    attTempo()
}

function attEstPeq(){
    if (document.getElementById('EstPeq').checked == true){
        document.getElementById('auxEstPeq').style.display = "block"
        attValorEstPeq()
    }
    else{
        document.getElementById('auxEstPeq').style.display = "none"
        estPeq = 0
        attTempoNormal()  
    }
}

function attValorEstPeq(){
    estPeq = parseInt(document.getElementById('ValorEstPeq').value)
    barco.setComida()
    attTempoNormal()
}

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