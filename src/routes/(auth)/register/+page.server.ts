import { env } from '$lib/env/index.js';
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }: RequestEvent) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');

		const result = await fetch(`${env.API_URL}/accounts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password
			})
		});

		if (result.status === 201) {
			return redirect(302, '/login?created');
		} else {
			const { message } = await result.json();

			return fail(result.status, {
				message
			});
		}
	}
};
