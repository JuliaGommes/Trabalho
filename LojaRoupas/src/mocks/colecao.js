import logo from '../../assets/logo.jpeg';
import blazer from '../../assets/blazer.jpg';
import vestidovermelho from '../../assets/vestidovermelho.jpg';
import sapatosocialmasculino from '../../assets/sapatosocialmasculino.jpg';
import vestidoinfantil from '../../assets/vestidoinfantil.jpg';
import infantilmasculino from '../../assets/infantilmasculino.jpg';
import saltofeminino from '../../assets/saltofeminino.jpg';
import colares from '../../assets/colares.jpg';
import bolsa from '../../assets/bolsa.jpg';
import calcafeminina from '../../assets/calcafeminina.jpg';
import calcamasculina from '../../assets/calcamasculina.jpg';
import pijama from '../../assets/pijama.jpg';
import conjunto from '../../assets/conjunto.jpg';

const colecao = {
    topo: {
        //titulo: 'JULIA & GUSTAVO LTDA'
    },
    detalhes: {
        nome: 'Coleção de Roupas',
        fornecedor: 'JULIA & GUSTAVO LTDA',
        descricao: 'Roupas importadas e de Grife com preço acessível',
        preco: 'R$ 500,00',
        logo: logo,
        botao: "Comprar"
    },
    roupas: {
        titulo: 'Coleção de Roupas',
        lista: [
            {
                nome: 'Sapatos Masculinos',
                imagem: sapatosocialmasculino
            },
            {
                nome: 'Blazers Masculinos',
                imagem: blazer
            },
            {
                nome: 'Vestidos',
                imagem: vestidovermelho
            },
            {
                nome: 'Infantil Feminino',
                imagem: vestidoinfantil
            },
            {
                nome: 'Infantil Masculino',
                imagem: infantilmasculino
            },
            {
                nome: 'Sapatos Femininos',
                imagem: saltofeminino
            },
            {
                nome: 'Colares',
                imagem: colares
            },
            {
                nome: 'Bolsas Femininas',
                imagem: bolsa
            },
            {
                nome: 'Calças Femininas',
                imagem: calcafeminina
            },
            {
                nome: 'Calças Masculinas',
                imagem: calcamasculina
            },
            {
                nome: 'Pijamas',
                imagem: pijama
            },
            {
                nome: 'Conjuntos',
                imagem: conjunto
            },                                    
        ] 
    }
};

export default colecao;


