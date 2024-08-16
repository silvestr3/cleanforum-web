<script>
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { LoaderCircleIcon } from 'lucide-svelte';

	let isLoading = false;
</script>

<div class="container">
	<form
		method="POST"
		class="box"
		use:enhance={({ formData, cancel }) => {
			isLoading = true;
			const password = formData.get('password');
			const confirmPassword = formData.get('confirm-password');

			if (password !== confirmPassword) {
				toast.error("Passwords don't match!");
				isLoading = false;
				cancel();
			}

			return ({ result, update }) => {
				const { type } = result;

				if (type === 'redirect') {
					goto(result.location);
				}

				if (type === 'failure') {
					const { data } = result;
					const message = data ? String(data.message) : 'Unexpected error';

					toast.error(message);
				}

				update({
					reset: false
				});

				isLoading = false;
			};
		}}
	>
		<h1 class="title">Clean Forum</h1>

		<div class="input-wrapper">
			<input name="name" type="text" placeholder="Name" />
			<input name="email" type="text" placeholder="Email" />
			<input name="password" type="password" placeholder="Password" />
			<input name="confirm-password" type="password" placeholder="Confirm Password" />
		</div>
		<button disabled={isLoading} type="submit">
			{#if !isLoading}
				Create Account
			{:else}
				<LoaderCircleIcon />
			{/if}
		</button>
		<a href="/login">Already have an account? Sign-in</a>
	</form>
</div>
