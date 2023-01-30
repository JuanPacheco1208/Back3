const fs = require('fs')

let products = []

class ProductManager{
    constructor(filename) {
        this.filename = filename
    }

    createProduct = async(tittle, description, price, thumbnail, code, stock) => {
        let id
        if(products.length === 0) id = 1
        else id = products[products.length-1].id + 1
        products.push({id, tittle, description,price, thumbnail, code, stock})
        fs.writeFileSync(this.filename, JSON.stringify(products, null, 2))
    }
}

async function desafio() {
    const manager = new ProductManager('products.json')
    await manager.createProduct('calculadora', 'prueba', '13')
    await manager.createProduct('Celular', 'prueba', '120')
    await manager.createProduct('Papel', 'prueba', '5')
}

desafio()