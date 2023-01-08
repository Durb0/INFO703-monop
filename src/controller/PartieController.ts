import { PartieBuilder1, PartieBuilder2 } from "../model/partieBuilder";
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
                case 2:
                    partie.setBuilder(new PartieBuilder2(partie));
                default:
                    break;
            };
            partie.lancerPartie();
            return partie;
        });
    }
}