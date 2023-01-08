import type { Writable } from "svelte/store";
import type { Partie } from "../model/Partie";
import { Tour } from "../model/Tour";
import { getPartieStore } from "../store/partieStore";

export class TourController{
    private partieStore:Writable<Partie>;

    constructor(){
        this.partieStore = getPartieStore();
    } 

    /**
     * Effectue un déplacement via des dés alétoire au joueur.
     */
    public protocolDeplacementSimple():void{
        this.partieStore.update(partie => {
            partie.getTourCourant().protocolDeplacementSimple();
            return partie;
        });
    }

    /**
     * Effectue un déplcement défini au joueur.
     * @param resultatDes 
     */
    protocolDeplacementDefini(resultatDes:number[]):void{
        this.partieStore.update(partie => {
            partie.getTourCourant().protocolDeplacementDefini(resultatDes);
            return partie;
        });
    }

    /**
     * Permet de passer au prochain tour de jeu.
     */
    protocolTerminerTour() {
        this.partieStore.update(partie => {
            partie.setTourCourant(new Tour(partie.joueurSuivant()));
            return partie;
        });
    }

    /**
     * Permet l'achat par le joueur courant de la propriété à la position du joueur courant.
     */
    protocolAcheterPropriete() {
        this.partieStore.update(partie => {
            partie.getTourCourant().getJoueurCourant().acheterPropriete();
            return partie;
        });
    }

    /**
     * Permet d'acheter une maison sur le terrain courant.
     */
    protocolAcheterMaison() {
        this.partieStore.update(partie => {
            partie.getTourCourant().getJoueurCourant().acheterMaison(partie.getTourCourant().getJoueurCourant().getPosition());
            return partie;
        });
    }

}