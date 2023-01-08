import type { Joueur } from "../../Joueur";
import type { GroupeGare } from "../../quartier/GroupeGare";
import { CaseAchetable } from "./CaseAchetable";

export class CaseGare extends CaseAchetable {

    private groupeGare:GroupeGare;

    constructor(nom:string,prix:number, groupeGare:GroupeGare) {
        super(nom, prix);
        this.groupeGare = groupeGare;
    }

    public acheterPropriete(joueur:Joueur):void{
        this.setProprietaire(joueur);
    }

    public getLoyer():number {
        return this.groupeGare.getLoyer(this);
    }

    public getGroupeGare():GroupeGare{
        return this.groupeGare;
    }
}