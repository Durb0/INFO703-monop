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
        return this.nbMaison+=1;
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

    public getLoyers():number[] {
        return this.quartier.getLoyers(this);
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
        //if(this.nbMaison >= 5){
        //    console.warn("Vous avez déjà construit 5 maisons");
        //    return;
        //}
        //if(this.getProprietaire() == null){
        //    console.warn("Vous n'avez pas de propriétaire");
        //    return;
        //}
        //if(this.getProprietaire().getArgent() < this.quartier.getPrixMaison()){
        //    console.warn("Vous n'avez pas assez d'argent pour construire une maison");
        //    return;
        //}
//
        //this.nbMaison++;
        //this.getProprietaire().payer(this.quartier.getPrixMaison());
    }

    public acheterPropriete(joueur:Joueur): void {
        this.etatPropriete.acheterPropriete(joueur);    
    }

    public proprieteConstructible() {
        this.etatPropriete.changeEtat(new EtatConstructible(this));
    }

    public actionDePosition(joueur: Joueur): void {
        if(this.getProprietaire() == null){
            return;
        }
        if(this.getProprietaire() != joueur){
            joueur.payerA(this.getProprietaire(), this.getLoyer());
        }
    }
}