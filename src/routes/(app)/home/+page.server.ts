import { env } from '$lib/env';
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const result = await fetch(`${env.API_URL}/questions`);

	if (result.status === 401) {
		return redirect(302, '/login');
	}

	const data = await result.json();

	return {
		questions: data.questions
	};
};
