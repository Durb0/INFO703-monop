import type { CasePropriete } from "../../../case";
import type { Joueur } from "../../../Joueur";
import { EtatPropriete } from "../EtatPropriete";


export class EtatAchete extends EtatPropriete {

    public construireMaison(acheteur: Joueur): void {
        console.warn("Vous n'avez pas le monopole sur le quartier");
    }
}