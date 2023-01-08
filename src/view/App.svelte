<script lang="ts">
	import { Router, Link, Route } from 'svelte-routing';
	import Home from './routes/Home.svelte';
	import Partie from './routes/Partie.svelte';


	export const url:string="";
</script>

<main>
	<Router url="{url}">
		<Route path="partie" component={Partie} />
		<Route path="/" component={Home} />
	</Router>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		}

		button{
			margin: 0;
		}
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>