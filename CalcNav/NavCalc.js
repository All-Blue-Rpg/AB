// Atributos Navio
var Autossuficiencia = 150;
var Celeridade = 10;
var Estrutura = 50;

// Auxiliares de Localização
var MarEstou = 0;
var RotaEstou = 0;
var IlhaEstou = 0;
var MarVou = 0;
var RotaVou = 0;
var IlhaVou = 0;
var farolEstou = 0;
var farolVou = 0;
var sabaodyEstou = 0;
var sabaodyVou = 0;

// Auxiliares Profissão/Proficiência/Qualidade/Defeito/Loucura
var nav = 0;
var coz = 0;
var adm = 0;
var her = 0;
var gul = 0;
var estPeq = 0;
var fam = 0;
var pes = 0;
var marine = false;

// Auxiliares cálculo
var dis = 0;
var velocidade = 0;
var comida = 0;
var vida = 0;   
var posts = 0;
var duracao = 0;

// Desgaste
const desgasteTabela = [[250,150,0,0,0,0],[500, 300, 180, 0, 0, 0],[1000,600,300,220,0,0],[3000,1800,1000,600,360,200],[4500,2700,1500,900,600,300]];
var auxDesgaste = [0, 0, 0, 0];
var auxDesgaste2 = [0, 0, 0, 0];
var desgaste = 0;

function qualMar(valor, identificador){
    valor = parseInt(valor);
    if(identificador == 0){
        MarEstou = valor;
        if (valor==0){
            document.getElementById('BluesEstou').style.display = "block";
            document.getElementById('ParadiseEstou').style.display = "none";
            document.getElementById('NovoMundoEstou').style.display = "none";
            document.getElementById('IlhasEstou').style.display = "block";
            RotaEstou = 0;
            IlhaEstou = 0;
            farolEstou = 0;
            sabaodyEstou = 0;
            document.getElementById('BluesEstou').value = "0";
            document.getElementById('IlhasEstouOpcoes').value = "0";
            attNomesIlhasEstou(RotaEstou);
        }
        else if (valor==1){
            document.getElementById('BluesEstou').style.display = "none";
            document.getElementById('ParadiseEstou').style.display = "block";
            document.getElementById('NovoMundoEstou').style.display = "none";
            RotaEstou = 0;
            IlhaEstou = 0;
            document.getElementById('ParadiseEstouOpcoes').value = "0";
            document.getElementById('IlhasEstouOpcoes').value = "0";
            attNomesIlhasEstou(RotaEstou);
        }
        else if (valor==2){
            document.getElementById('BluesEstou').style.display = "none";
            document.getElementById('ParadiseEstou').style.display = "none";
            document.getElementById('NovoMundoEstou').style.display = "block";
            document.getElementById('IlhasEstou').style.display = "block";
            RotaEstou = 0;
            IlhaEstou = 0;
            farolEstou = 0;
            sabaodyEstou = 0;
            document.getElementById('NovoMundoEstou').value = "0";
            document.getElementById('IlhasEstouOpcoes').value = "0";
            attNomesIlhasEstou(RotaEstou);
        }        
    }
    else{
        MarVou = valor;
        if (valor==0){
            document.getElementById('BluesVou').style.display = "block";
            document.getElementById('ParadiseVou').style.display = "none";
            document.getElementById('NovoMundoVou').style.display = "none";
            document.getElementById('IlhasVou').style.display = "block";
            RotaVou = 0;
            IlhaVou = 0;
            farolVou = 0;
            sabaodyVou = 0;
            document.getElementById('BluesVou').value = "0";
            document.getElementById('IlhasVouOpcoes').value = "0";
            attNomesIlhasVou(RotaVou);
        }
        else if (valor==1){
            document.getElementById('BluesVou').style.display = "none";
            document.getElementById('ParadiseVou').style.display = "block";
            document.getElementById('NovoMundoVou').style.display = "none";
            RotaVou = 0;
            IlhaVou = 0;
            document.getElementById('ParadiseVouOpcoes').value = "0";
            document.getElementById('IlhasVouOpcoes').value = "0";
            attNomesIlhasVou(RotaVou);
        }
        else if (valor==2){
            document.getElementById('BluesVou').style.display = "none";
            document.getElementById('ParadiseVou').style.display = "none";
            document.getElementById('NovoMundoVou').style.display = "block";
            document.getElementById('IlhasVou').style.display = "block";
            RotaVou = 0;
            IlhaVou = 0;
            farolVou = 0;
            sabaodyVou = 0;
            document.getElementById('NovoMundoEstou').value = "0";
            document.getElementById('IlhasVouOpcoes').value = "0";
            attNomesIlhasVou(RotaVou);
        }
    }
    attDis();
    if (MarEstou == 0 && MarVou > 0){
        document.getElementById('CalmBelt').style.display = "block";
    }
    else{
        document.getElementById('CalmBelt').style.display = "none";
    }
}

