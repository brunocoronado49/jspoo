// De esta manera se pueden settear nuestras propiedades como privadas
const _private = new WeakMap();

class Book {
    constructor(title, autor, precio) {
        // aqui el ejemplo de lo de arriba
        const properties = {
            _title: title,
            _autor: autor,
            _precio:  precio
        }
        // aqui el ejemplo de lo de arriba
        _private.set(this, {properties});
    }

    get title() {
        return _private.get(this).properties['_title'];
    }
    set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
    }

    get autor() {
        return _private.get(this).properties['_autor'];
    }
    set autor(newAutor) {
        return _private.get(this).properties['_autor'] = newAutor;
    }

    get precio() {
        return _private.get(this).properties['_precio'];
    }
    set precio(newPrecio) {
        return _private.get(this).properties['_precio'] = newPrecio;
    }

    getAll() {
        console.log(`Titulo: ${this.title}, Autor: ${this.autor}, Precio: ${this.precio}`);
    }
}

class Comic extends Book {
    constructor(title, autor, precio, ilustradores) {
        super(title, autor, precio);
        this.ilustradores = ilustradores;
    }

    addIlustrador(newilustrador = []) {
        this.ilustradores.push(newilustrador);
    }

    getAll() {
        super.getAll();
        console.log(`Ilustradores: ${this.ilustradores}`);
    }
}

class ShopCar {
    constructor() {
        this.productos = [];
    }

    addProductos(monto, precio) {
        this.productos.push(...Array(monto).fill(precio));
    }

    showProductos() {
        console.log(this.productos);
    }

    calcTotal() {
        return this.productos
            .map(precio => precio)
            .reduce((ac, precio) => ac + precio, 0)
    }

    prinTicker() {
        console.log(`Total: ${this.calcTotal()}`);
    }
}

const book = new Book('The lord of the rings', 'J.R.R. Tolkien', 300);
const comic = new Comic('Batman year one', 'Alan Moore', 500, ['B.B.']);

comic.addIlustrador('J.H.');
console.log(comic.ilustradores);

const cart = new ShopCar();

cart.addProductos(2, comic.precio);
cart.addProductos(1, book.precio);
cart.showProductos();
cart.prinTicker();
book.getAll();
comic.getAll();


