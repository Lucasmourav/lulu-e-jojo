function imprimirMusica(numeroPatinhos) {
    for (let i = 50; i > 0; i--) {
        console.log(`${i} patinhos foram passear`);
        console.log(`Além das montanhas`);
        console.log(`Para brincar`);
        console.log(`A mamãe gritou: Quá, quá, quá, quá`);
        
        if (i > 1) {
            console.log(`Mas só ${i - 1} patinhos voltaram de lá.`);
        } else {
            console.log(`E os ${numeroPatinhos} patinhos voltaram de lá.`);
        }
    }
}

imprimirMusica(5);





































