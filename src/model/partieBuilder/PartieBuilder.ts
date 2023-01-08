import type { Partie } from "../Partie";

export abstract class PartieBuilder {

    private partie:Partie;

    constructor(partie:Partie){
        this.partie = partie;
    }

    public getPartie():Partie{
        return this.partie;
    }

    public abstract start():void;
}