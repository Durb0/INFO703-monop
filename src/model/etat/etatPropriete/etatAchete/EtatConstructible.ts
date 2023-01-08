import type { CasePropriete } from "../../../case";
import type { Joueur } from "../../../Joueur";
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
        else {
            return loyer;
        }
    }

    
    public construireMaison(acheteur:Joueur) {
        let casePropriete:CasePropriete = this.getCasePropriete();
        if(casePropriete.getNbMaisons() >= 5){
            console.warn("Le nombre de maison ne peut pas être augmenté.");
            return;
        } else if(!casePropriete.getProprietaire().peutPayer(casePropriete.getQuartier().getPrixMaison())){
            console.warn("Le propriétaire n'a pas assez d'argent pour obtenir une maison ici.");
            return;
        } if(casePropriete.getProprietaire().getNom() != acheteur.getNom()){
            console.warn("Le joueur n'est pas propriétaire de cette case.")
        } else {
            //Construit la maison
            casePropriete.ajouterMaison();
            casePropriete.getProprietaire().payer(casePropriete.getQuartier().getPrixMaison());
            console.info(casePropriete.getProprietaire().getNom() + " a acheté une maison sur la case " + casePropriete.getNom() + ".");
        }
    }

    
    vendreMaison(vendeur:Joueur){
        let casePropriete:CasePropriete = this.getCasePropriete();
        if(casePropriete.getNbMaisons() <= 0){
            console.warn("Le nombre de maison ne peut pas être diminué.");
        } else if(casePropriete.getProprietaire().getNom() != vendeur.getNom()){
            console.warn("Le joueur n'est pas propriétaire de cette case.")
        } else {
            //Retire une maison
            casePropriete.retirerMaison();
            casePropriete.getProprietaire().recevoir(casePropriete.getQuartier().getPrixMaison() / 2);
            console.info(casePropriete.getProprietaire().getNom() + " a vendu une maison sur la case " + casePropriete.getNom() + ".");
        }
    }

} 