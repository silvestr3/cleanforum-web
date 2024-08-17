import { env } from '$lib/env/index.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { slug } = params;

	const result = await fetch(`${env.API_URL}/questions/${slug}`);

	if (result.status === 401) {
		return redirect(302, '/login');
	}

	if (result.status === 400) {
		return {
			question: null
		};
	}

	const data = await result.json();
	return {
		question: data.question
	};
};
