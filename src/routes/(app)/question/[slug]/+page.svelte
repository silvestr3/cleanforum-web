<script lang="ts">
	import QuestionDialog from './components/QuestionDialog.svelte';

	export let data;

	let { question } = data;
</script>

<div class="thread-container">
	<QuestionDialog {question} />
</div>

<style>
	div.thread-container {
		width: min(900px, 90%);
		padding-block: 4rem;
		margin-inline: auto;
		display: flex;
		align-items: start;
		gap: 2rem;
	}
</style>
