document.addEventListener("DOMContentLoaded", () => {
    console.log("Rodando Ficha ver. 1.2, The builds Update");
    
    const query = (selector) => {return document.querySelector(selector)},
    queryAll = (selector) => {return document.querySelectorAll(selector)},
    resize = (size , text, max, amount) => {
        if (size == 1) return;
        if (text.scrollWidth > max){
            requestAnimationFrame(() =>
                requestAnimationFrame(function(){
                    text.style.fontSize = size + 'px';
                    resize(size - amount , text, max, amount);
            }))
        }
        return
    },

    text = (selector) => {
      try{
        return query(selector).innerText;
      }catch{
        console.log('Não foi possível identificar ' + selector);
        return '';
      }
    },

    html = (selector) => {
      try{
        return query(selector).innerHTML;
      }catch{
        console.log('Não foi possível identificar ' + selector);
        return '';
      }
    },

    textAll = (selector, index) => {
      try{
        return queryAll(selector)[index].innerText;
      }catch{
        console.log('Não foi possível identificar ' + selector);
        return '';
      }
    },

    htmlAll = (selector, index) => {
      try{
        return queryAll(selector)[index].innerHTML;
      }catch{
        console.log('Não foi possível identificar ' + selector);
        return '';
      }
    },

    grupoCampos = () => {
      let html = '';
      let matrix = [queryAll('campoNome'),queryAll('campoInfo')];

      for (let i = 0; i < matrix[0].length; i++) {
        try{
          html += `<span><b>${matrix[0][i].innerText}</b> ${matrix[1][i].innerText}</span>`;
        }catch(e){console.log('Não foi possível identificar ' + e);}
      }

      return html;
    },

    activeClass = (index) => {
      if(index == 0) return 'active';
      else return '';
    },

    ciborgue = (campo) => {
      if (query('fuel') && campo == 'style') return 'style="gap: 5px;"';
      else if (query('fuel') && campo == 'recurso') return '<div><span>Fuel</span><span>' + text('fuel') + '</span></div>';
      else return '';
    },

    builds = () => {
      let html = '';
      for (let index = 0; index < queryAll('nome').length; index++) {
        html += `<section class="abfBuild ${activeClass(index)}">
          <div class="abfStats">
              <div class="abfAtt">
                  <span>For</span>
                  <span>${textAll('forca',index)}</span>
                  <span>${textAll('forcaMod',index)}</span>
                  <span class="calculos">${htmlAll('forcaCalc',index)}</span>
              </div>
              <div class="abfAtt">
                  <span>Des</span>
                  <span>${textAll('destreza',index)}</span>
                  <span>${textAll('destrezaMod',index)}</span>
                  <span class="calculos">${htmlAll('destrezaCalc',index)}</span>
              </div>
              <div class="abfAtt">
                  <span>Agi</span>
                  <span>${textAll('agilidade',index)}</span>
                  <span>${textAll('agilidadeMod',index)}</span>
                  <span class="calculos">${htmlAll('agilidadeCalc',index)}</span>
              </div>
              <div class="abfAtt">
                  <span>Int</span>
                  <span>${textAll('inteligencia',index)}</span>
                  <span>${textAll('inteligenciaMod',index)}</span>
                  <span class="calculos">${htmlAll('inteligenciaCalc',index)}</span>
              </div>
              <div class="abfAtt">
                  <span>Con</span>
                  <span>${textAll('constituicao',index)}</span>
                  <span>${textAll('constituicaoMod',index)}</span>
                  <span class="calculos">${htmlAll('constituicaoCalc',index)}</span>
              </div>
              <div class="abfAtt">
                  <span>Car</span>
                  <span>${textAll('carisma',index)}</span>
                  <span>${textAll('carismaMod',index)}</span>
                  <span class="calculos">${htmlAll('carismaCalc',index)}</span>
              </div>
          </div>
          <div class="abfStats2">
              <div class="recursos" ${ciborgue('style')}>
                  <div>
                      <span>Pdv</span>
                      <span>${textAll('pontosDeVida',index)}</span>
                  </div>
                  <div>
                      <span>Esp</span>
                      <span>${textAll('espirito',index)}</span>
                  </div>
                  <div>
                      <span>Sta</span>
                      <span>${textAll('stamina',index)}</span>
                  </div>
                  ${ciborgue('recurso')}
              </div>
              <div class="secundarios">
                  <div class="atributo">
                      <span>Iniciativa</span>
                      <span>${textAll('iniciativa',index)}</span>
                      <span>${htmlAll('iniciativaCalc',index)}</span>
                  </div>
                  <div class="atributo">
                      <span>Acerto</span>
                      <span>${textAll('acerto',index)}</span>
                      <span>${htmlAll('acertoCalc',index)}</span>
                  </div>
                  <div class="atributo">
                      <span>Reflexo</span>
                      <span>${textAll('reflexo',index)}</span>
                      <span>${htmlAll('reflexoCalc',index)}</span>
                  </div>
                  <div class="atributo">
                      <span>OPA</span>
                      <span>${textAll('opa',index)}</span>
                      <span>Oportunidade de Ataque</span>
                  </div>
                  <div class="atributo">
                      <span>Dano CaC</span>
                      <span>${htmlAll('danoCaC',index)}</span>
                      <span>${htmlAll('danoCaCCalc',index)}</span>
                  </div>
                  <div class="atributo">
                      <span>Dano AD</span>
                      <span>${textAll('danoAD',index)}</span>
                      <span>${htmlAll('danoADCalc',index)}</span>
                  </div>
                  <div class="atributo">
                      <span>Armadura</span>
                      <span>${textAll('armadura',index)}</span>
                      <span>${htmlAll('armaduraCalc',index)}</span>
                  </div>
                  <div class="atributo">
                      <span>Pen</span>
                      <span>${textAll('penetracao',index)}</span>
                      <span>${htmlAll('penetracaoCalc',index)}</span>
                  </div>
              </div>
          </div>
        </section>`;
      }
      if (queryAll('nome').length > 1){
        html += '<div class="buildButtons">'
        for (let index = 0; index < queryAll('nome').length; index++) {
          const element = queryAll('nome')[index];
          if (index == 0) html += '<button class="active">Base</button>';
          else html += `<button>${element.innerText}</button>`;
        }
        html += '</div>';
      }
      return html;
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
          text-align: justify;
        }
        .abFicha * {
          box-sizing: border-box;
          display: block;
          transition: ease 0.2s;
        }
        .abFicha b, .abFicha strong, .abFicha i, .abFicha s, .abFicha u {
          display: inline-block;
        }
        .abFicha .spoiler, .abFicha .spoiler * {
          transition: none;
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
          line-height: normal;
        }
        .abfNome p {
          margin: auto 0;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          line-height: 100%;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .abfNome p:nth-child(1) {
          font-size: 42px;
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
        
        .abfButtons, .buildButtons {
          width: 100%;
          height: 38px;
          display: flex;
          flex-flow: row nowrap;
          gap: 10px;
          margin: 10px 0px 0px 0px;
        }
        .abfButtons button, .buildButtons button {
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
        .abfButtons button:hover, .abfButtons button:focus, .abfButtons button.active, .buildButtons button:hover, .buildButtons button:focus, .buildButtons button.active {
          opacity: 100%;
        }
        .abfButtons button:active, .buildButtons button:active {
          opacity: 100%;
          box-shadow: inset 0px 0px 2px #000;
          font-size: 15.5px;
        }
        .abfButtons button.active, .buildButtons button.active {
          background-color: var(--corFicha);
        }
        
        .buildButtons {
          gap: 5px;
          flex-flow: row wrap;
          height: auto;
        }
        .buildButtons button {
          height: 38px;
          white-space: nowrap;
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
        
        .abfBuild {
          display: none;
        }
        .abfBuild.active {
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
          text-align: right;
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
          background: none;
          border-left: none;
          border-right: none;
          padding: 10px 5px;
        }
        .abFicha .spoiler .spoiler_content.hidden {
          padding: 0;
        }
        .abFicha .spoiler dd {
          margin: 0;
          background-color: transparent;
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
        let imagemBanner = text('imagemBanner');
        let imagemIcone = text('imagemIcone');
        let corFicha = text('corFicha');

        let nome = text('nome');
        let subNome = html('subNome');

        let idade = text('idade');
        let genero = text('genero');
        let maoPredominante = text('maoPredominante');
        let risada = text('risada');
        let altura = text('altura');
        let peso = text('peso');
        let raca = text('raca');
        let origem = text('origem');
        let localizacao = text('localizacao');
        let grupo = text('grupo');

        let level = text('level');
        let xpAtual = text('xpAtual');
        let xpProxLvl = text('xpProxLvl');

        let armaImagem = text('armaImagem');
        let armaNome = text('armaNome');
        let armaQualidade = text('armaQualidade');
        let armaTipo = text('armaTipo');
        let armaDano = text('armaDano');
        let armaDesc = html('armaDesc');

        let edc = html('edc');
        let caminho = html('caminho');
        let haki = html('haki');
        let tecnicas = html('tecnicas');

        let aparencia = html('aparencia');
        let personalidade = html('personalidade');
        let historia = html('historia');

        let vanRacial = html('vanRacial');
        let desRacial = html('desRacial');
        let vanGerais = html('vanGerais');
        let desGerais = html('desGerais');

        let pericias = html('pericias');
        let profissoes = html('profissoes');

        let titulo = text('titulo');
        let alcunhas = text('alcunhas');
        
        let inventario = html('inventario');
        let barcos = html('barcos');
        let mascotes = html('mascotes');
        let aventuras = html('aventuras');
        let anexos = html('anexos');
        let anotacoes = html('anotacoes');
        let projetos = html('projetos');

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
                ${builds()}
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
                    ${grupoCampos()}
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

      resize(42 , query('.abfNome span p'), 367, 0.5);
      resize(16 , query('.abfNome span p+p'), 400, 0.1);
  
      queryAll('.abfButtons button').forEach((element) => element.onclick = () => {
          let target = '#' + element.innerText.toLowerCase();
          
          queryAll('.abfContainer.active,.abfButtons button.active').forEach((removeTarget) => removeTarget.classList.toggle('active'));
          element.classList.toggle('active');
          query(target).classList.toggle('active');
      });

      let buildButton = queryAll('.buildButtons button');
      for (let index = 0; index < buildButton.length; index++) {
          buildButton[index].onclick = () =>{
              queryAll('.buildButtons button.active, .abfBuild.active').forEach((removeTarget) => removeTarget.classList.toggle('active'));
              buildButton[index].classList.toggle('active');
              queryAll('.abfBuild')[index].classList.toggle('active');
          }
      }
    }
});