function qualRota(valor, identificador){
    valor = parseInt(valor);
    if(identificador == 0){
        if(valor==7){
            farolEstou = 1;
            sabaodyEstou = 0;
            RotaEstou = -1;
            document.getElementById('IlhasEstou').style.display = "none";
        }
        else if(valor==8){
            sabaodyEstou = 1;
            farolEstou = 0;
            RotaEstou = -1;
            document.getElementById('IlhasEstou').style.display = "none";
        }
        else{
            farolEstou = 0;
            sabaodyEstou = 0;
            RotaEstou = parseInt(valor);
            document.getElementById('IlhasEstou').style.display = "block";
            attNomesIlhas(valor,identificador);
        }
    }
    else{
        if(valor==7){
            farolVou = 1;
            RotaVou = -1;
            sabaodyVou = 0;
            document.getElementById('IlhasVou').style.display = "none";
        }
        else if(valor==8){
            sabaodyVou = 1;
            farolVou = 0;
            RotaVou = -1;
            document.getElementById('IlhasVou').style.display = "none";
        }
        else{
            farolVou = 0;
            sabaodyVou = 0;
            RotaVou = valor;
            document.getElementById('IlhasVou').style.display = "block";
            attNomesIlhas(valor,identificador);
        }
    }
    attDis();
}

function qualIlha(valor, identificador){
    if (identificador == 0){
        IlhaEstou = parseInt(valor);
    }
    else{
        IlhaVou = parseInt(valor);
    }
    attDis();
}

