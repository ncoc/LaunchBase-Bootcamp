//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   ];

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

//todo array [] recebe funções e propriedades nativas, eu posso usar a propriedade length para saber quantos elementos eu tenho no meu array
// [].length



//Array de usuários

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["javascript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

    // for ( let i = 0; i < usuarios.length; i++ ) {
    //    //O método join() junta todos os elementos de uma array (ou um array-like object) em uma string e retorna esta string.
    //     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`)
    //  }



//Lógica do instrutor Mayk Brito
// for (let a = 0; a < usuarios.length; a++) {

//     let tecnologias = "";
//     for (let i = 0; i < usuarios[a].tecnologias.length; i++) {
//         if (i == 0) {
//             tecnologias = usuarios[a].tecnologias[i]
//         } else {
//             tecnologias = tecnologias + ", " + usuarios[a].tecnologias[i]
//         }
//     }
//     console.log(`${usuarios[a].nome} trabalha com ${tecnologias}`)    
// }


//Resolvendo com for...of

// para (usuário de usuarios)
for (let usuario of usuarios) {
    //faça alguma coisa
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}

















