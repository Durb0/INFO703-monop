import type { CasePropriete } from "../../../case";
import { EtatAchete } from "./EtatAchete";

export class EtatConstructible extends EtatAchete {

    /**
     * 
     * @returns le loyer selon le nombre de maison
     */
    public getLoyer():number {
        let loyer = this.getCasePropriete().getQuartier().getLoyer(this.getCasePropriete());
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
        if(casePropriete.getProprietaire().getArgent() < casePropriete.getQuartier().getPrixMaison()){
            console.warn("error - le joueur n'a pas assez d'argent pour construire une maison.");
            return;
        }
        if(casePropriete.getNbMaisons() < 5){
            casePropriete.ajouterMaison();
            casePropriete.getProprietaire().payer(casePropriete.getQuartier().getPrixMaison());
            console.log(casePropriete.getProprietaire());
        } else {
            console.warn("error - le nombre de maison ne peut pas être augmenté.")
        }
    }

} 