import type { CasePropriete } from "../../case";
import type { Joueur } from "../../Joueur";

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

    public acheterPropriete(joueur:Joueur):void{
        console.warn("Pas normal de passer ici...");
    }
}