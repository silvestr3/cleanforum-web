<script lang="ts">
	import { User } from 'lucide-svelte';

	export let avatarUrl: string | undefined = undefined;
</script>

<div class="avatar-container">
	{#if avatarUrl}
		<img src={avatarUrl} alt="User avatar" />
	{:else}
		<User size={40} color="black" opacity={0.6} />
	{/if}
</div>

<style>
	.avatar-container {
		width: 3rem;
		background-color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px;
		aspect-ratio: 1/1;

		& img,
		svg {
			width: 100%;
			aspect-ratio: 1/1;
			border-radius: inherit;
			border: solid 1px var(--bg-primary);
		}
	}
</style>