function attNomesIlhas(valor,identificador){
    if(identificador == 0){
        auxIlhas = ['Ilha0Estou','Ilha1Estou','Ilha2Estou','Ilha3Estou','Ilha4Estou','Ilha5Estou','Ilha6Estou'];
    }
    else{
        auxIlhas = ['Ilha0Vou','Ilha1Vou','Ilha2Vou','Ilha3Vou','Ilha4Vou','Ilha5Vou','Ilha6Vou'];
    }
    switch(MarEstou){
        case 0:
            if (valor==0){
                document.getElementById(auxIlhas[0]).innerHTML = "Flevance";
                document.getElementById(auxIlhas[1]).innerHTML = "Rubeck";
                document.getElementById(auxIlhas[2]).innerHTML = "Swallow";
                document.getElementById(auxIlhas[3]).innerHTML = "Kites";
                document.getElementById(auxIlhas[4]).innerHTML = "Minion";
                document.getElementById(auxIlhas[5]).innerHTML = "Stevelty";
                document.getElementById(auxIlhas[6]).innerHTML = "Lvneel";
            }
            else if (valor==1){
                document.getElementById(auxIlhas[0]).innerHTML = "Toroa";
                document.getElementById(auxIlhas[1]).innerHTML = "Reino de Illusia";
                document.getElementById(auxIlhas[2]).innerHTML = "Derlund";
                document.getElementById(auxIlhas[3]).innerHTML = "Las Camp";
                document.getElementById(auxIlhas[4]).innerHTML = "80ª Filial da Marinha";
                document.getElementById(auxIlhas[5]).innerHTML = "Sirarossa";
                document.getElementById(auxIlhas[6]).innerHTML = "País de Kano";
            }
            else if (valor==2){
                document.getElementById(auxIlhas[0]).innerHTML = "Reino de Briss";
                document.getElementById(auxIlhas[1]).innerHTML = "Centaurea";
                document.getElementById(auxIlhas[2]).innerHTML = "Karate Island";
                document.getElementById(auxIlhas[3]).innerHTML = "Petra Yuni";
                document.getElementById(auxIlhas[4]).innerHTML = "Reino de Torino";
                document.getElementById(auxIlhas[5]).innerHTML = "Reino Sorbet";
                document.getElementById(auxIlhas[6]).innerHTML = "Baterilla";
            }
            else if(valor==3){
                document.getElementById(auxIlhas[0]).innerHTML = "Gecko";
                document.getElementById(auxIlhas[1]).innerHTML = "Dawn";
                document.getElementById(auxIlhas[2]).innerHTML = "Shellstown";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilhas Conomi";
                document.getElementById(auxIlhas[4]).innerHTML = "Tequila Wolf";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilhas Organ";
                document.getElementById(auxIlhas[6]).innerHTML = "Polestar";
            }
            break;
        case 1:
            if (valor==0){
                document.getElementById(auxIlhas[0]).innerHTML = "Hasagt Altai";
                document.getElementById(auxIlhas[1]).innerHTML = "República de Hoxter";
                document.getElementById(auxIlhas[2]).innerHTML = "Wagon Island";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==1){
                document.getElementById(auxIlhas[0]).innerHTML = "Caffeine";
                document.getElementById(auxIlhas[1]).innerHTML = "Dragora";
                document.getElementById(auxIlhas[2]).innerHTML = "Reino de Lódta";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==2){
                document.getElementById(auxIlhas[0]).innerHTML = "Reino Iceblood";
                document.getElementById(auxIlhas[1]).innerHTML = "Ilha Kinamasi";
                document.getElementById(auxIlhas[2]).innerHTML = "Tenebra";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==3){
                document.getElementById(auxIlhas[0]).innerHTML = "Masquerade";
                document.getElementById(auxIlhas[1]).innerHTML = "Holzlig";
                document.getElementById(auxIlhas[2]).innerHTML = "Dodstein";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==4){
                document.getElementById(auxIlhas[0]).innerHTML = "Clamoris";
                document.getElementById(auxIlhas[1]).innerHTML = "Uttara Mimamsa";
                document.getElementById(auxIlhas[2]).innerHTML = "Ilha Satsujin";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==5){
                document.getElementById(auxIlhas[0]).innerHTML = "Kephar Nicos";
                document.getElementById(auxIlhas[1]).innerHTML = "Pyatidrov";
                document.getElementById(auxIlhas[2]).innerHTML = "Vera Cruz";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==6){
                document.getElementById(auxIlhas[0]).innerHTML = "Ilha Cactus";
                document.getElementById(auxIlhas[1]).innerHTML = "Little Garden";
                document.getElementById(auxIlhas[2]).innerHTML = "Ilha Drum";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            break;
        case 2:
            if (valor==0){
                document.getElementById(auxIlhas[0]).innerHTML = "Ilha 1";
                document.getElementById(auxIlhas[1]).innerHTML = "Ilha 2";
                document.getElementById(auxIlhas[2]).innerHTML = "Ilha 3";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==1){
                document.getElementById(auxIlhas[0]).innerHTML = "Ilha 1";
                document.getElementById(auxIlhas[1]).innerHTML = "Ilha 2";
                document.getElementById(auxIlhas[2]).innerHTML = "Ilha 3";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            else if (valor==2){
                document.getElementById(auxIlhas[0]).innerHTML = "Ilha 1";
                document.getElementById(auxIlhas[1]).innerHTML = "Ilha 2";
                document.getElementById(auxIlhas[2]).innerHTML = "Ilha 3";
                document.getElementById(auxIlhas[3]).innerHTML = "Ilha 4";
                document.getElementById(auxIlhas[4]).innerHTML = "Ilha 5";
                document.getElementById(auxIlhas[5]).innerHTML = "Ilha 6";
                document.getElementById(auxIlhas[6]).innerHTML = "Ilha 7";
            }
            break;
    }
}

function qualBarco(valor){
    valor = Number(valor)
    switch(valor){
        case 0: //Barco Simples
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 150;
            Celeridade = 10;
            Estrutura = 50;
            break;
        case 1: //Barco Simples Resistente
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 150;
            Celeridade = 10;
            Estrutura = 70;
            break;
        case 2: //Escuna
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 200;
            Celeridade = 200;
            Estrutura = 100;
            break;
        case 3: //Brigue
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 200;
            Celeridade = 100;
            Estrutura = 200;
            break;
        case 4: //Chalupas
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 200;
            Celeridade = 100;
            Estrutura = 100;
            break;
        case 5: //Calhoeiras
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 300;
            Celeridade = 100;
            Estrutura = 100;
            break;
        case 6: //Caravela
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 250;
            Celeridade = 300;
            Estrutura = 250;
            break;
        case 7: //Galés
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 250;
            Celeridade = 100;
            Estrutura = 450;
            break; 
        case 8: //Fragata
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 250;
            Celeridade = 100;
            Estrutura = 250;
            break;
        case 9: //Galeão
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 350;
            Celeridade = 200;
            Estrutura = 250;
            break;
        case 10: //Mercantel
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 450;
            Celeridade = 100;
            Estrutura = 250;
            break;
        case 11: //Carracas
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 250;
            Celeridade = 200;
            Estrutura = 350;
            break;
        case 12: //Nau de Linha
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 250;
            Celeridade = 200;
            Estrutura = 250;
            break;
        case 13: //Cruzador
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 450;
            Celeridade = 50;
            Estrutura = 500;
            break;
        case 14: //Gaivota
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 300;
            Celeridade = 200;
            Estrutura = 150;
            break;
        case 15: //Inquisidor
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 250;
            Celeridade = 250;
            Estrutura = 150;
            break;
        case 16: //Libertação
            document.getElementById('auxBarco').style.display = "none";
            Autossuficiencia = 200;
            Celeridade = 250;
            Estrutura = 150;
            break;
        case 17: //Personalizado
            document.getElementById('auxBarco').style.display = "block";
            break;
        }
    //attTempo();
}

function attBarco(){
    Autossuficiencia = document.getElementById('autossuficiencia').value;
    Celeridade = document.getElementById('celeridade').value;
    Estrutura = document.getElementById('estrutura').value;
    attTempo();
}

function attTempo(){
    velocidade = Math.floor(Celeridade/50) + nav;
    comida = Math.floor(Autossuficiencia/25) + coz + adm + her - parseInt(gul) + parseInt(estPeq) + fam;
    vida = 400*Estrutura;

    if (comida < 0){
        comida = 0;
    }

    duracao = dis - velocidade;
    posts = Math.ceil(duracao/comida);

    if (posts < 1){
        posts = 1;
    }

    calcDesg();

    txtExtra = "";

    // Texto da Duração
    
    if (dis == 0 && desgaste == 0){
        txtResultado = "Você já está no seu objetivo, tá nas dorgas mermão?";
    }
    else if (dis == 0 && desgaste > 0){
        txtResultado = "A sua viagem não toma nenhum dia<br>";
        txtResultado = txtResultado + "<span class='destaque'>Portanto você precisa fazer um único post de viagem</span><br><br>"; 
    }
    else if (pes == 0){
            txtResultado = "<h3>Duração:</h3><br>A distância da sua viagem é de " + dis + " dias<br>";
            txtResultado = txtResultado + "A redução da viagem é de " + velocidade + " dias<br>";
            txtResultado = txtResultado + "A sua comida dura " + comida + " dias<br>";
            txtResultado = txtResultado + "Portanto você <span class='destaque'>precisa fazer " + posts + " posts de viagem</span><br><br>";   
    }
    else{
        txtResultado = "<h3>Duração:</h3><br>A distância da sua viagem é de " + dis + " dias<br>";
        txtResultado = txtResultado + "A redução da viagem é de " + velocidade + " dias<br>";
        txtResultado = txtResultado + "A sua comida dura " + comida + " dias<br>";
        txtResultado = txtResultado + "Ou a sua comida dura " + (comida+1) + " dias se a pesca rolar 1 dia extra<br>";
        txtResultado = txtResultado + "Ou a sua comida dura " + (comida+2) + " dias se a pesca rolar 2 dias extras<br>";
        txtResultado = txtResultado + "Ou a sua comida dura " + (comida+3) + " dias se a pesca rolar 3 dias extras<br>";
        if (comida != 0){
            auxPost1 = Math.ceil(duracao/(comida+1));
            auxPost2 = Math.ceil(duracao/(comida+2));
            auxPost3 = Math.ceil(duracao/(comida+3));
            if (auxPost1 < 1){
                auxPost1 = 1;
            }
            if (auxPost2 < 1){
                auxPost2 = 1;
            }
            if (auxPost3 < 1){
                auxPost3 = 1;
            }
        }
        else{
            auxPost1 = Infinity;
            auxPost2 = Infinity;
            auxPost3 = Infinity;
        }
        txtResultado = txtResultado + "Portanto você <span class='destaque'>precisa fazer " + posts + "/" + auxPost1 + "/" + auxPost2 + "/" + auxPost3 + " posts de viagem</span><br><br>";
    }

    // Texto do Desgaste
    if (desgaste == 0 && dis == 0){
        txtDesgaste = "";
    }
    else if (desgaste == 0 && dis > 0){
        txtDesgaste = "Parabéns, o seu navio não se desgastou na viagem";
    }
    else{
        txtDesgaste = "<h3>Desgaste:</h3><br>O seu navio se desgastou... vamos aos números<br>";
        txtDesgaste = txtDesgaste + "O seu navio viajou por: <br>";
        if (auxDesgaste[0] - auxDesgaste2[0] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[0] - auxDesgaste2[0]) + " dias no Calm Belt.<br>";
        }
        if (auxDesgaste[1] - auxDesgaste2[1] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[1] - auxDesgaste2[1]) + " dias nos Blues.<br>";
        }
        if (auxDesgaste[2] - auxDesgaste2[2] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[2] - auxDesgaste2[2]) + " dias na Paradise.<br>";
        }
        if (auxDesgaste[3] - auxDesgaste2[3] > 0){
            txtDesgaste = txtDesgaste + (auxDesgaste[3] - auxDesgaste2[3]) + " dias no Novo Mundo.<br>";
        }
        if(nav == 0){
            txtDesgaste = txtDesgaste + "Isso tudo sem ter alguém que saiba navegar...<br>";
        }
        else{
            txtDesgaste = txtDesgaste + "Isso tudo tendo um Jogador ou NPC Companheiro de Nível " + document.getElementById('nivelNavegacao').value + "<br>";
        }
        txtDesgaste = txtDesgaste + "Assim, o seu <span class='destaque'>Desgaste total é de: " + desgaste + " pontos de vida do barco</span><br>";
        if (desgaste > vida){
            txtDesgaste = txtDesgaste + "O seu <span class='destaque'>barco vai afundar</span> se você não fizer manutenção nele em alguma de suas paradas<br>";
        }
    }

    txtDesgaste = txtDesgaste + "<br><br>";

    // Textos Extras
    txtExtra  = "";

    // Trocando de Blues
    if(MarEstou == 0 && MarVou == 0 && RotaEstou != RotaVou){
        txtExtra = txtExtra + "Lembre-se de pagar a travessia pela Rota da Serpente Carmesim se você não for Agente ou Marinheiro<br>";
    }
    // Atravessando a Reverse
    if(MarEstou == 0 && MarVou > 0 && marine == false){
        txtExtra = txtExtra + "Lembre-se de narrar direitinho a travessia na Reverse Mountain ^^<br>";
    }
    // Adversidade no primeiro Mar da Paradise
    if(MarEstou == 0 && MarVou > 0 && marine == true){
        txtExtra = txtExtra + "Lembre-se de rolar a adversidade do primeiro mar da Paradise<br>";
    }
    // Adversidade no primeiro Mar da Paradise
    if(farolEstou == 1){
        txtExtra = txtExtra + "Lembre-se de rolar a adversidade do primeiro mar da Paradise<br>";
    }
    // Adversidade Infinitos Corais
    if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && (sabaodyVou == 1 || MarVou >= 1) && IlhaVou > 0){
        txtExtra = txtExtra + "Divirta-se narrando o navio passando no mar de corais após a ilha Hasagt Altai<br>";
    }
    // Adversidade Frozen Oceans
    if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && (sabaodyVou == 1 || MarVou >= 1) && IlhaVou > 1){
        txtExtra = txtExtra + "Divirta-se narrando o navio passando pelo oceano congelado após Pyatidrov<br>";
    }
    // Adversidade Florian Triangle
    if ((sabaodyVou == 1 || MarVou == 2) && RotaEstou > 5 && MarEstou == 1){
        txtExtra = txtExtra + "Divirta-se narrando a névoa densa do Florian Triangle<br>";
    }
    // Voltar para os Blues
    if (MarVou == 0 && MarEstou > 0){
        txtExtra = txtExtra + "Só é possível voltar para os Blues com um Vivre Card e é necessário passar no Calm Belt... boa sorte<br>";
    }
    // Mudar de rota na Paradise
    if (MarEstou == 1 && MarVou == 1 && RotaEstou != RotaVou && sabaodyVou == 0 && farolEstou == 0 && sabaodyEstou == 0){
        txtExtra = txtExtra + "Só é possível mudar de rota na Paradise por Eternal Pose, Vivre Card ou Mapa Mundi<br>";
    }
    // Retroceder na Paradise
    if (MarEstou == 1 && MarVou == 1 && IlhaEstou > IlhaVou && sabaodyVou == 0){
        txtExtra = txtExtra + "Só é possível retroceder, seja na mesma rota ou não, na Paradise por Eternal Pose, Vivre Card ou Mapa Mundi<br>";
    }
    // Retroceder no Novo Mundo
    if (MarEstou == 2 && MarVou == 2 && IlhaEstou > IlhaVou){
        txtExtra = txtExtra + "Só é possível retroceder, seja na mesma rota ou não, no Novo Mundo por Eternal Pose, Vivre Card ou Mapa Mundi<br>";
    }
    if (fam == 1){
        txtExtra = txtExtra + "O seu personagem vai ficar bem perto de faminto... tem certeza que é uma boa escolha?<br>";    
    }
    if (fam == 2){
        txtExtra = txtExtra + "O seu personagem vai ficar com Faminto I... tem certeza que é uma boa escolha?<br>";    
    }
    if (fam == 3){
        txtExtra = txtExtra + "O seu personagem vai ficar com Faminto II... tem certeza que é uma boa escolha?<br>";    
    }
    if (fam == 4){
        txtExtra = txtExtra + "O seu personagem vai ficar com Faminto III... tem certeza que é uma boa escolha?<br>";    
    }
    if (fam == 5){
        txtExtra = txtExtra + "O seu personagem vai ficar com Faminto IV... tem certeza que é uma boa escolha?<br>";    
    }
    if (fam == 6){
        txtExtra = txtExtra + "O seu personagem vai ficar com Faminto V... tem certeza que é uma boa escolha?<br>";    
    }
    if (fam > 0 && gul > 0){
        txtExtra = txtExtra + "Vai mesmo brincar com faminto tendo guloso na sua tripulação? Tente não matá-lo de fome.<br>";    
    }
    if (txtExtra != ""){
        txtExtra = "<h3>Extras da viagem:</h3><br>" + txtExtra;
    }

    document.getElementById('resultado').innerHTML = txtResultado;
    document.getElementById('desgaste').innerHTML = txtDesgaste;
    document.getElementById('extras').innerHTML = txtExtra;
}

