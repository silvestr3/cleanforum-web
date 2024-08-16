import { env } from '$lib/env/index.js';
import { fail, redirect, type Actions, type RequestEvent } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }: RequestEvent) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const result = await fetch(`${env.API_URL}/sessions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});

		const responseData = await result.json();

		if (result.status === 201) {
			const { access_token } = responseData;
			cookies.set('access_token', access_token, {
				path: '/',
				httpOnly: true,
				sameSite: true,
				secure: true
			});

			return redirect(302, '/home');
		} else {
			const { message } = responseData;
			return fail(result.status, { message });
		}
	}
};
