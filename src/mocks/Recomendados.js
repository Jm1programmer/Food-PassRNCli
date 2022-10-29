
import Brownie from "../../assets/Food/BrownieRecomendados.png"
import Pizza from "../../assets/Food/PizzaRecomendados.png"
import Croissaint from "../../assets/Food/croissant.png"
const gerarNumeroAleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Recomendados = {
    
    lista : [{
        
        nome: "Brownie Chocolate",
        imagem: Brownie,
        Tempo: `${gerarNumeroAleatorio(1, 5)}min`,
        preco: `R$ 3.00`,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    {
        
        nome: "Pizza",
        imagem: Pizza,
        Tempo: `${gerarNumeroAleatorio(1, 5)}min`,
        preco: `R$ 5.00`,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    {
        
        nome: "Croissaint",
        imagem: Croissaint,
        Tempo: `${gerarNumeroAleatorio(1, 5)}min`,
        preco: `R$ 4.00`,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: '2 fatias de mussarela, 2 pães para hambúrguer, Maionese, 2 rodelas de tomate e 2 folhas de alface',

    },

    ]
};

export default Recomendados