function calcDesg(){
    sum = 0;
    if(dis > 0){
        for(let i = 0; i < 4; i++){
            auxDesgaste2[i] = Math.ceil(velocidade*auxDesgaste[i]/dis);
            sum = sum + auxDesgaste2[i];
        }
    }
    else{
        auxDesgaste2 = [0,0,0,0];
    }

    while (sum > velocidade){
        for(let i = 0; i < 4; i++){
            if(auxDesgaste2[3-i] > 0){
                auxDesgaste2[3-i] = auxDesgaste2[3-i] - 1;
                sum = sum - 1;
            }
            if(sum == velocidade){
                i = 4;
            }
        }
    }

    desgaste = 0;
    if (nav == 0){
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][0] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][0] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][0] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][0];
        if(MarEstou == 0 && MarVou > 0 && marine == false){
            desgaste = desgaste +  desgasteTabela[4][0];
        }
        // Adversidade Infinitos Corais
        if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][0];
        }
        // Adversidade Frozen Oceans
        if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][0];
        }
    }
    else if(nav >= 1 && nav <= 4){
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][1] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][1] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][1] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][1];
        if(MarEstou == 0 && MarVou > 0 && marine == false){
            desgaste = desgaste +  desgasteTabela[4][1];
        }
        // Adversidade Infinitos Corais
        if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][1];
        }
        // Adversidade Frozen Oceans
        if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][1];
        }
    }
    else if(nav >= 5 && nav <= 9){
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][2] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][2] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][2] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][2];
        if(MarEstou == 0 && MarVou > 0 && marine == false){
            desgaste = desgaste +  desgasteTabela[4][2];
        }
        // Adversidade Infinitos Corais
        if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][2];
        }
        // Adversidade Frozen Oceans
        if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][2];
        }
    }
    else if(nav >= 10 && nav <= 15){        
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][3] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][3] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][3] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][3];
        if(MarEstou == 0 && MarVou > 0 && marine == false){
            desgaste = desgaste +  desgasteTabela[4][3];
        }
        // Adversidade Infinitos Corais
        if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][3];
        }
        // Adversidade Frozen Oceans
        if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][3];
        }
    }
    else if(nav >= 16 && nav <= 19){        
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][4] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][4] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][4] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][4];
        if(MarEstou == 0 && MarVou > 0 && marine == false){
            desgaste = desgaste +  desgasteTabela[4][4];
        }
        // Adversidade Infinitos Corais
        if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][4];
        }
        // Adversidade Frozen Oceans
        if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][4];
        }
    }
    else{
        desgaste = (auxDesgaste[0] - auxDesgaste2[0])*desgasteTabela[0][5] + (auxDesgaste[1] - auxDesgaste2[1])*desgasteTabela[1][5] + (auxDesgaste[2] - auxDesgaste2[2])*desgasteTabela[2][5] + (auxDesgaste[3] - auxDesgaste2[3])*desgasteTabela[3][5];
        if(MarEstou == 0 && MarVou > 0 && marine == false){
            desgaste = desgaste +  desgasteTabela[4][5];
        }
        // Adversidade Infinitos Corais
        if (RotaEstou == 0 && MarEstou == 1 && IlhaEstou == 0 && IlhaVou > 0){
            desgaste = desgaste + 3*desgasteTabela[2][5];
        }
        // Adversidade Frozen Oceans
        if (RotaEstou == 5 && MarEstou == 1 && IlhaEstou == 1 && IlhaVou > 1){
            desgaste = desgaste + 3*2*desgasteTabela[2][5];
        }
    }
}

