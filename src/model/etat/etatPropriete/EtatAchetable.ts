import type { Joueur } from "../../joueur";
import { EtatAchete } from "./etatAchete";
import { EtatPropriete } from "./EtatPropriete";


export class EtatAchetable extends EtatPropriete {

    public acheterPropriete(joueur:Joueur):void{
        this.getCasePropriete().setProprietaire(joueur);
        joueur.ajoutePropriete(this.getCasePropriete());
        joueur.payer(this.getCasePropriete().getPrix());
        this.changeEtat(new EtatAchete(this.getCasePropriete()));
    }
}