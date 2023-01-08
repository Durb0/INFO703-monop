import { Case, CasePropriete } from "../model/case";
import { caseSelected } from "../store/caseSelected";
import { partieStore } from "../store/partieStore";

export class CaseSelectedController {


    public setCaseSelected(c: Case): void {
        console.log("setCaseSelected");
        caseSelected.set(c);
    }

    vendreMaison() {
        caseSelected.update(c => {
            if (c instanceof CasePropriete) {
                c.vendreMaison();
            }
            this.updateCaseOfPartie(c);
            return c;
        });
    }
    construireMaison() {
        caseSelected.update(c => {
            if (c instanceof CasePropriete) {
                c.construireMaison();
            }
            this.updateCaseOfPartie(c);
            return c;
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