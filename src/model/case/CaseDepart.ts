import type { Joueur } from "../joueur";
import { Case } from "./Case";

export class CaseDepart extends Case {

    private prix:number;

    constructor(prix:number) {
        super("Départ");
        this.prix = prix;
    }


    public actionDePassage(joueur: Joueur): void {
        joueur.recevoir(this.prix);
    }

    public actionDePosition(joueur: Joueur): void {
        joueur.recevoir(this.prix);
    }
}