import { PartieBuilder } from "./PartieBuilder";


export class PartieBuilderClassique extends PartieBuilder {

    public start():void{
        let partie = this.getPartie();
        partie.newTour(partie.getJoueurs()[0]);
        partie.getJoueurs().forEach(joueur=>{
            let plateau = partie.getPlateau();
            joueur.setPosition(plateau.getCaseDepart());
        });
    }
}