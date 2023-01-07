import type { CasePropriete } from "./case";

export class Joueur{
    

    private nom: string;
    private argent: number;
    private proprietes: CasePropriete[];

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
}