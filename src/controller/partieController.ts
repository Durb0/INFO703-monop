import { Writable, writable } from 'svelte/store';
import { Partie } from '../model/partie';


export class PartieController{
    partieStore:Writable<Partie> = writable<Partie>(Partie.getInstance());

    getPartieStore():Writable<Partie>{
        return this.partieStore;
    }

    ajouterJoueur(nom:string):void{
        this.partieStore.update(partie => {
            partie.ajouterJoueur(nom);
            return partie;
        });
    }

    supprimerJoueur(nom:string):void{
        this.partieStore.update(partie => {
            partie.supprimerJoueur(nom);
            return partie;
        });
    }

    lancerPartie():void{
        this.partieStore.update(partie => {
            partie.lancerPartie();
            return partie;
        });
    }
}