function attDis(){
    //Situações envolvendo o Farol
    if(farolVou){
        //Partindo de Sabaody/Tritão
        if(sabaodyEstou){
            dis = 12*8;
            auxDesgaste = [0,0,dis,0];
        }
        // Partindo dos Blues
        else if(MarEstou == 0){
            if (marine == false){
                dis = BluesDistance(IlhaEstou,6);
                auxDesgaste = [0,dis,0,0];
            }
            else{
                dis = BluesDistance(IlhaEstou,6) + 6 + 12 + 12;
                auxDesgaste = [6,BluesDistance(IlhaEstou,6),24,0];
            }
        }
        //Partindo da Paradise
        else if(MarEstou == 1){
            dis = 12*Math.abs(IlhaEstou - 0) + 12;
            auxDesgaste = [0,0,dis,0];
        }
        //Partindo do novo mundo
        else if(MarEstou == 2){
            dis = 12*8 + 18 + 18*IlhaEstou;
            auxDesgaste = [0,0,12*8,18 + 18*IlhaEstou];
        }
    }
    else if(farolEstou){
        //Partindo para o próprio Farol
        if(farolVou){
            dis = 0;
        }
        //Partindo para Sabaody/Tritão
        else if(sabaodyVou){
            dis = 12*8;
            auxDesgaste = [0,0,dis,0];
        }
        //Partindo para os Blues
        else if(MarVou == 0){
            dis = 12 + 18 + BluesDistance(IlhaEstou,6);
            auxDesgaste = [6,BluesDistance(IlhaEstou,6),12+12,0];
        }
        //Partindo para a Paradise
        else if(MarVou == 1){
            dis = 12 + 12*IlhaVou;
            auxDesgaste = [0,0,dis,0];
        }
        //Partindo para o Novo Mundo
        else if(MarVou == 2){
            dis = 12*8 + 18 + 18*IlhaVou;
            auxDesgaste = [0,0,12*8,18+18*IlhaVou];
        }
    }
    //Situações envolvendo Sabaody
    else if(sabaodyVou){
        //Partindo do Farol
        if(farolEstou == 1){
            dis = 12*8;
            auxDesgaste = [0,0,dis,0];
        }
        // Partindo dos Blues
        else if(MarEstou == 0){
            if(marine==false){
                dis = BluesDistance(IlhaEstou,6) + 12*8;
                auxDesgaste = [0,BluesDistance(IlhaEstou,6),12*8,0];

            }
            else{
                dis = BluesDistance(IlhaEstou,6) + 18 + 12*7;
                auxDesgaste = [6,BluesDistance(IlhaEstou,6),12*8,0];
            }
        }
        //Partindo da Paradise
        else if(MarEstou == 1){
            dis = 12*(7 - IlhaEstou);
            auxDesgaste = [0,0,dis,0];
        }
        //Partindo do novo mundo
        else if(MarEstou == 2){
            dis = 18 + 18*Math.abs(IlhaEstou);
            auxDesgaste = [0,0,0,dis];
        }
    }
    else if(sabaodyEstou){
        //Partindo para o Farol
        if(farolVou == 1){
            dis = 12*8;
            auxDesgaste = [0,0,dis,0];
        }
        //Partindo para Sabaody/Tritão
        else if(sabaodyVou){
            dis = 0;
        }
        //Partindo para os Blues
        else if(MarVou == 0){
            dis = 12*7 + 18 + BluesDistance(6,IlhaVou);
            auxDesgaste = [0,0,12*7,0];
        }
        //Partindo para a Paradise
        else if(MarVou == 1){
            dis = 12*Math.abs(IlhaVou-7);
            auxDesgaste = [0,0,dis,0];
        }
        //Partindo para o Novo Mundo
        else if(MarVou == 2){
            dis = 18 + 18*IlhaVou;
            auxDesgaste = [0,0,0,dis];
        }
    }
    //Situações envolvendo o mesmo mar
    else if (MarEstou == MarVou){
        //Primeiro caso, viagem dos Blues para os Blues
        if(MarEstou == 0){
            // No mesmo Blue
            if(RotaEstou == RotaVou){
                dis = BluesDistance(IlhaEstou,IlhaVou);
                auxDesgaste = [0,dis,0,0];
            }
            // Em Blues diferentes
            else{
                dis = BluesDistance(IlhaEstou,6) + 10 + BluesDistance(6,IlhaVou);
                auxDesgaste = [0,dis,0,0];
            }
        }
        //Segundo caso, viagem da Paradise para a Paradise
        else if(MarEstou == 1){ 
            dis = 12*Math.abs(RotaEstou - RotaVou) + 12*Math.abs(IlhaEstou - IlhaVou);
            if (RotaEstou != RotaVou){
                if (IlhaEstou >= 4 || IlhaVou >=4){
                    if(RotaEstou > 5 || RotaVou > 5){
                        dis = dis - 12;
                    }
                    if((RotaEstou <= 1 && RotaVou >= 2) || (RotaVou <= 1 && RotaEstou >= 2)){
                        dis = dis - 12;
                    }
                }
            }
            auxDesgaste = [0,0,dis,0];
        }
        //Terceiro caso, viagem do Novo Mundo para o Novo Mundo
        else if(MarEstou == 2){
            dis = 12*Math.abs(RotaEstou - RotaVou) + 18*Math.abs(IlhaEstou-IlhaVou);
            auxDesgaste = [0,0,0,dis];
        }
    }
    //Situações envolvendo troca de mares
    else{
        //Primeiro caso, viagem dos Blues para a Paradise
        if (MarEstou == 0 && MarVou == 1){
            if(marine==false){
                dis = BluesDistance(IlhaEstou,6) + 12 + 12*IlhaVou;
                auxDesgaste = [0,BluesDistance(IlhaEstou,6),12+12*IlhaVou,0];
            }
            else{
                dis = BluesDistance(IlhaEstou,6) + 18 + 12*IlhaVou;
                auxDesgaste = [6,BluesDistance(IlhaEstou,6),12+12*IlhaVou,0];
            }
        }
        //Segundo caso, viagem dos Blues para o Novo Mundo
        else if (MarEstou == 0 && MarVou == 2){
            if(marine==false){
                dis = BluesDistance(IlhaEstou,6) + 12*8 + 18 + 18*IlhaVou;
                auxDesgaste = [0,BluesDistance(IlhaEstou,6),12*8,18+18*IlhaVou];
            }
            else{
                dis = BluesDistance(IlhaEstou,6) + 18 + 12*7 + 18 + 18*IlhaVou;
                auxDesgaste = [6,BluesDistance(IlhaEstou,6),12*8,18+18*IlhaVou];
            }
        }
        //Terceiro caso, viagem da Paradise para os Blues
        else if(MarEstou == 1 && MarVou == 0){
            dis = BluesDistance(6,IlhaVou) + 18 + 12*IlhaEstou;
            auxDesgaste = [6,BluesDistance(6,IlhaVou),12*(IlhaEstou + 1),0];
        }
        //Quarto caso, viagem da Paradise para o Novo Mundo
        else if(MarEstou == 1 && MarVou == 2){
            dis = 12*Math.abs(IlhaEstou - 7) + 18 + 18*IlhaVou;
            auxDesgaste = [0,0,12*Math.abs(IlhaEstou - 7),18*(1+IlhaVou)];
        }
        //Quinto caso, viagem do Novo Mundo para os Blues
        else if(MarEstou == 2 && MarVou == 0){
            dis = 18*IlhaEstou + 18 + 12*7 + 18 + BluesDistance(6,IlhaVou);
            auxDesgaste = [6,BluesDistance(6,IlhaVou),12*8,18*(1+IlhaEstou)];
        }
        //Sexto caso, viagem do Novo Mundo para a Paradise
        else if(MarEstou == 2 && MarVou == 1){
            dis = 18*IlhaEstou + 18 + 12*Math.abs(7 - IlhaVou);
            auxDesgaste = [0,0,12*Math.abs(7 - IlhaVou),18*(1+IlhaEstou)];
        } 
    }
    // Adversidade Florian Triangle
    if ((sabaodyVou == 1 || MarVou == 2) && RotaEstou > 5 && MarEstou == 1){
        dis = dis + 2;
        auxDesgaste[2] = auxDesgaste[2] + 2;
    }
    attTempo();
}

