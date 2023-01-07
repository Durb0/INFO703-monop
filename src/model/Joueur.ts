import type { Case, CasePropriete } from "./case";

export class Joueur{    

    private nom: string;
    private argent: number;
    private proprietes: CasePropriete[];
    private position:Case;

    constructor(nom:string){
        this.nom = nom;
        this.argent = 1500;
    }

    public getNom():string{
        return this.nom;
    }

    public getArgent():number{
        return this.argent;
    }

    /**
     * Le joueur perd de l'argent
     * 
     * @param montant le montant que le joueur doit payer
     */
    public payer(montant:number):void{
        this.argent -= montant;
    }

    /**
     * Le joueur reçoit de l'argent
     * 
     * @param montant le montant que le joueur doit recevoir
     */
    public recevoir(montant:number):void{
        this.argent += montant;
    }

    /**
     * Le joueur paye de l'argent à un autre joueur
     * 
     * @param montant le montant que le joueur doit payer
     * @param joueur le joueur qui doit recevoir l'argent
     */
    public payerA(montant:number, joueur:Joueur):void{
        this.payer(montant);
        joueur.recevoir(montant);
    }


    ajoutePropriete(casePropriete: CasePropriete) {
        this.proprietes.push(casePropriete);
    }

    /**
     * Déplacement du joueur de n case suivante.
     * @param totalDeplacement 
     */
    public deplacer(totalDeplacement: number) {
        for(let i:number = 0; i < totalDeplacement; i++){
            this.deplacer1Case();
        }
    }

    /**
     * Déplacement du joueur d'1 case.
     */
    private deplacer1Case(){
        this.position.retirerJoueur(this);
        this.position = this.position.getCaseSuivante();
        this.position.ajouterJoueur(this);
    }

    /**
     * Setter de la position du joueur
     * @param position 
     */
    public setPosition(position:Case){
        this.position = position;
    }
}