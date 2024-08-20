<script>
	import { page } from '$app/stores';
	import { toast } from 'svelte-sonner';
	import QuestionList from './components/QuestionList.svelte';
	import Search from './components/Search.svelte';

	export let data;

	let isCreatedNewQuestion = $page.url.searchParams.get('created');
	$: if (isCreatedNewQuestion !== null) {
		toast.success('Question created successfully!');
	}
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
