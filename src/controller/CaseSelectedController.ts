import { Case, CasePropriete } from "../model/case";
import { caseSelected } from "../store/caseSelected";
import { partieStore } from "../store/partieStore";

export class CaseSelectedController {


    public setCaseSelected(c: Case): void {
        console.log("setCaseSelected");
        caseSelected.set(c);
    }

    vendreMaison() {
        partieStore.update(partie=>{
            caseSelected.update(c => {
                if (c instanceof CasePropriete) {
                    c.vendreMaison(partie.getTourCourant().getJoueurCourant());
                }
                this.updateCaseOfPartie(c);
                return c;
            });
            return partie;
        });
    }
    construireMaison() {
        partieStore.update(partie => {
            caseSelected.update(c => {
                if (c instanceof CasePropriete) {
                    c.construireMaison(partie.getTourCourant().getJoueurCourant());
                }
                this.updateCaseOfPartie(c);
                return c;
            });
            return partie;
        });
    }

    /**
     * Met à jour la case sélectionnée dans le store de la partie.
     */
    updateCaseOfPartie(c:Case):void {
        partieStore.update(partie => {
            partie.getPlateau().updateCase(c);
            return partie;
        });
    }

}