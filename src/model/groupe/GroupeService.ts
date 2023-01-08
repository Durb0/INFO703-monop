import type { CaseAchetable } from "../case";
import { CaseService } from "../case/caseAchetable/CaseService";
import type { Joueur } from "../Joueur";
import { Groupe } from "./Groupe";
import { Des } from "../Des";

export class GroupeService extends Groupe {

    constructor(casesNoms:string[]) {
        super(casesNoms);
    }


    isMonopole(joueur:Joueur):boolean{
        return this.getNbPropriete(joueur) == this.getCases().length;
    }
    
    getNbPropriete(joueur: Joueur): number {
        let nbPropriete = 0;
        this.getCases().forEach(c => {
            if(c.getProprietaire() == joueur){
                nbPropriete++;
            }
        });
        return nbPropriete;
    }

    public getLoyer(caseAchetable: CaseAchetable): number {
        let des = this.getResultatDes();
        if(this.isMonopole(caseAchetable.getProprietaire())){
            return des * 10;
        }
        return des * 4;
    }

    private getResultatDes():number{
        let des = Des.getInstance();
        return des.getDernierResultat();
    }

    public createCase(nom: string): CaseAchetable {
        return new CaseService(nom, 150, this);
    }
}