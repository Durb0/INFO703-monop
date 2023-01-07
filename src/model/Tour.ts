import { Des } from "./Des";
import type { Joueur } from "./Joueur";

export class Tour{

    private static instance:Tour;
    private joueurCourant:Joueur;
    private peutLancer:boolean;
    private des:Des = Des.getInstance();

    private constructor(){ }

    public static getInstance():Tour{
        if(!Tour.instance){
            Tour.instance = new Tour();
        }
        return this.instance;
    }

    public protocolDeplacementSimple(){
        let resultatDes:number[];
        if(this.peutLancer){
            resultatDes = this.des.lancerDes(2);
        } else {
            console.error("Error : tour.ts - actionLancerDes() - le joueur ne respect pas la condition pour lancer les des.");
        }
    }

    public protocolDeplacementDefini(chiffresDes:number[]){

    }

    /**
     * Initialise l'instance pour un nouveau tour.
     * @param joueur le nouveau joueur courant
     */
    public nouveauTour(joueur:Joueur){
        this.joueurCourant = joueur;
        this.peutLancer = true;
    }

    /**
     * Setter joueurCourant
     * @param joueur Joueur
     */
    public setJoueurCourant(joueur:Joueur){
        this.joueurCourant = joueur;
    }
    /**
     * Getter joueurCourant
     * @returns Joueur
     */
    public getJoueurCourant(){
        return this.joueurCourant;
    }
}