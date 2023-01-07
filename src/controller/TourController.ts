import { Tour } from "../model/Tour";

export class TourController{

    private tourCourant = Tour.getInstance();

    protocolDeplacementSimple():void{
        this.tourCourant.protocolDeplacementSimple();
    }

    protocolDeplacementDefini(resultatDes:number[]):void{
        console.log(resultatDes)
        this.tourCourant.protocolDeplacementDefini(resultatDes);
    }
}