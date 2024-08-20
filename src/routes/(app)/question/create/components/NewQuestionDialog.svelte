<script>
	import Avatar from '$components/Avatar.svelte';
	import Editor from '$components/Editor.svelte';

	export let name;

	let content = '';
	$: console.log(content);
</script>

<Avatar />
<section class="dialog">
	<span class="secondary">{name}</span>
	<form method="POST">
		<input type="text" name="title" placeholder="Title" />
		<input type="text" name="content" bind:value={content} class="hidden" />
		<Editor bind:value={content} />

		<button class="btn-action" type="submit">Publish</button>
	</form>
</section>

<style>
	section {
		width: 100%;

		& form {
			margin-top: 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-inline: auto;

			& input {
				background-color: var(--bg-primary);
				padding-inline: 1rem;
				border-radius: 8px;
				height: 2.5rem;
				border: solid 2px transparent;
				transition: border 200ms;

				&.hidden {
					display: none;
				}

				&:focus,
				&:hover {
					border: solid 2px var(--action-primary);
					outline: none;
				}

				&::placeholder {
					color: var(--text-tertiary);
				}
			}
		}
	}
</style>