function BluesDistance(Inicio, Fim){
    switch(Inicio){
        case 0:
            if(Fim == 0){
                return 0;
            }
            else if(Fim == 1){
                return 6;
            }
            else if(Fim == 2){
                return 8;
            }
            else if(Fim == 3){
                return 10;
            }
            else if(Fim == 4){
                return 16;
            }
            else if(Fim == 5){
                return 18;
            }
            else{
                return 24;
            }
            break;
        case 1:
            if(Fim == 0){
                return 6;
            }
            else if(Fim ==1){
                return 0;
            }
            else if(Fim == 2){
                return 10;
            }
            else if(Fim == 3){
                return 8;
            }
            else if(Fim == 4){
                return 18;
            }
            else if(Fim == 5){
                return 16;
            }
            else{
                return 26;
            }
            break;
        case 2:
            if(Fim == 0){
                return 8;
            }
            else if(Fim == 1){
                return 10;
            }
            else if(Fim == 2){
                return 0;
            }
            else if(Fim == 3){
                return 6;
            }
            else if(Fim == 4){
                return 8;
            }
            else if(Fim == 5){
                return 10;
            }
            else{
                return 16;
            }
            break;
        case 3:
            if(Fim == 0){
                return 10;
            }
            else if(Fim == 1){
                return 8;
            }
            else if(Fim == 2){
                return 6;
            }
            else if(Fim == 3){
                return 0;
            }
            else if(Fim == 4){
                return 10;
            }
            else if(Fim == 5){
                return 8;
            }
            else{
                return 18;
            }
            break;
        case 4:
            if(Fim == 0){
                return 16;
            }
            else if(Fim == 1){
                return 18;
            }
            else if(Fim == 2){
                return 8;
            }
            else if(Fim == 3){
                return 10;
            }
            else if(Fim == 4){
                return 0;
            }
            else if(Fim == 5){
                return 6;
            }
            else{
                return 8;
            }
            break;
        case 5:
            if(Fim == 0){
                return 18;
            }
            else if(Fim == 1){
                return 16;
            }
            else if(Fim == 2){
                return 10;
            }
            else if(Fim == 3){
                return 8;
            }
            else if(Fim == 4){
                return 6;
            }
            else if(Fim == 5){
                return 0;
            }
            else{
                return 10;
            }
            break;
        case 6:
            if(Fim == 0){
                return 24;
            }
            else if(Fim == 1){
                return 26;
            }
            else if(Fim == 2){
                return 16;
            }
            else if(Fim == 3){
                return 18;
            }
            else if(Fim == 4){
                return 8;
            }
            else if(Fim == 5){
                return 10;
            }
            else{
                return 0;
            }
            break;
    }
    
}

