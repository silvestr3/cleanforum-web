<script>
	import Bell from '$icons/Bell.svelte';
</script>

<header>
	<a href="/home">
		<h1 class="title">Clean Forum</h1>
	</a>

	<div>
		<button>
			<Bell />
		</button>
		<img src="https://github.com/silvestr3.png" alt="Profile" />
	</div>
</header>

<style>
	header {
		background-color: var(--bg-secondary);
		padding: 0.5rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > div {
			display: flex;
			align-items: center;
			gap: 1rem;

			& img {
				width: 3.5rem;
				aspect-ratio: 1/1;
				object-fit: cover;
				border-radius: 1rem;
			}

			& > button {
				cursor: pointer;
				padding: 0.3rem;
				border-radius: 8px;

				&:hover {
					background-color: var(--bg-primary);
				}
			}
		}
	}
</style>
