import { PartieBuilder } from "./PartieBuilder";
import { Joueur } from "../Joueur";


export class PartieBuilder1 extends PartieBuilder {

    public start():void{
        let partie = this.getPartie();
        partie.setJoueurs([new Joueur("Paul"),new Joueur("Luc"),new Joueur("Theo")]);
        partie.setTour(partie.getJoueurs()[0]);
        partie.getJoueurs().forEach(joueur=>{
            let plateau = partie.getPlateau();
            joueur.setPosition(plateau.getCaseDepart());
        });
    }
}