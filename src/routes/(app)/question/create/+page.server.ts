import { env } from '$lib/env/index.js';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export function load({ locals }) {
	return {
		name: locals.name
	};
}

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');

		const createQuestionResult = await fetch(`${env.API_URL}/questions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				content,
				attachments: []
			})
		});

		if (createQuestionResult.status === 201) {
			return redirect(302, '/home');
		} else {
			const data = await createQuestionResult.json();
			return fail(createQuestionResult.status, { message: data });
		}
	}
};
