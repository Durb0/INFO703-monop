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

    public getTourCourant():Tour{
        return this.tourCourant;
    }
    public setTourCourant(tour:Tour):Tour{
        return this.tourCourant = tour;
    }

    public lancerPartie(){
        this.tourCourant = new Tour(this.joueurs[0]);
        this.joueurs.forEach(joueur=>{
            joueur.setPosition(this.plateau.getCaseDepart());
            this.plateau.getCaseDepart().ajouterJoueur(joueur);
        })
        console.log(this.tourCourant.getJoueurCourant());
    }

    public joueurSuivant(): Joueur {
        let joueurCourant = this.tourCourant.getJoueurCourant();
        let indexJoueurCourant = this.joueurs.findIndex(el=> el.getNom() == joueurCourant.getNom());
        return this.joueurs[(indexJoueurCourant+1)% this.joueurs.length];
    }
}