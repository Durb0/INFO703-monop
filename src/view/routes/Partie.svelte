<script lang="ts">
    import { TourController } from "../../controller/TourController";
    import Des from "../core/Des.svelte";

    //je crée une instance du controller du tour
    const tourController:TourController = new TourController();

</script>

<p>Partie work</p>

<Des tourController={tourController}/>

<style>

</style>