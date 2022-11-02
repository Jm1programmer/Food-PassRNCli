
import BrownieHome from "../../assets/Food/BrownieRecomendados.png"
import PizzaHome from "../../assets/Food/PizzaRecomendados.png"
import BoloHome from "../../assets/Food/BoloRecomendados.png"

import Bolo from '../../assets/Food/Bolo.png'
import Brownie from '../../assets/Food/Brownie.png'

import Pizza from '../../assets/Food/Pizza.png'
import Croiassant from '../../assets/Food/croissant.png'
const gerarNumeroAleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Recomendados = {
    
    lista : [{
        
        nome: "Brownie",
        imagem: Brownie,
        imagemHome: BrownieHome,
        Tempo: 1,
        preco:  3.00,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    {
        
        nome: "Pizza",
        imagem: Pizza,
        imagemHome: PizzaHome,
        Tempo: 2,
        preco:  5.00,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    {
        
        nome: "Bolo",
        imagem: Bolo,
        imagemHome: BoloHome,
        Tempo: 1,
        preco: 8.99,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    ]
};

export default Recomendados