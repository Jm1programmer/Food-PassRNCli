import Bolo from '../../assets/Food/Bolo.png'
import Brownie from '../../assets/Food/Brownie.png'
import Coxinhas from '../../assets/Food/Coxinhas.png'
import Esfirra from '../../assets/Food/Esfirra.png'
import HamburguerCarne from '../../assets/Food/HamburguerCarne.png'
import Pizza from '../../assets/Food/Pizza.png'
import Pudim from '../../assets/Food/Pudim.png'
import Torta from '../../assets/Food/Torta.png'

const gerarNumeroAleatorio = (min,max) => {
    return Math.floor(Math.random(max - min + 1) * 5)
}

const Menu = {
    
    lista : [{
        
        nome: "Hamburguer",
        imagem: HamburguerCarne,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Pizza",
        imagem: Pizza,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Coxinha",
        imagem: Coxinhas,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Esfirra",
        imagem: Esfirra,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Brownie",
        imagem: Brownie,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Bolo de Chocolate",
        imagem: Bolo,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Torta",
        imagem: Torta,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    {
        nome: "Pudim",
        imagem: Pudim,
        Tempo: `${gerarNumeroAleatorio(1, 20)}m`,
        estrelas : gerarNumeroAleatorio(1,5),
    },

    ]
};

export default Menu