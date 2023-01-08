import type { Joueur } from "../../Joueur";
import { EtatAchete } from "./etatAchete";
import { EtatPropriete } from "./EtatPropriete";


export class EtatAchetable extends EtatPropriete {

    public acheterPropriete(joueur:Joueur):void{
        this.getCasePropriete().setProprietaire(joueur);
        this.changeEtat(new EtatAchete(this.getCasePropriete()));
        if (this.getCasePropriete().getQuartier().estMonopole()){
            this.getCasePropriete().getQuartier().setMonopole();
        }
    }

    public construireMaison(acheteur: Joueur): void {
        console.warn("Il vous faut acheter cette propriété et avoir le monopole pour construire une maison");
    }
}