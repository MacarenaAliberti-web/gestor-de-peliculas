const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
    it("Debe existir la clase", () => {
        expect(CarritoCompra).toBeDefined();
    });

    it("La clase debe tener los metodos de: constructor, agregarProducto, calcularTotal y aplicarDescuento", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined(); 
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

describe("Constructor de CarritoCompra", () => {
    it("Debe inicializar un carrito como array vacio", () => {
        const carritoCompra = new CarritoCompra();
        expect(carritoCompra.carro).toEqual([]);
    });
});

describe("Metodo agregarProducto", () => {
    it("Debe subir un nuevo producto al array", () => {
        const carritoCompra = new CarritoCompra();
        const newProduct = {
            title: "Titulo1",
            price: 300,
        };
        carritoCompra.agregarProducto(newProduct);
        expect(carritoCompra.carro[0]).toEqual(newProduct);
        expect(carritoCompra.carro[0].title).toBe(newProduct.title);
        expect(carritoCompra.carro[0].price).toBe(newProduct.price);
    });
});

describe("Metodo calcularTotal", () => {
    it("Calcular el total de la compra sumando precios de todos los productos agregados al carrito", () => {
        const carritoCompra = new CarritoCompra();
        const newProduct = {
            title: "Titulo1",
            price: 300,
        };
        const newProduct2 = {
            title: "Titulo2",
            price: 600,
        };
        carritoCompra.agregarProducto(newProduct);
        carritoCompra.agregarProducto(newProduct2);
        expect(carritoCompra.calcularTotal()).toBe(900);
    });
});


describe("Metodo aplicarDescuento", () => {
    it("Aplica un descuento al total de la compra", () => {
        const carritoCompra = new CarritoCompra();
        const newProduct = {
            title: "Titulo1",
            price: 300,
        };

        const newProduct2 = {
            title: "Titulo2",
            price: 600,
        };

        carritoCompra.agregarProducto(newProduct);
        carritoCompra.agregarProducto(newProduct2);
        
        expect(carritoCompra.aplicarDescuento(0)).toBe(900);
        expect(carritoCompra.aplicarDescuento(50)).toBe(450);
        expect(carritoCompra.aplicarDescuento(100)).toBe(0);
        
    });
});