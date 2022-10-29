import Bolo from '../../assets/Food/Bolo.png'
import Brownie from '../../assets/Food/Brownie.png'
import Coxinhas from '../../assets/Food/Coxinhas.png'
import Esfirra from '../../assets/Food/Esfirra.png'
import HamburguerCarne from '../../assets/Food/HamburguerCarne.png'
import Pizza from '../../assets/Food/Pizza.png'
import Pudim from '../../assets/Food/Pudim.png'
import Torta from '../../assets/Food/Torta.png'


const gerarNumeroAleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Menu = {
    
    lista : [{
        
        nome: "Hamburguer",
        imagem: HamburguerCarne,
        Tempo: `${gerarNumeroAleatorio(1, 5)}min`,
        preco: `R$ 6.00`,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    {
        nome: "Pizza",
        imagem: Pizza,
        Tempo: `${gerarNumeroAleatorio(1, 10)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Coxinha",
        imagem: Coxinhas,
        Tempo: `${gerarNumeroAleatorio(1, 10)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Esfirra",
        imagem: Esfirra,
        Tempo: `${gerarNumeroAleatorio(1, 10)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Brownie",
        imagem: Brownie,
        Tempo: `${gerarNumeroAleatorio(1, 10)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Bolo de Chocolate",
        imagem: Bolo,
        Tempo: `${gerarNumeroAleatorio(1, 10)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Torta",
        imagem: Torta,
        Tempo: `${gerarNumeroAleatorio(1, 20)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Pudim",
        imagem: Pudim,
        Tempo: `${gerarNumeroAleatorio(1, 20)}min`,
        preco: `R$ ${gerarNumeroAleatorio(5, 10)}.00`,
        nota: `${gerarNumeroAleatorio(1, 10)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },


 

   

    ]
};




export default Menu



