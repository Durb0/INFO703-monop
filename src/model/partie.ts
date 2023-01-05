import { Joueur } from "./joueur";
import { Plateau } from "./plateau";

export class Partie {

    private static instance:Partie;
    private joueurCourant:Joueur;
    private joueurs:Joueur[];
    private plateau:Plateau;


    private constructor(){
        this.joueurs = [];
        this.plateau = new Plateau();
    }

    static getInstance():Partie{
        if(!Partie.instance){
            Partie.instance = new Partie();
        }
        return this.instance;
    }

    public ajouterJoueur(nom:string){
            this.joueurs.push(new Joueur(nom));
            console.log(this.joueurs);
    }

    public supprimerJoueur(nom:string){
        this.joueurs = this.joueurs.filter(joueur => joueur.getNom() != nom);
    }

    public getJoueurs():Joueur[]{
        return this.joueurs;
    }

    public getPlateau():Plateau{
        return this.plateau;
    }

    public getJoueurCourant():Joueur{
        return this.joueurCourant;
    }

    public joueurAleatoire():Joueur{
        return this.joueurs[Math.floor(Math.random() * this.joueurs.length)];
    }

    public lancerPartie(){
        this.joueurCourant = this.joueurAleatoire();
        console.log(this.joueurCourant);
    }
}