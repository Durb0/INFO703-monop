import type { Writable } from "svelte/store";
import type { Partie } from "../model/Partie";
import { getPartieStore } from "../store/partieStore";

export class PartieController{

    private partieStore:Writable<Partie>;

    constructor(){
        this.partieStore = getPartieStore();
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