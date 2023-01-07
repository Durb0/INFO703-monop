import { Joueur } from "./Joueur";
import { Plateau } from "./Plateau";
import { Tour } from "./Tour";


export class Partie {

    private static instance:Partie;
    private joueurs:Joueur[];
    private plateau:Plateau;
    private tourCourant:Tour;


    private constructor(){
        this.joueurs = [];
        this.plateau = new Plateau();
        this.tourCourant = Tour.getInstance();
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

    public lancerPartie(){
        this.tourCourant.nouveauTour(this.joueurs[0]);
        console.log(this.tourCourant.getJoueurCourant());
    }
}