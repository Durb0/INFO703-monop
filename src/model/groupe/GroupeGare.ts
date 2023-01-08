import { CaseGare } from "../case/caseAchetable/CaseGare";
import type { Joueur } from "../Joueur";
import { Groupe } from "./Groupe";


export class GroupeGare extends Groupe {

    private prixGare:number;
    private loyers:number[];
    
    constructor(prixGare:number, loyers:number[],casesNoms:string[]) {
        super(casesNoms);
        this.prixGare = prixGare;
        this.loyers = loyers;
    }

    public createCase(nom:string):CaseGare {
        return new CaseGare(nom, this);
    }

    public getPrixGare():number{
        return this.prixGare;
    }

    public getLoyer(caseGare:CaseGare):number{
        return this.loyers[this.getNbPropriete(caseGare.getProprietaire()) - 1];
    }

    public getLoyers():number[]{
        return this.loyers;
    }

    public getNbPropriete(joueur:Joueur):number{
        let nbPropriete = 0;
        this.getCases().forEach(c => {
            if(c.getProprietaire() == joueur){
                nbPropriete++;
            }
        });
        return nbPropriete;
    }
    
}