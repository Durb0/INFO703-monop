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

<div class="component-des">
    <button on:click={handleLancer2DesSimple()}>Lancer les dés</button>

    <div class="des_form">
        <div class="form-input">
            <input bind:value={resultatDes[0]} type="number" name="nom" placeholder="Résultat dé 1">
            <input bind:value={resultatDes[1]} type="number" name="nom" placeholder="Résultat dé 2">
        </div>
        <button on:click={handleLancer2DesDefini(resultatDes)}>Confirmer les dés</button>
    </div>

</div>

<style lang="scss">
    .component-des{
        display: flex;
        flex-direction: row;
    }
    .des_form{
        display: flex;
        flex-direction: row;
    }
    .form-input{
        display: flex;
        flex-direction: column;
    }
</style>

