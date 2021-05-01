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
}

const book = new Book('1984', 'George Orwell', 300);
const book1 = new Book('The lord of the rings', 'J.R.R. Tolkien', 300);

console.log(book._title);
console.log(book._autor);
console.log(book._precio);
