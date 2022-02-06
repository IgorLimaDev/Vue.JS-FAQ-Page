//Base de dados de questões do FAQ
var questionario = [{
        categoria: "Cadastro",
        questoes: [
            { titulo: "Como me cadastrar no site?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labiquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

            { titulo: "Como recupero minha senha?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaesunt in culpa qui officia deserunt mollit anim id est laborum." },

            { titulo: "É possível comprar no site sem me cadastrar?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
        ],
        ativa: true,
        visivelFAQ: true
    },
    {
        categoria: "Entregas",
        questoes: [
            { titulo: "Qual o prazo médio da entrega?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proid." },

            { titulo: "Como mudo o endereço de entrega?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

            { titulo: "Disponível para todo brasil?", conteudo: "Lorem ipsum doloet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
        ],
        ativa: false,
        visivelFAQ: true
    },
    {
        categoria: "Trocas",
        questoes: [
            { titulo: "Onde solicito a troca?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut le irure dolor in ecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

            { titulo: "Quanto tempo demora para realizar uma troca?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.." },

        ],
        ativa: false,
        visivelFAQ: true
    },
    {
        categoria: "Pedidos",
        questoes: [
            { titulo: "Realizei um pedido, mas cancelei, terei reemboso?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

        ],
        ativa: false,
        visivelFAQ: true
    },
    {
        categoria: "Produtos",
        questoes: [
            { titulo: "Onde encontro as especificações do produto?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

            { titulo: "É possível encomendar um produto personalizado?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },

            { titulo: "Porque nem todos os produtos estão disponíveis para compra?", conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
        ],
        ativa: false,
        visivelFAQ: true
    },
    {
        categoria: "Atendimento via e-mail:",
        ativa: false,
        visivelFAQ: false
    }
]

var paginas = {
    'Inicio': true,
    'BuscaAtendimento': false,
    'FAQ': false
};

var router = new VueRouter({})
router.history.listen(function(a) {
    console.log(a);
});

var app;
document.addEventListener("DOMContentLoaded", function() {
    console.log("carregou");
    app = new Vue({
        el: '#app',
        data: {
            erroBusca: false,
            erroBuscaFAQ: false,
            rotas: paginas,
            questionario: questionario,
            podeValidar: false,
            sucessoForm: false,
            form: {
                assunto: "",
                nome: "",
                email: "",
                mensagem: ""
            }
        },
        methods: {
            mudarRota: function() {
                router.push('algumarota');
            },
            validarForm: function(ev) {
                this.podeValidar = true;
                ev.preventDefault();
                for (campo in this.form) {
                    if (!this.form[campo]) {
                        return false;
                    }
                }

                this.sucessoForm = true;
                return false;

            },
            //Mostra ou esconde o conteúdo de alguma pergunta presente no FAQ
            toggleQuestao: function(el) {
                console.log(el.target);
                el.target.parentElement.parentElement.classList.toggle("aberto");
            },
            //Controla a navegação entre as diferentes partes da central de atendimento
            //A navegação é controlada pelo objeto "rotas", onde o item que possuir o valor
            //true é a parte (tela) ativa atualmente.
            navegar: function(componente, categoriaFAQ) {
                for (rota in this.rotas) {
                    this.rotas[rota] = false;
                }
                this.rotas[componente] = true;
                if (categoriaFAQ) {
                    this.navegarFAQ(categoriaFAQ);
                }
            },

            //Simula a pesquisa de tópicos e mostra a mensagem de erro
            pesquisarTopicos: function(el) {
                if (el.target.value == "") {
                    this.erroBusca = false;
                } else {
                    this.erroBusca = true;
                }
            },

            //Simula a pesquisa de tópicos e mostra a mensagem de erro, só que pra parte de FAQ
            pesquisarTopicosFAQ: function(el) {
                if (el.target.value == "") {
                    this.erroBuscaFAQ = false;
                } else {
                    this.erroBuscaFAQ = true;
                }
            },

            //Mostra mensagem de feedback sobre a resposta do FAQ ser util ou não
            respostaUtil: function(el, resposta) {
                el.target.parentElement.querySelector(`.feedback-${resposta}`).classList.add("aberto");
                el.target.parentElement.querySelector(`a:not(.resposta-util-${resposta})`).setAttribute("disabled", "disabled");
            },

            //Controla a navegação entre as categorias do FAQ, onde a categoria
            //com a propriedade "ativa" que tenha o valor true é a categoria mostrada
            //na tela atualmente.
            //A única excessão é o formulário de cadastro, que terá o "visivelFAQ" igual a false
            //para usar a mesma estrutura de navegação das questões, porém, renderizando o formulário de cadastro
            navegarFAQ: function(categoria) {
                for (cat in this.questionario) {
                    this.questionario[cat].ativa = false;
                }

                for (cat in this.questionario) {
                    if (this.questionario[cat].categoria == categoria) {
                        this.questionario[cat].ativa = true;
                    }
                }

            }
        }
    });
});