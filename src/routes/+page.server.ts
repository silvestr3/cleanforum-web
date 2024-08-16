import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const token = cookies.get('access_token');

	if (token) {
		return redirect(302, '/home');
	}

	return redirect(302, '/login');
}
