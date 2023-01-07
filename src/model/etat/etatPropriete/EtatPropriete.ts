import type { CasePropriete } from "../../case";

export abstract class EtatPropriete {

    private casePropriete:CasePropriete;

    constructor(casePropriete:CasePropriete){
        this.casePropriete = casePropriete;
    }

    public getCasePropriete():CasePropriete{
        return this.casePropriete;
    }

    public changeEtat(etat:EtatPropriete):void{
        this.casePropriete.setEtatPropriete(etat);
    }
}