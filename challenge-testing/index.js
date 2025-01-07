class CarritoCompra {
    constructor() {
        this.carro = [];
    }

    agregarProducto(product) {
        this.carro.push(product);
    }

    calcularTotal() {
        return this.carro.reduce((acumulador, product) => acumulador + product.price, 0);

    }

    aplicarDescuento(discount) {
        const total = this.calcularTotal();
        return total - (total * discount) / 100
    }
}

module.exports = CarritoCompra;