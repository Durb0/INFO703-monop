import { Case } from '../Case';
import type { Joueur } from '../../Joueur';

export abstract class CaseAchetable extends Case {
    private prix:number;
    private proprietaire:Joueur;

    constructor(nom:string, prix:number) {
        super(nom);
        this.prix = prix;
    }

    public abstract acheterPropriete(joueur:Joueur):void;

    public getPrix():number{
        return this.prix;
    }

    public setPrix(prix:number):void{
        this.prix = prix;
    }

    public getProprietaire():Joueur{
        return this.proprietaire;
    }

    public setProprietaire(proprietaire:Joueur):void{
        this.proprietaire = proprietaire;
    }
}