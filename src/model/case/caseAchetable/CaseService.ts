import type { GroupeService } from "../../groupe/GroupeService";
import type { Joueur } from "../../Joueur";
import { CaseAchetable } from "./CaseAchetable";

export class CaseService extends CaseAchetable{

    private groupeService:GroupeService;

    constructor(nom:string,prix:number, groupeService:GroupeService) {
        super(nom, prix);
        this.groupeService = groupeService;
    }

    public getLoyer():number {
        return this.groupeService.getLoyer(this);
    }


    public getGroupeService():GroupeService{
        return this.groupeService;
    }

    public acheterPropriete(joueur: Joueur): void {
        this.setProprietaire(joueur);
    }
}