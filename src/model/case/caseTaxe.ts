import type { Joueur } from '../joueur';
import { Case } from './case';

export class CaseTaxe extends Case {
    private montant:number;

    constructor(nom:string, montant:number) {
        super(nom);
        this.montant = montant;
    }

    public getMontant():number{
        return this.montant;
    }

    /**
     * Le joueur doit payer la taxe
     * 
     * @param joueur le joueur qui est sur la case
     */
    public actionDePosition(joueur: Joueur): void {
        joueur.payer(this.montant);
    }
}