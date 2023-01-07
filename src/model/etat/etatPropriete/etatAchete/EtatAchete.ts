import type { CasePropriete } from "../../../case";
import { EtatPropriete } from "../EtatPropriete";


export class EtatAchete extends EtatPropriete {

    constructor(casePropriete:CasePropriete){
        super(casePropriete);
        let quartier = this.getCasePropriete().getQuartier();
        if(quartier.estMonopole()){
            quartier.setMonopole();
        }
    
    }

    public getLoyer():number{
        return this.getCasePropriete().getLoyer();
    }
}