/**
 * La classe "Des" respecte le patron de création Singleton.
 * Ainsi, il existe une seule instance de dés utilisable dans l'application.
 */
export class Des {

    private static instance:Des;
    private nbFaces:number = 6;

    private constructor(){ }

    /**
     * Permet d'obtenir l'unique instance de Des. Si elle n'existe pas, elle est construite.
     * @returns Des
     */
    static getInstance():Des{
        if(!Des.instance){
            Des.instance = new Des();
        }
        return this.instance;
    }

    /**
     * Permet de lancer un certains nombre de dés aux nombres de face défini par la class.
     * @param nbDes choix du nombre de dés
     * @returns number[]
     */
    public lancerDes(nbDes:number){
        let res:number[] = [];
        let i:number;
        for(i = 0; i<nbDes ; i++){
            res.push(this.getRandomNumber(1,6));
        }
        return res;
    }

    /**
     * Renvoie un nombre aléatoire entre min (inclus) et max (inclus).
     * @param min 
     * @param max 
     * @returns number
     */
    private getRandomNumber(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
}