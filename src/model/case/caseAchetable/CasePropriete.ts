import { EtatAchetable, EtatConstructible } from '../../etat/etatPropriete';
import type { EtatPropriete } from '../../etat/etatPropriete/EtatPropriete';
import type { Joueur } from '../../Joueur';
import type { Quartier } from '../../quartier/Quartier';
import { CaseAchetable } from './CaseAchetable';

export class CasePropriete extends CaseAchetable {

    private quartier:Quartier;
    private etatPropriete:EtatPropriete;
    private nbMaison:number = 0;

    constructor(nom:string, quartier:Quartier) {
        super(nom, 0);
        this.quartier = quartier;
        super.setPrix(this.quartier.getPannel(this).getPrix());
        this.nbMaison = 0;
        this.etatPropriete = new EtatAchetable(this);
    }

    public setEtatPropriete(etat: EtatPropriete) {
        this.etatPropriete = etat;
    }
    
    public getNbMaisons():number{
        return this.nbMaison;
    }
    public ajouterMaison():number{
        return this.nbMaison+1;
    }

    public getEtat():EtatPropriete{
        return this.etatPropriete;
    }

    public getQuartier():Quartier{
        return this.quartier;
    }

    public getLoyer():number {
        return this.etatPropriete.getLoyer();
    }  

    public getPrix(): number {
        return this.quartier.getPrix(this);
    }

    /**
     * Le joueur vend une maison
     * 
     * Il gagne la moitié du prix de la maison
     */
    public vendreMaison() {
        if(this.nbMaison > 0){
            this.nbMaison--;
            this.getProprietaire().recevoir(this.quartier.getPrixMaison() / 2);
        }
    }

    /**
     * Le joueur construit une maison
     * 
     * Il paye le prix de la maison
     */
    public construireMaison() {
        this.etatPropriete.construireMaison();
        console.log(this);
    }

    public acheterPropriete(joueur:Joueur): void {
        console.log("je passe ici");
        console.log(joueur);
        this.etatPropriete.acheterPropriete(joueur);    
    }

    public proprieteConstructible() {
        this.etatPropriete.changeEtat(new EtatConstructible(this));
    }
}