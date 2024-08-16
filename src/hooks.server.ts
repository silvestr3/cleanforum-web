import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, cookies } = event;

	const apiToken = cookies.get('access_token');

	const privateRoutes = ['home'];
	const accessedBaseRoute = url.pathname.split('/')[1];

	if (privateRoutes.includes(accessedBaseRoute)) {
		if (!apiToken) {
			throw redirect(301, '/login');
		}
	}

	const response = await resolve(event);

	return response;
};
