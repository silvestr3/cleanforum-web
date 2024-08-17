<script lang="ts">
	import { CircleCheck, CircleHelp } from 'lucide-svelte';

	export let isQuestionAnswered: string | undefined;
</script>

<div class="answered-icon">
	{#if isQuestionAnswered}
		<CircleCheck size={18} opacity={'60%'} color="green" />
	{:else}
		<CircleHelp size={18} opacity={'60%'} color="yellow" />
	{/if}

	<div class="disclaimer">
		{#if isQuestionAnswered}
			<div>
				<h5>Question with correct answer</h5>
				<span>This question has already been answered, and it's answer validated</span>
			</div>
		{:else}
			<div>
				<h5>No correct answer yet</h5>
				<span>This question doesn't have an answer marked as correct yet</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.answered-icon {
		display: flex;
		align-items: center;
		position: relative;

		&:hover .disclaimer {
			opacity: 1;
			display: block;

			@starting-style {
				opacity: 0;
			}
		}

		& .disclaimer {
			position: absolute;
			background-color: var(--bg-primary);
			border-radius: 0.5rem;
			width: 300px;
			padding: 0.5rem 1rem;
			top: 25px;
			left: 50%;
			transform: translate(-50%, 0);
			z-index: 1;

			transition-property: opacity display;
			transition-duration: 500ms;
			transition-behavior: allow-discrete;

			display: none;
			opacity: 0;

			& > div {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				& h5 {
					font: 700 0.88rem/1 var(--ff-text);
				}
			}
		}
	}
</style>
