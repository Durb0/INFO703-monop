import { Des } from "./Des";
import type { Joueur } from "./Joueur";

export class Tour{

    private joueurCourant:Joueur;
    private peutLancer:boolean;
    private des:Des = Des.getInstance();

    public constructor(joueur:Joueur){ 
        this.joueurCourant = joueur;
        this.peutLancer = true;
    }

    public protocolDeplacementSimple(){
        let resultatDes:number[];
        if(this.peutLancer){
            resultatDes = this.des.lancerDes(2);
            this.deplacerJoueur(resultatDes);
            this.peutLancer = false;
        } else {
            console.error("Error : tour.ts - actionLancerDes() - le joueur ne respect pas la condition pour lancer les des.");
        }
    }

    public protocolDeplacementDefini(resultatDes:number[]){
        if(this.peutLancer){
            this.deplacerJoueur(resultatDes);
            this.peutLancer = false;
        }
        
    }

    public deplacerJoueur(chiffresDes:number[]){
        let totalDeplacement:number = 0;
        chiffresDes.forEach(el=>{totalDeplacement += el});
        this.joueurCourant.deplacer(totalDeplacement);
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

    public getPeutLancer(){
        return this.peutLancer;
    }
}