import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

  console.log("hello world desde typescript desde el original");


  let  edad: number = 20;
  let nombre: string = "naruto";
  let estadoActivo: boolean = false;
  let calificacion: null = null;
  let curso: undefined = undefined;
  let nombreProfesor: string = "kashisay Sensei";

  let frutas: string[] = ["banana", "pera", "uva"];
  let numerosYLetras: (number | string)[] = [1,"j",23,"f"]
  let nombreEdad:[string, number] = ["juan",90]//tipo de dato por posicion (tupla)
  enum Volumen {//enumeraciones
    bajo = 100,
    medio = 50,
    alto = 20
  }
  let volumenMax: Volumen = Volumen.alto;

  function saludar(nombre:string) {
    console.log(nombre)
  }
  saludar("Juan")
//Array fuinction
  const restar: (a: number, b:  number)  => number = (a: number, b: number) =>
    a - b;

  //objetos
  interface Superheroe {
    nombre:string,
    edad:number,
    superPoderes: string[]
  }

  const superheroe : Superheroe = {
    nombre: "Peter Parker",
    edad:15,
    superPoderes: ["saltar", "pelear", "lanzarRedAracnidad"]
  }
  const batman = {
    nombre: "Batman",
    edad: 40,
    superpoderes: ["Rico"],
};
//maneras de definir una clase inicio
class Persona {
  constructor(public nombre: string, public apellido: string) {}
}

class Persona2 {
  public nombre: string;
  public apellido: string;
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

//instanciacion

const personaA = new Persona2("Marilu", "Dominguez");

personaA.nombre;
//ambas se pueden usar 
//maneras de definir una clase fin
class Producto {
  constructor(
    precio: number,
    marca: string,
    descripcion: string,
    id: number,
    nombre: string
  ) {
    this.precio = precio;
    this.marca = marca;
    this.descripcion = descripcion;
    this.id = id;
    this.nombre = nombre;
  }
  precio: number;
  marca: string;
  descripcion: string;
  id: number;
  nombre: string;
}
const ps5 = new Producto(
   999,
  "Sony",
  "Ps5 para jugar con tus amigos",
  4,
  "Playstation 5"
);
const pcGamer = new Producto(
  999,
  "Cualquiera",
  "PC GAMER 16GB RAM 1TB",
  9,
  "PC GAMER"
);

//definiendo clase carrito
class Carrito {
  productos: Producto[] = [];
//METODO
  listarProductos(): void {
    console.log(this.productos);
  }
//METODO
  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
}
//definiendo ecommerce como clase
class Ecommerce {
  productos: Producto[] = [ps5, pcGamer];
  carrito = new Carrito();
//METODO
  buscarProducto(texto: string): Producto | undefined {//retorna o producto o undefined
    return this.productos.find((p) => p.nombre.includes(texto));
    //retorna del array de prod,hace un find para buscar dnd prod.nombre incluya la busqueda
  }
}

//INSTANCIAR EL Ecommercce
const app = new Ecommerce();

app.carrito.agregarProducto(pcGamer);

///OTRO EJEMPLO
interface Animal {
  cantidadPatas: number;
  tienePelo: boolean;
}

class Perro implements Animal {
  cantidadPatas: number;
  tienePelo: boolean;

  constructor(cantidadPatas: number, tienePelo: boolean) {
    this.cantidadPatas = cantidadPatas;
    this.tienePelo = tienePelo;
  }
}

const firulais = new Perro(4, true);

//OTRO EJEMPLO HERENCIA
class Humano {
  constructor(
    public estatura: number,
    public colorOjos: string,
    public peso: number,
    public nombre: string
  ) {}

  respirar(): void {}
}

class Usuario extends Humano {
  constructor(
    public override estatura: number,
    public override colorOjos: string,
    public override peso: number,
    public override nombre: string,
    public contrasena: string,
    public email: string
  ) {
    super(estatura, colorOjos, peso, nombre);
  }
}

const user1 = new Usuario(90, "azul", 45, "juan", "123456", "email@mail.com");

user1.respirar();
console.log(user1)

//OTRO EJEMPLO 
class Producto2 {
  constructor(public precio: number, public nombre: string) {}
}

class Playstation5 extends Producto2 {
  constructor() {
    super(10000, "Playstation 5");
  }
}

class Paginacion<T> {
  constructor(
    public total: number,
    public cantPaginas: number,
    public tieneSiguiente: boolean,
    public datos: T[]
  ) {}
}

/*  const paginacionUsuarios = new Paginacion<Usuario>();
 const pagiacionProducots = new Paginacion<Producto>(); */

const myButton = document.querySelector("#butt4on");


console.log("HOAAAAAAA")