export class Cliente {
    constructor(nombre, impuesto){
        this.nombre = nombre;
        this.impuesto = impuesto;
    }

    calcularImpuesto(){
        const resultado = ((this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0.21);
        console.log(resultado);
    }
}

