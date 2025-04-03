import { decrypt, encrypt } from "./crypto.js";
import { areaCirculo } from "./matematica.js";

let segredo = encrypt("Alguma coisa")
console.log("Segredo:", segredo);

let original = decrypt(segredo)
console.log("original:", original);

let area = areaCirculo(10)
console.log("area: ", area);
