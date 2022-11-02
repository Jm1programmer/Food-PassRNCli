


const gerarNumeroAleatorio = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Menu = {
    
    lista : [{
        
        nome: "HamburguerCarne",
       
        Tempo: 2,
        preco: 6,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',

    },

    {
        nome: "Pizza",
    
        Tempo: 1,
        preco: 6,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Coxinhas",
       
        Tempo: 2,
        preco: 5,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Esfirra",
     
        Tempo: 1,
        preco: 4,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Brownie",
       
        Tempo: 1,
        preco: 3,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Bolo",
     
        Tempo: 0.5,
        preco: 8.99,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Torta",
       
        Tempo: 2,
        preco: 8.88,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "Pudim",
        
        Tempo: 2,
        preco: 3.50,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
        nome: "croissant",
       
        Tempo: 1,
        preco: 4,
        nota: `${gerarNumeroAleatorio(1, 5)}`,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },


 

   

    ]
};




export default Menu



