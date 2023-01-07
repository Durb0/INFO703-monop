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
}