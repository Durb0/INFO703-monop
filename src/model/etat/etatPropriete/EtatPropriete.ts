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

    /**
     * Construit la maison sur la propriété sélectionné en respectant les conditions.
     * @param acheteur Joueur qui effectue l'action de construction
     * @returns void
     */
    public construireMaison(acheteur:Joueur) {
        if(this.getCasePropriete().getProprietaire() == null){
            console.warn("Ce terrain n'a pas de propriétaire. Il n'est pas possible de construire une maison.");
        } else {
            console.warn("Vous n'avez pas le monopole sur le quartier pour pouvoir construire une maison.");
        }
    }

    /**
     * Vend la maison de la propriété séléctionné en respectant certaines conditions.
     * @param vendeur Joeuur qui effectue l'action de vente
     */
    vendreMaison(vendeur:Joueur){
        if(this.getCasePropriete().getProprietaire() == null){
            console.warn("Ce terrain n'a pas de propriétaire. Il n'est pas possibel de vendre une maison.");
        } else {
            console.warn("Vous n'avez pas le monopole. Aucune maison n'a pu être construite donc aucune maison peut être construite.");
        }
    }
}