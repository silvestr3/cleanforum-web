<script lang="ts">
	import { Carta, MarkdownEditor } from 'carta-md';

	const carta = new Carta();
	export let value: string;
</script>

<MarkdownEditor {carta} placeholder="Describe your problem" bind:value />

<style>
	:global(.carta-toolbar-left) {
		display: flex;
		gap: 0.5rem;

		& button {
			padding: 2rem;
			cursor: pointer;
			border-radius: 8px;
		}

		& button.carta-active {
			background-color: var(--bg-primary);
			position: relative;
		}
	}

	:global(.carta-container) {
		height: 20rem;

		& .carta-renderer {
			padding: 2rem;
		}
	}

	:global(.carta-input-wrapper) {
		height: inherit;
		color: var(--text-primary);
		background-color: var(--bg-primary);
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	:global(.carta-input-wrapper > textarea.carta-font-code) {
		background-color: var(--bg-primary);
		padding: 1rem;
		border-radius: 8px;
		height: 100%;
		border: solid 2px transparent;
		transition: border 200ms;
		color: var(--text-primary);
		font-family: var(--ff-text), monospace;

		&:focus,
		&:hover {
			border: solid 2px var(--action-primary);
			outline: none;
		}

		&::placeholder {
			color: var(--text-tertiary);
		}
	}
</style>
