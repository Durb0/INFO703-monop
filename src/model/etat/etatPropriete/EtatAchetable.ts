import type { Joueur } from "../../Joueur";
import { EtatAchete } from "./etatAchete";
import { EtatPropriete } from "./EtatPropriete";


export class EtatAchetable extends EtatPropriete {

    public acheterPropriete(joueur:Joueur):void{
        console.log("je passe aussi ici")
        this.getCasePropriete().setProprietaire(joueur);
        this.changeEtat(new EtatAchete(this.getCasePropriete()));
        if (this.getCasePropriete().getQuartier().estMonopole()){
            this.getCasePropriete().getQuartier().setMonopole();
        }
    }
}