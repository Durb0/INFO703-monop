import type { CaseAchetable } from "../case";

export abstract class Groupe {

    private cases:CaseAchetable[];

    constructor (noms:string[]){
        this.cases = [];
        for(let nom of noms){
            this.cases.push(this.createCase(nom));
        }
    }

    public abstract createCase(nom:string):CaseAchetable;

    public abstract getLoyer(caseAchetable:CaseAchetable):number;

    public getCases():CaseAchetable[]{
        return this.cases;
    }

    public getCase(index:number):CaseAchetable{
        return this.cases[index];
    }
        
}