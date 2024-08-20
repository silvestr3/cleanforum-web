<script>
	import { PlusIcon } from 'lucide-svelte';
	import QuestionItem from './QuestionItem.svelte';

	export let questions;
</script>

<div class="question-list">
	<a class="btn-action" href="/question/create">
		<PlusIcon />
		New question
	</a>
	<ul>
		{#each questions as question}
			<li>
				<QuestionItem {question} />
			</li>
		{/each}
	</ul>
</div>

<style>
	div.question-list {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		& ul {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
