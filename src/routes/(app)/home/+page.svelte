<script>
	import QuestionList from './components/QuestionList.svelte';
	import Search from './components/Search.svelte';

	export let data;
</script>

<div class="home-container">
	<Search />
	<QuestionList questions={data.questions} />
</div>

<style>
	div.home-container {
		width: min(1080px, 90%);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-inline: auto;
		padding-block: 4rem;
	}
</style>