function attAdm(){
    if (document.getElementById('administracao').checked == true){
        adm = 1;
    }
    else{
        adm = 0;
    }
    attTempo();
}

function attHer(){
    if (document.getElementById('Herbalismo').checked == true){
        her = 1;
    }
    else{
        her = 0;
    }
    attTempo();
}

function attCoz(){
    if (document.getElementById('CozinheiroSim').checked == true){
        document.getElementById('cozinheiro').style.display = "block";
        attValorCoz();
    }
    else{
        document.getElementById('cozinheiro').style.display = "none";
        coz = 0;
        attTempo();
    }
}

function attValorCoz(){
    coz = Math.ceil(document.getElementById('nivelCozinheiro').value/2);
    attTempo();
}

function attNav(){
    if (document.getElementById('NavegacaoSim').checked == true){
        document.getElementById('navegador').style.display = "block";
        attValorNav();
    }
    else{
        document.getElementById('navegador').style.display = "none";
        nav = 0;
        attTempo();
    }
}

function attValorNav(){
    nav = Math.ceil(document.getElementById('nivelNavegacao').value/2);
    attTempo();
}

function attEstPeq(){
    if (document.getElementById('EstPeq').checked == true){
        document.getElementById('auxEstPeq').style.display = "block";
        attValorEstPeq();
    }
    else{
        document.getElementById('auxEstPeq').style.display = "none";
        estPeq = 0;
        attTempo();
    }
}

function attValorEstPeq(){
    estPeq = document.getElementById('ValorEstPeq').value;
    attTempo();
}

function attGul(){
    if (document.getElementById('Guloso').checked == true){
        document.getElementById('auxGul').style.display = "block";
        attValorGul();
    }
    else{
        document.getElementById('auxGul').style.display = "none";
        gul = 0;
        attTempo();
    }
}

function attValorGul(){
    gul = document.getElementById('ValorGul').value;
    attTempo();
}

function attMarine(valor){
    if (valor){
        marine = true;
    }
    else{
        marine = false;
    }
    attDis();
}

function attFam(valor){
    fam = valor;
    attTempo();
}

function attPes(){
    if (document.getElementById('pesca').checked == true){
        pes = 1;
    }
    else{
        pes = 0;
    }
    attTempo();
}