import { writable } from 'svelte/store';
import { Partie } from '../model/partie';


export class PartieController{
    partie:Partie;
    partieStore = writable<Partie>(Partie.getInstance());

    constructor(){
        this.partie = Partie.getInstance();
    }

    getPartie(){
        return this.partie;
    }

    getPartieStore(){
        return this.partieStore;
    }

    ajouterJoueur(nom:string){
        this.partie.ajouterJoueur(nom);
        this.partieStore.set(this.partie);

    }

    supprimerJoueur(nom:string){
        this.partie.supprimerJoueur(nom);
        this.partieStore.set(this.partie);
    }

    lancerPartie(){
        this.partie.lancerPartie();
        this.partieStore.set(this.partie);
    }
}