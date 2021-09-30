
const botao = document.getElementById("submitButton");



// Buscando os xmen do site da API dos xmen
const buscarXmen = () => {
    const busca = fetch('https://xmenapiheroku.herokuapp.com/api/characters')

    busca.then((response) => {
        response.json().then((value) => {
            
            const resultados = value.results;
            const xmenContainer = document.getElementById("xmenContainer");
            resultados.forEach((xmen) => {
                const xmenDiv = `
                    <div class="xmen_wrapper">
                        <div class="xmen_name_image">
                            <div class="xmen_image"><img src="${xmen.img}" /></div>
                            <div class="xmen_name">${xmen.name}</div>
                        </div>
                        
                        <div class="xmen_alias">${xmen.alias}</div>
                        <div class="xmen_description">${xmen.description}</div>
                        
                    <div>
                `;

                xmenContainer.innerHTML = xmenContainer.innerHTML + xmenDiv
            });
        });
    })

}

buscarXmen();


// Validação do formulário quando o botão é clicado
const oQueFazerQuandoOBotaoEClicado = () => {
    const inputname = document.getElementById('name');
    const inputemail = document.getElementById('email');
    const inputnecessity = document.getElementById('necessity');

    const inputnameValue = inputname.value;
    const inputemailValue = inputemail.value;
    const inputnecessityValue = inputnecessity.value;


    const erros = [];

    if(inputnameValue === ""){
        erros.push("Você precisa preencher o seu nome")
    }

    if(inputemailValue === "") {
        erros.push("Você precisa preencher o seu email")
    }

    if(inputnecessityValue === "") {
        erros.push("Você precisa preencher a sua necessidade")
    }

    const divErros = document.getElementById("erros");
    divErros.innerHTML = "";

    const oQueFazerComCadaErro = (erro, index, array) => {
        divErros.innerHTML = divErros.innerHTML + "<br>" + erro;
    }
    
    if(erros.length === 0) {
        const formulario = document.getElementById("contactForm");
        if(confirm("Você quer realmente mandar essa mensagem?")) {
            formulario.submit();
        }
    } else {
        erros.forEach(oQueFazerComCadaErro)
    }
}

botao.addEventListener("click", oQueFazerQuandoOBotaoEClicado);


