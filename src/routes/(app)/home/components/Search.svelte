<script>
	import { SearchIcon } from 'lucide-svelte';
</script>

<div class="search-container">
	<SearchIcon />
	<input type="text" placeholder="Type a search term" />
</div>

<style>
	div.search-container {
		position: relative;
		display: flex;
		width: 100%;

		& input {
			background-color: var(--bg-tertiary);
			color: var(--text-primary);
			min-height: 2rem;
			padding: 0.5rem 1rem 0.5rem 3rem;
			border-radius: 0.5rem;
			width: inherit;
			transition: border 200ms;
			border: solid 2px transparent;

			&:focus,
			&:hover {
				border: solid 2px var(--action-primary);
			}

			&::placeholder {
				color: var(--text-tertiary);
			}
		}

		& svg {
			position: absolute;
			top: 25%;
			left: 0.75rem;
			color: var(--text-secondary);
		}
	}
</style>
