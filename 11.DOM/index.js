//DOM:documento object  model
//concepto:es una interfaz de programacion para HTML.
//traduce el contenido de un documento HTML a un objetivo estanderizado,
//al que los lenguajes de programacion funcionales como .
//DOM se a convertido en una utilidad disponible para la 
//mayoria de lenguajes de programacion(java,PHP,javascript)

//.QUERYSELECTOR():busca el primer elemento que coincide con el selector
//css sel.si no ,null.
//El primero, .querySelector devuelve el primer elemento que 
//encuentra que encaja con el selector CSS suministrado en selector.
//Al igual que su equivalente .getElementById(), devuelve un solo
// elemento y en caso de no coincidir con ninguno, devuelve NULL:

const page = document.queryselector("#page"); //<div id="page"></div>
const info = document.queryselector(".main .info"); // <div class="info"></div>

//QUERYSELECTORALL():realiza una búsqueda de elementos como lo hace
// el anterior, sólo que como podremos intuir por ese All(), devuelve
// un ARRAY  con todos los elementos que coinciden con el SELECTOR CSS:

//obtiene todos los elemento con clase."info"
const infos = document.querySelectorAll(".info");

//obtiene todos los elmentos con atributo name="nickname"
const nicknames = document.querySelectorAll('[name="nickname"]');

//obtiene todos los elementos <div> de la pagina HTML.
const divs = document.queryselectorAll("div");
