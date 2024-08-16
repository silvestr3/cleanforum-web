<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { toast } from 'svelte-sonner';

	let isCreatedNewAccount = $page.url.searchParams.get('created');

	$: if (isCreatedNewAccount !== null) {
		toast.success('Account created successfully!');
	}
</script>

<div class="container">
	<form method="POST" class="box">
		<h1 class="title">Clean Forum</h1>

		<div class="input-wrapper">
			<input name="email" type="text" placeholder="Email" />
			<input name="password" type="password" placeholder="Password" />
		</div>
		<button type="submit">Login</button>
		<a href="/register">Register</a>
	</form>
</div>
