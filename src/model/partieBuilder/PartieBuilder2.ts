import { PartieBuilder } from "./PartieBuilder";
import { Joueur } from "../Joueur";
import type { CaseGare, CasePropriete } from "../case";
import type { CaseService } from "../case/caseAchetable/CaseService";


export class PartieBuilder2 extends PartieBuilder {

    public start():void{
        let partie = this.getPartie();

        //Les joueurs sont Paul, Luc et Theo
        partie.setJoueurs([new Joueur("Paul"),new Joueur("Luc"),new Joueur("Theo")]);
        
        let luc = partie.getJoueurs()[1];
        //C'est au tour de Luc
        partie.setTour(luc);

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

        //Paul est sur la Gare Saint-Lazare
        let paul = partie.getJoueurs()[0];

        let faubourgSaintHonore = partie.getPlateau().getCaseParNom("Faubourg Saint-Honoré");
        paul.setPosition(faubourgSaintHonore);

        //Theo possède le service des eaux
        let serviceEaux:CaseGare = partie.getPlateau().getCaseParNom("Compagnie de distribution d'eau") as CaseGare;
        theo.ajouterPropriete(serviceEaux);

        //Paul possède la gare Montparnasse ainsi que deux autres gares
        let gareM:CaseGare = partie.getPlateau().getCaseParNom("Gare Montparnasse") as CaseGare;
        let gareL:CaseGare = partie.getPlateau().getCaseParNom("Gare de Lyon") as CaseGare;
        let gareSL:CaseGare = partie.getPlateau().getCaseParNom("Gare Saint-Lazare") as CaseGare;

        paul.ajouterPropriete(gareM);
        paul.ajouterPropriete(gareL);
        paul.ajouterPropriete(gareSL);

        //Luc a le monopole sur le vert
        let avenueFoch:CasePropriete =  partie.getPlateau().getCaseParNom("Avenue Foch") as CasePropriete;
        let quartierVert = avenueFoch.getQuartier()
        for(let cv = 0; cv < quartierVert.getCases().length ; cv++){
            luc.ajouterPropriete(quartierVert.getCase(cv));
        }



    }
}