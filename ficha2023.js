document.addEventListener("DOMContentLoaded", () => {
    console.log("Rodando Ficha ver. 1.0");
    
    const query = (selector) => {return document.querySelector(selector)},
    queryAll = (selector) => {return document.querySelectorAll(selector)},
    resize = (size , text) => {
        if (size == 1) return;
        if (text.scrollWidth > 363){
            requestAnimationFrame(() =>
                requestAnimationFrame(function(){
                    text.style.fontSize = size + 'px';
                    resize(size - 0.5 , text);
            }))
        }
        return
    };

    function construtorCss(){
        let css = `<style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");
        @property --xp {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        .abFicha {
          box-sizing: border-box;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          margin: auto;
          width: 690px;
          padding: 20px;
          background-color: #232323;
          border-radius: 8px;
          font-family: "Poppins", sans-serif;
          color: #fff;
          font-size: 14px;
        }
        .abFicha * {
          box-sizing: border-box;
          display: block;
          transition: ease 0.2s;
        }
        .abFicha b, .abFicha strong, .abFicha i, .abFicha s, .abFicha u {
          display: inline-block;
        }
        .abFicha:hover .abfNome .abfAvatar {
          --xp: var(--b);
        }
        .abFicha:hover .abfNome .abfAvatar div {
          opacity: 100;
        }
        .abFicha:hover .abfNome .abfAvatar::before {
          opacity: 50%;
        }
        
        .abfBanner {
          width: 650px;
          height: 280px;
          background-image: var(--abfBanner);
          background-size: cover;
          background-position: top center;
          border-radius: 3px 3px 0px 0px;
        }
        
        .abfNome {
          width: 100%;
          height: 100px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          background-color: var(--corFicha);
        }
        .abfNome span {
          display: flex;
          flex-flow: column;
          padding: 20px;
          width: 62%;
        }
        .abfNome p {
          margin: auto 0;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          line-height: 100%;
          text-transform: uppercase;
        }
        .abfNome p:nth-child(1) {
          font-size: 42px;
          white-space: nowrap;
        }
        .abfNome p:nth-child(2) {
          font-size: 16px;
          word-spacing: 3px;
        }
        .abfNome .abfAvatar {
          --xpCalc: 360deg;
          width: 180px;
          height: 180px;
          background: conic-gradient(#fff var(--xp), var(--corFicha) var(--xp) 360deg);
          border-radius: 100%;
          position: absolute;
          top: 0%;
          right: 10%;
          transform: translate(0%, -50%);
          transition: --xp ease 0.5s;
          overflow: hidden;
        }
        .abfNome .abfAvatar::after {
          content: "";
          display: block;
          width: 88%;
          height: 88%;
          background-image: var(--abfAvatar);
          background-size: cover;
          background-position: top center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 100%;
        }
        .abfNome .abfAvatar div {
          position: absolute;
          width: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          pointer-events: none;
          font-weight: 700;
          z-index: 20;
          text-align: center;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }
        .abfNome .abfAvatar div span {
          font-size: 25px;
          padding: 0;
          width: 100%;
        }
        .abfNome .abfAvatar::before {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 88%;
          height: 88%;
          background-color: #000;
          opacity: 0%;
          z-index: 15;
        }
        
        .abfButtons {
          width: 100%;
          height: 38px;
          display: flex;
          flex-flow: row nowrap;
          gap: 10px;
          margin: 10px 0px 0px 0px;
        }
        .abfButtons button {
          flex: 1;
          height: 100%;
          border: none;
          border-radius: 0%;
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          background-color: #131313;
          opacity: 70%;
          cursor: pointer;
        }
        .abfButtons button:hover, .abfButtons button:focus, .abfButtons button.active {
          opacity: 100%;
        }
        .abfButtons button:active {
          opacity: 100%;
          box-shadow: inset 0px 0px 2px #000;
          font-size: 15.5px;
        }
        .abfButtons button.active {
          background-color: var(--corFicha);
        }
        
        .abfStats {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          width: 100%;
          margin: 25px 0px 25px 0px;
          cursor: help;
        }
        .abfStats .abfAtt {
          width: 100px;
          height: 100px;
          background-color: #151515;
          border-radius: 10px;
          border: double 5px #000;
          position: relative;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: center;
        }
        .abfStats .abfAtt span:nth-child(1), .abfStats .abfAtt span:nth-child(3) {
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 2px;
          border: double 5px #000;
          border-radius: 5px;
          width: 60%;
          text-align: center;
          background-color: #151515;
          transform: translate(0, -50%);
        }
        .abfStats .abfAtt span:nth-child(2) {
          font-weight: 500;
          font-size: 25px;
          line-height: 5px;
        }
        .abfStats .abfAtt span:nth-child(3) {
          transform: translate(0, 55%);
          font-size: 15px;
        }
        .abfStats .abfAtt .calculos {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 80%);
          white-space: nowrap;
          padding: 5px;
          background-color: #151515;
          border: double #000 5px;
          border-radius: 5px;
          text-align: center;
          font-size: 18px;
          line-height: 25px;
          font-family: "Times New Roman", Times, serif;
          opacity: 0;
          pointer-events: none;
          z-index: 10;
        }
        .abfStats .abfAtt:hover .calculos, .abfStats .abfAtt:focus .calculos {
          opacity: 100;
          transform: translate(-50%, 50%);
        }
        
        .abfContainer {
          display: none;
          width: 100%;
          flex-flow: column;
        }
        .abfContainer.active {
          display: block;
        }
        
        .abfStats2 {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          gap: 10px;
          height: 260px;
        }
        
        .recursos {
          width: 210px;
          display: flex;
          flex-flow: column;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .recursos div {
          width: 100%;
          height: 80px;
          background-color: #151515;
          border: double 5px #000;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-around;
          position: relative;
        }
        .recursos div::before {
          content: "";
          width: 2px;
          height: 80%;
          border-right: solid 2.5px #000;
          border-left: solid 2.5px #000;
          order: 2;
        }
        .recursos div span:nth-child(1) {
          order: 1;
        }
        .recursos div span:nth-child(2) {
          order: 3;
          font-weight: 500;
        }
        .recursos div span {
          width: 33%;
          text-align: center;
        }
        
        .secundarios {
          flex: 1;
          height: 100%;
          background-color: #151515;
          border: double 5px #000;
          border-radius: 10px;
          display: flex;
          flex-flow: column wrap;
          gap: 10px;
          padding: 10px;
          position: relative;
          justify-content: space-between;
        }
        .secundarios::before {
          content: "";
          width: 2px;
          height: 84%;
          border-right: solid 2.5px #000;
          border-left: solid 2.5px #000;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        
        .atributo {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-around;
          padding: 10px;
          gap: 20px;
          width: calc(50% - 5px);
          position: relative;
          height: 45px;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .atributo::before {
          content: "";
          position: absolute;
          width: 95%;
          height: 2px;
          border-top: solid 2.5px #000;
          border-bottom: solid 2.5px #000;
          top: 114%;
        }
        .atributo::after {
          content: "";
          width: 2px;
          height: 140%;
          border-right: solid 2.5px #000;
          border-left: solid 2.5px #000;
          order: 2;
          align-self: flex-start;
          position: relative;
          top: -20%;
        }
        .atributo:nth-child(4)::before, .atributo:nth-child(8)::before {
          display: none;
        }
        .atributo span:nth-child(1) {
          width: 95px;
          order: 1;
        }
        .atributo span:nth-child(2) {
          width: 35px;
          order: 3;
          font-weight: 500;
        }
        .atributo span:nth-child(3) {
          display: flex;
          flex-flow: column;
          justify-content: center;
          position: absolute;
          width: 60%;
          height: 100%;
          background-color: #151515;
          z-index: 10;
          opacity: 0;
          left: -10px;
          text-transform: none;
          font-weight: 500;
          font-size: 12px;
          text-align: center;
          transition: ease 0.3s;
        }
        .atributo:hover span:nth-child(3) {
          opacity: 100;
          left: 0;
        }
        
        .abfSection {
          width: 100%;
          background-color: #151515;
          margin: 10px 0px 0px 0px;
          padding: 20px;
          border-radius: 0px 0px 3px 3px;
        }
        .abfSection header {
          width: 100%;
          height: auto;
          position: relative;
          background-color: var(--corFicha);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 21px;
          padding: 15px 20px;
          margin: 40px 0px;
        }
        .abfSection header:nth-child(1) {
          margin-top: 0;
        }
        
        .armaFavorita {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          gap: 30px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        .armaFavorita::before {
          content: "";
          width: 120px;
          height: 120px;
          outline: #000 double 5px;
          border-radius: 10px;
          background-image: var(--armaBg);
          background-size: cover;
        }
        
        .specs {
          white-space: pre-line;
          line-height: 32px;
          border-left: double 5px #000;
          padding-left: 30px;
        }
        
        .abFicha .spoiler {
          width: 95%;
          margin: auto;
          margin-bottom: 20px;
        }
        .abFicha .spoiler .genmed {
          font-size: 12px;
        }
        .abFicha .spoiler .spoiler_content {
          border: solid 1px #fff;
        }
        .abFicha .spoiler dd {
          margin: 0;
        }
        
        .abfAbout {
          display: flex;
          flex-flow: row wrap;
          gap: 8px;
          position: relative;
        }
        .abfAbout span {
          padding: 0px 8px;
          background-color: #191919;
          border: solid 2px #090909;
          display: flex;
          flex-flow: row nowrap;
          flex: 1;
          justify-content: left;
          align-items: center;
          white-space: nowrap;
          gap: 8px;
          border-radius: 3px;
          box-shadow: inset #000 0px 0px 1px;
        }
        .abfAbout span b {
          border-right: solid 2px #090909;
          padding: 8px 8px 8px 0px;
        }
        </style>`

        query('head').insertAdjacentHTML('beforeend', css);
        return 'Css OK';
    }

    function construtorDeFicha(){
        let imagemBanner = query('imagemBanner').innerText;
        let imagemIcone = query('imagemIcone').innerText;
        let corFicha = query('corFicha').innerText;

        let nome = query('nome').innerText;
        let subNome = query('subNome').innerText;

        let idade = query('idade').innerText;
        let genero = query('genero').innerText;
        let maoPredominante = query('maoPredominante').innerText;
        let risada = query('risada').innerText;
        let altura = query('altura').innerText;
        let peso = query('peso').innerText;
        let raca = query('raca').innerText;
        let origem = query('origem').innerText;
        let localizacao = query('localizacao').innerText;
        let grupo = query('grupo').innerText;

        let level = query('level').innerText;
        let xpAtual = query('xpAtual').innerText;
        let xpProxLvl = query('xpProxLvl').innerText;

        let forca = query('forca').innerText;
        let forcaMod = query('forcaMod').innerText;
        let forcaCalc = query('forcaCalc').innerHTML;
        let destreza = query('destreza').innerText;
        let destrezaMod = query('destrezaMod').innerText;
        let destrezaCalc = query('destrezaCalc').innerHTML;
        let agilidade = query('agilidade').innerText;
        let agilidadeMod = query('agilidadeMod').innerText;
        let agilidadeCalc = query('agilidadeCalc').innerHTML;
        let inteligencia = query('inteligencia').innerText;
        let inteligenciaMod = query('inteligenciaMod').innerText;
        let inteligenciaCalc = query('inteligenciaCalc').innerHTML;
        let constituicao = query('constituicao').innerText;
        let constituicaoMod = query('constituicaoMod').innerText;
        let constituicaoCalc = query('constituicaoCalc').innerHTML;
        let carisma = query('carisma').innerText;
        let carismaMod = query('carismaMod').innerText;
        let carismaCalc = query('carismaCalc').innerHTML;
        let pontosDeVida = query('pontosDeVida').innerText;
        let espirito = query('espirito').innerText;
        let stamina = query('stamina').innerText;
        let iniciativa = query('iniciativa').innerText;
        let iniciativaCalc = query('iniciativaCalc').innerHTML;
        let acerto = query('acerto').innerText;
        let acertoCalc = query('acertoCalc').innerHTML;
        let reflexo = query('reflexo').innerText;
        let reflexoCalc = query('reflexoCalc').innerHTML;
        let opa = query('opa').innerText;
        let danoCaC = query('danoCaC').innerHTML;
        let danoCaCCalc = query('danoCaCCalc').innerHTML;
        let danoAD = query('danoAD').innerText;
        let danoADCalc = query('danoADCalc').innerHTML;
        let armadura = query('armadura').innerText;
        let armaduraCalc = query('armaduraCalc').innerHTML;
        let penetracao = query('penetracao').innerText;
        let penetracaoCalc = query('penetracaoCalc').innerHTML;

        let armaImagem = query('armaImagem').innerText;
        let armaNome = query('armaNome').innerText;
        let armaQualidade = query('armaQualidade').innerText;
        let armaTipo = query('armaTipo').innerText;
        let armaDano = query('armaDano').innerText;
        let armaDesc = query('armaDesc').innerHTML;

        let edc = query('edc').innerHTML;
        let caminho = query('caminho').innerHTML;
        let haki = query('haki').innerHTML;
        let tecnicas = query('tecnicas').innerHTML;

        let aparencia = query('aparencia').innerHTML;
        let personalidade = query('personalidade').innerHTML;
        let historia = query('historia').innerHTML;

        let vanRacial = query('vanRacial').innerHTML;
        let desRacial = query('desRacial').innerHTML;
        let vanGerais = query('vanGerais').innerHTML;
        let desGerais = query('desGerais').innerHTML;

        let pericias = query('pericias').innerHTML;
        let profissoes = query('profissoes').innerHTML;

        let titulo = query('titulo').innerText;
        let campoUmNome = query('campoUmNome').innerText;
        let campoUm = query('campoUm').innerText;
        let campoDoisNome = query('campoDoisNome').innerText;
        let campoDois = query('campoDois').innerText;
        let campoTresNome = query('campoTresNome').innerText;
        let campoTres = query('campoTres').innerText;
        let alcunhas = query('alcunhas').innerText;
        
        let inventario = query('inventario').innerHTML;
        let barcos = query('barcos').innerHTML;
        let mascotes = query('mascotes').innerHTML;
        let aventuras = query('aventuras').innerHTML;
        let anexos = query('anexos').innerHTML;
        let anotacoes = query('anotacoes').innerHTML;
        let projetos = query('projetos').innerHTML;

        let ficha = `
        <div class="abFicha" style="--corFicha: ${corFicha};">
            <div class="abfBanner" style="--abfBanner: url(${imagemBanner});"></div>
            <div class="abfNome">
                <span>
                    <p>${nome}</p>
                    <p>${subNome}</p>
                </span>
                <div class="abfAvatar" style="--abfAvatar: url(${imagemIcone}); --b: calc((${xpAtual}/${xpProxLvl}) * 360deg)"><div><span>Lvl ${level}</span>${xpAtual}/${xpProxLvl}</div></div>
            </div>
            <div class="abfButtons">
                <button class="active">combate</button>
                <button>perfil</button>
                <button>pertences</button>
                <button>Extras</button>
            </div>
            <div class="abfContainer active" id="combate">
                <div class="abfStats">
                    <div class="abfAtt">
                        <span>For</span>
                        <span>${forca}</span>
                        <span>${forcaMod}</span>
                        <span class="calculos">${forcaCalc}</span>
                    </div>
                    <div class="abfAtt">
                        <span>Des</span>
                        <span>${destreza}</span>
                        <span>${destrezaMod}</span>
                        <span class="calculos">${destrezaCalc}</span>
                    </div>
                    <div class="abfAtt">
                        <span>Agi</span>
                        <span>${agilidade}</span>
                        <span>${agilidadeMod}</span>
                        <span class="calculos">${agilidadeCalc}</span>
                    </div>
                    <div class="abfAtt">
                        <span>Int</span>
                        <span>${inteligencia}</span>
                        <span>${inteligenciaMod}</span>
                        <span class="calculos">${inteligenciaCalc}</span>
                    </div>
                    <div class="abfAtt">
                        <span>Con</span>
                        <span>${constituicao}</span>
                        <span>${constituicaoMod}</span>
                        <span class="calculos">${constituicaoCalc}</span>
                    </div>
                    <div class="abfAtt">
                        <span>Car</span>
                        <span>${carisma}</span>
                        <span>${carismaMod}</span>
                        <span class="calculos">${carismaCalc}</span>
                    </div>
                </div>
                <div class="abfStats2">
                    <div class="recursos">
                        <div>
                            <span>Pdv</span>
                            <span>${pontosDeVida}</span>
                        </div>
                        <div>
                            <span>Esp</span>
                            <span>${espirito}</span>
                        </div>
                        <div>
                            <span>Sta</span>
                            <span>${stamina}</span>
                        </div>
                    </div>
                    <div class="secundarios">
                        <div class="atributo">
                            <span>Iniciativa</span>
                            <span>${iniciativa}</span>
                            <span>${iniciativaCalc}</span>
                        </div>
                        <div class="atributo">
                            <span>Acerto</span>
                            <span>${acerto}</span>
                            <span>${acertoCalc}</span>
                        </div>
                        <div class="atributo">
                            <span>Reflexo</span>
                            <span>${reflexo}</span>
                            <span>${reflexoCalc}</span>
                        </div>
                        <div class="atributo">
                            <span>OPA</span>
                            <span>${opa}</span>
                            <span>Oportunidade de Ataque</span>
                        </div>
                        <div class="atributo">
                            <span>Dano CaC</span>
                            <span>${danoCaC}</span>
                            <span>${danoCaCCalc}</span>
                        </div>
                        <div class="atributo">
                            <span>Dano AD</span>
                            <span>${danoAD}</span>
                            <span>${danoADCalc}</span>
                        </div>
                        <div class="atributo">
                            <span>Armadura</span>
                            <span>${armadura}</span>
                            <span>${armaduraCalc}</span>
                        </div>
                        <div class="atributo">
                            <span>Pen</span>
                            <span>${penetracao}</span>
                            <span>${penetracaoCalc}</span>
                        </div>
                    </div>
                </div>
                <section class="abfSection">
                    <header>Arma Favorita</header>
                    <div class="armaFavorita" style="--armaBg: url(${armaImagem});">
                        <div class="specs"><strong>Nome:</strong> ${armaNome}
                            <b>Qualidade:</b> ${armaQualidade}
                            <b>Tipo:</b> ${armaTipo}
                            <b>Dano:</b> ${armaDano}
                        </div>
                    </div>
                    ${armaDesc}

                    <header>Estilos de Combate</header>
                    ${edc}

                    <header>Caminho de Jogo</header>
                    ${caminho}

                    <header>Haki</header>
                    ${haki}

                    <header>Técnicas</header>
                    ${tecnicas}
                </section>
            </div>
            <section class="abfContainer abfSection" id="perfil">
                <header>Sobre a Personagem</header>
                <div class="abfAbout">
                    <span><b>Nome</b> ${nome}</span>
                    <span><b>Idade</b> ${idade}</span>
                    <span><b>Gênero</b> ${genero}</span>
                    <span><b>Mão Predominante</b> ${maoPredominante}</span>
                    <span><b>Risada</b> ${risada}</span>
                    <span><b>Altura</b> ${altura}</span>
                    <span><b>Peso</b> ${peso}</span>
                    <span><b>Raça</b> ${raca}</span>
                    <span><b>Origem</b> ${origem}</span>
                    <span><b>Localização</b> ${localizacao}</span>
                    <span><b>Grupo</b> ${grupo}</span>
                </div>

                <header>Bio</header>
                ${aparencia}
                ${personalidade}
                ${historia}

                <header>Características</header>
                ${vanRacial}
                ${desRacial}
                ${vanGerais}
                ${desGerais}
                ${pericias}

                <header>Profissões</header>
                ${profissoes}

                <header>Grupo</header>
                <div class="abfAbout">
                    <span><b>Grupo</b> ${grupo}</span>
                    <span><b>Título</b> ${titulo}</span>
                    <span><b>${campoUmNome}</b> ${campoUm}</span>
                    <span><b>${campoDoisNome}</b> ${campoDois}</span>
                    <span><b>${campoTresNome}</b> ${campoTres}</span>
                    <span><b>Alcunhas</b> ${alcunhas}</span>
                </div>
            </section>
            <section class="abfContainer abfSection" id="pertences">
                <header>Inventário</header>
                ${inventario}

                <header>Embarcação</header>
                ${barcos}

                <header>Mascotes</header>
                ${mascotes}
            </section>
            <section class="abfContainer abfSection" id="extras">
                <header>Aventuras</header>
                ${aventuras}

                <header>Anexos</header>
                ${anexos}

                <header>Anotações</header>
                ${anotacoes}

                <header>Projetos</header>
                ${projetos}
            </section>
        </div>`

        query('.fichaAllBlue').insertAdjacentHTML('beforebegin', ficha);
        return "Html Ok";
    }

    if(query('.fichaAllBlue')){
        console.log(construtorDeFicha());
        console.log(construtorCss());

        resize(41 , query('.abfNome span p'));
    
        queryAll('.abfButtons button').forEach((element) => element.onclick = () => {
            let target = '#' + element.innerText.toLowerCase();
            
            queryAll('.abFicha .active').forEach((removeTarget) => removeTarget.classList.toggle('active'));
            element.classList.toggle('active');
            query(target).classList.toggle('active');
        });
    }
});
