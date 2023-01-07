<script lang="ts">
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
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


<button on:click={handleLancer2DesSimple()}>Lancer les dés</button>

<div class="des_form">
    <input bind:value={resultatDes[0]} type="number" name="nom" placeholder="Résultat dé 1">
    <input bind:value={resultatDes[1]} type="number" name="nom" placeholder="Résultat dé 2">
    <button on:click={handleLancer2DesDefini(resultatDes)}>Définir les dés</button>
</div>

