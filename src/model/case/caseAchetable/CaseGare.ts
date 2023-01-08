import type { Joueur } from "../../Joueur";
import type { GroupeGare } from "../../groupe/GroupeGare";
import { CaseAchetable } from "./CaseAchetable";

export class CaseGare extends CaseAchetable {

    private groupeGare:GroupeGare;

    constructor(nom:string,groupeGare:GroupeGare) {
        super(nom, 0);
        this.groupeGare = groupeGare;
    }

    public acheterPropriete(joueur:Joueur):void {
        this.setProprietaire(joueur);
    }

    public getLoyer():number {
        return this.groupeGare.getLoyer(this);
    }

    public getGroupeGare():GroupeGare{
        return this.groupeGare;
    }

    public getPrix(): number {
        return this.groupeGare.getPrixGare();
    }
}