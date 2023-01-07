import type { CasePropriete } from "../../../case";
import { EtatPropriete } from "../EtatPropriete";


export class EtatAchete extends EtatPropriete {

    public getLoyer():number{
        return this.getCasePropriete().getLoyer();
    }
}