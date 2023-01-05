export class Joueur{

    private nom: string;

    constructor(nom:string){
        this.nom = nom;
    }

    public getNom():string{
        return this.nom;
    }
}