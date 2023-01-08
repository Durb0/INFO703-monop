import { Case, CaseAchetable, CasePropriete } from "./case";
import { EtatConstructible } from "./etat/etatPropriete/etatAchete/EtatConstructible";

export class Joueur{
    

    private nom: string;
    private argent: number;
    private proprietes: CaseAchetable[];
    private position:Case;

    constructor(nom:string){
        this.nom = nom;
        this.argent = 1500;
        this.proprietes = [];
    }

    public getNom():string{
        return this.nom;
    }

    public getArgent():number{
        return this.argent;
    }

    setArgent(argent: number) {
        this.argent = argent;
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
    public payerA(joueur:Joueur, montant:number):void{
        this.payer(montant);
        joueur.recevoir(montant);
    }


    public ajouterPropriete(caseAchetable: CaseAchetable) {
        this.proprietes.push(caseAchetable);
        caseAchetable.acheterPropriete(this);
    }

    /**
     * Déplacement du joueur de n case suivante.
     * @param totalDeplacement 
     */
    public deplacer(totalDeplacement: number) {
        for(let i:number = 0; i < totalDeplacement; i++){
            this.deplacer1Case();
        }
        this.position.actionDePosition(this);
    }

    /**
     * Déplacement du joueur d'1 case.
     */
    private deplacer1Case(){
        this.position.retirerJoueur(this);
        this.position = this.position.getCaseSuivante();
        this.position.ajouterJoueur(this);
        this.position.actionDePassage(this);
    }

    acheterPropriete() {
        if(this.position instanceof CaseAchetable){
            if(this.position.getProprietaire() != undefined){
                console.error("error - acheterPropriete - La case a déjà un propriétaire.");
            } else if(this.peutPayer(this.position.getPrix())){
                this.argent = this.argent - this.position.getPrix();
                this.ajouterPropriete(this.position);
                console.log(this.position);
            } else {
                console.error("error - acheterPropriete() - Le joueur n'a pas assez d'argent pour acheter cette case.")
            }
        } else {
            console.error("error - acheterPropriete() - Cette case n'est pas achetable !");
        }
    }   

    /**
     * Retourne si le joueur peux payer le prix passer en paramètre.
     * @param prix 
     * @returns boolean
     */
    peutPayer(prix:number){
        return this.argent - prix >= 0;
    }

    // ===============
    // GETTER & SETTER
    // ===============

    /**
     * Setter de la position du joueur
     * @param position 
     */
    public setPosition(position:Case){
        this.position = position;
        position.ajouterJoueur(this);
    }

    /**
     * Getter de la position du joueur
     * @param position 
     */
    public getPosition(){
        return this.position;
    }
}