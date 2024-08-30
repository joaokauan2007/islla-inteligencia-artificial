const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é biodiversidade e por que é importante para o sistema ambiental?",
        alternativas: [
            {
                texto: "Importante para equilibrar ecossistemas.",
                afirmacao: "O sistema ambiental estará enfrentando desafios significativos devido às mudanças climáticas persistentes. "
            },
            {
                texto: " É irrelevante para a estabilidade dos ecossistemas.",
                afirmacao: "O sistema ambiental estará enfrentando desafios significativos devido às mudanças climáticas persistentes."
            }
        ]
    },
    {
        enunciado: "Aquecimento global: É principalmente causado pelo aumento das emissões de gases de efeito estufa devido à queima de combustíveis fósseis e mudanças no uso da terra, levando ao aumento da temperatura média global.",
        alternativas: [
            {
                texto: "Causado por emissões de gases estufa",
                afirmacao: "Tecnologias avançadas de energia renovável serão amplamente adotadas, ajudando a reduzir emissões de carbono."
            },
            {
                texto: "É causado pelo resfriamento global.",
                afirmacao: " Tecnologias avançadas de energia renovável serão amplamente adotadas, ajudando a reduzir emissões de carbono. "
            }
        ]
    },
    {
        enunciado: "Impacto das atividades humanas nos ecossistemas marinhos: Inclui pesca excessiva, poluição por plásticos, eutrofização devido ao escoamento de nutrientes agrícolas, entre outros, afetando a biodiversidade marinha e a saúde dos oceanos.",
        alternativas: [
            {
                texto: "Pesca excessiva e poluição severa.",
                afirmacao: "A biodiversidade continuará a diminuir, apesar dos esforços de conservação intensificados."
            },
            {
                texto: "Não afetam os ecossistemas marinhos.",
                afirmacao: "A biodiversidade continuará a diminuir, apesar dos esforços de conservação intensificados. "
            }
        ]
    },
    {
        enunciado: "Impacto da poluição do ar: Causa problemas respiratórios em humanos e afeta negativamente a qualidade do ar, além de contribuir para as mudanças climáticas.",
        alternativas: [
            {
                texto: "Problemas respiratórios e mudanças climáticas.",
                afirmacao: "Governos e organizações internacionais estarão mais unidos em esforços globais para mitigar os impactos ambientais."
            },
            {
                texto: " Não tem impacto na saúde humana ou no clima.",
                afirmacao: "Governos e organizações internacionais estarão mais unidos em esforços globais para mitigar os impactos ambientais."
            }
        ]
    },
    {
        enunciado: "Importância dos recifes de coral: São vitais para a biodiversidade marinha, oferecem proteção contra tempestades e ondas, sustentam indústrias de pesca e turismo e são fontes de novos compostos bioativos para medicamentos. ",
        alternativas: [
            {
                texto: "Biodiversidade e proteção costeira.",
                afirmacao: "A sustentabilidade será central nas políticas públicas e no desenvolvimento econômico, enquanto a sociedade enfrenta e se adapta às consequências das décadas anteriores de impacto ambiental."
            },
            {
                texto: "Não são relevantes para os ecossistemas marinhos.",
                afirmacao: "A sustentabilidade será central nas políticas públicas e no desenvolvimento econômico, enquanto a sociedade enfrenta e se adapta às consequências das décadas anteriores de impacto ambiental. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2055...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
