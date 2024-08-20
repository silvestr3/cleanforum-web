<script>
	import NewQuestionDialog from './components/NewQuestionDialog.svelte';

	export let data;
	const { name } = data;
</script>

<div class="page-container">
	<h2>Create new question</h2>
	<div class="ask-container">
		<NewQuestionDialog {name} />
	</div>
</div>

<style>
	div.page-container {
		width: min(900px, 90%);
		margin-inline: auto;
		padding-block: 4rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		& h2 {
			margin-left: 5rem;
		}

		& .ask-container {
			display: flex;
			align-items: start;
			gap: 2rem;
		}
	}
</style>
