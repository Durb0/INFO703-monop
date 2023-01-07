import {Case, CaseDepart, CasePropriete} from "./case";
import { Quartier } from "./quartier/Quartier";
import { PannelPrix } from "./quartier/PannelPrix";


export class Plateau{

    private cases:Case[];
    private caseDepart: CaseDepart;

    constructor(){
        this.createPlateau();
    }

    public getCases():Case[]{
        return this.cases;
    }

    public getCaseDepart():CaseDepart{
        return this.caseDepart;
    }

    public getNbCases():number{
        return this.cases.length;
    }

    private createPlateau(){
        this.cases = [];


        // La case de départ
        this.caseDepart = new CaseDepart(200);
        this.cases.push(this.caseDepart);
        
        // quartier marron
        let quartierMarron = new Quartier(
            "brown",
            new PannelPrix(60, 2, 10, 30, 90, 160, 250),
            new PannelPrix(60, 4, 20, 60, 180, 320, 450),
            50,
            [ "Boulevard de Belleville", "Rue Lecourbe" ]
            );
        this.cases.push(...quartierMarron.getCases());


        // quartier bleu ciel
        let quartierBleuCiel = new Quartier(
            "skyblue",
            new PannelPrix(100, 6, 30, 90, 270, 400, 550),
            new PannelPrix(120, 8, 40, 100, 300, 450, 600),
            50,
            [ "Rue de Vaugirard", "Rue de Courcelles", "Avenue de la République" ]
            );
        this.cases.push(...quartierBleuCiel.getCases());

        // quartier rose
        let quartierRose = new Quartier(
            "pink",
            new PannelPrix(140, 10, 50, 150, 450, 625, 750),
            new PannelPrix(160, 12, 60, 180, 500, 700, 900),
            100,
            [ "Boulevard de la villette", "Avenue de Neuilly", "Rue de Paradis" ]
            );
        this.cases.push(...quartierRose.getCases());


        // quartier orange
        let quartierOrange = new Quartier(
            "orange",
            new PannelPrix(180, 14, 70, 200, 550, 750, 950),
            new PannelPrix(200, 16, 80, 220, 600, 800, 1000),
            100,
            [ "Avenue Mozart", "Boulevard Saint-Michel", "Place Pigalle" ]
            );
        this.cases.push(...quartierOrange.getCases());

        let parcGratuit = new Case("Parc Gratuit");
        this.cases.push(parcGratuit);

        // quartier rouge
        let quartierRouge = new Quartier(
            "red",
            new PannelPrix(220, 18, 90, 250, 700, 875, 1050),
            new PannelPrix(240, 20, 100, 300, 750, 925, 1100),
            150,
            [ "Avenue Matignon", "Boulevard Malesherbes", "Avenue Henri-Martin" ]
            );
        this.cases.push(...quartierRouge.getCases());

        // quartier jaune
        let quartierJaune = new Quartier(
            "yellow",
            new PannelPrix(260, 22, 110, 330, 800, 975, 1150),
            new PannelPrix(280, 24, 120, 360, 850, 1025, 1200),
            150,
            [ "Faubourg Saint-Honoré", "Place de la Bourse", "Rue la Fayette" ]
            );
        this.cases.push(...quartierJaune.getCases());

        // quartier vert
        let quartierVert = new Quartier(
            "green",
            new PannelPrix(300, 26, 130, 390, 900, 1100, 1275),
            new PannelPrix(320, 28, 150, 450, 1000, 1200, 1400),
            200,
            [ "Avenue de Breteuil", "Avenue Foch", "Boulevard des Capucines" ]
            );
        this.cases.push(...quartierVert.getCases());

        // quartier bleu foncé
        let quartierBleuFonce = new Quartier(
            "darkblue",
            new PannelPrix(350, 35, 175, 500, 1100, 1300, 1500),
            new PannelPrix(400, 50, 200, 600, 1400, 1700, 2000),
            200,
            [ "Avenue des Champs-Élysées", "Rue de la Paix" ]
            );
        this.cases.push(...quartierBleuFonce.getCases());
        
        this.createRelations();
    }


    /**
     * Crée les relations entre les cases
     * 
     */
    private createRelations():void{
        for(let i = 0; i < this.cases.length-1; i++){
            let caseCourante = this.cases[i];
            let caseSuivante = this.cases[i+1];
            caseCourante.setRelationCaseSuivante(caseSuivante);
        }
        this.cases[this.cases.length-1].setRelationCaseSuivante(this.cases[0]);
    }
}