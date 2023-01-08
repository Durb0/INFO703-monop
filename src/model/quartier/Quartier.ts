import { CasePropriete } from "../case";
import type { Joueur } from "../Joueur";
import type { PannelPrix } from "./PannelPrix";

export class Quartier {
    

    private couleur:string;
    private cases:CasePropriete[];
    private pannelPrixBas:PannelPrix;
    private pannelPrixHaut:PannelPrix;
    private prixMaison:number;

    constructor(couleur:string, pannelPrixBas:PannelPrix, pannelPrixHaut:PannelPrix, prixMaison:number, nomsCases:string[]) {
        this.couleur = couleur;
        this.prixMaison = prixMaison;
        this.pannelPrixHaut = pannelPrixHaut;
        this.pannelPrixBas = pannelPrixBas;
        this.cases = [];
        nomsCases.forEach(nom => {
            this.cases.push(new CasePropriete(nom, this));
        });
    }

    public getCouleur():string{
        return this.couleur;
    }

    public getCases():CasePropriete[]{
        return this.cases;
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


    public setCases(cases:CasePropriete[]):void{
        this.cases = cases;
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
        if(this.cases[this.cases.length - 1] == casePropriete){
            return this.pannelPrixHaut;
        }
        return this.pannelPrixBas;
    }



    /**
     * 
     * @returns true si le quartier est un monopole
     */
    public estMonopole():boolean{
        let proprietaire:Joueur = null;
        for(let i = 0; i < this.cases.length; i++){
            // si la case n'a pas de proprietaire
            if(this.cases[i].getEtat().getCasePropriete().getProprietaire() == null){
                return false;
            }
            // si la case a un proprietaire
            else if(proprietaire == null){
                proprietaire = this.cases[i].getProprietaire();
            }
            // si le proprietaire est different
            else if(proprietaire != this.cases[i].getProprietaire()){
                return false;
            }
        }
        // on change l'etat de toutes les cases du quartier en etatConstructibleSansMaison
        console.info( proprietaire.getNom() + " à le monopole sur le quartier " + this.couleur + ".");
        console.log("Monopole !")
        return true;
    }

    /**
     * Change l'etat de toutes les cases du quartier en etatConstructibleSansMaison
     */
    public setMonopole():void{
        this.cases.forEach(c => {
            c.proprieteConstructible();
        });
    }

    public addCase(c:CasePropriete):void{
        this.cases.push(c);
    }

}