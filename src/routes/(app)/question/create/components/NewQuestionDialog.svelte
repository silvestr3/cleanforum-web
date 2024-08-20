<script>
	import Avatar from '$components/Avatar.svelte';

	export let name;
</script>

<Avatar />
<section class="dialog">
	<span class="secondary">{name}</span>
	<form method="POST">
		<input type="text" name="title" placeholder="Title" />
		<textarea name="content" placeholder="Describe your problem"></textarea>

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

			& input,
			& textarea {
				background-color: var(--bg-primary);
				padding-inline: 1rem;
				border-radius: 8px;
				height: 2.5rem;
				border: solid 2px transparent;
				transition: border 200ms;

				&:focus,
				&:hover {
					border: solid 2px var(--action-primary);
					outline: none;
				}

				&::placeholder {
					color: var(--text-tertiary);
				}
			}

			& textarea {
				height: 20rem;
				padding: 1rem;
				color: var(--text-primary);
				font: inherit;
			}
		}
	}
</style>
