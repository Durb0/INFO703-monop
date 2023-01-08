import { PartieBuilder } from "./PartieBuilder";
import { Joueur } from "../Joueur";
import type { CaseGare, CasePropriete } from "../case";


export class PartieBuilder2 extends PartieBuilder {

    public start():void{
        let partie = this.getPartie();

        //Les joueurs sont Paul, Luc et Theo
        partie.setJoueurs([new Joueur("Paul"),new Joueur("Luc"),new Joueur("Theo")]);
        
        let luc = partie.getJoueurs()[1];
        //C'est au tour de Luc
        partie.newTour(luc);

        //Luc est sur l'avenue des Champs-Élysées
        let champs:CasePropriete = partie.getPlateau().getCaseParNom("Avenue des Champs-Élysées") as CasePropriete;
        luc.setPosition(champs);

        //Luc est propriétaire de l'avenue des Champs-Élysées
        luc.ajouterPropriete(champs);

        //Luc a 500€
        luc.setArgent(500);

        let theo = partie.getJoueurs()[2];
        //Theo est sur la gare du Nord
        let gareDuNord:CaseGare = partie.getPlateau().getCaseParNom("Gare du Nord") as CaseGare;
        theo.setPosition(gareDuNord);

    }
}