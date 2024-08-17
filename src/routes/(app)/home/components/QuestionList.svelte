<script>
	import { PlusIcon } from 'lucide-svelte';
	import QuestionItem from './QuestionItem.svelte';

	export let questions;
</script>

<div class="question-list">
	<button>
		<PlusIcon />
		New question
	</button>
	<ul>
		{#each questions as question}
			<QuestionItem {question} />
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

		& button {
			background-color: var(--action-primary);
			padding: 0.5rem 1rem;
			min-height: 2rem;
			border-radius: 8px;
			cursor: pointer;
			text-align: center;
			width: fit-content;
			margin-bottom: 1rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;

			&:hover {
				background-color: var(--action-secondary);
			}
		}
	}
</style>
