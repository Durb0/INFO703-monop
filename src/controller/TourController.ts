import { Tour } from "../model/Tour";
import { partieStore } from "../store/partieStore";

export class TourController{

    /**
     * Effectue un déplacement via des dés alétoire au joueur.
     */
    public protocolDeplacementSimple():void{
        partieStore.update(partie => {
            partie.getTourCourant().protocolDeplacementSimple();
            return partie;
        });
    }

    /**
     * Effectue un déplcement défini au joueur.
     * @param resultatDes 
     */
    protocolDeplacementDefini(resultatDes:number[]):void{
        partieStore.update(partie => {
            partie.getTourCourant().protocolDeplacementDefini(resultatDes);
            return partie;
        });
    }

    /**
     * Permet de passer au prochain tour de jeu.
     */
    protocolTerminerTour() {
        partieStore.update(partie => {
            partie.nouveauTour();
            return partie;
        });
    }

    /**
     * Permet l'achat par le joueur courant de la propriété à la position du joueur courant.
     */
    protocolAcheterPropriete() {
        partieStore.update(partie => {
            partie.getTourCourant().getJoueurCourant().acheterPropriete();
            return partie;
        });
    }

}