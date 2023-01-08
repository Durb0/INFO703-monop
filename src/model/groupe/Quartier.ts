import { CasePropriete } from "../case";
import type { Joueur } from "../Joueur";
import { Groupe } from "./Groupe";
import type { PannelPrix } from "./PannelPrix";

export class Quartier extends Groupe {
    

    private couleur:string;
    private pannelPrixBas:PannelPrix;
    private pannelPrixHaut:PannelPrix;
    private prixMaison:number;

    constructor(couleur:string, pannelPrixBas:PannelPrix, pannelPrixHaut:PannelPrix, prixMaison:number, nomsCases:string[]) {
        super(nomsCases);
        this.couleur = couleur;
        this.prixMaison = prixMaison;
        this.pannelPrixHaut = pannelPrixHaut;
        this.pannelPrixBas = pannelPrixBas;
        for (let c of this.getCases() as CasePropriete[]){
            c.setPrix(this.getPannel(c).getPrix());
        };
    }

    public createCase(nom:string):CasePropriete{
        return new CasePropriete(nom, this);
    }

    public getCouleur():string{
        return this.couleur;
    }

    public getPrix(c:CasePropriete):number{
        return this.getPannel(c).getPrix();
    }

    public getPrixMaison():number{
        return this.prixMaison;
    }

    getLoyer(c: CasePropriete): number {
        return this.getPannel(c).getLoyer(c.getNbMaisons());
    }

    public setPannels(pannelPrixHaut:PannelPrix, pannelPrixBas:PannelPrix):void{
        this.pannelPrixHaut = pannelPrixHaut;
        this.pannelPrixBas = pannelPrixBas;
    }

    /**
     * 
     * @param casePropriete la case dont on veut le pannel
     */
    public getPannel(casePropriete:CasePropriete):PannelPrix{
        if(this.getCase(this.getCases().length - 1) == casePropriete){
            return this.pannelPrixHaut;
        }
        return this.pannelPrixBas;
    }

    public getLoyers(c:CasePropriete):number[]{
        return this.getPannel(c).getLoyers();
    }



    /**
     * 
     * @returns true si le quartier est un monopole
     */
    public estMonopole():boolean{
        let proprietaire:Joueur = null;
        for (let c of this.getCases() as CasePropriete[]){
            // si la case n'a pas de proprietaire
            if(c.getProprietaire() == null){
                return false;
            }
            // si la case a un proprietaire
            else if(proprietaire == null){
                proprietaire = c.getProprietaire();
            }
            // si le proprietaire est different
            else if(proprietaire != c.getProprietaire()){
                return false;
            }
        }
        // on change l'etat de toutes les cases du quartier en etatConstructibleSansMaison
        console.info( proprietaire.getNom() + " à le monopole sur le quartier " + this.couleur + ".");
        return true;
    }

    /**
     * Change l'etat de toutes les cases du quartier en etatConstructibleSansMaison
     */
    public setMonopole():void{
        this.getCases().forEach((c:CasePropriete) => {
            c.proprieteConstructible();
        });
    }

    public addCase(c:CasePropriete):void{
        this.getCases().push(c);
    }

}