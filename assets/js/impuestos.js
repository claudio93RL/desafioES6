export class Impuestos {
    constructor(monto_bruto_anual, deducciones){
        this.monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones;
    }

    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    }
    set monto_bruto_anual(value){
        this._monto_bruto_anual = value;
    }

    get deducciones(){
        return this._deducciones;
    }

    set deducciones(value){
        this._deducciones = value;
    }
}       


