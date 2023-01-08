import type { CasePropriete } from "../../../case";
import { EtatAchete } from "./EtatAchete";

export class EtatConstructible extends EtatAchete {

    /**
     * 
     * @returns le loyer selon le nombre de maison
     */
    public getLoyer():number {
        // le loyer selon le nombre de maison
        let loyer:number = this.getCasePropriete().getLoyer();
        // si il n'y a pas de maison
        if(this.getCasePropriete().getNbMaisons() == 0){
            return loyer * 2;
        }
        // si il y a des maisons
        else{
            return loyer;
        }
    }

    /**
     * Si c'est possible, construit une maison sur la propriété
     */
    public construireMaison() {
        let casePropriete:CasePropriete = this.getCasePropriete();
        if(casePropriete.getNbMaisons() < 5){
            casePropriete.ajouterMaison();
            casePropriete.getProprietaire().payer(casePropriete.getQuartier().getPrixMaison());
        } else {
            console.error("error - le nombre de maison ne peut pas être augmenté.")
        }
    }

} 