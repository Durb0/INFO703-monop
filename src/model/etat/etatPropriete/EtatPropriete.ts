import type { CasePropriete } from "../../case";
import type { Joueur } from "../../Joueur";

export abstract class EtatPropriete {
    getLoyer(): number {
        return this.getCasePropriete().getQuartier().getLoyer(this.getCasePropriete());
    }

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

    public construireMaison() {
        console.warn("Il est surment pas possible de construire une maison ici <3");
    }
}