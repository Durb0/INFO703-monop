import { CaseGare } from "../case/caseAchetable/CaseGare";
import type { Joueur } from "../Joueur";


export class GroupeGare {

    private casesGare:CaseGare[];
    private prixGare:number;
    private loyers:number[];
    
    constructor(prixGare:number, loyers:number[],casesNoms:string[]) {
        this.prixGare = prixGare;
        this.loyers = loyers;
        this.casesGare = [];
        casesNoms.forEach(nom => {
            this.casesGare.push(new CaseGare(nom, this.prixGare, this));
        });
    }

    public getCases():CaseGare[]{
        return this.casesGare;
    }

    public getCase(index:number):CaseGare{
        return this.casesGare[index];
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
        this.casesGare.forEach(c => {
            if(c.getProprietaire() == joueur){
                nbPropriete++;
            }
        });
        return nbPropriete;
    }
    
}