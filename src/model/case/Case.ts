import type { Joueur } from "../Joueur";

/**
 * Classe de base pour les cases
 */
export class Case {
    private nom:string;

    private joueurs:Joueur[];
    private caseSuivante:Case;
    private casePrecedente:Case;

    constructor(nom:string) {
        this.nom = nom;
        this.joueurs = [];
    }

    public getNom():string{
        return this.nom;
    }

    /**
     * L'action qui va être effectuée lorsque le joueur arrive sur la case
     * 
     * @param joueur le joueur qui est sur la case
     */
    public actionDePosition(joueur:Joueur):void{
        console.log(joueur.getNom() + " est sur la case " + this.nom);
    }

    /**
     * L'action qui va être effectuée lorsque le joueur passe sur la case
     * 
     * @param joueur le joueur qui passe sur la case
     */
    public actionDePassage(joueur:Joueur):void{
        console.log(joueur.getNom() + " passe sur la case " + this.nom);
    }

    public getCaseSuivante():Case{
        return this.caseSuivante;
    }

    public setCaseSuivante(caseSuivante:Case):void{
        this.caseSuivante = caseSuivante;
    }

    public getCasePrecedente():Case{
        return this.casePrecedente;
    }

    public setCasePrecedente(casePrecedente:Case):void{
        this.casePrecedente = casePrecedente;
    }

    /**
     * Permet de lier deux cases entre elles
     * 
     * @param caseSuivante la case avec laquelle on veut lier la case courante
     */
    public setRelationCaseSuivante(caseSuivante:Case):void{
        this.caseSuivante = caseSuivante;
        caseSuivante.setCasePrecedente(this);
    }

    public getJoueurs():Joueur[]{
        return this.joueurs;
    }

    public retirerJoueur(monJoueur:Joueur){
        this.joueurs = this.joueurs.filter(joueur => joueur.getNom() != monJoueur.getNom());
    }

    public ajouterJoueur(monJoueur:Joueur){
        this.joueurs.push(monJoueur);
    }
}