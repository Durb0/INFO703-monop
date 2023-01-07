import { Case } from '../case';
import type { Joueur } from '../../Joueur';

export abstract class CaseAchetable extends Case {
    private prix:number;
    private proprietaire:Joueur;

    constructor(nom:string, prix:number) {
        super(nom);
        this.prix = prix;
    }

    public getPrix():number{
        return this.prix;
    }

    public getProprietaire():Joueur{
        return this.proprietaire;
    }

    public setProprietaire(proprietaire:Joueur):void{
        this.proprietaire = proprietaire;
    }
}