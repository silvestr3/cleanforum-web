import type { RequestEvent } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }: RequestEvent) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(email, password);
	}
};
