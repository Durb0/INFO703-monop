
export class PannelPrix {
    

    private prix:number;
    private loyer:number;
    private loyer1:number;
    private loyer2:number;
    private loyer3:number;
    private loyer4:number;
    private loyerHotel:number;

    constructor(prix:number, loyer:number, loyer1:number, loyer2:number, loyer3:number, loyer4:number, loyerHotel:number){
        this.prix = prix;
        this.loyer = loyer;
        this.loyer1 = loyer1;
        this.loyer2 = loyer2;
        this.loyer3 = loyer3;
        this.loyer4 = loyer4;
        this.loyerHotel = loyerHotel;
    }

    public getPrix():number{
        return this.prix;
    }

    /**
     * 
     * @param nbMaison Nombre de maison sur la propriété
     * @returns le loyer de la propriété selon son nombre de maison
     */
    public getLoyer(nbMaison:number):number{
        switch (nbMaison) {
            case 0:
                return this.loyer;
            case 1:
                return this.loyer1;
            case 2:
                return this.loyer2;
            case 3:
                return this.loyer3;
            case 4:
                return this.loyer4;
            case 5:
                return this.loyerHotel;
            default:
                throw new Error("Nombre de maison invalide");
        }
    }

}