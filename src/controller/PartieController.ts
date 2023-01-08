import type { PartieBuilder } from "../model/partieBuilder/PartieBuilder";
import { PartieBuilder1 } from "../model/partieBuilder/PartieBuilder1";
import { partieStore } from "../store/partieStore";

export class PartieController{

    ajouterJoueur(nom:string):void{
        partieStore.update(partie => {
            partie.ajouterJoueur(nom);
            return partie;
        });
    }

    supprimerJoueur(nom:string):void{
        partieStore.update(partie => {
            partie.supprimerJoueur(nom);
            return partie;
        });
    }

    lancerPartie():void{
        partieStore.update(partie => {
            partie.lancerPartie();
            return partie;
        });
    }

    startScenario(num:number):void{
        partieStore.update(partie => {
            switch(num){
                case 1:
                    partie.setBuilder(new PartieBuilder1(partie));
                    break;
                default:
                    break;
            };
            partie.lancerPartie();
            return partie;
        });
    }
}