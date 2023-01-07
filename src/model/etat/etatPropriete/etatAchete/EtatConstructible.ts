import { EtatAchete } from "./EtatAchete";

export class EtatConstructible extends EtatAchete {

    /**
     * 
     * @returns le loyer selon le nombre de maison
     */
    public getLoyer():number {
        // le loyer selon le nombre de maison
        let loyer:number = this.getCasePropriete().getLoyer();
        // si il n'y a pas de maison
        if(this.getCasePropriete().getNbMaisons() == 0){
            return loyer * 2;
        }
        // si il y a des maisons
        else{
            return loyer;
        }
    }
} 