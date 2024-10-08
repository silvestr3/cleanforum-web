import { redirect, type Handle, type HandleFetch } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, cookies, locals } = event;

	const apiToken = cookies.get('access_token');

	const privateRoutes = ['home', 'question'];
	const accessedBaseRoute = url.pathname.split('/')[1];

	if (privateRoutes.includes(accessedBaseRoute)) {
		if (!apiToken) {
			return redirect(302, '/login');
		}

		const { name } = JSON.parse(atob(apiToken.split('.')[1]));
		locals.name = name;
	}

	const response = await resolve(event);

	return response;
};

export const handleFetch: HandleFetch = async ({ fetch, request, event }) => {
	const { cookies } = event;
	const apiToken = cookies.get('access_token');

	request.headers.set('Authorization', `Bearer ${apiToken}`);

	return fetch(request);
};
