import Bolo from '../../assets/Food/Bolo.png'
import Brownie from '../../assets/Food/Brownie.png'
import Coxinhas from '../../assets/Food/Coxinhas.png'
import Esfirra from '../../assets/Food/Esfirra.png'
import HamburguerCarne from '../../assets/Food/HamburguerCarne.png'
import Pizza from '../../assets/Food/Pizza.png'
import Pudim from '../../assets/Food/Pudim.png'
import Torta from '../../assets/Food/Torta.png'
import Croiassant from '../../assets/Food/croissantBuy.png'


const gerarNumeroAleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Menu = {
    
    lista : [{
        
        nome: "Hamburguer",
        imagem: HamburguerCarne,
        Tempo: 2,
        preco: 6,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    {
        nome: "Pizza",
        imagem: Pizza,
        Tempo: 1,
        preco: 6,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Coxinha",
        imagem: Coxinhas,
        Tempo: 2,
        preco: 5,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Esfirra",
        imagem: Esfirra,
        Tempo: 1,
        preco: 4,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Brownie",
        imagem: Brownie,
        Tempo: 1,
        preco: 3,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Bolo Fatia",
        imagem: Bolo,
        Tempo: 0.5,
        preco: 8.99,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Torta",
        imagem: Torta,
        Tempo: 2,
        preco: 8.88,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Pudim",
        imagem: Pudim,
        Tempo: 2,
        preco: 3.50,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Croiassant",
        imagem: Croiassant,
        Tempo: 1,
        preco: 4,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },


 

   

    ]
};




export default Menu



