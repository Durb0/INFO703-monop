<script lang="ts">
    import type { TourController } from "../../controller/TourController";

    export let tourController:TourController;

    const handleLancer2DesSimple = () => {
        return(event: Event) => {
            tourController.protocolDeplacementSimple();
        }
    }

    const handleLancer2DesDefini = (resultatDes) => {
        return(event: Event) => {
            tourController.protocolDeplacementDefini(resultatDes);
        }
    }

    let resultatDes:number[] = [0,0];

</script>

<div class="des">
    <button on:click={handleLancer2DesSimple()}>Lancer les dés</button>
    <p>ou</p>
    <div class="des__form">
        <div class="des__form__inputs">
            <input bind:value={resultatDes[0]} type="number" name="nom" placeholder="Résultat dé 1">
            <input bind:value={resultatDes[1]} type="number" name="nom" placeholder="Résultat dé 2">
        </div>
        <button on:click={handleLancer2DesDefini(resultatDes)}>Confirmer</button>
    </div>

</div>

<style lang="scss">
    .des{
        display: grid;
        grid-template-columns: 60px 10px 60px;
        grid-gap: 10px;

        &__form{
            display: grid;
            grid-template-rows: 50px 50px;

            &__inputs{
                display: grid;
                grid-template-columns: 50px 50px;
                grid-gap: 10px;
            }
        }
    }
    
    
</style>

