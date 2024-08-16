<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { LoaderCircleIcon } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let isCreatedNewAccount = $page.url.searchParams.get('created');

	let isLoading = false;

	$: if (isCreatedNewAccount !== null) {
		toast.success('Account created successfully!');
	}
</script>

<div class="container">
	<form
		method="POST"
		class="box"
		use:enhance={() => {
			isLoading = true;
			return ({ result }) => {
				const { type } = result;

				if (type === 'failure') {
					const { data } = result;
					const message = data ? String(data.message) : 'Unexpected error';

					toast.error(message);
				}

				if (type === 'redirect') {
					goto(result.location);
				}

				isLoading = false;
			};
		}}
	>
		<h1 class="title">Clean Forum</h1>

		<div class="input-wrapper">
			<input name="email" type="text" placeholder="Email" />
			<input name="password" type="password" placeholder="Password" />
		</div>
		<button type="submit">
			{#if !isLoading}
				Login
			{:else}
				<LoaderCircleIcon />
			{/if}
		</button>
		<a href="/register">Register</a>
	</form>
</div>
