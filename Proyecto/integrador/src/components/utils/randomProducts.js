import { products } from "../data/Product";

export const randomProducts = (cantidad) => {
    const nuevoArray = [];

    while(nuevoArray.length < cantidad) {

        const indexRandom = Math.floor(Math.random() * products.length);

        if(!nuevoArray.length) {
            nuevoArray.push(products[indexRandom]);
        }

        const productoExistente = nuevoArray.find((newProd) => {
                return newProd.id === products[indexRandom].id;
        });

        if(!productoExistente){
            nuevoArray.push(products[indexRandom]);
        }
    }
    return nuevoArray;

};