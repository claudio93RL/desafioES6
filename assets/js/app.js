import {Cliente} from "./cliente.js";
import {Impuestos} from "./impuestos.js";

const impuesto = new Impuestos(500, 20);
const claudio = new Cliente("claudio", impuesto);


claudio.calcularImpuesto()