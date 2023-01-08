<script lang="ts">
    import { PartieController } from "../../controller/PartieController";
    import { Link } from "svelte-routing";
    import { partieStore } from "../../store/partieStore";
    

    //je crée une instance du controller de la partie
    const partieController:PartieController = new PartieController();

    let conditionAjouterJoueur = true;
    let conditionCommencerPartie = true;

    partieStore.subscribe((value) => {
        conditionCommencerPartie = value.getJoueurs().length == 0;
    });

    function handleUpdateNom(event: Event) {
        let input = event.target as HTMLInputElement;
        nomChoisi = input.value;
        conditionAjouterJoueur = nomChoisi.length === 0;
    }

    //Les fonctions lorsque j'appuie sur les boutons

    const handleAjouterJoueur = (nom:string) => {
        return(event: Event) => {
            //appelle la fonction du controller
            partieController.ajouterJoueur(nom);
            //réinitialise le nom
            nomChoisi="";
        }
    }

    const handleSupprimerJoueur = (nom:string) => {
        return(event: Event) => {
            partieController.supprimerJoueur(nom);
        }
    }

    const handleCommencerPartie = () => {
        return(event: Event) => {
            partieController.lancerPartie();
        }
    }

    function startscenario(num:number) {
        return(event: Event) => {
            partieController.startScenario(num);
        }
    }

    let nomChoisi:string = "";

</script>

<div class="list-joueur">
    <!-- pour chaque joueur je crée un item pour l'afficher -->
    {#each $partieStore.getJoueurs() as joueur}
        <div class="joueur">
            <div class="nom">{joueur.getNom()}</div>
            <button on:click={handleSupprimerJoueur(joueur.getNom())}>Supprimer</button>
        </div>
    {/each}

    <!-- le formulaire pour ajouter un joueur -->
    <div class="list-joueur_form">
        <input bind:value={nomChoisi} type="text" name="nom" placeholder="Nom du joueur" on:input={handleUpdateNom}>
        <button disabled={conditionAjouterJoueur} on:click={handleAjouterJoueur(nomChoisi)}>Ajouter</button>
    </div>

    <!-- le bouton pour commencer la partie -->
    <!-- le Link permet de changer le route -->
    <Link to="/partie">
        <button disabled={conditionCommencerPartie} on:click={handleCommencerPartie()}>
            Commencer la partie
        </button>

        <button on:click={startscenario(1)}>
            Scenario 1
        </button>

        <button on:click={startscenario(2)}>
            Scenario 2
        </button>
    </Link>
</div>

<style lang="scss">
    .list-joueur {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        margin: auto auto;
        gap: 5px;
        .joueur {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: #f1f1f1;
            border-radius: 5px;
            padding: 5px;
            .nom {
                width: 100%;
                height: 100%;
                text-align: initial;
            }
        }
        .list-joueur_form {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            gap:10px;
            input {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>